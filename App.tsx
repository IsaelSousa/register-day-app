import { ContextProvider } from './src/context/Context';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { RegisterDay } from './src/views/RegisterDay';
import { ViewMain } from './src/views/ViewMain';
import { RealmProvider } from '@realm/react';
import { ObjectSchema } from 'realm';
import Toast from 'react-native-toast-message';
import { ViewHomePage } from './src/views/ViewHomePage';

const Stack = createStackNavigator();

function App(): JSX.Element {

  const schema: ObjectSchema[] = [{
    name: 'config',
    properties: {
      id: 'string',
      description: 'string',
      configKey: 'string'
    },
    primaryKey: 'id'
  }]

  return (
    <>

      <RealmProvider schema={schema}>
        <ContextProvider>
          <StatusBar barStyle='light-content' animated backgroundColor={'#2f353f'} />
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={ViewMain} />
            <Stack.Screen name="Register" component={RegisterDay} />
            <Stack.Screen name="ViewHomePage" component={ViewHomePage} />
          </Stack.Navigator>
        </ContextProvider>
      </RealmProvider>
      <Toast
        position='top'
        
      />
    </>
  );
}

export default App;
