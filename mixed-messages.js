
//Selects a rep and set range from pre selected options.
const rangeSelect = () => {
    const setAndRepSelect = [
        '5 sets x 5 reps',
        '4 sets x 6-8 reps',
        '3 sets x 8-12 reps',
        '3 sets x 15-20 reps'
    ];
    return setAndRepSelect[Math.floor(Math.random()*setAndRepSelect.length)]
}

chestSelector = () => {
    const chestExercises = [
        'chest press',
        'incline chestpress',
        'decline chestpress',
        'chestpress machine',
        'dumbell flyes',
        'cable crossover',
        'low cable crossover',
        'incline flyes',
        'pec deck',
        'pullovers',
        'chest dips'
    ];

    return chestExercises[Math.floor(Math.random()*chestExercises.length)]
}

backSelector = () => {
    const backExercises = [
        'deadlift',
        'romanian deadlift',
        'pull ups',
        'barbell rows',
        'reverse grip barbell rows',
        'incline dumbell rows',
        'trapbar deadlifts',
        'dumbell rows',
        'close grip pulldowns',
        'wide grip pulldowns',
        'cable rows'
    ];

    return backExercises[Math.floor(Math.random()*backExercises.length)]
}

shoulderSelector = () => {
    const shoulderExercises = [
        'shoulder press',
        'lateral raises',
        'front raises',
        'shrugs','tbar presses',
        'machine shoulder press',
        'rear shoulder raises',
        'pull ups'
    ];

    return shoulderExercises[Math.floor(Math.random()*shoulderExercises.length)]
}

bicepSelector = () => {
    const bicepExercises = [
        'dumbell curls',
        'hammer curls',
        'barbell curls','ez curls',
        'preacher curls',
        'behind the back cable curls'
    ];

    return bicepExercises[Math.floor(Math.random()*bicepExercises.length)]
}

tricepSelector = () => {
    const tricepExercises = [
        'dips',
        'tricep pushdown',
        'skull crushers',
        'close grip press',
        'single arm kickbacks'
    ];

    return tricepExercises[Math.floor(Math.random()*tricepExercises.length)]
}

legSelector = () => {
    const legExercises = [
        'squats',
        'lunges',
        'romanian deadlift',
        'leg press',
        'standing calf raise',
        'sitting calf raise',
        'leg extensions',
        'leg curls'
    ];

    return legExercises[Math.floor(Math.random()*legExercises.length)]
}

//Exercise one
let exerciseOne = chestSelector();
let exerciseOneRange = rangeSelect();
console.log(`Exercise one: ${exerciseOne} - ${exerciseOneRange}`)

//Exercise two
let exerciseTwo = backSelector();
let exerciseTwoRange = rangeSelect();
console.log(`Exercise two: ${exerciseTwo} - ${exerciseTwoRange}.`);

//Exercise three
let exerciseThree = shoulderSelector();
let exerciseThreeRange = rangeSelect();
console.log(`Exercise three: ${exerciseThree} - ${exerciseThreeRange}.`);

//Exercise four
let exerciseFour = bicepSelector();
let exerciseFourRange = rangeSelect();
console.log(`Exercise four: ${exerciseFour} - ${exerciseFourRange}.`);

//Exercise five
let exerciseFive = tricepSelector();
let exerciseFiveRange = rangeSelect();
console.log(`Exercise five: ${exerciseFive} - ${exerciseFiveRange}.`);

//Exercise Six
let exerciseSix = legSelector();
let exerciseSixRange = rangeSelect();
console.log(`Exercise six: ${exerciseSix} - ${exerciseSixRange}.`);