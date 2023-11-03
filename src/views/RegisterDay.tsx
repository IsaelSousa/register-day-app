import React, { useEffect, useState } from 'react';
import { InputText } from '../components/InputText';
import styled from 'styled-components/native';
import CalendarPicker from 'react-native-calendar-picker';

export const RegisterDay = () => {
    const [date, setDate] = useState<moment.Moment>();

    return (
        <Container>
            <CalendarPicker
            startFromMonday={true}
            allowBackwardRangeSelect={true}
            onDateChange={(e) => setDate(e)}
            />
            <InputText placeholder='Descrição' />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    margin-top: 35px;
    align-items: center;
`;