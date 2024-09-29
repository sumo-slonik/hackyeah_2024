import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { NativeBaseProvider, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import SplashScreen from 'react-native-splash-screen';

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded && SplashScreen) {
            SplashScreen.hide();
        }
    }, [loaded, SplashScreen]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider
            value={
                colorScheme === 'dark'
                    ? { dark: true, colors: Colors.dark }
                    : DefaultTheme
            }
        >
            <NativeBaseProvider>
                <View flex={1} backgroundColor={Colors.dark.background}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <Stack>
                            <Stack.Screen
                                name="(tabs)"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="+not-found" />
                        </Stack>
                    </SafeAreaView>
                </View>
            </NativeBaseProvider>
        </ThemeProvider>
    );
}
