import React from 'react';
import styled from 'styled-components/native';
import { Properties } from '../types/types';
import utils from '../helpers/utils';

type ItemDayProps = {
    item: Properties;
}

export const ItemDay = ({ item }: ItemDayProps) => {
    return (
        <Container>

            <ContainerDivisor>
                <ContainerItem>
                    <Header>Project</Header>
                    <TitleItem>{item.Project}</TitleItem>
                </ContainerItem>

                <ContainerItem>
                    <Header>Start Hour</Header>
                    <TitleItem>{utils.DateFormated(new Date(item.StartHour))}</TitleItem>
                </ContainerItem>
            </ContainerDivisor>

            <ContainerDivisor>
                <ContainerItem>
                    <Header>Description</Header>
                    <TitleItem>{item.Description}</TitleItem>
                </ContainerItem>


                <ContainerItem>
                    <Header>End Hour</Header>
                    <TitleItem>{utils.DateFormated(new Date(item.StartHour))}</TitleItem>
                </ContainerItem>
            </ContainerDivisor>

        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    border-bottom: 2px;
    border-style: solid;
    border-color: lightgray;
    background-color: lightgray;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    justify-content: space-around;
    align-items: center;
`;

const ContainerDivisor = styled.View`
    flex-direction: column;
    justify-content: space-around;
`;

const ContainerItem = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.Text`
    font-size: 20;
    font-weight: bold;
    color: black;
`;

const TitleItem = styled.Text`
    font-size: 16;
`