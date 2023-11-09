import React, { useEffect, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    FlatList,
    View
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DataType } from '../types/types';
import { useQuery, useRealm } from '@realm/react';
import { InputText } from './InputText';
import utils from '../helpers/utils';
import Toast from 'react-native-toast-message';

type SelectProps = {
    text?: string;
    modalText?: string;
    onChangeSelect: (value: DataType) => void;
}

const initialValue: DataType = {
    id: '',
    configKey: '',
    description: ''
}

export const Select = ({ onChangeSelect, text = 'Define text', modalText = 'Define Config' }: SelectProps) => {
    const [activeModal, setActiveModal] = useState<boolean>(false);
    const [selected, setSelected] = useState<DataType>(initialValue);
    const [status, setStatus] = useState<boolean>(false);
    const [data, setData] = useState<DataType[]>();

    const config = useQuery<DataType>('config');
    const realm = useRealm();

    const [configKey, setConfigKey] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const onSelect = (item: DataType) => {
        onChangeSelect(item ?? "");
        setSelected(item);
        setActiveModal(false);
    }

    const refreshData = () => {
        setStatus(true);
        setData(config.map(item => item));
        setTimeout(() => {
            setStatus(false);
        }, 500);
    }

    const deleteRealm = (id: string) => {
        realm.write(() => {
            const person = realm.objects('config').filtered(`id = '${id}'`);
            realm.delete(person);
        });
        refreshData();
    }

    const save = () => {
        realm.write(() => {
            realm.create('config', {
                id: utils.generateUUID(),
                configKey: configKey,
                description: description
            });
        });
        refreshData();
        Toast.show({
            type: 'success',
            text1: 'Salvo com sucesso!'
        });
    }

    useEffect(() => refreshData(), []);

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => setActiveModal(true)}>
                <TextStyle numberOfLines={1}>
                    {selected.description ? selected.description : text}
                </TextStyle>
                <Icon name='arrow-down' color='#afafaf' size={20} />
            </TouchableOpacity>
            <Modal animationType='slide' visible={activeModal} onDismiss={() => setActiveModal(false)}>
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setActiveModal(false)}>
                            <Icon name='arrow-left' color='#afafaf' size={20} />
                        </TouchableOpacity>
                        <Text style={styles.textColor}>{modalText}</Text>
                        <View></View>
                    </View>
                    <FlatList
                        data={data}
                        refreshing={status}
                        onRefresh={() => refreshData()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity key={index} style={styles.selection} onPress={() => onSelect(item)}>
                                <Text style={styles.text}>{index + 1} - {item.description}</Text>
                                <TouchableOpacity onPress={() => deleteRealm(item.id)}>
                                    <Icon name='trash' color='#afafaf' size={20} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    />


                    <View style={styles.headerView}>
                        <Text style={styles.headerTitle}>Criar</Text>
                    </View>

                    <View style={styles.headerInput}>
                        <InputText
                            placeholder='Descrição'
                            value={description}
                            onChangeText={(text) => setDescription(text)}
                        />
                        <InputText
                            placeholder='Chave'
                            value={configKey}
                            onChangeText={(text) => setConfigKey(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton} onPress={() => save()}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
}

const TextStyle = styled.Text`
    color: #afafaf;
    font-weight: 600;
`;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 55,
        color: '#afafaf',
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#afafaf',
        margin: 3,
        marginBottom: 10
    },
    modal: {
        backgroundColor: '#141414',
        height: '100%'
    },
    selection: {
        width: '100%',
        color: '#afafaf',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#afafaf'
    },
    textColor: {
        color: '#afafaf'
    },
    header: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        backgroundColor: '#2f353f',
        color: '#afafaf',
        borderColor: '#afafaf'
    },
    text: {
        fontSize: 20,
        color: '#afafaf'
    },
    textButton: {
        fontSize: 30,
    },
    headerView: {
        backgroundColor: '#2f353f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontWeight: 'bold',
        color: '#afafaf',
        fontSize: 24
    },
    headerInput: {
        marginHorizontal: 15,
    },
    button: {
        backgroundColor: 'lightgreen',
        width: '95%',
        padding: 5,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const InputContainer = styled.View`
    position: absolute;
    bottom: 5%;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
