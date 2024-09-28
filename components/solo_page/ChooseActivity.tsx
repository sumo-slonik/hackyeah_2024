import { Radio } from "native-base"

type props = {
    activityType: "casual" | "training",
    currentActivity: string | undefined,
    setCurrentActivity: (activity: string | undefined) => void,
}

const activities: Record<"casual" | "training", string[]> = {
    "casual": [
        "Running",
        "Cycling",
        "Rollerblading / Skateboarding",
        "Walking"
    ],
    "training": [
        "Running",
        "Golf",
        "Gymnastics",
        "Ice Hockey",
        "Cycling",
        "Athletics",
        "Handball",
        "Football",
        "Swimming",
        "Rugby",
        "Gym",
        "Volleyball",
        "Ski Jumping",
        "Walking",
        "Martial Arts",
        "Motorsports",
        "Rollerblading / Skateboarding",
        "Tennis",
        "Rowing",
        "Skiing"
    ]
}

export default function ChooseActivity({activityType, currentActivity, setCurrentActivity} : props) {
    return (
        <>
            <Radio.Group
                name="activtyRadioGroup"
                space={10}
                value={currentActivity ? currentActivity : ""}
                onChange={setCurrentActivity}
            >
                { activities[activityType].map(activity =>
                    <Radio value={activity} key={activity} accessibilityLabel={activity}>
                        {activity}
                    </Radio>
                ) }
            </Radio.Group>
        </>
    )
}
