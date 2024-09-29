import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import {
    Button, Center,
    Fab,
    FlatList, HStack,
    Icon, Input,
    Pressable,
    ScrollView,
    Select
} from 'native-base';
import { useState } from 'react';
import MapPicker from '@/components/MapPicker';
import Header from '@/components/Header';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import WeekCalendar from '@/components/WeekCalendar';
import { LatLng } from 'react-native-maps';
import ActivityCard from '@/components/group/ActivityCard';
import { ActivityIcons } from '@/constants/ActivityIcons';

export default function Group() {
    const [selectedActivity, setSelectedActivity] = useState<string>('');

    const data = [
        {
            name: 'Tennis',
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
            name: 'Cycling',
        },
    ];

    const activitiesRow = (activities: string[], marginBottom: number) => (
        <HStack space={5} style={{ marginBottom: marginBottom }}>
            {activities.map(activity => <ActivityCard color={"#3C096C"} fontSize={16} fontColor={"#FFFFFF"} activity={activity} width={108} height={73} />)}
        </HStack>
    )

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
        <ScrollView bgColor={"#240046"}>
            <Header title={'MULTI'} />
            <Text style={{ fontSize: 24, marginLeft: 20, color: "#FFFFFF" }}>
                Currently Synergizing for:
            </Text>
            <ScrollView horizontal scrollEnabled style={{ margin: 20 }}>
                <HStack space={5}>
                    {data.map((item) => <ActivityCard fontSize={24} color={"#3C096C"} fontColor={"#FFFFFF"} activity={item.name} width={128} height={86} />)}
                </HStack>
            </ScrollView>
            <Text style={{ fontSize: 24, marginLeft: 20, color: "#FFFFFF" }}>
                Hot/Last Activities In Your Area
            </Text>
            <ScrollView horizontal scrollEnabled style={{ margin: 20 }}>
                <HStack space={5}>
                    {data.map((item) => <ActivityCard fontSize={24} color={"#FF6D00"} fontColor={"#240046"} activity={item.name} width={128} height={86} />)}
                </HStack>
            </ScrollView>
            <Text style={{ fontSize: 24, marginLeft: 20, color: "#FFFFFF" }}>
                All Activities
            </Text>
            <Center style={{ marginTop: 20, marginBottom: 20 }}>
                <HStack space={2} flexDirection="row" width={"90%"}>
                    <Input flexGrow={100} placeholder={"Search"} fontSize={24} />
                    <Button bgColor={"#FF9E00"} flexGrow={16} >DUO</Button>
                    <Button bgColor={"#FF9E00"} flexGrow={23}>GROUP</Button>
                </HStack>
            </Center>
            <ScrollView scrollEnabled style={{ marginLeft: 20 }}>
                { activitiesRow(Object.keys(ActivityIcons["sports"]).slice(0, 3), 10) }
                { activitiesRow(Object.keys(ActivityIcons["sports"]).slice(3, 6), 10) }
                { activitiesRow(Object.keys(ActivityIcons["sports"]).slice(6, 9), 10) }
                { activitiesRow(Object.keys(ActivityIcons["sports"]).slice(9, 12), 10) }
                { activitiesRow(Object.keys(ActivityIcons["sports"]).slice(12, 15), 10) }
                { activitiesRow(Object.keys(ActivityIcons["sports"]).slice(15, 18), 10) }
            </ScrollView>
        </ScrollView>
    );
}
