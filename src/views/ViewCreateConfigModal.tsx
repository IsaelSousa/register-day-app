import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { InputText } from '../components/InputText';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { useContextProvider } from '../context/Context';
import { useQuery, useRealm } from '@realm/react';
import Toast from 'react-native-toast-message';
import utils from '../helpers/utils';

type ViewCreateConfigModal = {
    onClose: () => void;
}

export const ViewCreateConfigModal = ({ onClose }: ViewCreateConfigModal) => {
    const navigate = useContextProvider();
    const realm = useRealm();
    const config = useQuery('config');

    const [key, setKey] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const save = () => {
        realm.write(() => {
            realm.create('config', {
                id: utils.generateUUID(),
                key: key,
                description: description
            });
        });
        console.log('deu');
        Toast.show({
            type: 'success',
            text1: 'Salvo com sucesso!'
        });
    }

    return (
        <Container>
            <Text style={styles.text}>Configuração</Text>
            <InputText
            placeholder='Descrição'
            value={description}
            onChangeText={(text) => setDescription(text)}
            />
            <InputText
            placeholder='Chave'
            value={key}
            onChangeText={(text) => setKey(text)}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton} onPress={() => save()}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton} onPress={() => onClose()}>Voltar</Text>
            </TouchableOpacity>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    position: absolute;
    justify-content: center;
    align-items: center;
    bottom: 40px;
    width: 100%;
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