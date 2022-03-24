import React, {Dispatch} from "react";

export interface Search {
    name: string;
}


interface State {
    list: Array<Search>,
}

interface Action {
    type: string
    payload: any
}

const defaultState: State = {
    list: [],
}
const defaultDispatch: Dispatch<any> = () => {
}

const SearchContext = React.createContext(defaultState);
const SearchDispatch = React.createContext(defaultDispatch);

export async function PutSearchAction(search: string) {

    return {
        type: 'put_address',
        payload: search
    }
}

const ContextReducer: React.Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case 'put_address':

            return {
                ...state,
                list: [...state.list, action.payload]
            }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export const SearchProvider: React.FC = ({children}) => {

    const [state, dispatch] = React.useReducer(
        ContextReducer,
        defaultState
    );

    return (
        <SearchContext.Provider value={state}>
            <SearchDispatch.Provider value={dispatch}>
                {children}
            </SearchDispatch.Provider>
        </SearchContext.Provider>
    );
};

export const SearchConsumer = (props: any) => {
    return (
        <SearchDispatch.Consumer>
            {context => {
                if (context === undefined) {
                    throw new Error(
                        'Consumer must be used within a SearchProvider'
                    );
                }
                return props.children(context);
            }}
        </SearchDispatch.Consumer>
    );
};

export const useSearchState = () => {
    const context = React.useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearchState must be used within a SearchProvider');
    }
    return context;
};

export const useSearchDispatcher = () => {
    const context = React.useContext(SearchDispatch);
    if (context === undefined) {
        throw new Error('useSearchDispatcher must be used within a SearchProvider');
    }
    return context;
}
