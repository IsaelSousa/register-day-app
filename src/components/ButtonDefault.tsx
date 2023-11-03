import React from 'react';
import styled from 'styled-components/native';

type ButtonDefault = {
    onPress?: () => void;
    color?: string;
    text?: string;
    width?: string;
}

export const ButtonDefault = ({ onPress, color, text, width }: ButtonDefault) => {
    return (
        <Container onPress={onPress} color={color} width={width}>
            {text && <Text>{text}</Text>}
        </Container>
    )
};

type ButtonPropsStyle = {
    color?: string;
    width?: string;
}

const Container = styled.TouchableOpacity<ButtonPropsStyle>`
    background-color: ${props => props.color ? props.color : 'lightgray'};
    width: ${props => props.width ? props.width : '80%'};
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

const Text = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;