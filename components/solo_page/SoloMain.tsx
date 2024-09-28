import {Text} from "react-native";
import React from "react";
import {Button, Center, Container, Heading, VStack, Spacer} from "native-base";

export default function SoloMain() {
    return (
        <>
            <Center flexDirection="column" height={"100%"}>
                <VStack space={5}>
                    <Heading size='lg'>Wybierz aktywność</Heading>
                    <Button>Trening</Button>
                    <Button>Codzienna Aktywność</Button>
                </VStack>

            </Center>
        </>
    );
}
