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
import { Calendar } from 'react-native-calendars';
import MapPicker from '@/components/MapPicker';
import Carousel from 'react-native-reanimated-carousel';
import TimelineCalendarScreen from '@/components/WeekCalendar';
import Header from '@/components/Header';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const { width: viewportWidth } = Dimensions.get('window');

export default function Group() {
    const [selectedActivity, setSelectedActivity] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

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

    const renderItem = (item) => {
        return (
            <Button
                style={{ height: 50, width: 100, margin: 10 }}
                onPress={() => {}}
            >
                {item.name}
            </Button>
        );
    };

    return (
        <ScrollView>
            <Header title={'MULTI'} />
            <Text style={{ fontSize: 24 }}>
                Hot/Last Activities In Your Area
            </Text>
            <ScrollView horizontal scrollEnabled>
                {data.map((item) => renderItem(item))}
            </ScrollView>
            <Text style={{ fontSize: 24 }}>
                Choose When You Want To Workout
            </Text>
            {/*<Calendar*/}
            {/*    onDayPress={(day) => setSelectedDate(day.dateString)}*/}
            {/*    markedDates={{*/}
            {/*        [selectedDate]: {*/}
            {/*            selected: true,*/}
            {/*            marked: true,*/}
            {/*            selectedColor: 'blue',*/}
            {/*        },*/}
            {/*    }}*/}
            {/*    enableSwipeMonths*/}
            {/*/>*/}

            <TimelineCalendarScreen />
            <MapPicker title={'Choose Where You Want To Workout'} />

            <Link href="/group/choosePerson" asChild>
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
