import React, {ChangeEventHandler, forwardRef} from 'react'
import styled from 'styled-components'

interface InputProps {
    placeholder: string
    name: string
    value: string
    className?: string,
    onChange?: React.ChangeEventHandler
    onKeyPress: Function
    error?: boolean
}

interface StyledInputProps {
    height?: string
    error?: boolean
}

const TextInput = forwardRef(function FreeActivityPasswordForm(
    { placeholder, className, onChange, onKeyPress, error, value}: InputProps,
    ref: React.Ref<HTMLInputElement>
) {
    return (
        <Input error={error} placeholder={placeholder} className={className} onChange={onChange} value={value} onKeyPress={(key) => onKeyPress(key.key)} ref={ref}/>
    )
})

const Input = styled.input<StyledInputProps>`
  height: ${(props) => props.height || '50px'};
  border: none;
  border-bottom: 1px solid #AFAFAF;
  background-color: ${(props) => props.error ? '#ffeded' : '#F5F5F5'};
  padding: 5px 0 0 10px;
  font-size: 0.9rem;
  width: 100%;
  color: #555;

  :focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.error ? 'red' : '#0163A6'};
    color: black;
  }
`

export default TextInput
