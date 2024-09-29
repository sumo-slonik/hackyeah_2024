import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import { Box, Button, ScrollView, Text } from 'native-base';
import Header from '@/components/Header';
import { ModalProfil } from '@/components/custom_components/modalProfil';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MapView, { Circle, Marker } from 'react-native-maps';
import { foundUsers } from '@/assets/customData/personalData';
import { useThemeColor } from '@/hooks/useThemeColor';
import { styleMap } from '@/components/MapPicker';

const ChoosePerson = () => {
    const { activity, selectedDays, location, radius } = useLocalSearchParams();
    const selectedLocation = JSON.parse(location as string);
    const selectedRadius = JSON.parse(radius as string);

    const [modalVisible, setModalVisible] = useState(false);
    const [clickedUser, setClickedUser] = useState(undefined);
    const router = useRouter();

    const title = 'Synergize With As Many People As You Want';

    return (
        <ScrollView>
            <Header title={'Multi'} description={activity} />
            <View style={styles.container}>
                <Text style={styles.title} color={useThemeColor({}, 'text')}>
                    {title}
                </Text>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 50.06465, // Latitude for Kraków
                        longitude: 19.94498, // Longitude for Kraków
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    pitchEnabled={true}
                    rotateEnabled={true}
                    showsUserLocation
                    customMapStyle={styleMap}
                >
                    <View>
                        {foundUsers.map((person, index) => {
                            return (
                                <View>
                                    <Marker
                                        key={index}
                                        title={person.name}
                                        coordinate={person.coordinates}
                                        onPress={() => {
                                            setModalVisible(true);
                                            setClickedUser(person);
                                        }}
                                    >
                                        <Image
                                            key={index}
                                            source={require('../../../assets/images/planet.jpg')}
                                            style={styles.markerImage} // Apply styling to resize the image
                                        />
                                    </Marker>
                                    <Circle
                                        center={person.coordinates}
                                        radius={person.radius}
                                        strokeColor="rgba(0, 0, 255, 0.5)"
                                        fillColor="rgba(0, 0, 255, 0.2)"
                                    />
                                </View>
                            );
                        })}
                        <Marker title="You" coordinate={selectedLocation}>
                            <Image
                                key={'yourLocation'}
                                source={require('../../../assets/images/planet.jpg')}
                                style={styles.markerImage}
                            />
                        </Marker>
                        <Circle
                            center={selectedLocation}
                            radius={selectedRadius}
                            strokeColor="rgba(0, 255, 255, 0.5)"
                            fillColor="rgba(0, 255, 255, 0.2)"
                        />
                    </View>
                </MapView>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View
                        style={{ backgroundColor: 'transparent', flex: 1 }}
                    ></View>
                </TouchableWithoutFeedback>
                <ModalProfil
                    user={clickedUser}
                    onItemPress={() => {
                        setModalVisible(false);
                        setClickedUser(undefined);
                    }}
                ></ModalProfil>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 18,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    map: {
        width: Dimensions.get('window').width - 30,
        height: Dimensions.get('window').height * 0.7,
        marginBottom: 20,
    },
    sliderContainer: {
        alignItems: 'stretch',
        paddingHorizontal: 10,
    },
    slider: {
        height: 40,
    },
    radiusText: {
        fontSize: 16,
        marginBottom: 10,
    },
    markerImage: {
        width: 40, // Set desired width
        height: 40, // Set desired height
        resizeMode: 'contain', // Adjust the image to fit the container
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        justifyContent: 'flex-end', // Align modal to the bottom
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});

export default ChoosePerson;
