import { Box, Button, Text } from 'native-base';
import { Colors } from '@/constants/Colors';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { ActivityStates } from '@/components/custom_components/ExpaningRow';

interface dataForUpcomingActivity {
    dateTime: string;
    activityType: string;
    userData?: any;
    setterForStatus: Dispatch<SetStateAction<ActivityStates>>;
    status: ActivityStates;
    updatePoints: () => void;
}

export const UpcomingActivity = (props: dataForUpcomingActivity) => {
    return (
        <>
            {props.status != ActivityStates.Stoped && (
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
                        height={110}
                        width={'80%'}
                        justifyContent="center"
                        alignContent={'center'}
                    >
                        <Text color="white">
                            <Text>Profil ziomeczka</Text>
                        </Text>
                        {props.status === ActivityStates.Panding && (
                            <Button
                                alignContent={'center'}
                                justifyContent={'center'}
                                padding={0}
                                marginTop={3}
                                marginBottom={2}
                                height={30}
                                backgroundColor={Colors.light.lightColor1}
                                onPress={() =>
                                    props.setterForStatus(
                                        ActivityStates.Started,
                                    )
                                }
                            >
                                <Text
                                    fontSize={15}
                                    color={Colors.light.darkColor1}
                                >
                                    Start
                                </Text>
                            </Button>
                        )}

                        {props.status === ActivityStates.Started && (
                            <Button
                                onPress={() => {
                                    props.setterForStatus(
                                        ActivityStates.Stoped,
                                    );
                                    props.updatePoints();
                                }}
                            >
                                Stop
                            </Button>
                        )}
                    </Box>
                </>
            )}
        </>
    );
};
