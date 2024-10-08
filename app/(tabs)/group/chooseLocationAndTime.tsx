import React, { useState } from 'react';
import { LatLng } from 'react-native-maps';
import Header from '@/components/Header';
import { Text } from 'react-native';
import { Fab, Icon, ScrollView } from 'native-base';
import WeekCalendar from '@/components/WeekCalendar';
import MapPicker from '@/components/MapPicker';
import { Link, useLocalSearchParams } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const chooseLocationAndTime = () => {
    const { activity } = useLocalSearchParams();

    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<
        LatLng | undefined
    >(undefined);
    const [radius, setRadius] = useState(1000);

    return (
        <>
            <Header title={'Multi'} description={activity} />

            <ScrollView style={{ marginHorizontal: 18 }}>
                <Text
                    style={[
                        {
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginBottom: 10,
                        },
                        { color: 'white' },
                    ]}
                >
                    {'Choose When You Want To Workout'}
                </Text>
                <WeekCalendar
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                    style={{ paddingHorizontal: 4, paddingVertical: 12 }}
                />

                <MapPicker
                    title={'Choose Where You Want To Workout'}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                    radius={radius}
                    setRadius={setRadius}
                />

                {selectedDays && selectedLocation && (
                    <Link
                        href={{
                            pathname: '/group/choosePerson',
                            params: {
                                activity: activity,
                                selectedDays: selectedDays,
                                location: JSON.stringify(selectedLocation),
                                radius: radius,
                            },
                        }}
                        asChild
                    >
                        <Fab
                            renderInPortal={false}
                            style={{
                                borderRadius: 8,
                                backgroundColor: Colors.dark.primary,
                            }}
                            shadow={2}
                            size="lg"
                            icon={
                                <Icon
                                    as={MaterialIcons}
                                    color="white"
                                    name="arrow-forward"
                                />
                            }
                        />
                    </Link>
                )}
            </ScrollView>
        </>
    );
};

export default chooseLocationAndTime;
