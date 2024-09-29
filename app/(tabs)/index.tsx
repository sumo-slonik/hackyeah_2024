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
import { View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ExpaningRow } from '@/components/custom_components/ExpaningRow';
import { UpcomingActivity } from '@/components/custom_components/UpcomingActivity';
import Header from '@/components/Header';
import React from 'react';

const styles = {
    box: {
        marginBottom: 10,
    },
};
export default function Index() {
    const router = useRouter();

    return (
        <>
            <ScrollView>
                <Box bg={Colors.light.darkBackGround}>
                    <Header
                        title={'YOU'}
                        rightComponent={
                            <IconButton
                                icon={
                                    <Icon
                                        as={MaterialIcons}
                                        name="preview"
                                        size="md"
                                        color="white"
                                    />
                                }
                                onPress={() => router.push('/user')}
                                style={{
                                    marginHorizontal: 20,
                                    backgroundColor: Colors.dark.primary,
                                }}
                            />
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
                                value={75}
                                mx="4"
                            />
                            <Box
                                p={4}
                                rounded="md"
                                justifyContent="left"
                                alignItems="left"
                            >
                                <Text color={Colors.light.lightColor2}>
                                    1950/2400 ENERGY
                                </Text>
                            </Box>
                        </Box>
                        <Box bg={Colors.light.darkColor3} p={4} rounded="md">
                            <HStack
                                space={4}
                                justifyContent="left"
                                alignItems="center"
                            >
                                <Link href="/solo">
                                    <Text color="white">GAIN more ENERGY</Text>
                                </Link>
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
                                <ExpaningRow title={'Tenis with Iga'}>
                                    <UpcomingActivity
                                        dateTime={'21-05-2037'}
                                        activityType={'Tenis - pro activity'}
                                    />
                                </ExpaningRow>

                                <ExpaningRow title={'Football with Robercik'}>
                                    <UpcomingActivity
                                        dateTime={'21-05-2037'}
                                        activityType={'Tenis - pro activity'}
                                    />
                                </ExpaningRow>

                                <ExpaningRow title={'Baciata with Ania'}>
                                    <UpcomingActivity
                                        dateTime={'21-05-2037'}
                                        activityType={'Tenis - pro activity'}
                                    />
                                </ExpaningRow>
                            </VStack>
                        </Box>
                    </VStack>

                    <Box alignItems="center" alignContent="center">
                        <Box
                            bg="blue.800"
                            height={200}
                            width={300}
                            position="relative"
                            borderRadius="md"
                            overflow="hidden"
                        >
                            <Image
                                source={require('../../assets/images/sample_galaxy.jpeg')}
                                alt="Opis obrazka"
                                size="full"
                                resizeMode="cover"
                                position="absolute"
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
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
