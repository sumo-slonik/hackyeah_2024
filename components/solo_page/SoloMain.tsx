import React from "react";
import {Button, Center, Container, Heading, VStack, Spacer, ScrollView, Box, Icon, IconButton} from "native-base";
import ChooseActivity from "@/components/solo_page/ChooseActivity";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SoloMain() {
    const [chosenMode, setChosenMode] = React.useState<"casual" | "training" | null>(null);
    const [chosenActivity, setChosenActivity] = React.useState<string | undefined>(undefined);

    const handleTrainingPress = () => {
        if (chosenMode !== "training") {
            setChosenMode("training");
            setChosenActivity(undefined); // Reset activity when changing mode
        } else {
            setChosenMode(null);
            setChosenActivity(undefined); // Clear activity if mode is deselected
        }
    };

    const handleCasualActivityPress = () => {
        if (chosenMode !== "casual") {
            setChosenMode("casual");
            setChosenActivity(undefined); // Reset activity when changing mode
        } else {
            setChosenMode(null);
            setChosenActivity(undefined); // Clear activity if mode is deselected
        }
    };

    const handleActivityChoose = (activity: string | undefined) => {
        setChosenActivity(activity)
    }

    return (
        <>
            <Center height={"100%"}>
                <VStack flexDirection="column" width={"80%"} alignItems={"stretch"} justifyContent={"space-between"}>
                    <VStack space={5}>
                        <Heading size='lg' textAlign={"center"}>Choose Activity</Heading>
                        <Button onPress={handleTrainingPress} colorScheme={chosenMode === "training" ? "secondary" : "primary"}>Training</Button>
                        <Button onPress={handleCasualActivityPress} colorScheme={chosenMode === "casual" ? "secondary" : "primary"}>Casual Activity</Button>
                    </VStack>
                    { chosenMode ?
                        <>
                            <VStack height={"60%"} marginTop={10}>
                                <Box borderColor="coolGray.200" borderWidth="1" padding={2}>
                                    <ScrollView>
                                        <ChooseActivity activityType={chosenMode} currentActivity={chosenActivity} setCurrentActivity={handleActivityChoose} />
                                    </ScrollView>
                                </Box>
                            </VStack>
                            { chosenActivity ? <VStack flexDirection={"row"} justifyContent={"flex-end"}>
                                <IconButton padding={5} borderRadius={25} icon={<Icon as={Ionicons} name="arrow-forward-outline" size="sm" />} isDisabled={!chosenActivity} />
                            </VStack> : null }

                        </>
                        : null }
                </VStack>
            </Center>
        </>
    );
}
