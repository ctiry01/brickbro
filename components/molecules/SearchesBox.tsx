import styled from "styled-components";
import React from "react";
import {useSearchState} from "../../context/SearchContext";
import {Card} from "../atoms/Card";

export const SearchesBox = () => {

    const SearchContextState = useSearchState();

    return (
        <Wrapper>
            <Title>Historial de búsquedas</Title>
            {SearchContextState && SearchContextState.list.length > 0 &&
                SearchContextState.list.map((search, key) => {
                    return (
                        <Card key={key}>{search}</Card>
                    )
                })
            }
            </Wrapper>
    )
}

const Title = styled.h3`
  align-self: start;
  color: dimgrey;
  font-weight: bold;
  font-style: italic;
  margin-top: 0;
`

const Wrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
`