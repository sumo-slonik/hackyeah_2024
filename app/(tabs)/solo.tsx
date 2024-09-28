import { UserProfil } from '@/components/custom_components/userProfil';
import { firstUser } from '@/assets/customData/personalData';
import { View } from 'react-native';

export default function Solo() {
    return (
        // add to proper place
        <UserProfil user={firstUser}></UserProfil>
    );
}
