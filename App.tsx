import { ContextProvider } from './src/context/Context';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { RegisterDay } from './src/views/RegisterDay';
import { ViewMain } from './src/views/ViewMain';
import { RealmProvider } from '@realm/react';
import { ObjectSchema } from 'realm';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

function App(): JSX.Element {

  const schema: ObjectSchema[] = [{
    name: 'config',
    properties: {
      id: 'string',
      description: 'string',
      key: 'string?'
    },
    primaryKey: 'id'
  }]

  return (
    <>
      <RealmProvider schema={schema}>
        <ContextProvider>
          <StatusBar />
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={ViewMain} />
            <Stack.Screen name="Register" component={RegisterDay} />
          </Stack.Navigator>
        </ContextProvider>
      </RealmProvider>
      <Toast />
    </>
  );
}

export default App;
