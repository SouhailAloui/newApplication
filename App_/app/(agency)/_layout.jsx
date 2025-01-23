import { Tabs } from 'expo-router'
import React from 'react'

export default function Agencylayout() {
  return (
  <Tabs>
    <Tabs.Screen name='[userId]' options={{
        headerTitle:"agency View",
        tabBarLabel:'agency view'
    }}/>
        <Tabs.Screen name='profile' options={{
        headerTitle:"agency profile",
        tabBarLabel:'agency profile'
    }}/>
  </Tabs>
  )
}