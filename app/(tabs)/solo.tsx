import { Text } from 'react-native';
import { VStack } from 'native-base';
import TimelineCalendarScreen from '@/components/WeekCalendar';

export default function Solo() {
    return (
        <VStack flex={1}>
            <TimelineCalendarScreen />
        </VStack>
    );
}
