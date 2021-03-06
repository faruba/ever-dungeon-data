function checkGoblin(obj, util) {
    return obj.counters.goblin < obj.getPrivilege("tuHaoCount") || !obj.counters.goblin;
}
function checkEvilChief(obj, util) {
    return ( obj.counters.enhance < obj.getPrivilege("EvilChieftains") ) &&
        ( util.today.weekday() === 2 ||
            util.today.weekday() === 4 ||
            util.today.weekday() === 6 ||
            util.today.weekday() === 0 );
}
function checkEquipmentRobbers(obj, util) {
    return ( obj.counters.weapon < obj.getPrivilege("EquipmentRobbers")) &&
        ( util.today.weekday() === 1 ||
            util.today.weekday() === 3 ||
            util.today.weekday() === 5 ||
            util.today.weekday() === 0 );
}
var MAX_BATTLE_TIMES = 200;
var data = [
    {
        "chapterId": 0,
        "hidden":true,
        "title":"dungeonname0.png",
        "desc":"非常隱蔽的地洞，難以被察覺，其中偶爾會\n有怪物的身影出現。",
        "icon":"mapicon2.png",
        "stage":[
            {
                "stageId": 0,
                "cost": 0,
                "team": 1,
                "hidden":false,
                "dungeon": 0,
                "teammate": [
                    {
                        "class" : 131,
                        "name" : "約書亞",
                        "gender" : 1,
                        "hairStyle" : 5,
                        "hairColor" : 13,
                        "xp" : 0
                    },
                    {
                        "class" : 132,
                        "name" : "凱薩琳",
                        "gender" : 0,
                        "hairStyle" : 5,
                        "hairColor" :3 ,
                        "xp" : 0
                    }
                ]
            }
        ]
    },
    {
        "abtest": [
            {
                "chapterId": 1,
                "idx": 0,
                "style": "map-dungeon1",
                "title":"dungeonname1.png",
                "label":"多姆洞穴",
                "desc":"似乎是天然形成的洞穴，出沒著一些危險的\n野生怪物，讓不少旅人有去無回。",
                "icon":"mapicon2.png",

                "stage":[
                    {
                        "stageId": 1,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 3,
                        "hidden":false,
                        "dungeon": 1,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.0.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 2,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 3,
                        "hidden":false,
                        "dungeon": 2,
                        "tutorial":3,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.1.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 3,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 3,
                        "hidden":false,
                        "dungeon": 3,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.2.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 4,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 3,
                        "hidden":false,
                        "dungeon":4,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.3.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 5,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 3,
                        "hidden":false,
                        "dungeon": 5,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.4.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 6,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 3,
                        "hidden":false,
                        "dungeon": 6,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.5.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 7,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 3,
                        "hidden":false,
                        "dungeon": 7,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.6.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId":78,
                        "sweepPower":29999,
                        "cost":10,
                        "dungeon":64,
                        "isInfinite":true,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.7.state"}, 2 ] }
                        ]
                        }

                    }
                ]
            },
            {
                "chapterId": 1,
                "idx": 0,
                "style": "map-dungeon1",
                "title":"dungeonname1.png",
                "label":"多姆洞穴",
                "desc":"似乎是天然形成的洞穴，出沒著一些危險的\n野生怪物，讓不少旅人有去無回。",
                "icon":"mapicon2.png",

                "stage":[
                    {
                        "stageId": 1,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 1,
                        "hidden":false,
                        "dungeon": 84,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.0.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 2,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 1,
                        "hidden":false,
                        "dungeon": 85,
                        "tutorial":3,
                        "teammate": [
                            {
                                "class" : 164,
                                "name" : "琳達",
                                "gender" : 0,
                                "hairColor" : 15,
                                "xp" : 0
                            }],
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.1.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 3,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 1,
                        "hidden":false,
                        "dungeon": 86,
                        "teammate": [
                            {
                                "class" : 164,
                                "name" : "琳達",
                                "gender" : 0,
                                "hairColor" : 15,
                                "xp" : 0
                            }],
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.2.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 4,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 2,
                        "hidden":false,
                        "dungeon":87,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.3.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 5,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 2,
                        "hidden":false,
                        "dungeon": 88,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.4.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 6,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 3,
                        "hidden":false,
                        "dungeon": 89,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.5.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId": 7,
                        "sweepPower":200,
                        "cost": 15,
                        "team": 3,
                        "hidden":false,
                        "dungeon": 90,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.6.state"}, 2 ] }
                        ]
                        }

                    },
                    {
                        "stageId":78,
                        "sweepPower":29999,
                        "cost":10,
                        "dungeon":64,
                        "isInfinite":true,
                        "cond":
                        { "and": [
                            { "==": [ { "type": "getProperty", "key": "stage.7.state"}, 2 ] }
                        ]
                        }

                    }
                ]
            }
        ]
    },
    {
        "chapterId": 2,
        "idx": 1,
        "style": "map-dungeon2",
        "title":"dungeonname2.png",
        "label":"密謀森林",
        "desc":"陰森詭異的密謀森林，吞噬了很多勇者的生\n命，因此很少有人再敢靠近它。",
        "icon":"mapicon1.png",
        "theme":1,
        "stage":[
            {
                "stageId": 8,
                "sweepPower":300,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 8,
                "cond":
                { "or": [
                    { "==": [ { "type": "getProperty", "key": "stage.7.state"}, 2 ] },
                    { "==": [ { "type": "getProperty", "key": "stage.102.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 9,
                "sweepPower":310,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 9,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.8.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 10,
                "sweepPower":330,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 10,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.9.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 11,
                "sweepPower":350,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":11,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.10.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 12,
                "sweepPower":360,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 12,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.11.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 13,
                "sweepPower":370,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 13,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.12.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 14,
                "sweepPower":400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 14,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.13.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":79,
                "cost":10,
                "dungeon":65,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.14.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 3,
        "powerLimit": 300,
        "idx": 2,
        "style": "map-dungeon3",
        "title":"dungeonname3.png",
        "label":"湖濱大道",
        "desc":"沿著凱多湖邊一直蔓延的湖濱大道，由於年\n久失修，如今成為了盜賊們的聚集地。",
        "icon":"mapicon7.png",
        "theme":1,
        "stage":[
            {
                "stageId": 15,
                "sweepPower":500,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 15,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.14.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 16,
                "sweepPower":600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 16,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.15.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 17,
                "sweepPower":700,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 17,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.16.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 18,
                "sweepPower":800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":18,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.17.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 19,
                "sweepPower":900,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 19,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.18.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 20,
                "sweepPower":1000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 20,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.19.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 21,
                "sweepPower":1100,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 21,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.20.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":80,
                "cost":10,
                "dungeon":66,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.21.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId":4,
        "powerLimit": 800,
        "idx": 3,
        "style": "map-dungeon4",
        "title":"dungeonname4.png",
        "label":"斷腸崖",
        "desc":"塔倫山脈中最險要的地方，遍佈著奪命的懸\n崖，稍不留神就會讓你付出慘痛的代價。",
        "icon":"mapicon4.png",
        "theme":0,
        "stage":[
            {
                "stageId": 22,
                "sweepPower":1300,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 22,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.21.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 23,
                "sweepPower":1400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 23,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.22.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 24,
                "sweepPower":1500,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 24,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.23.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 25,
                "sweepPower":1600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":25,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.24.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 26,
                "sweepPower":1700,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 26,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.25.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 27,
                "sweepPower":1800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 27,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.26.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 28,
                "sweepPower":1900,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 28,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.27.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":81,
                "cost":10,
                "dungeon":67,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.28.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 5,
        "powerLimit": 1300,
        "idx": 4,
        "style": "map-dungeon5",
        "title":"dungeonname5.png",
        "label":"暮色平原",
        "desc":"表面上一片祥和的大草原，但卻暗潮湧動\n潛伏的怪物們會告誡你不要小看這片平原。",
        "icon":"mapicon3.png",
        "theme":1,
        "stage":[
            {
                "stageId": 29,
                "sweepPower":2200,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 29,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.28.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 30,
                "sweepPower":2400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 30,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.29.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 31,
                "sweepPower":2600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 31,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.30.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 32,
                "sweepPower":2800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 32,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.31.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 33,
                "sweepPower":3000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 33,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.32.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 34,
                "sweepPower":3200,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 34,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.33.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 35,
                "sweepPower":3400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 35,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.34.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":82,
                "cost":10,
                "dungeon":68,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.35.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 6,
        "powerLimit": 2300,
        "idx": 5,
        "style": "map-dungeon6",
        "title":"dungeonname6.png",
        "label":"野蠻哨站",
        "desc":"獸人的哨站，存放著獸人搶奪村莊的戰利品，\n重兵把守，勇者們幾乎都是有去無回。",
        "icon":"mapicon5.png",
        "theme":2,
        "stage":[
            {
                "stageId": 36,
                "sweepPower":3800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 36,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.35.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 37,
                "sweepPower":4000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":37,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.36.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 38,
                "sweepPower":4200,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 38,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.37.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 39,
                "sweepPower":4400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 39,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.38.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 40,
                "sweepPower":4600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 40,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.39.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 41,
                "sweepPower":4800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 41,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.40.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 42,
                "sweepPower":5000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 42,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.41.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":83,
                "cost":10,
                "dungeon":69,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.42.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 7,
        "powerLimit": 3200,
        "idx": 6,
        "style": "map-dungeon7",
        "title":"dungeonname7.png",
        "label":"旋風穀",
        "desc":"山谷險要的地勢加上詭異的巨大山風，讓這\n裡成為勇者們永遠的噩夢。",
        "icon":"mapicon4.png",
        "theme":0,
        "stage":[
            {
                "stageId": 43,
                "sweepPower":5400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 43,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.42.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 44,
                "sweepPower":5500,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 44,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.43.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 45,
                "sweepPower":5600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 45,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.44.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 46,
                "sweepPower":5700,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 46,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.45.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 47,
                "sweepPower":5800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":47,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.46.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 48,
                "sweepPower":5900,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":48,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.47.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 49,
                "sweepPower":6000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":49,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.48.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":84,
                "cost":10,
                "dungeon":70,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.49.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 8,
        "powerLimit": 3800,
        "idx": 7,
        "style": "map-dungeon8",
        "title":"dungeonname8.png",
        "label":"叢林密道",
        "desc":"不見天日的叢林中，隱藏著的古老密道，現\n在已經荒廢並且成為怪物們的巢穴。",
        "icon":"mapicon1.png",
        "theme":1,
        "stage":[
            {
                "stageId": 50,
                "sweepPower":6400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 50,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.49.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 51,
                "sweepPower":6500,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 51,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.50.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 52,
                "sweepPower":6600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 52,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.51.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 53,
                "sweepPower":6700,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 53,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.52.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 54,
                "sweepPower":6800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 54,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.53.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 55,
                "sweepPower":6900,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 55,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.54.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 56,
                "sweepPower":7000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 56,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.55.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":85,
                "cost":10,
                "dungeon":71,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.56.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 9,
        "powerLimit": 4400,
        "idx": 8,
        "style": "map-dungeon9",
        "title":"dungeonname9.png",
        "label":"巫師營地",
        "desc":"巫師掌控著的地盤，營地中駐紮著巫師手下\n的邪惡軍團，是一支極具威脅的軍隊。",
        "icon":"mapicon5.png",
        "theme":2,
        "stage":[
            {
                "stageId": 57,
                "sweepPower":7400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 57,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.56.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 58,
                "sweepPower":7500,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 58,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.57.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 59,
                "sweepPower":7600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":59,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.58.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 60,
                "sweepPower":7700,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 60,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.59.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 61,
                "sweepPower":7800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":61,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.60.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 62,
                "sweepPower":7900,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":62,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.61.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 63,
                "sweepPower":8000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":63,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.62.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":86,
                "cost":10,
                "dungeon":72,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.63.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 10,
        "powerLimit": 5000,
        "idx": 9,
        "style": "map-dungeon10",
        "title":"dungeonname10.png",
        "label":"死靈洞穴",
        "desc":"盤踞著未知力量的洞穴，據說這股力量來自\n遙遠的上古，是人類無法探知的境地。",
        "icon":"mapicon2.png",
        "stage":[
            {
                "stageId": 64,
                "sweepPower":8300,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 128,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.63.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 65,
                "sweepPower":8400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 129,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.64.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 66,
                "sweepPower":8500,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 130,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.65.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 67,
                "sweepPower":8600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 131,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.66.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 68,
                "sweepPower":8700,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 132,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.67.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 69,
                "sweepPower":8800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon":133,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.68.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 70,
                "sweepPower":8900,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 134,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.69.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":87,
                "cost":10,
                "dungeon": 135,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.70.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 11,
        "powerLimit": 5500,
        "idx": 10,
        "style": "map-dungeon11",
        "title":"dungeonname11.png",
        "label":"塔卡宮殿",
        "desc":"領主塔卡的宮殿，卡塔不僅擁有強大的傭兵\n軍團，據稱他已經掌握了未知力量。",
        "icon":"mapicon6.png",
        "stage":[
            {
                "stageId": 71,
                "sweepPower":9200,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 136,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.70.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 72,
                "sweepPower":9300,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 137,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.71.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 73,
                "sweepPower":9400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 138,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.72.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 74,
                "sweepPower":9500,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 139,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.73.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 75,
                "sweepPower":9600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 140,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.74.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 76,
                "sweepPower":9700,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 141,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.75.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 77,
                "sweepPower":9800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 142,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.76.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 134,
                "cost":10,
                "dungeon": 143,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.77.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 12,
        "label":"日常任務章",
        "hidden": true,
        "stage":[
            {
                "stageId": 88,
                "cost": 10,
                "team": 3,
                "hidden":true,
                "dungeon": 76,
                "event":"event_daily"
            },
            {
                "stageId": 89,
                "cost": 10,
                "team": 3,
                "hidden":true,
                "dungeon": 77,
                "event":"event_daily"
            },
            {
                "stageId": 90,
                "cost": 10,
                "team": 3,
                "hidden":true,
                "dungeon": 78,
                "event":"event_daily"
            },
            {
                "stageId": 91,
                "cost": 10,
                "team": 3,
                "hidden":true,
                "dungeon": 79,
                "event":"event_daily"
            },
            {
                "stageId": 92,
                "cost": 10,
                "team": 3,
                "hidden":true,
                "dungeon": 80,
                "event":"event_daily"
            },
            {
                "stageId": 93,
                "cost": 10,
                "team": 3,
                "hidden":true,
                "dungeon": 81 ,
                "event":"event_daily"
            },
            {
                "stageId": 94,
                "cost": 10,
                "team": 3,
                "hidden":true,
                "dungeon": 82,
                "event":"event_daily"
            },
            {
                "stageId": 95,
                "cost": 10,
                "team": 3,
                "hidden":true,
                "dungeon": 83,
                "event":"event_daily"
            }
        ]
    },
    {
        "chapterId": 13,
        "idx": 0,
        "style": "map-dungeon1",
        "title":"dungeonname1.png",
        "label":"多姆洞穴",
        "desc":"似乎是天然形成的洞穴，出沒著一些危險的\n野生怪物，讓不少旅人有去無回。",
        "icon":"mapicon2.png",
        "theme":0,
        "stage":[
            {
                "sweepPower":200,
                "stageId": 96,
                "cost": 15,
                "team": 1,
                "hidden":false,
                "dungeon": 92,
                "tutorial":2,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.104.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 97,
                "sweepPower":200,
                "cost": 15,
                "team": 1,
                "hidden":false,
                "dungeon": 93,
                "teammate": [
                    {
                        "class" : 164,
                        "name" : "阿雅",
                        "gender" : 0,
                        "hairColor" : 15,
                        "xp" : 0
                    }],
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.105.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 98,
                "sweepPower":200,
                "cost": 15,
                "team": 1,
                "hidden":false,
                "dungeon": 94,
                "tutorial":4,
                "teammate": [
                    {
                        "class" : 164,
                        "name" : "阿雅",
                        "gender" : 0,
                        "hairColor" : 15,
                        "xp" : 0
                    }],
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.97.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 99,
                "sweepPower":200,
                "cost": 15,
                "team": 2,
                "hidden":false,
                "dungeon":95,
                "tutorial":6,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.106.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 100,
                "sweepPower":200,
                "cost": 15,
                "team": 2,
                "hidden":false,
                "dungeon": 96,
                "tutorial":7,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.99.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 101,
                "sweepPower":200,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 97,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.107.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 102,
                "sweepPower":200,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 98,
                "tutorial":9,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.101.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":103,
                "sweepPower":29999,
                "cost":10,
                "dungeon":64,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.102.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 14,
        "hidden": true,
        "label":"教程",
        "stage":[
            {
                "stageId": 104,
                "cost": 0,
                "team": 1,
                "hidden":false,
                "dungeon": 91,
                "tutorial":1
            },
            {
                "stageId": 105,
                "cost": 0,
                "team": 1,
                "hidden":false,
                "dungeon": 99,
                "tutorial":3,
                "teammate": [
                    {
                        "class" : 131,
                        "name" : "約書亞",
                        "gender" : 1,
                        "hairStyle" : 5,
                        "hairColor" : 13,
                        "xp" : 0
                    }
                ],
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.96.state"}, 2 ] }
                ]
                }
            },
            {
                "stageId": 106,
                "cost": 0,
                "team": 1,
                "hidden":false,
                "dungeon": 100,
                "tutorial":5,
                "teammate": [
                    {
                        "class" : 132,
                        "name" : "凱薩琳",
                        "gender" : 0,
                        "hairStyle" : 5,
                        "hairColor" :3 ,
                        "xp" : 0
                    }
                ],
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.98.state"}, 2 ] }
                ]
                }
            },
            {
                "stageId": 107,
                "cost": 0,
                "team": 1,
                "hidden":false,
                "dungeon": 101,
                "tutorial":8,
                "teammate": [
                    {
                        "class" : 131,
                        "name" : "約書亞",
                        "gender" : 1,
                        "hairStyle" : 5,
                        "hairColor" : 13,
                        "xp" : 0
                    },
                    {
                        "class" : 132,
                        "name" : "凱薩琳",
                        "gender" : 0,
                        "hairStyle" : 5,
                        "hairColor" :3 ,
                        "xp" : 0
                    }
                ],
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.100.state"}, 2 ] }
                ]
                }
            }
        ]
    },
    {
        "chapterId": 15,
        "hidden": true,
        "label":"HuoDong",
        "stage":[
            {
                stageId: 108,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 105,
                description: "Enhance1",
                eventName: "event_enhance",
                condition: checkEvilChief,
                initialAction: function (obj) {
                    obj.counters.enhance++;
                }
            },
            {
                stageId: 109,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 106,
                eventName: "event_enhance",
                description: "Enhance2",
                condition: checkEvilChief,
                initialAction: function (obj) {
                    obj.counters.enhance++;
                }
            },
            {
                stageId: 110,
                cost: 15,
                team: 3,
                hidden: true,
                dungeon: 107,
                description: "Enhance3",
                eventName: "event_enhance",
                condition: checkEvilChief,
                initialAction: function (obj) {
                    obj.counters.enhance++;
                }
            },
            {
                stageId: 111,
                cost: 15,
                team: 3,
                hidden: true,
                dungeon: 108,
                description: "Enhance4",
                eventName: "event_enhance",
                condition: checkEvilChief,
                initialAction: function (obj) {
                    obj.counters.enhance++;
                }
            },
            {
                stageId: 112,
                cost: 20,
                team: 3,
                hidden: true,
                dungeon: 109,
                description: "Enhance5",
                eventName: "event_enhance",
                condition: checkEvilChief,
                initialAction: function (obj) {
                    obj.counters.enhance++;
                }
            },
            {
                stageId: 113
            },
            {
                stageId: 114,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 102,
                description: "Goblin1",
                eventName: "event_goblin",
                condition: checkGoblin,
                initialAction: function (obj) {
                    if (obj.counters.goblin) {
                        obj.counters.goblin++;
                    } else {
                        obj.counters['goblin'] = 1;
                    }
                }
            },
            {
                stageId: 115,
                cost: 15,
                team: 3,
                hidden: true,
                dungeon: 103,
                description: "Goblin2",
                eventName: "event_goblin",
                condition: checkGoblin,
                initialAction: function (obj) {
                    if (obj.counters.goblin) {
                        obj.counters.goblin++;
                    } else {
                        obj.counters['goblin'] = 1;
                    }
                }
            },
            {
                stageId: 116,
                cost: 20,
                team: 3,
                hidden: true,
                dungeon: 104,
                description: "Goblin3",
                eventName: "event_goblin",
                condition: checkGoblin,
                initialAction: function (obj) {
                    if (obj.counters.goblin) {
                        obj.counters.goblin++;
                    } else {
                        obj.counters['goblin'] = 1;
                    }
                }
            },
            {
                stageId: 117,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 110,
                description: "wxp1",
                eventName: "event_weapon",
                condition: checkEquipmentRobbers,
                initialAction: function (obj) {
                    obj.counters.weapon++;
                }
            },
            {
                stageId: 118,
                cost: 15,
                team: 3,
                hidden: true,
                dungeon: 111,
                description: "wxp2",
                eventName: "event_weapon",
                condition: checkEquipmentRobbers,
                initialAction: function (obj) {
                    obj.counters.weapon++;
                }
            },
            {
                stageId: 119,
                cost: 20,
                team: 3,
                hidden: true,
                dungeon: 112,
                description: "wxp3",
                eventName: "event_weapon",
                condition: checkEquipmentRobbers,
                initialAction: function (obj) {
                    obj.counters.weapon++;
                }
            },
            {
                stageId: 120,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 113,
                description: "infinity",
                eventName: "event_infinite",
                "isInfinite":true,
                condition: function (obj, util) {
                    return true;
                },
                initialAction: function (obj) {
                }
            },
            {
                stageId: 121,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 114,
                description: "hunt83",
                eventName: "event_goblin",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) {
                    return obj.counters.goblin < 3 || !obj.counters.goblin;
                },
                initialAction: function (obj) {
                    //if (obj.counters.goblin) {
                    //    obj.counters.goblin++;
                    //} else {
                    //    obj.counters['goblin'] = 1;
                    //}
                }
            },
            {
                stageId: 122,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 115,
                description: "hunt39",
                eventName: "event_hunt39",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 123,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 116,
                description: "hunt112",
                eventName: "event_hunt112",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 124,
                cost: 10,
                team: 1,
                pvp: true,
                hidden: true,
                dungeon: 118,
                description: "hunt112",
                eventName: "event_goblin",
                "formularId":1,
                condition: function (obj, util) {
                    return obj.counters.currentPKCount < obj.getTotalPkTimes() + obj.getAddPkCount();
                },
                initialAction: function (obj) {
                    if (obj.counters.currentPKCount) {
                        obj.counters.currentPKCount++;
                    } else {
                        obj.counters['currentPKCount'] = 1;
                    }
                }
            },
            {
                stageId: 125,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 119,
                description: "hunt39",
                eventName: "event_hunt39",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 126,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 120,
                description: "hunt39",
                eventName: "event_hunt39",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 127,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 121,
                description: "hunt39",
                eventName: "event_hunt39",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 128,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 122,
                description: "hunt39",
                eventName: "event_hunt39",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 129,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 123,
                description: "hunt39",
                eventName: "event_hunt39",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 130,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 124,
                description: "hunt39",
                eventName: "event_hunt39",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 131,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 125,
                description: "hunt39",
                eventName: "event_hunt39",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 132,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 126,
                description: "hunt39",
                eventName: "event_hunt39",
                "isInfinite":true,
                "formularId":1,
                condition: function (obj, util) { return true; },
                initialAction: function (obj) { }
            },
            {
                stageId: 151,
                cost: 10,
                team: 3,
                hidden: true,
                dungeon: 160,
                description: "Goblin1",
                eventName: "happyNewYear",
                condition: function(obj) {
                    return obj.counters.happyNewYear<2;
                },
                initialAction: function (obj) {
                    if (obj.counters.happyNewYear) {
                        obj.counters.happyNewYear++;
                    } else {
                        obj.counters['happyNewYear'] = 1;
                    }
                }
            }
        ]
    },
    {
        "chapterId": 16,
        "hidden": true,
        "label":"世界副本",
        "stage":[
            {
                "stageId": 133,
                "cost": 10,
                "team": 3,
                "hidden":false,
                "dungeon": 127,
                "condition": function (obj, util) {
                    if (util.serverObj.counters['133'] == undefined
                        || util.serverObj.counters['133'] < MAX_BATTLE_TIMES) {
                        return true;
                    }
                    return false;
                }
            }
        ]
    },
    {
        "chapterId": 17,
        "idx": 11,
        "style": "map-dungeon11",
        "title":"dungeonname11.png",
        "label":"邪恶巢穴",
        "desc":"領主塔卡的宮殿，卡塔不僅擁有強大的傭兵\n軍團，據稱他已經掌握了未知力量。",
        "icon":"mapicon6.png",
        "stage":[
            {
                "stageId": 135,
                "sweepPower":10000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 144,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.77.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 136,
                "sweepPower":10200,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 145,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.135.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 137,
                "sweepPower":10400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 146,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.136.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 138,
                "sweepPower":10600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 147,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.137.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 139,
                "sweepPower":10800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 148,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.138.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 140,
                "sweepPower":11000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 149,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.139.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 141,
                "sweepPower":11200,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 150,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.140.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 142,
                "cost":10,
                "dungeon": 151,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.141.state"}, 2 ] }
                ]
                }

            }
        ]
    },
    {
        "chapterId": 18,
        "idx": 12,
        "style": "map-dungeon11",
        "title":"dungeonname11.png",
        "label":"地狱峡谷",
        "desc":"領主塔卡的宮殿，卡塔不僅擁有強大的傭兵\n軍團，據稱他已經掌握了未知力量。",
        "icon":"mapicon6.png",
        "stage":[
            {
                "stageId": 143,
                "sweepPower":11600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 152,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.141.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 144,
                "sweepPower":11800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 153,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.143.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 145,
                "sweepPower":12000,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 154,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.144.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 146,
                "sweepPower":12200,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 155,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.145.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 147,
                "sweepPower":12400,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 156,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.146.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 148,
                "sweepPower":12600,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 157,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.147.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId": 149,
                "sweepPower":12800,
                "cost": 15,
                "team": 3,
                "hidden":false,
                "dungeon": 158,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.148.state"}, 2 ] }
                ]
                }

            },
            {
                "stageId":150,
                "cost":10,
                "dungeon": 159,
                "isInfinite":true,
                "cond":
                { "and": [
                    { "==": [ { "type": "getProperty", "key": "stage.149.state"}, 2 ] }
                ]
                }

            }
        ]
    }
];
for (k in data) {
    data[k].stageId = k;
}
exports.data = data;
