import { Text } from 'react-native';
import { UserProfil } from '@/components/custom_components/userProfil';
import { firstUser } from '@/assets/customData/personalData';
import { VStack } from 'native-base';
import TimelineCalendarScreen from '@/components/WeekCalendar';

export default function Solo() {
    return (
        <VStack flex={1}>
            <TimelineCalendarScreen />
            // add to proper place
            <UserProfil user={firstUser}></UserProfil>
        </VStack>
    );
}
