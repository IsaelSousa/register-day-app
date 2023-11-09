import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

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
            style={styles.input}
            placeholderTextColor={'#555555'}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        color: '#afafaf'
    }
});

export const Input = styled.TextInput`
    width: 95%;
    padding: 8px;
    margin: 5px;
    font-size: 20px;
    border-radius: 3px;
    border: 1px solid #afafaf;
    text-align: center;
    background-color: #49494942;
`;