class Match {
    constructor(matchJson) {
        const data = matchJson.data;

        this.queueId = data.queueId;
        this.gameId = data.gameId;
        this.platformId = data.platformId;
        this.gameCreation = data.gameCreation;
        this.gameDuration = data.gameDuration;
        this.gameVersion = data.gameVersion;

        this.bans = new Set();

        this.lane = new Set();
        this.winTeam = [];
        this.loseTeam = [];

        for (let team of data.teams) {
            for (let ban of team.bans) {
                this.bans.add(ban.championId);
            }
        }

        for (let user of data.participants) {
            user.stats.win ? this.winTeam.push(user) : this.loseTeam.push(user);
        }
    }
}

module.exports = { Match };
