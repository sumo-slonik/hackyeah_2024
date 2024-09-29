import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, TouchableOpacity } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme ?? 'light'].background,
                    position: 'absolute',
                },
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarItemStyle: {
                    marginBottom: 0,
                },
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            source={require('@/assets/images/menuButton.png')}
                            style={{
                                width: 130,
                                resizeMode: 'contain',
                                paddingRight: -10,
                            }}
                        />
                    ) : (
                        <Image
                            source={require('@/assets/images/restingButton.png')}
                            style={{
                                width: 70,
                                resizeMode: 'contain',
                                paddingRight: -10,
                            }}
                        />
                    ),
            }}
            sceneContainerStyle={{ backgroundColor: 'transparent' }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Profile',
                }}
            />
            <Tabs.Screen
                name="solo"
                options={{
                    title: 'Solo',
                }}
            />
            <Tabs.Screen
                name="group"
                options={{
                    title: 'Group',
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
