const axios = require('axios');
const cheerio = require('cheerio');
const clipboardy = require('clipboardy');

const getPlayers = (table) => {
    const players = [];

    for(let i = 1; i < table.children.length; i++)
    {
        if (table.children[i].name === "tr") {
            const name = table.children[i].children[1].children[0].children[0].data;

            if (table.children[i].children[5].children.length > 1) {
                const appearances = table.children[i].children[5].children[1].children[0].data;

                players.push({
                    name,
                    appearances
                });
            }
        }
    }

    return players;
}

const team = process.argv[2];
const season = process.argv[3];

const init = async (team, season) => {
    const url = `https://www.worldfootball.net/team_performance/${team}/eng-premier-league-${season}/`;

    const res = await axios.get(url);
    const data = cheerio.load(res.data);
    const table = data('.data > .standard_tabelle')[0].children[1];
    
    const players = getPlayers(table);

    const jsObject = `
        {
            season: "${season.replace("-", "/")}",
            winner: "${team.replace("-", " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}",
            players: [
                ${players.map(playerObject => {
                    return `{
                        name: "${playerObject.name}",
                        appearances: ${playerObject.appearances}
                     }`
                })}
            ]
        }
    `;

    clipboardy.writeSync(jsObject);
}

init(team, season);