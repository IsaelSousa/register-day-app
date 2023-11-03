import { ContextProvider } from "./src/context/Context";
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { RegisterDay } from "./src/views/RegisterDay";
import { ViewMain } from "./src/views/ViewMain";
import { ViewCreateConfig } from "./src/views/ViewCreateConfig";
import { RealmProvider } from "@realm/react";
import { ObjectSchema } from "realm";

const Stack = createStackNavigator();

function App(): JSX.Element {

  const schema: ObjectSchema[] = [{
    name: 'config',
    properties: {
      id: 'int?',
      description: 'string',
      key: 'string?'
    },
    primaryKey: 'id'
  }]

  return (
    <RealmProvider schema={schema}>
      <ContextProvider>
        <StatusBar />
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={ViewMain} />
          <Stack.Screen name="Register" component={RegisterDay} />
          <Stack.Screen name="CreateConfig" component={ViewCreateConfig} />
        </Stack.Navigator>
      </ContextProvider>
    </RealmProvider>

  );
}

export default App;
