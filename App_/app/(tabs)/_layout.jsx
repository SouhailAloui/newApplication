import { Tabs } from 'expo-router'
import React from 'react'

export default function Tablayout() {
  return (
  <Tabs>
    <Tabs.Screen name='[userId]' options={{
        headerTitle:"client View",
        tabBarLabel:'client view'
    }}/>
        <Tabs.Screen name='profile' options={{
        headerTitle:"client profile",
        tabBarLabel:'client profile'
    }}/>
  </Tabs>
  )
}