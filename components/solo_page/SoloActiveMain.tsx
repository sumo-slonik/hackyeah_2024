import { Button, Center, Heading, HStack, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

type props = {
    activity: string;
    beginningTime: string;
};

export default function SoloActiveMain({ activity, beginningTime }: props) {
    const [currentTime, setCurrentTime] = useState<number>();

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(Date.now()), 1000);

        return () => clearInterval(interval);
    }, []);

    const durationString = () => {
        if (currentTime && currentTime - parseInt(beginningTime) >= 0) {
            const durationMilisecs = currentTime - parseInt(beginningTime);
            const durationSecs = Math.floor(durationMilisecs / 1000);
            const durationMins = Math.floor(durationSecs / 60) % 60;
            const durationHours = Math.floor(durationMins / 60) % 60;
            return (
                `${durationHours < 10 ? '0' + durationHours : durationHours}` +
                `:${durationMins % 60 < 10 ? '0' + (durationMins % 60) : durationMins % 60}` +
                `:${durationSecs % 60 < 10 ? '0' + (durationSecs % 60) : durationSecs % 60}`
            );
        }
        return undefined;
    };

    const handleFinishPress = () => {
        router.navigate('/(tabs)/solo');
    };

    return (
        <Center height={'100%'}>
            <VStack
                flexDirection="column"
                width={'80%'}
                alignItems={'stretch'}
                justifyContent={'space-between'}
                height={'50%'}
            >
                <HStack justifyContent="center">
                    <VStack space={5}>
                        <Heading
                            size="lg"
                            textAlign={'center'}
                            color={'#FFFFFF'}
                        >
                            Current activity: {activity}
                        </Heading>
                        {beginningTime ? (
                            <Heading
                                size="md"
                                textAlign={'center'}
                                color={'#FFFFFF'}
                            >
                                started: {durationString()} ago{' '}
                            </Heading>
                        ) : null}
                    </VStack>
                </HStack>
                <Button
                    bgColor={"#FF6D00"}
                    onPress={handleFinishPress}
                >
                    <Text color={"#240046"}>Finish</Text>
                </Button>
            </VStack>
        </Center>
    );
}
