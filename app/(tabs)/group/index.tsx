import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import {
    Button,
    Center,
    Fab,
    FlatList,
    HStack,
    Icon,
    Input,
    Pressable,
    ScrollView,
    Select,
} from 'native-base';
import { useState } from 'react';
import Header from '@/components/Header';
import { Link } from 'expo-router';
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
            {activities.map((activity) => (
                <ActivityCard
                    color={'#3C096C'}
                    fontSize={16}
                    fontColor={'#FFFFFF'}
                    activity={activity}
                    width={173}
                    height={73}
                />
            ))}
        </HStack>
    );

    return (
        <ScrollView bgColor={'#240046'} style={{ flex: 1 }}>
            <Header title={'Multi'} />
            <Text style={{ fontSize: 24, marginLeft: 20, color: '#FFFFFF' }}>
                Currently Synergizing for:
            </Text>
            <ScrollView horizontal scrollEnabled style={{ margin: 20 }}>
                <HStack space={5}>
                    {data.map((item) => (
                        <ActivityCard
                            fontSize={24}
                            color={'#3C096C'}
                            fontColor={'#FFFFFF'}
                            activity={item.name}
                            width={128}
                            height={86}
                        />
                    ))}
                </HStack>
            </ScrollView>
            <Text style={{ fontSize: 24, marginLeft: 20, color: '#FFFFFF' }}>
                Hot/Last Activities In Your Area
            </Text>
            <ScrollView horizontal scrollEnabled style={{ margin: 20 }}>
                <HStack space={5}>
                    {data.map((item) => (
                        <Link
                            href={{
                                pathname: '/group/chooseLocationAndTime',
                                params: { activity: item.name },
                            }}
                        >
                            <ActivityCard
                                fontSize={24}
                                color={'#FF6D00'}
                                fontColor={'#240046'}
                                activity={item.name}
                                width={128}
                                height={86}
                            />
                        </Link>
                    ))}
                </HStack>
            </ScrollView>
            <Text style={{ fontSize: 24, marginLeft: 20, color: '#FFFFFF' }}>
                All Activities
            </Text>
            <Center style={{ marginTop: 20, marginBottom: 20 }}>
                <HStack space={2} flexDirection="row" width={'90%'}>
                    <Input
                        flexGrow={100}
                        placeholder={'Search'}
                        fontSize={24}
                    />
                    <Button bgColor={'#FF9E00'} flexGrow={16}>
                        DUO
                    </Button>
                    <Button bgColor={'#FF9E00'} flexGrow={23}>
                        GROUP
                    </Button>
                </HStack>
            </Center>
            <ScrollView scrollEnabled style={{ marginLeft: 23 }}>
                {activitiesRow(
                    Object.keys(ActivityIcons['sports']).slice(0, 2),
                    10,
                )}
                {activitiesRow(
                    Object.keys(ActivityIcons['sports']).slice(2, 4),
                    10,
                )}
                {activitiesRow(
                    Object.keys(ActivityIcons['sports']).slice(4, 6),
                    10,
                )}
                {activitiesRow(
                    Object.keys(ActivityIcons['sports']).slice(6, 8),
                    10,
                )}
                {activitiesRow(
                    Object.keys(ActivityIcons['sports']).slice(8, 10),
                    10,
                )}
                {activitiesRow(
                    Object.keys(ActivityIcons['sports']).slice(10, 12),
                    10,
                )}
            </ScrollView>
        </ScrollView>
    );
}
