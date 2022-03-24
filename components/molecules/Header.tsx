import {BrickBro} from "../atoms/logos/BrickBro";
import React from "react";
import styled from "styled-components";
import Link from 'next/link'

export const Header = () => {
    return (
        <Link href="/">
            <a>
                <WrapperLogo>
                    <BrickBro/>
                </WrapperLogo>
            </a>
        </Link>
    )
}

const WrapperLogo = styled.div`
  margin-bottom: 3rem;
  cursor: pointer;

  > svg {
    width: 300px;
    @media (max-width: 350px) {
      width: 150px;
    }
  }
`