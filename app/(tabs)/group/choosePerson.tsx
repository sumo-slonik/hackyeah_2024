import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Image, Modal } from 'react-native';
import { Box, Button, ScrollView, Text } from 'native-base';
import Header from '@/components/Header';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MapView, { Circle, LatLng, Marker } from 'react-native-maps';

type ChosenOptions = {
    activity: string;
    time: string[];
    location?: LatLng;
    radius?: number;
};

const ChoosePerson = () => {
    const { activity, selectedDays, location, radius } = useLocalSearchParams();
    const selectedLocation = JSON.parse(location as string);
    const selectedRadius = JSON.parse(radius as string);
    console.log('doopa', activity, selectedDays, selectedLocation, radius);

    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();

    const title = 'Synergize With As Many People As You Want';
    const marker_diff = 0.005;
    const foundPeople = [
        {
            name: 'User1',
            coordinates: {
                latitude: 50.06465, // Latitude for Kraków
                longitude: 19.94498, // Longitude for Kraków
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            radius: 1000,
        },
        {
            name: 'User2',
            coordinates: {
                latitude: 50.06465 + marker_diff,
                longitude: 19.94498 + marker_diff,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            radius: 1000,
        },
        {
            name: 'User3',
            coordinates: {
                latitude: 50.06465 - marker_diff,
                longitude: 19.94498 - marker_diff,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            radius: 1000,
        },
    ];

    return (
        <ScrollView>
            <Header
                title={'MULTI'}
                onBackPress={() => {
                    router.back();
                }}
            />
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>

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
                    zoomControlEnabled
                >
                    <View>
                        {foundPeople.map((person, index) => {
                            return (
                                <View>
                                    <Marker
                                        key={index}
                                        title={person.name}
                                        coordinate={person.coordinates}
                                        onPress={() => {
                                            setModalVisible(true);
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
                        <Marker coordinate={selectedLocation}>
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
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <Box style={styles.modalContent}>
                        <Text>This is a bottom modal!</Text>
                        <Button onPress={() => setModalVisible(false)}>
                            Close
                        </Button>
                    </Box>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    map: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height * 0.75,
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
