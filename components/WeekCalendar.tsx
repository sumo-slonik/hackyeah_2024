import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
    CalendarProvider,
    WeekCalendar,
    TimelineList,
    CalendarUtils,
    TimelineEventProps,
    TimelineProps,
} from 'react-native-calendars';

const getDate = (offset = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date.toISOString().split('T')[0]; // Returns date in 'YYYY-MM-DD' format
};

const timelineEvents: TimelineEventProps[] = [
    {
        id: '1',
        start: `${getDate()} 09:00:00`,
        end: `${getDate()} 10:00:00`,
        title: 'Meeting with Team',
        color: 'blue',
    },
    {
        id: '2',
        start: `${getDate(1)} 12:00:00`,
        end: `${getDate(1)} 13:30:00`,
        title: 'Lunch with Client',
        color: 'green',
    },
    {
        id: '3',
        start: `${getDate(-1)} 15:00:00`,
        end: `${getDate(-1)} 16:00:00`,
        title: 'Project Review',
        color: 'red',
    },
    // Add more events as needed
];

const INITIAL_TIME = { hour: 9, minutes: 0 };
const EVENTS: TimelineEventProps[] = timelineEvents;

const groupEventsByDate = (events: TimelineEventProps[]) => {
    return events.reduce(
        (result: { [key: string]: TimelineEventProps[] }, event) => {
            const date = CalendarUtils.getCalendarDateString(event.start);
            (result[date] = result[date] || []).push(event);
            return result;
        },
        {},
    );
};

const TimelineCalendarScreen = () => {
    const [currentDate, setCurrentDate] = useState(getDate());
    const [eventsByDate, setEventsByDate] = useState(groupEventsByDate(EVENTS));

    const onDateChanged = (date: string, source: string) => {
        console.log('TimelineCalendarScreen onDateChanged: ', date, source);
        setCurrentDate(date);
    };

    const onMonthChange = (month: any, updateSource: any) => {
        console.log(
            'TimelineCalendarScreen onMonthChange: ',
            month,
            updateSource,
        );
    };

    const createNewEvent: TimelineProps['onBackgroundLongPress'] = (
        timeString,
        timeObject,
    ) => {
        const hourString = `${(timeObject.hour + 1).toString().padStart(2, '0')}`;
        const minutesString = `${timeObject.minutes.toString().padStart(2, '0')}`;

        const newEvent: TimelineEventProps = {
            id: 'draft',
            start: `${timeString}`,
            end: `${timeObject.date} ${hourString}:${minutesString}:00`,
            title: 'New Event',
            color: 'white',
        };

        if (timeObject.date) {
            setEventsByDate((prevEventsByDate) => {
                const updatedEvents = prevEventsByDate[timeObject.date]
                    ? [...prevEventsByDate[timeObject.date], newEvent]
                    : [newEvent];
                return {
                    ...prevEventsByDate,
                    [timeObject.date]: updatedEvents,
                };
            });
        }
    };

    const approveNewEvent: TimelineProps['onBackgroundLongPressOut'] = (
        _timeString,
        timeObject,
    ) => {
        Alert.prompt('New Event', 'Enter event title', [
            {
                text: 'Cancel',
                onPress: () => {
                    if (timeObject.date) {
                        setEventsByDate((prevEventsByDate) => {
                            const updatedEvents =
                                prevEventsByDate[timeObject.date]?.filter(
                                    (e) => e.id !== 'draft',
                                ) || [];
                            return {
                                ...prevEventsByDate,
                                [timeObject.date]: updatedEvents,
                            };
                        });
                    }
                },
            },
            {
                text: 'Create',
                onPress: (eventTitle) => {
                    if (timeObject.date) {
                        setEventsByDate((prevEventsByDate) => {
                            const updatedEvents =
                                prevEventsByDate[timeObject.date]?.map((e) => {
                                    if (e.id === 'draft') {
                                        return {
                                            ...e,
                                            id: Math.random().toString(),
                                            title: eventTitle || 'New Event',
                                            color: 'lightgreen',
                                        };
                                    }
                                    return e;
                                }) || [];
                            return {
                                ...prevEventsByDate,
                                [timeObject.date]: updatedEvents,
                            };
                        });
                    }
                },
            },
        ]);
    };

    const timelineProps: Partial<TimelineProps> = {
        format24h: true,
        onBackgroundLongPress: createNewEvent,
        onBackgroundLongPressOut: approveNewEvent,
        unavailableHours: [
            { start: 0, end: 6 },
            { start: 22, end: 24 },
        ],
        overlapEventsSpacing: 0,
        rightEdgeSpacing: 0,
    };

    return (
        <CalendarProvider
            date={currentDate}
            onDateChanged={onDateChanged}
            onMonthChange={onMonthChange}
            showTodayButton
            disabledOpacity={0.6}
        >
            {/* WeekCalendar to display only day names */}
            {/*<WeekCalendar*/}
            {/*  firstDay={1}*/}
            {/*  markedDates={{*/}
            {/*    [currentDate]: { selected: true },*/}
            {/*  }}*/}
            {/*/>*/}

            {/* TimelineList to display the timeline for the selected day */}
            <TimelineList
                events={{ [currentDate]: eventsByDate[currentDate] || [] }}
                timelineProps={{
                    ...timelineProps,
                    numberOfDays: 1,
                }}
                showNowIndicator
                scrollToFirst
                initialTime={INITIAL_TIME}
            />
        </CalendarProvider>
    );
};

export default TimelineCalendarScreen;
