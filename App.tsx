import { ContextProvider } from "./src/context/Context";
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { RegisterDay } from "./src/views/RegisterDay";
import { ViewMain } from "./src/views/ViewMain";

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <ContextProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={ViewMain} />
          <Stack.Screen name="Register" component={RegisterDay} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
