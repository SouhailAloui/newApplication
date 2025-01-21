import { Tabs } from 'expo-router';
import React from 'react';

export default function authLayout() {
  

  return (
    <Tabs>
                <Tabs.Screen name="loginscreen" />
                <Tabs.Screen name="signUpScreen" />
    </Tabs>
  );
}
