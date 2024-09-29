import { UserProfil } from '@/components/custom_components/userProfil';
import { firstUser } from '@/assets/customData/personalData';

export default function User() {
    return <UserProfil user={firstUser}></UserProfil>;
}
