import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: any
    color?: string
    url?: string
    radius?: number
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    border?: string
    icon?: object
    bgColor?: string
    loading?: boolean
    smallTip?: string
}

export const Button = ({
                           bgColor,
                           color,
                           children,
                           radius = 12,
                           onClick,
                           disabled,
                           border,
                           icon,
                           loading,
                           smallTip,
                           ...others
                       }: ButtonProps) => {
    return (
        <Rectangle
            onClick={onClick}
            bgColor={bgColor}
            color={color}
            radius={radius}
            disabled={disabled}
            border={border}
            {...others}
        >
            {icon && <WrapperIcon>{icon}</WrapperIcon>}
            {loading && <ReactLoading width="1.4rem" height="1.4rem" type="spin" color={color || 'white'}/>}
            {!loading && children} {!loading && smallTip && <Tip>[Enter]</Tip>}
        </Rectangle>
    )
}

const Rectangle = styled.button<{
    color?: string
    radius: number
    disabled?: boolean
    border?: string
    bgColor?: string
}>`
  border: ${({border}) => (border ? '1px solid ' + border : 'none')};
  border-radius: ${({radius}) => `${radius}px`};
  background-color: ${({disabled, bgColor}) => (disabled ? 'lightGrey' : bgColor ? bgColor : '#0162A6')};
  color: ${({color}) => (color ? color : 'white')};
  box-shadow: 5px 5px 15px -4px #a7aab1;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  column-gap: 0.5rem;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  font-size: 1rem;

  &:hover {
    background-color: ${({disabled, bgColor}) => (disabled ? 'lightGrey' : bgColor ? bgColor : '#01385d')};
  }
`

const WrapperIcon = styled.div`
  margin-right: 0.4rem;
  height: 100%;
  display: flex;
  align-items: center;
`

const Tip = styled.small`
  font-size: 0.6rem;
`
