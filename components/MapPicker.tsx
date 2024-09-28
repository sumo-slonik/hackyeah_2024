import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, {
    Marker,
    Circle,
    MapPressEvent,
    LatLng,
} from 'react-native-maps';
import Slider from '@react-native-community/slider';

const MapPicker = ({ title }: { title: string }) => {
    const [selectedLocation, setSelectedLocation] = useState<
        LatLng | undefined
    >(undefined);
    const [radius, setRadius] = useState(1000);

    const handleMapPress = (event: MapPressEvent) => {
        const coordinate = event.nativeEvent.coordinate;
        setSelectedLocation(coordinate);
    };

    return (
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
                onPress={handleMapPress}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
                showsUserLocation
            >
                {selectedLocation && (
                    <>
                        <Marker
                            title="Your area"
                            coordinate={selectedLocation}
                        />
                        <Circle
                            center={selectedLocation}
                            radius={radius}
                            strokeColor="rgba(0, 0, 255, 0.5)"
                            fillColor="rgba(0, 0, 255, 0.2)"
                        />
                    </>
                )}
            </MapView>
            {selectedLocation && (
                <View style={styles.sliderContainer}>
                    <Text style={styles.radiusText}>
                        Radius: {radius} meters
                    </Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={100}
                        maximumValue={10000}
                        step={100}
                        value={radius}
                        onValueChange={(value) => setRadius(value)}
                        minimumTrackTintColor="#0000FF"
                        maximumTrackTintColor="#000000"
                    />
                </View>
            )}
        </View>
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
        height: Dimensions.get('window').height * 0.4,
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
});

export default MapPicker;
