import React, { useState } from 'react';
import { Select } from '../components/Select';
import styled from 'styled-components/native';
import { ButtonDefault } from '../components/ButtonDefault';
import { useQuery } from '@realm/react';
import { DataType } from '../types/types';

export const ViewMain = () => {
    const [data, setData] = useState<DataType[]>();
    // const [status, setStatus] = useState<boolean>(false);

    // const updateData = () => {
    //     setStatus(true);
    //     const config = useQuery<DataType>('config');
    //     setData(config.map(item => item));
    //     setStatus(false);
    // }

    return (
        <Container>
            <InputContainer>
                <Select
                    text='Selecione uma configuração'
                    modalText='Selecione uma configuração'
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
