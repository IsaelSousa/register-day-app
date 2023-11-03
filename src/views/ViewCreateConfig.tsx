import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { InputText } from '../components/InputText';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { useContextProvider } from '../context/Context';

export const ViewCreateConfig = () => {
    const navigate = useContextProvider();

    return (
        <Container>
            <Text style={styles.text}>Configuração</Text>
            <InputText
            placeholder='Descrição'
            />
            <InputText
            placeholder='Chave'
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton} onPress={() => navigate.goBack()}>Voltar</Text>
            </TouchableOpacity>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginBottom: 80
    },
    textButton: {
        fontSize: 30,
    },
    button: {
        backgroundColor: 'lightgreen',
        width: '95%',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});