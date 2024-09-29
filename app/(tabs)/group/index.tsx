import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import {
    Button,
    Fab,
    FlatList,
    Icon,
    Pressable,
    ScrollView,
    Select,
} from 'native-base';
import { useState } from 'react';
import MapPicker from '@/components/MapPicker';
import Header from '@/components/Header';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import WeekCalendar from '@/components/WeekCalendar';
import { LatLng } from 'react-native-maps';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function Group() {
    const [selectedActivity, setSelectedActivity] = useState<string>('');

    const data = [
        {
            name: 'Dancing',
        },
        {
            name: 'Running',
        },
        {
            name: 'Walking',
        },
        {
            name: 'Swimming',
        },
        {
            name: 'Skateboarding',
        },
    ];

    const renderItem = (item: { name: any }) => {
        return (
            <Button
                style={{ height: 50, width: 100, margin: 10 }}
                onPress={() => setSelectedActivity(item.name)}
                key={'button' + item.name}
            >
                {item.name}
            </Button>
        );
    };

    return (
        <ScrollView>
            <Header title={'MULTI'} />
            <Text style={{ fontSize: 24, color: useThemeColor({}, 'text') }}>
                Hot/Last Activities In Your Area
            </Text>
            <ScrollView horizontal scrollEnabled>
                {data.map((item) => renderItem(item))}
            </ScrollView>

            <Link
                href={{
                    pathname: '/group/chooseLocationAndTime',
                    params: {
                        activity: selectedActivity,
                    },
                }}
                asChild
            >
                <Fab
                    renderInPortal={false}
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
        </ScrollView>
    );
}
