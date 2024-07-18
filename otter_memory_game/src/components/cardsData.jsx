export const easyCards = [
    { name: 'card1', img: 'photo_2023-11-30_09-50-36.jpg' },
    { name: 'card1', img: 'photo_2023-11-30_09-50-36.jpg' },
    { name: 'card2', img: 'photo_2023-11-30_12-03-59.jpg' },
    { name: 'card2', img: 'photo_2023-11-30_12-03-59.jpg' }
];

export const mediumCards = [
    { name: 'card1', img: 'photo_2023-11-30_09-50-36.jpg' },
    { name: 'card1', img: 'photo_2023-11-30_09-50-36.jpg' },
    { name: 'card2', img: 'photo_2023-11-30_12-03-59.jpg' },
    { name: 'card2', img: 'photo_2023-11-30_12-03-59.jpg' },
    { name: 'card3', img: 'photo_2023-11-30_15-19-05.jpg' },
    { name: 'card3', img: 'photo_2023-11-30_15-19-05.jpg' },
    { name: 'card4', img: 'photo_2023-12-01_04-41-48.jpg' },
    { name: 'card4', img: 'photo_2023-12-01_04-41-48.jpg' }
];

export const hardCards = [
    { name: 'card1', img: 'photo_2023-11-30_09-50-36.jpg' },
    { name: 'card1', img: 'photo_2023-11-30_09-50-36.jpg' },
    { name: 'card2', img: 'photo_2023-11-30_12-03-59.jpg' },
    { name: 'card2', img: 'photo_2023-11-30_12-03-59.jpg' },
    { name: 'card3', img: 'photo_2023-11-30_15-19-05.jpg' },
    { name: 'card3', img: 'photo_2023-11-30_15-19-05.jpg' },
    { name: 'card4', img: 'photo_2023-12-01_04-41-48.jpg' },
    { name: 'card4', img: 'photo_2023-12-01_04-41-48.jpg' },
    { name: 'card5', img: 'photo_2023-12-01_09-07-24.jpg' },
    { name: 'card5', img: 'photo_2023-12-01_09-07-24.jpg' },
    { name: 'card6', img: 'photo_2023-12-01_11-42-50.jpg' },
    { name: 'card6', img: 'photo_2023-12-01_11-42-50.jpg' }
];

export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
