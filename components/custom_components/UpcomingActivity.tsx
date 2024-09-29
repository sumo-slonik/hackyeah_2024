import { Box, Text } from 'native-base';
import { Colors } from '@/constants/Colors';

interface dataForUpcomingActivity {
    dateTime: string;
    activityType: string;
    userData?: any;
}

export const UpcomingActivity = (props: dataForUpcomingActivity) => {
    return (
        <>
            <Box
                padding={2}
                marginLeft={2}
                backgroundColor={Colors.light.darkColor2}
                height={10}
                width={'80%'}
                justifyContent="center"
            >
                <Text color="white">
                    <Text>{props.dateTime}</Text>
                </Text>
            </Box>
            <Box
                padding={2}
                marginLeft={2}
                backgroundColor={Colors.light.darkColor2}
                height={10}
                width={'80%'}
                justifyContent="center"
            >
                <Text color="white">
                    <Text>{props.activityType}</Text>
                </Text>
            </Box>
            <Box
                padding={2}
                marginLeft={2}
                backgroundColor={Colors.light.darkColor2}
                height={10}
                width={'80%'}
                justifyContent="center"
            >
                <Text color="white">
                    <Text>Profil ziomeczka</Text>
                </Text>
            </Box>
        </>
    );
};
