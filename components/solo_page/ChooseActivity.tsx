import { Center, HStack, Pressable, Radio, Text, VStack } from 'native-base';
import ActivityCard from '@/components/group/ActivityCard';
import { element } from 'prop-types';

type props = {
    activityType: 'casual' | 'training';
    currentActivity: string | undefined;
    setCurrentActivity: (activity: string | undefined) => void;
};

const activities: Record<'casual' | 'training', string[]> = {
    casual: ['Running', 'Cycling', 'Skateboarding', 'Walking'],
    training: [
        'Running',
        'Golf',
        'Gymnastics',
        'Ice Hockey',
        'Cycling',
        'Athletics',
        'Handball',
        'Football',
        'Swimming',
        'Rugby',
        'Gym',
        'Volleyball',
        'Ski Jumping',
        'Walking',
        'Martial Arts',
        'Motorsports',
        'Skateboarding',
        'Tennis',
        'Rowing',
        'Skiing',
    ],
};

const activitiesGrouped = {
    casual: [
        ['Running', 'Cycling'],
        ['Skateboarding', 'Walking'],
    ],
    training: [
        ['Running', 'Golf', 'Gymnastics'],
        ['Ice Hockey', 'Cycling', 'Athletics'],
        ['Handball', 'Football', 'Swimming'],
        ['Rugby', 'Gym', 'Volleyball'],
        ['Ski Jumping', 'Walking', 'Martial Arts'],
        ['Motorsports', 'Skateboarding', 'Tennis'],
        ['Rowing', 'Skiing'],
    ],
};

const activitiesComponent = (
    activityType: 'casual' | 'training',
    currentActivity: string | undefined,
    setCurrentActivity: (activity: string) => void,
) => {
    return (
        <Center>
            <VStack>
                {activitiesGrouped[activityType].map((group) => {
                    return (
                        <HStack>
                            {group.map((element) => (
                                <Pressable
                                    onPress={() => setCurrentActivity(element)}
                                    style={{ margin: 10 }}
                                >
                                    <ActivityCard
                                        fontSize={16}
                                        color={
                                            currentActivity === element
                                                ? '#6F096C'
                                                : '#3C096C'
                                        }
                                        fontColor={'#FFFFFF'}
                                        activity={element}
                                        width={128}
                                        height={86}
                                    />
                                </Pressable>
                            ))}
                        </HStack>
                    );
                })}
            </VStack>
        </Center>
    );
};

export default function ChooseActivity({
    activityType,
    currentActivity,
    setCurrentActivity,
}: props) {
    return activitiesComponent(
        activityType,
        currentActivity,
        setCurrentActivity,
    );
}
