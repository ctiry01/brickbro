import styled from "styled-components";

interface CardProps {
    children: any
}

export const Card = ({children} : CardProps) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}


const Wrapper = styled.div`
  border: 1px solid #01385d;
  border-radius: 12px;
  padding: 1rem;
  margin: 0.4rem;
  width: 100%;
`