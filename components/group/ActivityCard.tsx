import { HStack, Text, VStack } from 'native-base';
import { ActivityIcons } from '@/constants/ActivityIcons';

type ActivityCardProps = {
    color: string;
    fontColor: string;
    activity: string;
    width: number;
    height: number;
    fontSize: number;
}

export default function ActivityCard({color, fontColor, activity, width, height, fontSize} : ActivityCardProps) {
    const activityEmoji: any = ActivityIcons["sports"][activity]

    return (
        <VStack
            flexDirection="column"
            justifyContent="space-between"
            width={width.toString() + "px"}
            height={height.toString() + "px"}
            bgColor={color}
            borderRadius={5}
        >
            <HStack>
                <Text color={fontColor} fontSize={fontSize} margin={1}>{activityEmoji}</Text>
            </HStack>
            <HStack flexDirection="row" justifyContent="flex-end">
                <Text color={fontColor} fontSize={fontSize} margin={1}>{activity}</Text>
            </HStack>

        </VStack>
    )
}