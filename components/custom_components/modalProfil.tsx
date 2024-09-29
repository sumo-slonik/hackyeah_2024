import { Box, Center, Progress, VStack } from 'native-base';
import { RadarChart } from '@salmonco/react-native-radar-chart';
import {
    Text,
    StyleSheet,
    Image,
    View,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { HStack } from 'native-base';
import { backgroundColor } from 'react-native-calendars/src/style';

const MyName = ({ name, age, onItemPress, level }) => {
    return (
        <VStack>
            <HStack
                space={3}
                style={{
                    marginTop: 20,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text style={[styles.nameStyle, { flex: 1 }]}>
                    {name} {age}
                </Text>
                <TouchableOpacity onPress={() => onItemPress(false)}>
                    <Image
                        source={require('@/assets/images/temporary_logo.jpeg')}
                        style={{
                            width: 30,
                            height: 30,
                            borderColor: '#FF9E00',
                            borderWidth: 1,
                            borderRadius: 2,
                        }}
                    />
                </TouchableOpacity>
            </HStack>
            <HStack>
                <Text style={[styles.nameStyle, { flex: 1, fontSize: 16 }]}>
                    {level}
                </Text>
            </HStack>
        </VStack>
    );
};

export const ModalProfil = ({ user, onItemPress }) => {
    const data = user.data;
    const name = user.name;
    const age = user.age;
    const photo = user.photo;
    const level = user.level;

    return (
        <Center w="100%" h="85%" position="absolute" bottom={0}>
            <Box
                bg="#300559"
                h="100%"
                w="100%"
                maxW="500"
                alignSelf="center"
                alignItems="center"
                style={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
            >
                <VStack space="0">
                    <MyName
                        name={name}
                        age={age}
                        onItemPress={onItemPress}
                        level={level}
                    ></MyName>
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: -30,
                            paddingBottom: 10,
                        }}
                    >
                        <RadarChart
                            scale={0.8}
                            size={300}
                            dataFillColor="#FF6D00"
                            data={data}
                            labelColor="white"
                            gradientColor={{
                                startColor: '#1D0038',
                                endColor: '#3C096C',
                                count: 5,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1,
                            paddingBottom: 50,
                        }}
                    >
                        <Image source={photo} style={styles.myPicture} />
                    </View>
                </VStack>
            </Box>
        </Center>
    );
};

const styles = StyleSheet.create({
    nameStyle: {
        color: 'white',
        fontSize: 24,
    },
    myPicture: {
        width: 380,
        height: 380,
        borderColor: '#FF9E00',
        borderWidth: 1,
        borderRadius: 10,
    },
});
