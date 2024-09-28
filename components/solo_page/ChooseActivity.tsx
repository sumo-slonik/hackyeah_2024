import { Radio } from "native-base"

type props = {
    activityType: "casual" | "training"
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

export default function ChooseActivity({activityType} : props) {
    return (
        <>
            <Radio.Group name="activtyRadioGroup" space={10}>
                { activities[activityType].map((activity, index) =>
                    <Radio value={index.toString()} key={index}>
                        {activity}
                    </Radio>
                ) }
            </Radio.Group>
        </>
    )
}
