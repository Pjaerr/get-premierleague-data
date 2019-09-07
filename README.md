# get-premierleague-data
A really quick and dirty nodejs script that takes two commands, the premier league club and the season from which it will web crawl to https://www.worldfootball.net/team_performance/leicester-city/eng-premier-league-2015-2016/ (where team name and season is replaced) and grab every player that has had atleast 1 appearance and will return something that looks like the following:


```
{
    season: "2015/2016",
    winner: "Leicester City",
    players: [
      {
        name: "Marc Albrighton",
        appearances: 38
      },
      {
        name: "Wes Morgan",
        appearances: 38
      },
      {
        name: "Kasper Schmeichel",
        appearances: 38
      },
      {
        name: "N'Golo Kanté",
        appearances: 37
      },
      {
        name: "Riyad Mahrez",
        appearances: 37
      },
      {
        name: "Shinji Okazaki",
        appearances: 36
      },
      {
        name: "Jamie Vardy",
        appearances: 36
      },
      ...
    ]
  }
```

