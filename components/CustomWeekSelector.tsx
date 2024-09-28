import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomWeekSelector = ({ onDateChanged }) => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [selectedDay, setSelectedDay] = useState(new Date().getDay());

    useEffect(() => {
        // Call onDateChanged with the initial selected day
        handleDayPress(selectedDay);
    }, []);

    const handleDayPress = (dayIndex) => {
        setSelectedDay(dayIndex);

        // Calculate the date for the selected day
        const today = new Date();
        const diff = dayIndex - today.getDay();
        const selectedDate = new Date(today.setDate(today.getDate() + diff));

        // Format the date as 'YYYY-MM-DD'
        const formattedDate = selectedDate.toISOString().split('T')[0];

        // Call onDateChanged with the formatted date
        onDateChanged(formattedDate, 'CustomWeekCalendar');
    };

    return (
        <View style={styles.container}>
            {dayNames.map((day, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.dayButton,
                        selectedDay === index && styles.selectedDay,
                    ]}
                    onPress={() => handleDayPress(index)}
                >
                    <Text
                        style={[
                            styles.dayText,
                            selectedDay === index && styles.selectedDayText,
                        ]}
                    >
                        {day}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#f0f0f0',
    },
    dayButton: {
        padding: 10,
        borderRadius: 5,
    },
    selectedDay: {
        backgroundColor: '#007AFF',
    },
    dayText: {
        fontSize: 16,
    },
    selectedDayText: {
        color: 'white',
    },
});

export default CustomWeekSelector;
