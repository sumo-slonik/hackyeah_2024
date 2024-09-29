import React, { useState } from 'react';
import { HStack, Pressable, Text, Box } from 'native-base';
import { StyleProp, ViewStyle } from 'react-native';

const WeekCalendar = ({
    selectedDays,
    setSelectedDays,
    style,
}: {
    selectedDays: string[];
    setSelectedDays: React.Dispatch<React.SetStateAction<string[]>>;
    style: StyleProp<ViewStyle>;
}) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const toggleDay = (day: string) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((d) => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    return (
        <HStack space={2} style={style}>
            {daysOfWeek.map((day) => (
                <Pressable key={day} onPress={() => toggleDay(day)}>
                    {({ isPressed }) => (
                        <Box
                            bg={
                                selectedDays.includes(day)
                                    ? 'primary.600'
                                    : 'gray.200'
                            }
                            px={3}
                            py={1}
                            borderRadius="full"
                            opacity={isPressed ? 0.8 : 1}
                        >
                            <Text
                                color={
                                    selectedDays.includes(day)
                                        ? 'white'
                                        : 'black'
                                }
                            >
                                {day}
                            </Text>
                        </Box>
                    )}
                </Pressable>
            ))}
        </HStack>
    );
};

export default WeekCalendar;
