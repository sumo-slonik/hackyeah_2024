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

const styles = {
    box: {
        marginBottom: 10,
    },
};
export default function Index() {
    return (
        <>
            <Box bg={Colors.light.darkBackGround}>
                <VStack space={4} alignItems="right" style={styles.box}>
                    <HStack
                        space={4}
                        justifyContent="space-between"
                        alignItems="center"
                        w="100%"
                    >
                        <Text fontSize={32} color={Colors.light.white}>
                            YOU
                        </Text>
                        <Spacer />
                        <Link href="/user">
                            <View>
                                <Text fontSize={32} color={Colors.light.white}>
                                    Go to user
                                </Text>
                            </View>
                        </Link>
                    </HStack>
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
                            borderRadius="full"
                            bg="primary.500"
                            _text={{ color: 'white' }}
                        >
                            Edit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
