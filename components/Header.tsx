import React from 'react';
import { Box, HStack, Text, IconButton, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({
    title,
    onBackPress,
}: {
    title: string;
    onBackPress?: () => void;
}) => {
    return (
        <HStack
            bg="primary.600"
            alignItems="center"
            justifyContent="space-between"
        >
            {onBackPress && (
                <IconButton
                    icon={
                        <Icon
                            as={MaterialIcons}
                            name="arrow-back"
                            size="md"
                            color="white"
                        />
                    }
                    onPress={onBackPress}
                />
            )}
            <Text color="white" fontSize="20" fontWeight="bold">
                {title}
            </Text>
            <HStack space={2}>
                <IconButton
                    icon={
                        <Icon
                            as={MaterialIcons}
                            name="menu"
                            size="md"
                            color="white"
                        />
                    }
                    onPress={() => console.log('More options pressed')}
                />
            </HStack>
        </HStack>
    );
};

export default Header;
