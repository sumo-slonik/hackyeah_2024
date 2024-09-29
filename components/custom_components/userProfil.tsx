import { Box, Center, Progress, ScrollView, VStack } from 'native-base';
import { RadarChart } from '@salmonco/react-native-radar-chart';
import { Text, StyleSheet, Image, View } from 'react-native';
import { HStack } from 'native-base';
import Header from '@/components/Header';

export const UserProfil = ({ user }) => {
    const data = user.data;
    const name = user.name;
    const age = user.age;
    const photo = user.photo;

    return (
        <ScrollView>
            <Header title={name} description={'' + age + ' years'} />
            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <RadarChart
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
                    paddingBottom: 20,
                }}
            >
                <Image source={photo} style={styles.myPicture} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    nameStyle: {
        color: 'white',
        fontSize: 24,
    },
    myPicture: {
        width: 380,
        height: 450,
        borderColor: '#FF9E00',
        borderWidth: 1,
        borderRadius: 10,
    },
});
