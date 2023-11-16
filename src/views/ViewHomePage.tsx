import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getData } from '../services/api';
import { Properties, RegisterDayModel } from '../types/types';
import { ItemDay } from '../components/ItemDay';
import { Header } from '../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

export const ViewHomePage = () => {

    const route = useRoute();
    const { auth } = route.params as any;
    const [status, setStatus] = useState<boolean>(false);
    const [list, setList] = useState<Properties[]>([]);

    const updateData = () => {
        setStatus(true);
        getData(auth.configKey)
            .then((data: RegisterDayModel) => {
                const obj: Properties[] = [];
                data.results.forEach((x) => {
                    const project = x.properties.Project.rich_text[0].plain_text;
                    const description = x.properties.Description.title[0].plain_text;
                    const startHour = x.properties.StartHour.date.start;
                    const endHour = x.properties.EndHour.date.start;

                    obj.push({
                        Project: project,
                        Description: description,
                        StartHour: startHour,
                        EndHour: endHour
                    });

                });
                setList(obj);
            })
            .finally(() => setStatus(false));
    }

    useEffect(() => updateData(), []);

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                {list.map((vl, idx) => <ItemDay key={idx} item={vl} />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        height: '100%'
    }
});