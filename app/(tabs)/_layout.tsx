import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: { backgroundColor: Colors.dark.background },
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Profile',
                    tabBarItemStyle: {
                        borderRadius: 5,
                        marginLeft: 20,
                        marginBottom: 10,
                        backgroundColor: Colors.dark.primary,
                    },
                }}
            />
            <Tabs.Screen
                name="solo"
                options={{
                    title: 'Solo',
                    tabBarItemStyle: {
                        borderRadius: 5,
                        marginHorizontal: 20,
                        marginBottom: 10,
                        backgroundColor: Colors.dark.primary,
                    },
                }}
            />
            <Tabs.Screen
                name="group"
                options={{
                    title: 'Grupowo',
                    tabBarItemStyle: {
                        borderRadius: 5,
                        marginRight: 20,
                        marginBottom: 10,
                        backgroundColor: Colors.dark.primary,
                    },
                }}
            />
            <Tabs.Screen
                name="solo_active/[...route_params]"
                options={{
                    href: null,
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
