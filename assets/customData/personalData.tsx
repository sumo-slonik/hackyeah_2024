const firstUser = {
    name: 'Maciek',
    age: '20',
    data: [
        { label: 'punctuality', value: 30 },
        { label: 'general atmosphere', value: 55 },
        { label: 'hygiene', value: 60 },
        { label: 'compliance with the description', value: 70 },
    ],
    photo: require('@/assets/images/samples_galaxy.jpeg'),
    level: 'Begginer',
};

const marker_diff = 0.005;
const foundUsers = [
    {
        name: 'Jakub',
        age: '24',
        data: [
            { label: 'punctuality', value: 30 },
            { label: 'general atmosphere', value: 55 },
            { label: 'hygiene', value: 60 },
            { label: 'compliance with the description', value: 70 },
        ],
        photo: require('@/assets/images/samples_galaxy.jpeg'),
        coordinates: {
            latitude: 50.06465, // Latitude for Kraków
            longitude: 19.94498, // Longitude for Kraków
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        radius: 1000,
    },
    {
        name: 'Marcin',
        age: '24',
        data: [
            { label: 'punctuality', value: 30 },
            { label: 'general atmosphere', value: 55 },
            { label: 'hygiene', value: 60 },
            { label: 'compliance with the description', value: 70 },
        ],
        photo: require('@/assets/images/samples_galaxy.jpeg'),
        coordinates: {
            latitude: 50.06465 + marker_diff,
            longitude: 19.94498 + marker_diff,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        radius: 1000,
    },
    {
        name: 'Adaś',
        age: '24',
        data: [
            { label: 'punctuality', value: 30 },
            { label: 'general atmosphere', value: 55 },
            { label: 'hygiene', value: 60 },
            { label: 'compliance with the description', value: 70 },
        ],
        photo: require('@/assets/images/samples_galaxy.jpeg'),
        coordinates: {
            latitude: 50.06465 - marker_diff,
            longitude: 19.94498 - marker_diff,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        radius: 1000,
    },
];

export default firstUser;
export { foundUsers };
