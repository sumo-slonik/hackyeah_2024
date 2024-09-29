import { ReactNode, useState } from 'react';
import {
    Box,
    Button,
    HStack,
    Icon,
    IconButton,
    Spacer,
    Text,
    VStack,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export const ExpaningRow = (props: { children: ReactNode; title: string }) => {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <Box backgroundColor={Colors.light.darkColor3} marginBottom={2}>
            <Button
                backgroundColor={Colors.light.darkColor3}
                onPress={() => {
                    setIsOpen((value) => !value);
                }}
            >
                <VStack>
                    <HStack
                        alignItems="center"
                        justifyContent="flex-start"
                        width="100%"
                        marginBottom={2}
                    >
                        <IconButton
                            icon={
                                <Icon
                                    as={FontAwesome}
                                    name={
                                        !isOpen
                                            ? 'chevron-right'
                                            : 'chevron-down'
                                    }
                                />
                            }
                            _icon={{
                                color: Colors.light.lightColor1,
                                size: 'md',
                            }}
                            _hover={{
                                bg: 'primary.600',
                            }}
                            _pressed={{
                                bg: Colors.light.darkColor3,
                            }}
                            borderColor={Colors.light.lightColor1}
                            backgroundColor={Colors.light.darkColor3}
                            borderWidth={1}
                            onPress={() => {
                                setIsOpen((value) => !value);
                            }}
                        />
                        <Box
                            padding={2}
                            marginLeft={2}
                            backgroundColor={Colors.light.darkColor2}
                            height={10}
                            width={'80%'}
                            justifyContent="center"
                        >
                            <Text color="white">{props.title}</Text>
                        </Box>
                    </HStack>
                    {isOpen && props.children}
                </VStack>
            </Button>
        </Box>
    );
};
