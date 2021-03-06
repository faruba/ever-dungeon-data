exports.data = [
    {
        "name":"battleforce",
        "key":"battleForce",
        "reverse":false,
        "initialValue":0,
        "type":"player",
        "availableCondition":true
    },
    {
        "name":"infinitydungeon",
        "key":"stage.120.level",
        "resetTime": { day: 7},
        "reverse":false,
        "initialValue":0,
        "type":"player",
        "availableCondition":true
    },
    {
        "name":"killMonster",
        "key":"counters.monster",
        "resetTime": { day: 1},
        "reverse":false,
        "initialValue":0,
        "type":"player",
        "availableCondition":true
    },
    {
        "name":"Arena",
        "reverse": true,
        "initialValue": 'length',
        "type":"player",
        "availableCondition":true
    },
    {
        "name":"WorldBoss133",
        "key":"counters.worldBoss.133",
        "resetTime": { weekday: 9, minute: 5},
        "reverse": false,
        "type":"player",
        "availableCondition":true,
        "event":"",
    },
    {
        "name":"TopTenRich",
        "key":"counters.chargeDiamond",
        "resetTime": { weekday: 80, minute: 5},
        "reverse": false,
        "type":"player",
        "availableCondition":true,
        "event":"",
    },
	{
        "name":"BuyLikeWomen",
        "key":"counters.buyTreasureTimes",
        "resetTime": { month: 1, monthday: 17, hour:23, minute:55},
        "reverse": false,
        "type":"player",
        "availableCondition":true,
        "event":"",
    },

];
