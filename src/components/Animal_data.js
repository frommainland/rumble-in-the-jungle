import elephant1 from "../img/AnimalDetail-elephant1.png";
import elephant2 from "../img/AnimalDetail-elephant2.png";
import elephant3 from "../img/AnimalDetail-elephant3.png";
import tiger1 from "../img/AnimalDetail-tiger1.png";
import tiger2 from "../img/AnimalDetail-tiger2.png";
import tiger3 from "../img/AnimalDetail-tiger3.png";
import monkey1 from "../img/AnimalDetail-monkey1.png";
import monkey2 from "../img/AnimalDetail-monkey2.png";
import monkey3 from "../img/AnimalDetail-monkey3.png";
import giraffe1 from "../img/AnimalDetail-giraffe1.png";
import giraffe2 from "../img/AnimalDetail-giraffe2.png";
import giraffe3 from "../img/AnimalDetail-giraffe3.png";
import crocodile1 from "../img/AnimalDetail-crocodile1.png";
import crocodile2 from "../img/AnimalDetail-crocodile2.png";
import crocodile3 from "../img/AnimalDetail-crocodile3.png";
import toucan1 from "../img/AnimalDetail-toucan1.png";
import toucan2 from "../img/AnimalDetail-toucan2.png";
import toucan3 from "../img/AnimalDetail-toucan3.png";

const Animal_data = {
    // elephant
    elephant: {
        title: "Elephant",
        animal_quotes:
            "It’s great to be an elephant. All big and fat and round, and wander through the jungle just elephing around.",
        animal_metrics: {
            left: {
                quantity: "6",
                unit: "tons",
                prop: "WEIGHT",
            },
            middle: {
                quantity: "2.5-4",
                unit: "m",
                prop: "HEIGHT",
            },
            right: {
                quantity: "60-70",
                unit: "years",
                prop: "LIFESPAN",
            },
        },
        animal_essay_top:
            "African forest elephants live in family groups of up to 20 individuals and forage on leaves, grasses, seeds, fruit, and tree bark.",
        img: {
            img1: elephant1,
            img2: elephant2,
            img3: elephant3,
        },
        animal_essay_bot:
            "Since the diet of forest elephants is dominated by fruit, they play a crucial role in dispersing many tree species, particularly the seeds of large trees which tend to have high carbon content. They are therefore referred to as the 'mega-gardener of the forest'.",
    },

    // tiger
    tiger: {
        title: "Tiger",
        animal_quotes:
            "Everyone quivers and shudders and shivers, as soon as he opens his jaws.",
        animal_metrics: {
            left: {
                quantity: "140-220",
                unit: "kg",
                prop: "WEIGHT",
            },
            middle: {
                quantity: "1.5-3",
                unit: "m",
                prop: "LENGTH",
            },
            right: {
                quantity: "20",
                unit: "years",
                prop: "LIFESPAN",
            },
        },
        animal_essay_top:
            "A tiger can consume more than 80 pounds of meat at one time. On average, tigers give birth to two to four cubs every two years. If all the cubs in one litter die, a second litter may be produced within five months.\n\nTigers are mostly solitary, apart from associations between mother and offspring. Individual tigers have a large territory, and the size is determined mostly by the availability of prey. Individuals mark their domain with urine, feces, rakes, scrapes, and vocalizing",
        img: {
            img1: tiger1,
            img2: tiger2,
            img3: tiger3,
        },
        animal_essay_bot:
            "Tigers eat a variety of prey ranging in size from termites to elephant calves. However, an integral component of their diet are large-bodied prey weighing about 20 kg (45 lbs.) or larger such as moose, deer species, pigs, cows, horses, buffalos and goats.",
    },

    // monkey
    monkey: {
        title: "Monkey",
        animal_quotes:
            "It’s great to be a monkey, swinging through the trees. If we can’t find nuts to eat, we munch each others’ flees",
        animal_metrics: {
            left: {
                quantity: "0.6-0.9",
                unit: "kg",
                prop: "WEIGHT",
            },
            middle: {
                quantity: "0.3",
                unit: "m",
                prop: "HEIGHT",
            },
            right: {
                quantity: "25",
                unit: "years",
                prop: "LIFESPAN",
            },
        },
        animal_essay_top:
            "Squirrel monkeys are considered to be one of the cleverest monkeys due to having a large brain compared to the size of their body. They are highly vocal and have around 25-30 different types of call.",
        img: {
            img1: monkey1,
            img2: monkey2,
            img3: monkey3,
        },
        animal_essay_bot:
            "They eat food items that are both plant and animal based. These range from flowers, leaves and nuts to insects, lizards and even eggs.",
    },

    // Giraffe
    giraffe: {
        title: "Giraffe",
        animal_quotes:
            "Some animals laugh at the gangly girafe, but I hold my head up and feel proud. My cheek is getting kissed by a cloud.",
        animal_metrics: {
            left: {
                quantity: "1900",
                unit: "kg",
                prop: "WEIGHT",
            },
            middle: {
                quantity: "5",
                unit: "m",
                prop: "HEIGHT",
            },
            right: {
                quantity: "25",
                unit: "years",
                prop: "LIFESPAN",
            },
        },
        animal_essay_top:
            "When giraffes walk, they move both legs on one side of their body and then both legs on the other side, which is unusual.",
        img: {
            img1: giraffe1,
            img2: giraffe2,
            img3: giraffe3,
        },
        animal_essay_bot:
            "Their extreme height allows them to eat leaves and shoots located much higher than other animals can reach. In particular, they seek out acacia trees. Their long tongues are helpful in eating because they help pull leaves from the trees. Spending most of the day eating, a full-grown giraffe consumes over 45 kg (100 lb.) of leaves and twigs a day.",
    },

    // Crocodile
    crocodile: {
        title: "Crocodile",
        animal_quotes:
            "Snap, snap, snap, his jaw snaps.\nSmack, smack, smack, his tail smacks.\nTap, tap, tap, he crawls away",
        animal_metrics: {
            left: {
                quantity: "800",
                unit: "kg",
                prop: "WEIGHT",
            },
            middle: {
                quantity: "5",
                unit: "m",
                prop: "LENGTH",
            },
            right: {
                quantity: "60",
                unit: "years",
                prop: "LIFESPAN",
            },
        },
        animal_essay_top:
            "Crocodiles are often confused with alligators, but there are some easy-to-spot differences. An alligator's jaw is U-shaped, while a crocodile has a V-shaped jaw.",
        img: {
            img1: crocodile1,
            img2: crocodile2,
            img3: crocodile3,
        },
        animal_essay_bot:
            "A crocodile will eat almost anything that moves. Hatchlings and young crocodiles eat small fish, snails, crustaceans, and insects. Adults feed mostly at night on fish, crabs, turtles, snakes, and small mammals.",
    },

    // Toucan
    toucan: {
        title: "Toucan",
        animal_quotes:
            "I carry my own airconditioner, which is my beak.\nToucan, can you?",
        animal_metrics: {
            left: {
                quantity: "0.1-0.7",
                unit: "kg",
                prop: "WEIGHT",
            },
            middle: {
                quantity: "0.5",
                unit: "m",
                prop: "LENGTH",
            },
            right: {
                quantity: "12-20",
                unit: "years",
                prop: "LIFESPAN",
            },
        },
        animal_essay_top:
            "Toucans spend a lot of their time in trees, they aren’t the best fliers around.\n\nThese birds have to flap their wings vigorously to travel short distances, so you’ll often find them hopping rather than flying through the air.",
        img: {
            img1: toucan1,
            img2: toucan2,
            img3: toucan3,
        },
        animal_essay_bot:
            "Toucans use their beak to peel and eat different kinds of fruit, which happens to be the kind of food they eat most often.\n\nSometimes toucans will choose to snack on insects, frogs, and reptiles, or the eggs of other birds.",
    },
};

export default Animal_data;
