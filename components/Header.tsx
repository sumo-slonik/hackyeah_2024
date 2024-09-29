import React from 'react';
import { Box, HStack, Text, IconButton, Icon, View } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';

const Header = ({
    title,
    description,
}: {
    title: string;
    description?: string;
}) => {
    const router = useRouter();

    return (
        <HStack alignItems="center" justifyContent="space-between">
            <View style={{ marginBottom: 20 }}>
                <Text
                    style={{ marginHorizontal: 18 }}
                    color={useThemeColor({}, 'text')}
                    fontSize="30"
                    fontWeight="bold"
                >
                    {title}
                </Text>
                {description && (
                    <Text
                        style={{ marginHorizontal: 18 }}
                        color={useThemeColor({}, 'primary')}
                        fontSize="18"
                    >
                        {description}
                    </Text>
                )}
            </View>
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
                    style={{ marginHorizontal: 20 }}
                />
            )}
        </HStack>
    );
};

export default Header;
