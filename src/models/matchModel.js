class Match {
    constructor(matchJson) {
        const data = matchJson;

        this.queueId = data.queueId;
        this.gameId = data.gameId;
        this.platformId = data.platformId;
        this.gameCreation = data.gameCreation;
        this.gameDuration = data.gameDuration;
        this.gameVersion = data.gameVersion;

        const lane = new Set();

        this.winTeam = [];
        this.loseTeam = [];

        for (let user of data.participants) {
            user.stats.win ? this.winTeam.push(user) : this.loseTeam.push(user);
        }
    }
}

module.exports = Match;
