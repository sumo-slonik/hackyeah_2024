import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, {
    Marker,
    Circle,
    MapPressEvent,
    LatLng,
} from 'react-native-maps';
import Slider from '@react-native-community/slider';
import { useThemeColor } from '@/hooks/useThemeColor';

const MapPicker = ({
    title,
    selectedLocation,
    setSelectedLocation,
    radius,
    setRadius,
}: {
    title: string;
    selectedLocation?: LatLng;
    setSelectedLocation: React.Dispatch<
        React.SetStateAction<LatLng | undefined>
    >;
    radius: number;
    setRadius: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const handleMapPress = (event: MapPressEvent) => {
        const coordinate = event.nativeEvent.coordinate;
        setSelectedLocation(coordinate);
    };

    const textColor = useThemeColor({}, 'text');

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>

            <MapView
                style={[styles.map, ...styleMap]}
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
                userInterfaceStyle="dark"
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
                    <Text style={[styles.radiusText, { color: textColor }]}>
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
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    map: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height * 0.6,
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

const styleMap = [
    {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
            {
                saturation: 36,
            },
            {
                color: '#000000',
            },
            {
                lightness: 40,
            },
        ],
    },
    {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                visibility: 'on',
            },
            {
                color: '#000000',
            },
            {
                lightness: 16,
            },
        ],
    },
    {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#000000',
            },
            {
                lightness: 20,
            },
        ],
    },
    {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#000000',
            },
            {
                lightness: 17,
            },
            {
                weight: 1.2,
            },
        ],
    },
    {
        featureType: 'administrative.province',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#979797',
            },
        ],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ece9e9',
            },
            {
                visibility: 'on',
            },
            {
                weight: '7.99',
            },
        ],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#545454',
            },
        ],
    },
    {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#b9b6b6',
            },
        ],
    },
    {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
            {
                color: '#000000',
            },
            {
                lightness: 20,
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
            {
                color: '#000000',
            },
            {
                lightness: 21,
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#d77e28',
            },
            {
                lightness: 17,
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
            {
                lightness: 29,
            },
            {
                weight: 0.2,
            },
        ],
    },
    {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
            {
                color: '#d77e28',
            },
            {
                lightness: 18,
            },
        ],
    },
    {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff',
            },
        ],
    },
    {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
            {
                color: '#d77e28',
            },
            {
                lightness: 16,
            },
        ],
    },
    {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#ffffff',
            },
        ],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
            {
                color: '#000000',
            },
            {
                lightness: 19,
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#bdbdbd',
            },
            {
                lightness: 17,
            },
        ],
    },
];

export default MapPicker;
