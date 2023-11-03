import React from 'react';
import { Select } from '../components/Select';
import styled from 'styled-components/native';
import { ButtonDefault } from '../components/ButtonDefault';

export const ViewMain = () => {
    return (
        <Container>
            <InputContainer>
                <Select
                    text='Selecione uma configuração'
                    modalText='Selecione uma configuração'
                    data={[{ key: 'Config1', value: '' }, { key: 'Config2', value: '' }]}
                    onChangeSelect={(value) => {
                        console.log(value);
                    }}
                />
                <ButtonDefault
                text='Entrar'
                color='lightgreen'
                />
            </InputContainer>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const InputContainer = styled.View`
    position: absolute;
    bottom: 5%;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
