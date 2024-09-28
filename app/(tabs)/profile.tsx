import {VStack, Box, Text, Progress, HStack, IconButton, Icon} from 'native-base';

import {Entypo} from "@expo/vector-icons";

export default function Profile() {
    return (


        <>

            <VStack space={4} alignItems="center">
                <Box bg="primary.500" p={4} rounded="md">
                    <Text color="white">YOUR DAILY GOALS</Text>
                    <Progress bg="coolGray.100" _filledTrack={{
                        bg: "lime.500"
                    }} value={75} mx="4"/>
                </Box>
                <Box bg="secondary.500" p={4} rounded="md">
                    <HStack space={4} justifyContent="center" alignItems="center">
                        <Box bg="primary.500" p={4} rounded="md">
                            <Text color="white">GAIN POINTS</Text>
                        </Box>
                        <Box bg="secondary.500" p={4} rounded="md">
                            <IconButton icon={<Icon as={Entypo} name="arrow-forward" />} borderRadius="full"/>
                        </Box>
                        <Box bg="emerald.500" p={4} rounded="md">
                            <Text color="white">Komponent 3</Text>
                        </Box>
                    </HStack>
                </Box>
                <Box bg="emerald.500" p={4} rounded="md">
                    <Text color="white">Komponent 3</Text>
                </Box>
            </VStack>

            {/*    <span>*/}
            {/*    YOUR DAILY GOALS*/}
            {/*    </span>*/}
            {/*        <Center w="100%">*/}
            {/*            <Box w="90%" maxW="400">*/}

            {/*            </Box>*/}
            {/*        </Center>*/}

            {/*<Box alignItems="center">*/}

            {/*</Box>*/}
        </>
    );
}
