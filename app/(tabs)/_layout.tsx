import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Profil',
                }}
            />
            <Tabs.Screen
                name="solo"
                options={{
                    title: 'Solo',
                }}
            />
            <Tabs.Screen
                name="group/index"
                options={{
                    title: 'Grupowo',
                }}
            />
            <Tabs.Screen
                name="user/index"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    );
}
