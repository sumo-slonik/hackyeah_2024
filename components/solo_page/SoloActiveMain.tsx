import {Center, Heading, VStack} from "native-base";
import React, {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";

type props = {
    activity: string,
    beginningTime: string,
}

export default function SoloActiveMain({activity, beginningTime}: props) {
    const [currentTime, setCurrentTime] = useState<number>()

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(Date.now()), 1000);

        return () => clearInterval(interval);
    }, []);

    const durationString = () => {
        if(currentTime && currentTime - parseInt(beginningTime) >= 0) {
            const durationMilisecs = currentTime - parseInt(beginningTime)
            const durationSecs = Math.floor(durationMilisecs / 1000)
            const durationMins = Math.floor(durationSecs / 60)
            const durationHours = Math.floor(durationMins / 60)
            return `${durationHours < 10 ? "0" + durationHours : durationHours}:${durationMins < 10 ? "0" + durationMins : durationMins}:${durationSecs < 10 ? "0" + durationSecs : durationSecs}`;
        }
        return undefined
    }

    return (
        <Center height={"100%"}>
            <VStack space={5} flexDirection="column" width={"80%"} alignItems={"stretch"} justifyContent={"space-between"}>
                <Heading size='lg' textAlign={"center"}>Current activity: {activity}</Heading>
                <Heading size='md' textAlign={"center"}>started: {durationString()} ago </Heading>

            </VStack>

        </Center>
    )
}