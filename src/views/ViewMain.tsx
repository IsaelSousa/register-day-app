import React from 'react';
import { Select } from '../components/Select';
import styled from 'styled-components/native';
import { Button } from 'react-native';

export const ViewMain = () => {
    return (
        <Container>
            <Select
            text='Selecione uma configuração'
            modalText='Selecione uma configuração'
            data={[ { key: 'Config1', value: '' }, { key: 'Config2', value: '' } ]}
            onChangeSelect={(value) => {
                console.log(value);
            }}
            />
            <Button title='Entrar' />
        </Container>
    )
}

const Container = styled.View`
    justify-content: center;
    align-items: center;
`;
