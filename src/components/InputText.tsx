import React from 'react';
import {} from 'react-native';
import styled from 'styled-components/native';

type InputTextProps = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

export const InputText = ({ 
    onChangeText,
    placeholder,
    value
 }: InputTextProps) => {
    return (
        <Input 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

export const Input = styled.TextInput`
    width: 95%;
    padding: 8px;
    font-size: 25px;
    border-radius: 3px;
    border: 1px solid black;
    text-align: center;
`;