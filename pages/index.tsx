import styled from "styled-components";
import React, {useEffect} from "react";
import {FormInput} from "./components/molecules/FormInput";
import {useRouter} from "next/router";
import {Layout} from "./components/atoms/Layout";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        //router.reload()
    }, [])

    return (
        <Layout center>
            <Wrapper>
                <FormInput onClick={() => router.push('/search')}/>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  max-width: 800px;
`
