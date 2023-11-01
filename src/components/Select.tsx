import React, { useState, useEffect } from 'react';
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

type DataType = {
    key: string;
    value: string;
}

type SelectProps = {
    data?: DataType[];
    text?: string;
    modalText?: string;
    onChangeSelect: (value: DataType) => void;
}

const initialValue: DataType = {
    key: '',
    value: ''
}

export const Select = ({ data, onChangeSelect, text = 'Define text', modalText = 'Define Config' }: SelectProps) => {
    const [activeModal, setActiveModal] = useState<boolean>(false);
    const [selected, setSelected] = useState<DataType>(initialValue);

    const onSelect = (item: DataType) => {
        onChangeSelect(item ?? "");
        setSelected(item);
        setActiveModal(false);
    }

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => setActiveModal(true)}>
                <TextStyle numberOfLines={1}>
                    {selected.key ? selected.key : text}
                </TextStyle>
                <Icon name='arrow-down' size={20} />
            </TouchableOpacity>
            <Modal animationType='slide' visible={activeModal} onDismiss={() => setActiveModal(false)}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setActiveModal(false)}>
                        <Icon name='arrow-left' size={20} />
                    </TouchableOpacity>
                    <Text>{modalText}</Text>
                    <View></View>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={styles.selection} onPress={() => onSelect(item)}>
                            <Text>{item.key}</Text>
                        </TouchableOpacity>
                    )}
                />
            </Modal>
        </>
    )
}

const TextStyle = styled.Text`
    color: #5a5a5a;
    font-weight: 600;
`;

const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: '22%',
        color: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        margin: 3
    },
    selection: {
        width: '100%',
        color: 'black',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
    },
    header: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
    }
});