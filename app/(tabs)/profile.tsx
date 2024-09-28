import {VStack, Box, Text, Progress, HStack, IconButton, Icon, Button, Center, Flex, Image} from 'native-base';

import {FontAwesome} from "@expo/vector-icons";
const styles = {
    box:{
        marginBottom: 10
    }
}
export default function Profile() {
    return (
        <>
            <VStack space={4} alignItems="right" style={styles.box}>
                <HStack space={4} justifyContent="left" alignItems="left">
                    <Text >YOU</Text>
                    <IconButton
                        icon={<Icon as={FontAwesome} name="arrow-right"/>}
                        _icon={{
                            color: "white",
                            size: "md",
                        }}
                        _hover={{
                            bg: "primary.600",
                        }}
                        _pressed={{
                            bg: "primary.800",
                        }}
                        bg="primary.500"
                    />
                </HStack>
                <Box bg="primary.500" p={4} rounded="md" justifyContent="right" alignItems="right">
                    <Text color="white">YOUR DAILY GOALS</Text>
                    <Progress bg="coolGray.100" _filledTrack={{
                        bg: "lime.500"
                    }} value={75} mx="4"/>
                    <Box bg="primary.500" p={4} rounded="md" justifyContent="center" alignItems="center">
                        <Text color="white">1950/2400</Text>
                    </Box>
                </Box>
                <Box bg="secondary.500" p={4} rounded="md">
                    <HStack space={4} justifyContent="left" alignItems="center">
                        <Text color="white">GAIN POINTS</Text>
                        <IconButton
                            icon={<Icon as={FontAwesome} name="arrow-right"/>}
                            _icon={{
                                color: "white",
                                size: "md",
                            }}
                            _hover={{
                                bg: "primary.600",
                            }}
                            _pressed={{
                                bg: "primary.800",
                            }}
                            bg="primary.500"
                        />
                    </HStack>
                </Box>
                <Box bg="secondary.500" p={4} rounded="md">
                    <Text color="white">Upcoming activities</Text>
                    <VStack>
                        <Box bg={"primary.600"} style={styles.box}>
                            <HStack space={4} justifyContent="left" alignItems="center">
                                <Text color="white">Tenis with Iga</Text>
                                <IconButton
                                    icon={<Icon as={FontAwesome} name="arrow-right"/>}
                                    _icon={{
                                        color: "white",
                                        size: "md",
                                    }}
                                    _hover={{
                                        bg: "primary.600",
                                    }}
                                    _pressed={{
                                        bg: "primary.800",
                                    }}
                                    bg="primary.500"
                                />
                            </HStack>
                        </Box>
                        <Box bg={"primary.600"}>
                            <HStack space={4} justifyContent="left" alignItems="center">
                                <Text color="white">Footbal with Robercik</Text>
                                <IconButton
                                    icon={<Icon as={FontAwesome} name="arrow-right"/>}
                                    _icon={{
                                        color: "white",
                                        size: "md",
                                    }}
                                    _hover={{
                                        bg: "primary.600",
                                    }}
                                    _pressed={{
                                        bg: "primary.800",
                                    }}
                                    bg="primary.500"
                                />
                            </HStack>
                        </Box>
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
                    _text={{color: "white"}}
                >
                    Edit
                </Button>
            </Box>
            </Box>
        </>
    );
}
