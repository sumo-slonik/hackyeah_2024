import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const hours = Array.from({ length: 24 }, (_, i) => i);

const WeekViewTimePicker = () => {
    const [selectedTime, setSelectedTime] = useState<{
        day: number;
        hour: number;
    } | null>(null);

    const renderTimeSlot = (day: number, hour: number) => {
        const isSelected =
            selectedTime?.day === day && selectedTime?.hour === hour;
        return (
            <TouchableOpacity
                key={`${day}-${hour}`}
                style={[styles.timeSlot, isSelected && styles.selectedTimeSlot]}
                onPress={() => setSelectedTime({ day, hour })}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.dayLabels}>
                {days.map((day, index) => (
                    <Text key={day} style={styles.dayLabel}>
                        {day}
                    </Text>
                ))}
            </View>
            <View style={styles.timeGrid}>
                {hours.map((hour) => (
                    <View key={hour} style={styles.hourRow}>
                        <Text style={styles.hourLabel}>{`${hour}:00`}</Text>
                        {days.map((_, dayIndex) =>
                            renderTimeSlot(dayIndex, hour),
                        )}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    dayLabels: {
        width: 50,
    },
    dayLabel: {
        height: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    timeGrid: {
        flex: 1,
    },
    hourRow: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
    },
    hourLabel: {
        width: 50,
        textAlign: 'right',
        paddingRight: 5,
    },
    timeSlot: {
        flex: 1,
        height: 28,
        borderWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 1,
    },
    selectedTimeSlot: {
        backgroundColor: 'lightblue',
    },
});

export default WeekViewTimePicker;
