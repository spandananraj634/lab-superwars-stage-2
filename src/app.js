const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        let player = {
            name: players[i],
            strength: getRandomStrength(),
            image: "images/super-" + (i + 1) + ".png",
            type: i % 2 === 0 ? 'hero' : 'villain'
        };
        detailedPlayers.push(player);
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
}

const buildPlayersHTML = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        if (players[i].type === type) {
            fragment += `
                <div class="player">
                    <img src="${players[i].image}" alt="${players[i].name}">
                    <div class="name">${players[i].name}</div>
                    <div class="strength"> ${players[i].strength}</div>
                </div>
            `;
        }
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    const heroesHTML = buildPlayersHTML(players, 'hero');
    const villainsHTML = buildPlayersHTML(players, 'villain');

    document.getElementById('heroes').innerHTML = buildPlayersHTML(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayersHTML(players, 'villain');

}

window.onload = () => {
    const players = initPlayers(PLAYERS);
    viewPlayers(initPlayers(PLAYERS));
}
