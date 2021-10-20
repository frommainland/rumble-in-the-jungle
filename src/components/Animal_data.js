import elephant1 from "../img/AnimalDetail-elephant1.png";
import elephant2 from "../img/AnimalDetail-elephant2.png";
import elephant3 from "../img/AnimalDetail-elephant3.png";
import tiger1 from "../img/AnimalDetail-tiger1.png";
import tiger2 from "../img/AnimalDetail-tiger2.png";

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
            "A tiger can consume more than 80 pounds of meat at one time. On average, tigers give birth to two to four cubs every two years. If all the cubs in one litter die, a second litter may be produced within five months. Tigers are mostly solitary, apart from associations between mother and offspring. Individual tigers have a large territory, and the size is determined mostly by the availability of prey. Individuals mark their domain with urine, feces, rakes, scrapes, and vocalizing.",
        img: {
            img1: tiger1,
            img2: tiger2,
        },
        animal_essay_bot:
            "Tigers eat a variety of prey ranging in size from termites to elephant calves. However, an integral component of their diet are large-bodied prey weighing about 20 kg (45 lbs.) or larger such as moose, deer species, pigs, cows, horses, buffalos and goats.",
    },
};

export default Animal_data;
