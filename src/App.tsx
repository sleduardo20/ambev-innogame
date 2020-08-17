import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import SignIn from './Pages/SingIn';

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#00448c"
          translucent
        />
        <SignIn />
      </NavigationContainer>
    </>
  );
};

export default App;
