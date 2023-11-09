import React, { useState } from 'react';
import { Select } from '../components/Select';
import styled from 'styled-components/native';
import { ButtonDefault } from '../components/ButtonDefault';
import { useContextProvider } from '../context/Context';
import { DataType } from '../types/types';

export const ViewMain = () => {

    const { navigate } = useContextProvider();
    const [selected, setSelected] = useState<DataType>({
        id: '',
        configKey: '',
        description: ''
    });

    return (
        <Container>
            <InputContainer>
                <Select
                    text='Selecione uma configuração'
                    modalText='Selecione uma configuração'
                    onChangeSelect={(value) => setSelected(value)}
                />
                <ButtonDefault
                    text='Entrar'
                    color='lightgreen'
                    onPress={() => {
                        if (selected) navigate('ViewHomePage', { auth: selected });
                    }}
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
    background-color: #141414;
`;

const InputContainer = styled.View`
    position: absolute;
    bottom: 5%;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
