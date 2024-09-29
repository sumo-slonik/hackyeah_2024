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

import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View } from 'react-native';
import { Colors } from '@/constants/Colors';
import {
    ExpaningRow,
    expaningRow,
} from '@/components/custom_components/ExpaningRow';
import { UpcomingActivity } from '@/components/custom_components/UpcomingActivity';
import Header from '@/components/Header';
import { useState } from 'react';

const styles = {
    box: {
        marginBottom: 10,
    },
};
export default function Index() {
    const [points, setPoints] = useState(70);
    const updatePoints = () => {
        setPoints((points) => points + 10);
    };
    return (
        <>
            <ScrollView>
                <Box bg={Colors.light.darkBackGround}>
                    <Header title={'YOU'} />

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
                                <Link href="/solo">
                                    <View>
                                        <Text>Go to solo</Text>
                                    </View>
                                </Link>
                            </HStack>
                        </Box>
                        <Box bg={Colors.light.darkColor3} p={4} rounded="md">
                            <Text color="white">Upcoming activities</Text>
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
                            <HStack justifyContent="flex-end" width="100%">
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
