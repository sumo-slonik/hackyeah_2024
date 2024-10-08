import {
    VStack,
    Box,
    Text,
    Progress,
    HStack,
    IconButton,
    Icon,
    Button,
    Center,
    Flex,
    Image,
    Spacer,
    ScrollView,
} from 'native-base';

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ExpaningRow } from '@/components/custom_components/ExpaningRow';
import { UpcomingActivity } from '@/components/custom_components/UpcomingActivity';
import Header from '@/components/Header';
import { useState } from 'react';
import React from 'react';

const styles = {
    box: {
        marginBottom: 10,
    },
};
export default function Index() {
    const router = useRouter();

    const [points, setPoints] = useState(70);
    const updatePoints = () => {
        setPoints((points) => points + 10);
    };
    return (
        <>
            <ScrollView>
                <Box bg={Colors.light.darkBackGround}>
                    <Header
                        title={'YOU'}
                        rightComponent={
                            <TouchableOpacity
                                onPress={() => router.push('/user')}
                                style={{ paddingRight: 40 }}
                            >
                                <Image
                                    source={require('@/assets/images/eyeButton.png')}
                                    style={{
                                        width: 45,
                                        height: 40,
                                        resizeMode: 'contain',
                                    }}
                                ></Image>
                            </TouchableOpacity>
                        }
                    />

                    <VStack space={4} alignItems="right" style={styles.box}>
                        <Box
                            bg={Colors.light.darkColor3}
                            p={4}
                            rounded="md"
                            justifyContent="right"
                            alignItems="right"
                        >
                            <Text color="white">YOUR DAILY GOALS</Text>
                            <Progress
                                bg={Colors.light.darkBackGround}
                                borderRadius={0}
                                borderColor={Colors.light.white}
                                borderWidth={1}
                                height={3}
                                _filledTrack={{
                                    bg: Colors.light.lightColor1,
                                    borderRadius: 0,
                                }}
                                value={points}
                                mx="4"
                            />
                            <Box
                                p={4}
                                rounded="md"
                                justifyContent="left"
                                alignItems="left"
                            >
                                <Text color={Colors.light.lightColor2}>
                                    {(points / 100) * 2400}/2400 ENERGY
                                </Text>
                            </Box>
                        </Box>
                        <Box bg={Colors.light.darkColor3} p={4} rounded="md">
                            <HStack
                                space={4}
                                justifyContent="left"
                                alignItems="center"
                            >
                                <Text color="white">GAIN more ENERGY</Text>

                                <TouchableOpacity
                                    onPress={() => router.push('/solo')}
                                >
                                    <Image
                                        source={require('@/assets/images/goToSoloButton.png')}
                                        style={{
                                            width: 74,
                                            height: 25,
                                        }}
                                    ></Image>
                                </TouchableOpacity>
                            </HStack>
                        </Box>
                        <Box bg={Colors.light.darkColor3} p={4} rounded="md">
                            <HStack justifyContent="space-between" width="100%">
                                <Text color="white">Upcoming activities</Text>
                                <IconButton
                                    backgroundColor={Colors.light.darkColor2}
                                    icon={
                                        <Icon
                                            as={FontAwesome}
                                            name={'calendar'}
                                        />
                                    }
                                    _icon={{
                                        color: Colors.light.lightColor1,
                                        size: 'md',
                                    }}
                                />
                            </HStack>
                            <VStack>
                                <ExpaningRow
                                    title={'Tenis with Iga'}
                                    dateTime={'21-05-2037'}
                                    activityType={'Tenis - pro activity'}
                                    updatePoints={updatePoints}
                                />
                                <ExpaningRow
                                    title={'Football with Robercik'}
                                    dateTime={'21-05-2037'}
                                    activityType={'Tenis - pro activity'}
                                    updatePoints={updatePoints}
                                />
                                <ExpaningRow
                                    title={'Baciata with Ania'}
                                    dateTime={'21-05-2037'}
                                    activityType={'Tenis - pro activity'}
                                    updatePoints={updatePoints}
                                />
                            </VStack>
                        </Box>
                    </VStack>

                    <Box
                        alignItems="center"
                        alignContent="center"
                        paddingBottom={4}
                    >
                        <Box
                            bg="blue.800"
                            height={300}
                            width={400}
                            position="relative"
                            borderRadius="md"
                            overflow="hidden"
                        >
                            <Image
                                source={require('../../assets/images/sample_galaxy.jpeg')}
                                alt="Opis obrazka"
                                size="full"
                                resizeMode="cover"
                            />
                            <Button
                                position="absolute"
                                bottom={2}
                                right={4}
                                bg={Colors.light.lightColor1}
                                _text={{ color: Colors.light.darkBackGround }}
                            >
                                Edit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </>
    );
}
