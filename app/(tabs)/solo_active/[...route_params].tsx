import { useLocalSearchParams } from 'expo-router';
import SoloActiveMain from '@/components/solo_page/SoloActiveMain';

export default function SoloActive() {
    const { route_params } = useLocalSearchParams();

    return (
        <SoloActiveMain
            activity={
                typeof route_params === 'string'
                    ? route_params
                    : route_params[0]
            }
            beginningTime={
                typeof route_params === 'string'
                    ? route_params
                    : route_params[1]
            }
        />
    );
}
