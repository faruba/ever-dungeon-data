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
        "key":"stage.120.state",
        "resetTime": { day: 1},
        "reverse":false,
        "initialValue":0,
        "type":"player",
        "availableCondition":true
    },
    {
        "name":"Arena",
        "key":"counters.arena",
        "reverse": true,
        "initialValue": 'length',
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
    }
];
