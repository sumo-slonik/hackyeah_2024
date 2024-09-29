import React from 'react';
import { Box, HStack, Text, IconButton, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';

const Header = ({
    title,
    onBackPress,
}: {
    title: string;
    onBackPress?: () => void;
}) => {
    const router = useRouter();

    return (
        <HStack alignItems="center" justifyContent="space-between">
            {router.canGoBack() && (
                <IconButton
                    icon={
                        <Icon
                            as={MaterialIcons}
                            name="arrow-back"
                            size="md"
                            color="white"
                        />
                    }
                    onPress={router.back}
                />
            )}
            <Text
                color={useThemeColor({}, 'text')}
                fontSize="20"
                fontWeight="bold"
            >
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
