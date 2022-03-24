import {ReactElement, ReactNode} from 'react'
import styled from 'styled-components'
import {Header} from "../molecules/Header";
import {Footer} from "../molecules/Footer";

interface LayoutProps {
    children: ReactNode
    center?: boolean
}

interface MainProps {
    center?: boolean
}

export const Layout = ({children, center}: LayoutProps) => {
    return (
        <>
            <Main center={center}>
                <Wrapper>
                    <Header/>
                    {children}
                    <Footer />
                </Wrapper>
            </Main>
        </>
    )
}

const Main = styled.main<MainProps>`
  margin-top: 1rem;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.center ? 'center' : 'flex-start'};
  align-items: center;
  min-height: 90vh;
  width: 100%;
  height: 100%;

  @media (max-width: 560px) {
    padding: 0 1rem;
  }
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`
