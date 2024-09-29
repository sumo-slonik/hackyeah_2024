import React from 'react';
import {
    Button,
    Center,
    Container,
    Heading,
    VStack,
    Spacer,
    ScrollView,
    Box,
    Icon,
    IconButton, Text
} from 'native-base';
import ChooseActivity from '@/components/solo_page/ChooseActivity';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function SoloMain() {
    const [chosenMode, setChosenMode] = React.useState<
        'casual' | 'training' | null
    >(null);
    const [chosenActivity, setChosenActivity] = React.useState<
        string | undefined
    >(undefined);

    const handleTrainingPress = () => {
        if (chosenMode !== 'training') {
            setChosenMode('training');
            setChosenActivity(undefined); // Reset activity when changing mode
        } else {
            setChosenMode(null);
            setChosenActivity(undefined); // Clear activity if mode is deselected
        }
    };

    const handleCasualActivityPress = () => {
        if (chosenMode !== 'casual') {
            setChosenMode('casual');
            setChosenActivity(undefined); // Reset activity when changing mode
        } else {
            setChosenMode(null);
            setChosenActivity(undefined); // Clear activity if mode is deselected
        }
    };

    const handleActivityChoose = (activity: string | undefined) => {
        setChosenActivity(activity);
    };

    const handleSubmitActivity = () => {
        if (chosenActivity != null) {
            router.navigate(
                `/(tabs)/solo_active/${encodeURI(chosenActivity)}/${Date.now()}`,
            );
        }
    };

    return (
        <>
            <Center height={'100%'}>
                <VStack
                    flexDirection="column"
                    width={'80%'}
                    alignItems={'stretch'}
                    justifyContent={'space-between'}
                >
                    <VStack space={5}>
                        <Heading size="lg" textAlign={'center'} color={"#FFFFFF"}>
                            Choose Activity
                        </Heading>
                        <Button
                            onPress={handleTrainingPress}
                            bgColor={chosenMode === 'training' ? "#FF9E00" : "#FF6D00"}
                        >
                            <Text color={"#240046"}>Training</Text>
                        </Button>
                        <Button
                            onPress={handleCasualActivityPress}
                            bgColor={chosenMode === 'casual' ? "#FF9E00" : "#FF6D00"}
                        >
                            <Text color={"#240046"}>Casual Activity</Text>
                        </Button>
                    </VStack>
                    {chosenMode ? (
                        <>
                            <Center height={'60%'} marginTop={10}>
                                <ScrollView horizontal>
                                    <ScrollView>
                                        <ChooseActivity
                                            activityType={chosenMode}
                                            currentActivity={chosenActivity}
                                            setCurrentActivity={
                                                handleActivityChoose
                                            }
                                        />
                                    </ScrollView>
                                </ScrollView>
                            </Center>
                            <VStack
                                flexDirection={'row'}
                                justifyContent={'flex-end'}
                            >
                                <IconButton
                                    bgColor={"#3D096C"}
                                    padding={5}
                                    borderRadius={25}
                                    icon={
                                        <Icon
                                            as={Ionicons}
                                            name="arrow-forward-outline"
                                            size="sm"
                                        />
                                    }
                                    isDisabled={!chosenActivity}
                                    onPress={handleSubmitActivity}
                                />
                            </VStack>
                        </>
                    ) : null}
                </VStack>
            </Center>
        </>
    );
}
