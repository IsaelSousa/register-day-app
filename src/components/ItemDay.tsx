import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Properties } from '../types/types';
import utils from '../helpers/utils';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type ItemDayProps = {
    item: Properties;
}

export const ItemDay = ({ item }: ItemDayProps) => {
    const [active, setActive] = useState<boolean>(true);
    return (
        <Container onPress={() => setActive(!active)}>
            {active ? <Icon name='angle-up' size={20} /> : <Icon name='angle-down' size={20} />}
            <View>
                {
                    active ? (
                        <ContainerItems>
                            <ContainerDivisor>
                                <ContainerItem>
                                    <Header>Project</Header>
                                    <TitleItem>{item.Project}</TitleItem>
                                </ContainerItem>
                                <ContainerItem>

                                </ContainerItem>
                            </ContainerDivisor>

                            <ContainerDivisor>
                                <ContainerItem>
                                    <Header>Description</Header>
                                    <TitleItem>{item.Description}</TitleItem>
                                </ContainerItem>
                                <ContainerItem>

                                </ContainerItem>
                            </ContainerDivisor>
                        </ContainerItems>
                    ) : (
                        <ContainerItems>
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
                        </ContainerItems>
                    )
                }
            </View>
        </Container>

    );
}

const Container = styled.TouchableOpacity`
    flex: 1;
    flex-direction: column;
    border-bottom: 2px;
    border-style: solid;
    border-color: lightgray;
    background-color: #515968;
    padding: 7px;
    margin: 5px;
    border-radius: 5px;
    justify-content: space-around;
    align-items: center;
`;

const ContainerItems = styled.View`
    flex: 1;
    flex-direction: row;
    border-bottom: 2px;
    border-radius: 5px;
    justify-content: space-around;
    align-items: center;
`;

const ContainerDivisor = styled.View`
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    margin-right: 10px;
`;

const ContainerItem = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: white;
`;

const TitleItem = styled.Text`
    font-size: 16px;
    color: #b4b4b4;
`