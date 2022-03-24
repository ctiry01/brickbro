import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Button} from "../atoms/Button";
import TextInput from "../atoms/TextInput";
import {PutSearchAction, useSearchDispatcher} from "../../context/SearchContext";

interface FormInputProps {
    onClick: Function
    loading?: boolean
    resError?: boolean
}

export const FormInput = ({onClick, loading, resError}: FormInputProps) => {
    const [inputSearch, setInputSearch] = useState('');
    const [error, setSetError] = useState(false);
    const SearchDispatcher = useSearchDispatcher();
    const inputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const onSubmit = (e: string) => {
        if (!inputSearch || inputSearch === '') {
            setSetError(true)
            return
        }

        PutSearchAction(inputSearch).then((r) => {
            SearchDispatcher(r)
            setSetError(false)
            onClick(e)
            setInputSearch('')
        })
    }

    return (
        <WrapperInputForm>
            <TheInput placeholder="Introduce una dirección"
                      name="search"
                      onChange={(e: any) => setInputSearch(e.target.value)}
                      onKeyPress={(e: any) => e === 'Enter' ? onSubmit(inputSearch) : null}
                      error={error || resError}
                      ref={inputRef}
                      value={inputSearch}
            />
            <TheButton
                smallTip="[Enter]"
                loading={loading}
                onClick={() => {
                    onSubmit(inputSearch)
                }}>Buscar</TheButton>
        </WrapperInputForm>
    )
}

const WrapperInputForm = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  margin-bottom: 3rem;
  align-items: center;

  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`

const TheButton = styled(Button)`
  @media (max-width: 560px) {
    margin-top: 1rem;
  }
`

const TheInput = styled(TextInput)`
  margin-right: 1rem;
  max-width: 800px;

  @media (max-width: 560px) {
    margin-right: 0;
  }
`