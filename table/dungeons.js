exports.data = [
    {
    "abtest":[
        {
        "dungeonId": 0,
        "levelCount" : 3,
        "levels" :[
            {
                "objects" : [
                    {
                        "id": 7,
                        "count":5
                    },
                    {
                        "id": 14,
                        "count":2

                    }
                ],
                "rank": 26
            },
            {
                "objects" : [
                    {
                        "id": 7,
                        "count":1
                    },
                    {
                        "id": 14,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4,
                        "count":3
                    }
                ],
                "rank": 26
            },
            {
                "objects" : [
                    {
                        "id": 134,
                        "count":1
                    }
                ],
                "entrance": [17,16,18],
                "exit":-1,
                "layout":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "rank": 26
            }
        ],
        "prizeWxp":0,
        "prizeGold": 0,
        "prizeXp":0,
        "wxpRate":1,
        "goldRate":0.3,
        "triggers": ["dungeon:no.reward.no.result"],
        "xpRate":1
    },
    {
        "dungeonId": 0,
        "levelCount" : 3,
        "levels" :[
            {
                 "objects" : [
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 37,
                        "count":2
                    },
                    {
                        "id": 17,
                        "count":2
                    }
                ],
                "rank": 26
            },
            {
                 "objects" : [
                    {
                        "id": 75,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 44,
                        "count":2
                    },
                    {
                        "id": 73,
                        "count":2
                    } ,
                    {
                        "id": 18,
                        "count":2
                    }
                ],
                "rank": 26
            },
            {
                 "objects" : [
                    {
                        "id": 134,
                        "count":1
                    }
                ],
                "entrance": [17,16,18],
                "exit":-1,
                "layout":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "rank": 26,
                "triggers": ["dungeon:no.reward.no.result"]
            }
        ],
        "prizeWxp":0,
        "prizeGold": 0,
        "prizeXp":0,
        "wxpRate":1,
        "goldRate":0.3,
        "xpRate":1
    }
]
},
    {

        "dungeonId": 1,
        "levelCount" :6 ,
        "pool":{
            "normalPool":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]
        },
        "rank": 1,
        "levels" :[
            {    
                "objects" :[
                    {
                         "id": 3,
                         "count":4
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                         "id": 4 ,
                         "count":3

                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":3

                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 4 ,
                        "count":4
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":2
                    },
                    {
                        "id": 4 ,
                        "count":4
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 22,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":2
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":3
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":2
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":4
                    }
                ]
            },
            {     
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":2
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 23,
                        "count":1,
                        "keyed":true
                    }
                ]
            }         
        ],
        "dropID": [ 8 ],
        "prizeWxp":20,
        "prizeGold": 100,
        "prizeXp":150,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1,
        "collectId":1001
    },
    {
        "dungeonId": 2,
        "rank": 1,
        "levelCount" : 6,
        "pool":{
            "normalPool":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]
        },
        "levels" :[
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":3
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":2
                    }
                ]
            },
            {     
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":2
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 24,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":1
                    },
                    {
                        "id": 7,
                        "count":3
                    },
                    {
                        "id": 23,
                        "count":1,
                        "collectId":2001,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID": [ 9 ],
        "prizeWxp":20,
        "prizeGold": 100,
        "prizeXp":200,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 3,
        "levelCount" : 6,
        "pool":{
            "normalPool":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]
        },
        "rank": 2,
        "levels" :[
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":3
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":2
                    }
                ]
            },
            {     
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 24,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {     
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":1
                    },
                    {
                        "id": 7,
                        "count":3
                    },
                    {
                        "id": 25,
                        "count":1,
                        "keyed":true,
                        "collectId":4001
                    }
                ]
            }
        ],
        "dropID":
            [
                10
            ],
        "prizeWxp":20,
        "prizeGold": 100,
        "prizeXp":200,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 4,
        "levelCount" : 6,
        "pool":{
            "normalPool":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]
        },
        "rank": 3,
        "levels" :[
            {    
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id":7,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 146,
                        "count":1,
                        "questOnly":true,
                        "collectId":7001
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 23,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 7,
                        "count":3
                    },
                    {
                        "id": 5,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":1
                    },
                    {
                        "id": 7,
                        "count":3
                    },
                    {
                        "id": 23,
                        "count":1,
                        "questOnly":true,
                        "collectId":11001
                    },
                    {
                        "id": 25,
                        "count":1,
                        "keyed":true,
                        "collectId":9001
                    }
                ]
            }
        ],
        "dropID":
            [
                11
            ],
        "prizeWxp":20,"prizeGold": 100,
        "prizeXp":250,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 5,
        "levelCount" : 6,
        "pool":{
            "normalPool":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]
        },
         
        "rank": 4,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7 ,
                        "count":4
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 7 ,
                        "count":4
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7 ,
                        "count":3
                    },
                    {
                        "id": 23,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7 ,
                        "count":3
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 6 ,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 32,
                        "count":1,
                        "keyed":true,
                        "collectId":12001
                    }
                ]
            }
        ],
        "dropID":
            [
                12
            ],
        "prizeWxp":20,"prizeGold": 100,
        "prizeXp":250,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 6,
        "rank": 4,
        "levelCount" : 6,
        "pool":{
            "normalPool":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]
        },
         
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 143,
                        "count":1,
                        "collectId":14001,
                        "questOnly":true
                    },
                    {
                        "id": 6,
                        "count":2
                    },
                    {
                        "id": 25,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 6 ,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 32,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 141,
                        "count":1,
                        "keyed":true,
                        "collectId":13001,
                        "questOnly":true
                    },
                    {
                        "id": 142,
                        "count":1,
                        "keyed":true,
                        "collectId":13001,
                        "questOnly":true
                    }
                ]
            }
        ],
        "dropID":
            [
               13
            ],
        "prizeWxp":20,"prizeGold": 100,
        "prizeXp":250,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 7,
        "levelCount" : 6,
        "pool":{
            "normalPool":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]
        },
         
        "rank": 5,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 8 ,
                        "count":1
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":4
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 8 ,
                        "count":1
                    },
                    {
                        "id": 6,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 32,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 8 ,
                        "count":1
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 8 ,
                        "count":1
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 6 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },{
                        "id": 165,
                        "count":1,
                        "collectId":152001,
                        "keyed":true,
                        "questOnly":true
                    },
                    {
                        "id": 8,
                        "count":1
                    },
                    {
                        "id": 136,
                        "pos":12,
                        "count":1,
                        "collectId":15001,
                        "keyed":true
                    },
                    {
                        "id": 23,
                        "count":1,
                        "collectId":16001,
                        "keyed":true,
                        "questOnly":true
                    }
                ],
                "entrance":0,
                "exit": 29
            }
        ],
        "dropID":
            [
                14
            ],
        "prizeWxp":20,
        "prizeGold": 100,
        "prizeXp":300,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 8,
        "rank": 6,
        "levelCount" : 2,
        "pool":{
            "normalPool": {"objects": [
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS2":{
                "objects":[
                {"id":14,"weight":2},
                {"id":15,"weight":2},
                {"id":6,"weight":2},
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2}]},
            "PoolS2R":{"objects":[
                {"id":8,"weight":2},
                {"id":16,"weight":2}]}
        },

        "collectId":17001,
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:92}
        ],
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:92},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:92},
                    {
                        "id": 23 ,
                        "count":2,
                        "keyed":true
                    },
                     {
                         "id": 153,
                         "count":1,
                         property:{
                             "collectId":18001,
                             "questOnly":true
                         }
                     },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:92},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:92},
                    {
                        "id": 34,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:92
                        }
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            15
        ],
        "prizeWxp":30,
        "prizeGold":150,
        "prizeXp":300,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 9,
        "rank": 6,
        "levelCount" : 2,
        "pool":{
            "normalPool": {"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS2":{"objects":[
                {"id":14,"weight":2},
                {"id":15,"weight":2},
                {"id":6,"weight":2},
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2}]},
            "PoolS2R":{"objects":[
                {"id":8,"weight":2},
                {"id":16,"weight":2}]}
        }, "global": [
        {id: 211,from: 1, to: 4,dropPrize:93}],
         
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:14,skill:[{id:154}],dropPrize:93},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:93},

                    {
                        "id": 33 ,
                        "count":1,
                        "keyed":true
                    },
                     {
                         "id": 149,
                         "count":3
                     }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:93},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:93},
                    {
                        "id": 32,
                        "count":2,
                        "collectId":19001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:93}
                    },
                    {
                        "id": 149,
                        "count":3
                    }
                ]
            }
        ],
        "dropID":[
            16
        ],
        "prizeWxp":30,
        "prizeGold": 150,
        "prizeXp":350,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 10,
        "rank": 7,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS2":{"objects":[
                {"id":14,"weight":2},
                {"id":15,"weight":2},
                {"id":6,"weight":2},
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2}]},
            "PoolS2R":{"objects":[
                {"id":8,"weight":2},
                {"id":16,"weight":2}]}
        },"global": [
        {id: 211,from: 1, to: 4,dropPrize:94}],
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:94},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:94},
                    {
                        "id": 54 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 159,
                        "count":3,
                        "collectId":22001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:94},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:94},
                    {
                        "id": 33,
                        "count":2,
                        "collectId":21001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:94}
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 159,
                        "count":2,
                        "collectId":22001,
                        "questOnly":true
                    }
                ]
            }
        ],
        "dropID":[
            17
            ] ,
        "prizeWxp":30,
        "prizeGold": 150,
        "prizeXp":350,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 11,
        "rank": 7,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS2":{"objects":[
                {"id":14,"weight":2},
                {"id":15,"weight":2},
                {"id":6,"weight":2},
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2}]},
            "PoolS2R":{"objects":[
                {"id":8,"weight":2},
                {"id":16,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:95}],
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:95},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:95},
                    {
                        "id": 54 ,
                        "count":2,
                        "keyed":true
                    },
                    {
                        "id": 152,
                        "count":2,
                        "collectId":24001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:95},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:95},
                    {
                        "id": 55,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:95,
                            "collectId":23001
                        }
                    },
                    {
                        "id": 152,
                        "count":3,
                        "collectId":24001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            18
        ],
        "prizeWxp":30,
        "prizeGold": 150,
        "prizeXp":400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 12,
        "rank": 7,
        "levelCount" :2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS2":{"objects":[
                {"id":14,"weight":2},
                {"id":15,"weight":2},
                {"id":6,"weight":2},
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2}]},
            "PoolS2R":{"objects":[
                {"id":8,"weight":2},
                {"id":16,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:96}],
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:96},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:96},
                    {
                        "id": 52 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:96},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:96},
                    {
                        "id": 55,
                        "count":1,
                        "collectId":26001,property:{
                        "keyed":true,
                        skill:[{id:153}],
                        dropPrize:96}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            19
        ],
        "prizeWxp":30,"prizeGold": 150,
        "prizeXp":400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 13,
        "rank": 8,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS2":{"objects":[
                {"id":14,"weight":2},
                {"id":15,"weight":2},
                {"id":6,"weight":2},
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2}]},
            "PoolS2R":{"objects":[
                {"id":8,"weight":2},
                {"id":16,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:97}],
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:97},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:97},
                    {
                        "id": 53 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:97}
                    },
                    {
                        "id": 156,
                        "count":1,
                        "collectId":27001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:97},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:97},
                    {
                        "id": 53,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 52 ,
                        "count":1,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[
            20
        ],
        "prizeWxp":30,"prizeGold": 150,
        "prizeXp":400,
        "collectId":29001,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 14,
        "rank": 8,
        "levelCount" :2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS2":{"objects":[
                {"id":14,"weight":2},
                {"id":15,"weight":2},
                {"id":6,"weight":2},
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2}]},
            "PoolS2R":{"objects":[
                {"id":8,"weight":2},
                {"id":16,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:98}],
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:98},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:98},
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 34,
                         "count":1,
                         "keyed":true
                     }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":1,to:3},
                     {"pool":"PoolS2","from":10,to:12,skill:[{id:154}],dropPrize:98},
                     {"pool":"PoolS2R","from":0,to:2,skill:[{id:154}],dropPrize:98},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 135,
                        "count":1,
                        "pos":12,
                        "collectId":30001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:98}
                    },
                    {
                        "id": 34,
                        "count":1,
                        "keyed":true,
                        "questOnly":true,
                        "collectId":31001
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[
            21
        ],
        "prizeWxp":30,"prizeGold":150,
        "prizeXp":450,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 15,
        "rank": 18,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS3":{"objects":[
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2},
                {"id":17,"weight":2},
                {"id":10,"weight":2},
                {"id":38,"weight":2}]},
            "PoolS3R":{"objects":[
                {"id":13,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:99}],
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:12,skill:[{id:154}],dropPrize:99},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:99},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 30,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:12,skill:[{id:154}],dropPrize:99},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:99},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 26,
                        "count":1,
                        "collectId":32001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:99}
                    }
                ]
            }
        ],
        "dropID":[
            22
        ],
        "prizeWxp":50,"prizeGold": 200,
        "prizeXp":500,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 16,
        "rank": 20,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS3":{"objects":[
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2},
                {"id":17,"weight":2},
                {"id":10,"weight":2},
                {"id":38,"weight":2}]},
            "PoolS3R":{"objects":[
                {"id":13,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:100}],
        "collectId":34001,
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:12,skill:[{id:154}],dropPrize:100},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:100},
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 157 ,
                         "count":1,
                         "questOnly":true,
                         "collectId":33001
                     },
                    {
                        "id": 26,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:100},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:100},
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 150,
                         "count":1,
                         "questOnly":true,
                         "collectId":35001
                     },
                    {
                        "id": 30,
                        "count":2,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:100}
                    }
                ]
            }
        ],
        "dropID":[
            23
        ],
        "prizeWxp":50,"prizeGold": 200,
        "prizeXp":500,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 17,
        "rank": 22,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS3":{"objects":[
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2},
                {"id":17,"weight":2},
                {"id":10,"weight":2},
                {"id":38,"weight":2}]},
            "PoolS3R":{"objects":[
                {"id":13,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:101}],
        "collectId":37001,
        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:101},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:101},
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 144,
                         "count":1,
                         "questOnly":true,
                         "collectId":39001
                     },
                    {
                        "id": 49,
                        "count":1,
                        "questOnly":true,
                        "collectId":38001
                    },
                    {
                        "id": 27,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:101},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:101},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":39002
                    },
                    {
                        "id": 26,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 27,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 30,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:101}
                    }
                ]
            }
        ],
        "dropID":[
            24
        ],
        "prizeWxp":50,"prizeGold": 200,
        "prizeXp":500,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 18,
        "rank": 24,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS3":{"objects":[
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2},
                {"id":17,"weight":2},
                {"id":10,"weight":2},
                {"id":38,"weight":2}]},
            "PoolS3R":{"objects":[
                {"id":13,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:102}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:102},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:102},
                    {
                        "id": 151,
                        "count":1,
                        "questOnly":true,
                        "collectId":39003
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 150,
                        "count":2,
                        "questOnly":true,
                        "collectId":43001
                    },
                    {
                        "id": 27,
                        "count":2,
                        "keyed":true
                    },
                    {
                        "id": 30,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:102},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:102},
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 49,
                         "count":1,
                         "questOnly":true,
                         "collectId":42001
                     },
                     {
                         "id": 150,
                         "count":2,
                         "questOnly":true,
                         "collectId":43001
                     },
                    {
                        "id": 55,
                        "count":2,
                        "keyed":true,
                        "collectId":41001
                    },
                    {
                        "id": 152,
                        "count":1,
                        "questOnly":true,
                        "collectId":39004
                    },
                    {
                        "id": 30,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:102}
                    }
                ]
            }
        ],
        "dropID":[
            25
        ],
        "prizeWxp":50,"prizeGold": 200,
        "prizeXp":500,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 19,
        "rank": 26,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":
                [
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS3":{"objects":[
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2},
                {"id":17,"weight":2},
                {"id":10,"weight":2},
                {"id":38,"weight":2}]},
            "PoolS3R":{"objects":[
                {"id":13,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:103}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:103},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:103},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 55,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:103},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:103},
                    {
                        "id": 28,
                        "count":1,
                        "collectId":44001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:103}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            26
        ],
        "prizeWxp":50,"prizeGold": 200,
        "prizeXp":500,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 20,
        "rank": 27,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS3":{"objects":[
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2},
                {"id":17,"weight":2},
                {"id":10,"weight":2},
                {"id":38,"weight":2}]},
            "PoolS3R":{"objects":[
                {"id":13,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:104}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:104},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:104},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 153,
                        "count":1,
                        "collectId":45001,
                        "questOnly":true
                    },
                    {
                        "id": 55,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:104},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:104},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 28,
                        "count":1,
                        "collectId":46001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:104}
                    }
                ]
            }
        ],
        "dropID":[
            27
        ],
        "prizeWxp":50,"prizeGold":200,
        "prizeXp":500,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 21,
        "rank": 30,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS3":{"objects":[
                {"id":35,"weight":2},
                {"id":36,"weight":2},
                {"id":37,"weight":2},
                {"id":17,"weight":2},
                {"id":10,"weight":2},
                {"id":38,"weight":2}]},
            "PoolS3R":{"objects":[
                {"id":13,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:105}],
        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:105},
                    {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:105},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 28,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS3","from":10,to:13,skill:[{id:154}],dropPrize:105},
                     {"pool":"PoolS3R","from":0,to:2,skill:[{id:154}],dropPrize:105},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 29,
                        "count":1,
                        "keyed":true,
                        "questOnly":true,
                        "collectId":48001
                    },
                    {
                        "id": 137,
                        "count":1,
                        "pos":12,
                        "collectId":47001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:105}
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[
            28
        ],
        "prizeWxp":50,"prizeGold": 200,
        "prizeXp":500,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 22,
        "rank": 38,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS4":{"objects":[
                {"id":10,"weight":2},
                {"id":18,"weight":2},
                {"id":36,"weight":2},
                {"id":38,"weight":2},
                {"id":39,"weight":2},
                {"id":11,"weight":2},
                {"id":9,"weight":2}]},
            "PoolS4R":{"objects":[
                {"id":40,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:106}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:13,skill:[{id:154}],dropPrize:106},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:106},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 56,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:13,skill:[{id:154}],dropPrize:106},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:106},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 57,
                        "count":1,
                        "collectId": 49001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:106}
                    }
                ]
            }
        ],
        "dropID":[
            29
        ],
        "prizeWxp":70,"prizeGold": 300,
        "prizeXp":600,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 23,
        "rank": 40,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS4":{"objects":[
                {"id":10,"weight":2},
                {"id":18,"weight":2},
                {"id":36,"weight":2},
                {"id":38,"weight":2},
                {"id":39,"weight":2},
                {"id":11,"weight":2},
                {"id":9,"weight":2}]},
            "PoolS4R":{"objects":[
                {"id":40,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:107}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:13,skill:[{id:154}],dropPrize:107},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:107},
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 158,
                         "count":1,
                         "collectId": 50001
                     },
                    {
                        "id": 29,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:13,skill:[{id:154}],dropPrize:107},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:107},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 66,
                        "count":1,
                        "collectId": 52001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:107}
                    }
                ]
            }
        ],
        "dropID":[
           30
        ],
        "prizeWxp":70,"prizeGold": 300,
        "prizeXp":600,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 24,
        "rank": 42,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS4":{"objects":[
                {"id":10,"weight":2},
                {"id":18,"weight":2},
                {"id":36,"weight":2},
                {"id":38,"weight":2},
                {"id":39,"weight":2},
                {"id":11,"weight":2},
                {"id":9,"weight":2}]},
            "PoolS4R":{"objects":[
                {"id":40,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:108}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:108},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:108},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 159,
                        "count":3,
                        "questOnly":true,
                        "collectId":54001
                    },
                    {
                        "id": 57,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:108},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:108},
                     {
                         "id": 150,
                         "count":1,
                         "questOnly":true,
                         "collectId":55001
                     },
                     {
                         "id": 10,
                         "count":1,
                         "questOnly":true,
                         "collectId":56001
                     },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 159,
                        "count":2,
                        "questOnly":true,
                        "collectId":54001
                    },
                    {
                        "id": 66,
                        "count":1,
                        "collectId":53001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:108}
                    }
                ]
            }
        ],
        "dropID":[
            31
        ],
        "prizeWxp":70,"prizeGold": 300,
        "prizeXp":600,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 25,
        "rank": 50,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS4":{"objects":[
                {"id":10,"weight":2},
                {"id":18,"weight":2},
                {"id":36,"weight":2},
                {"id":38,"weight":2},
                {"id":39,"weight":2},
                {"id":11,"weight":2},
                {"id":9,"weight":2}]},
            "PoolS4R":{"objects":[
                {"id":40,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:109}],
        "collectId":57001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:109},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:109},
                    {
                        "id": 145,
                        "count":2,
                        "questOnly":true,
                        "collectId":58001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 66,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:109},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:109},
                    {
                        "id": 145,
                        "count":3,
                        "questOnly":true,
                        "collectId":58001
                    },
                    {
                        "id": 64,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:109}
                    },
                    {
                        "id": 146,
                        "count":1,
                        "questOnly":true,
                        "collectId":59001
                    }
                ]
            }
        ],
        "dropID":[
            32
        ],
        "prizeWxp":70,"prizeGold": 300,
        "prizeXp":600,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 26,
        "rank": 55,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS4":{"objects":[
                {"id":10,"weight":2},
                {"id":18,"weight":2},
                {"id":36,"weight":2},
                {"id":38,"weight":2},
                {"id":39,"weight":2},
                {"id":11,"weight":2},
                {"id":9,"weight":2}]},
            "PoolS4R":{"objects":[
                {"id":40,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:110}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:110},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:110},
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 66,
                         "count":1,
                         "keyed":true
                     },
                    {
                        "id": 162,
                        "count":1,
                        "questOnly":true,
                        "collectId":113001
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:110},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:110},

                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 64,
                        "count":1,
                        "collectId":60001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:110}
                    }
                ]
            }
        ],
        "dropID":[
            33
        ],
        "prizeWxp":70,"prizeGold": 300,
        "prizeXp":600,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 27,
        "rank": 60,
        "collectId":62001,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS4":{"objects":[
                {"id":10,"weight":2},
                {"id":18,"weight":2},
                {"id":36,"weight":2},
                {"id":38,"weight":2},
                {"id":39,"weight":2},
                {"id":11,"weight":2},
                {"id":9,"weight":2}]},
            "PoolS4R":{"objects":[
                {"id":40,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:111}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:111},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:111},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 64,
                        "count":1,
                        "keyed":true
                    }
                ]
            },

            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:111},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:111},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 64,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 66,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:111}
                    }
                ]
            }
        ],
        "dropID":[
            34
        ],
        "prizeWxp":70,"prizeGold": 300,
        "prizeXp":600,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 28,
        "rank": 65,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS4":{"objects":[
                {"id":10,"weight":2},
                {"id":18,"weight":2},
                {"id":36,"weight":2},
                {"id":38,"weight":2},
                {"id":39,"weight":2},
                {"id":11,"weight":2},
                {"id":9,"weight":2}]},
            "PoolS4R":{"objects":[
                {"id":40,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:112}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:112},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:112},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 64,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 66,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS4","from":10,to:14,skill:[{id:154}],dropPrize:112},
                     {"pool":"PoolS4R","from":0,to:2,skill:[{id:154}],dropPrize:112},
                     {
                         "id": 149,
                         "count":3
                     },
                    {
                        "id": 64,
                        "count":2,
                        "keyed":true,
                        "collectId":64002,
                        "questOnly":true
                    },
                    {
                        "id": 138,
                        "count":1,
                        "pos":12,
                        "collectId":63001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:112}
                    },
                    {
                        "id": 57,
                        "count":2,
                        "keyed":true,
                        "collectId":64001,
                        "questOnly":true
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[
            35
        ],
        "prizeWxp":70,"prizeGold": 300,
        "prizeXp":600,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 29,
        "collectId":65001,
        "rank": 78,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS5":{"objects":[
                {"id":12,"weight":2},
                {"id":47,"weight":2},
                {"id":39,"weight":2},
                {"id":69,"weight":2},
                {"id":42,"weight":2},
                {"id":49,"weight":2},
                {"id":43,"weight":2},
                {"id":46,"weight":2}]},
            "PoolS5R":{"objects":[
                {"id":45,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:113}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:113},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:113},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id":86,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:113},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:113},
                     {
                         "id": 149,
                         "count":2
                     },
                    {
                        "id": 62,
                        "count":2,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:113}
                    }
                ]
            }
        ],
        "dropID":[
            36
        ],
        "prizeWxp":100,"prizeGold":400,
        "prizeXp":800,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 30,
        "rank": 84,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS5":{"objects":[
                {"id":12,"weight":2},
                {"id":47,"weight":2},
                {"id":39,"weight":2},
                {"id":69,"weight":2},
                {"id":42,"weight":2},
                {"id":49,"weight":2},
                {"id":43,"weight":2},
                {"id":46,"weight":2}]},
            "PoolS5R":{"objects":[
                {"id":45,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:114}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:114},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:114},
                     {
                         "id": 149,
                         "count":2
                     },
                    {
                        "id":86,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id":62,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:114},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:114},
                     {
                         "id": 149,
                         "count":2
                     },
                    {
                        "id": 60,
                        "count":1,
                        "collectId":67001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:114}
                    }]
            }
        ],
        "dropID":[
            37
        ],
        "prizeWxp":100,"prizeGold":400,
        "prizeXp":800,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 31,
        "rank": 90,
        "collectId":69001,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS5":{"objects":[
                {"id":12,"weight":2},
                {"id":47,"weight":2},
                {"id":39,"weight":2},
                {"id":69,"weight":2},
                {"id":42,"weight":2},
                {"id":49,"weight":2},
                {"id":43,"weight":2},
                {"id":46,"weight":2}]},
            "PoolS5R":{"objects":[
                {"id":45,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:115}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:115},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:115},
                    {
                        "id":155 ,
                        "count":1,
                        "questOnly":true,
                        "collectId":70001
                    },
                     {
                         "id":156 ,
                         "count":1,
                         "questOnly":true,
                         "collectId":70001
                     },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id":59,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id":62,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:115},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:115},
                    {
                        "id": 149,
                        "count":3
                    },
                     {
                         "id":155 ,
                         "count":1,
                         "questOnly":true,
                         "collectId":70001
                     },
                     {
                         "id":156 ,
                         "count":1,
                         "questOnly":true,
                         "collectId":70001
                     },
                    {
                        "id": 60,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 66,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:115}
                    },
                    {
                        "id": 62,
                        "count":1,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[
            38
        ],
        "prizeWxp":100,"prizeGold":400,
        "prizeXp":800,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 32,
        "rank": 97,
        "collectId":71001,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS5":{"objects":[
                {"id":12,"weight":2},
                {"id":47,"weight":2},
                {"id":39,"weight":2},
                {"id":69,"weight":2},
                {"id":42,"weight":2},
                {"id":49,"weight":2},
                {"id":43,"weight":2},
                {"id":46,"weight":2}]},
            "PoolS5R":{"objects":[
                {"id":45,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:116}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:116},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:116},
                    {
                        "id": 149 ,
                        "count":2
                    },
                    {
                        "id":60,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:116},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:116},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 60,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 62,
                        "count":2,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:116}
                    }
                ]
            }
        ],
        "dropID":[
           39
        ],
        "prizeWxp":100,"prizeGold":400,
        "prizeXp":800,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 33,
        "rank": 103,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS5":{"objects":[
                {"id":12,"weight":2},
                {"id":47,"weight":2},
                {"id":39,"weight":2},
                {"id":69,"weight":2},
                {"id":42,"weight":2},
                {"id":49,"weight":2},
                {"id":43,"weight":2},
                {"id":46,"weight":2}]},
            "PoolS5R":{"objects":[
                {"id":45,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:117}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:117},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:117},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id":63,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:117},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:117},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 98,
                        "count":1,
                        "collectId":73001,
                        "questOnly":true
                    },
                    {
                        "id": 87,
                        "count":1,
                        "collectId":72001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:117}
                    }
                ]
            }
        ],
        "dropID":[
           40
        ],
        "prizeWxp":100,"prizeGold":400,
        "prizeXp":800,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 34,
        "rank": 109,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS5":{"objects":[
                {"id":12,"weight":2},
                {"id":47,"weight":2},
                {"id":39,"weight":2},
                {"id":69,"weight":2},
                {"id":42,"weight":2},
                {"id":49,"weight":2},
                {"id":43,"weight":2},
                {"id":46,"weight":2}]},
            "PoolS5R":{"objects":[
                {"id":45,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:118}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:118},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:118},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id":63,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:118},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:118},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 87,
                        "count":2,
                        "collectId":74001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:118}
                    }
                ]
            }
        ],
        "dropID":[
            41
        ],
        "prizeWxp":100,"prizeGold":400,
        "prizeXp":800,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 35,
        "rank": 114,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
        "PoolS5":{"objects":[
            {"id":12,"weight":2},
            {"id":47,"weight":2},
            {"id":39,"weight":2},
            {"id":69,"weight":2},
            {"id":42,"weight":2},
            {"id":49,"weight":2},
            {"id":43,"weight":2},
            {"id":46,"weight":2}]},
        "PoolS5R":{"objects":[
            {"id":45,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:119}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:14,skill:[{id:154}],dropPrize:119},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:119},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id":65,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS5","from":10,to:15,skill:[{id:154}],dropPrize:119},
                     {"pool":"PoolS5R","from":0,to:2,skill:[{id:154}],dropPrize:119},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 98,
                        "count":1,
                        "keyed":true,
                        "collectId":76001,
                        "questOnly":true
                    },
                    {
                        "id": 139,
                        "count":1,
                        "pos":12,
                        "collectId":75001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:119}
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[
            42
        ],
        "prizeWxp":100,"prizeGold":400,
        "prizeXp":800,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 36,
        "rank": 120,
        "collectId":77001,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS6":{"objects":[
                {"id":46,"weight":2},
                {"id":49,"weight":2},
                {"id":71,"weight":2},
                {"id":70,"weight":2},
                {"id":50,"weight":2},
                {"id":81,"weight":2},
                {"id":79,"weight":2}]},
            "PoolS6R":{"objects":[
                {"id":48,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:120}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:120},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:120},
                    {
                        "id": 88 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:120},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:120},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 98 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:120}
                    }
                ]
            }
        ],
        "dropID":[
            43
        ],
        "prizeWxp":130,"prizeGold":600,
        "prizeXp":1000,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 37,
        "rank": 130,
        "collectId":79001,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS6":{"objects":[
                {"id":46,"weight":2},
                {"id":49,"weight":2},
                {"id":71,"weight":2},
                {"id":70,"weight":2},
                {"id":50,"weight":2},
                {"id":81,"weight":2},
                {"id":79,"weight":2}]},
            "PoolS6R":{"objects":[
                {"id":48,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:121}],
        "levels" :[
             {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:121},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:121},
                     {
                         "id":156,
                         "count":1,
                         "collectId":80001,
                         "questOnly":true
                     },
                    {
                        "id": 88 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:121},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:121},
                    {
                        "id":65 ,
                        "count":2,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 98 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:121}
                    }
                ]
            }
        ],
        "dropID":[
            44
        ],
        "prizeWxp":130,"prizeGold":600,
        "prizeXp":1000,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 38,
        "rank": 135,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS6":{"objects":[
                {"id":46,"weight":2},
                {"id":49,"weight":2},
                {"id":71,"weight":2},
                {"id":70,"weight":2},
                {"id":50,"weight":2},
                {"id":81,"weight":2},
                {"id":79,"weight":2}]},
            "PoolS6R":{"objects":[
                {"id":48,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:122}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:122},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:122},
                     {
                         "id": 61,
                         "count":1,
                         "collectId":82001,
                         "questOnly":true
                     },
                    {
                        "id": 98 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:122},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:122},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 96,
                        "count":1,
                        "collectId":81001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:122}
                    }
                ]
            }
        ],
        "dropID":[
            45
        ],
        "prizeWxp":130,"prizeGold":600,
        "prizeXp":1000,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 39,
        "rank": 140,
        "collectId":83001,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS6":{"objects":[
                {"id":46,"weight":2},
                {"id":49,"weight":2},
                {"id":71,"weight":2},
                {"id":70,"weight":2},
                {"id":50,"weight":2},
                {"id":81,"weight":2},
                {"id":79,"weight":2}]},
            "PoolS6R":{"objects":[
                {"id":48,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:123}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:123},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:123},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 98 ,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:123},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:123},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 96,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:123}
                    },
                    {
                        "id": 65,
                        "count":2,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[
            46
        ],
        "prizeWxp":130,"prizeGold":600,
        "prizeXp":1000,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 40,
        "rank": 150,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS6":{"objects":[
                {"id":46,"weight":2},
                {"id":49,"weight":2},
                {"id":71,"weight":2},
                {"id":70,"weight":2},
                {"id":50,"weight":2},
                {"id":81,"weight":2},
                {"id":79,"weight":2}]},
            "PoolS6R":{"objects":[
                {"id":48,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:124}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:124},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:124},
                    {
                        "id": 160,
                        "count":1,
                        "collectId":86001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 96 ,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:124},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:124},
                    {
                        "id": 160,
                        "count":1,
                        "collectId":86001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 89,
                        "count":1,
                        "collectId":85001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:124}
                    }
                ]
            }
        ],
        "dropID":[
            47
        ],
        "prizeWxp":130,"prizeGold":600,
        "prizeXp":1000,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 41,
        "rank": 160,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS6":{"objects":[
                {"id":46,"weight":2},
                {"id":49,"weight":2},
                {"id":71,"weight":2},
                {"id":70,"weight":2},
                {"id":50,"weight":2},
                {"id":81,"weight":2},
                {"id":79,"weight":2}]},
            "PoolS6R":{"objects":[
                {"id":48,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:125}],
        "collectId":87001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:125},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:125},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 61,
                        "count":1,
                        "collectId":88001,
                        "questOnly":true
                    },
                     {
                        "id": 161,
                        "count":1,
                        "collectId":89001,
                        "questOnly":true
                    },
                    {
                        "id": 89 ,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:125},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:125},
                    {
                        "id": 161,
                        "count":1,
                        "collectId":89001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 89,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:125}
                    },
                    {
                        "id": 87,
                        "count":2,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[
            48
        ],
        "prizeWxp":130,"prizeGold":600,
        "prizeXp":1000,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 42,
        "rank": 163,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS6":{"objects":[
                {"id":46,"weight":2},
                {"id":49,"weight":2},
                {"id":71,"weight":2},
                {"id":70,"weight":2},
                {"id":50,"weight":2},
                {"id":81,"weight":2},
                {"id":79,"weight":2}]},
            "PoolS6R":{"objects":[
                {"id":48,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:126}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:14,skill:[{id:154}],dropPrize:126},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:126},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 89 ,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS6","from":10,to:12,skill:[{id:154}],dropPrize:126},
                     {"pool":"PoolS6R","from":0,to:2,skill:[{id:154}],dropPrize:126},
                    {
                        "id": 65,
                        "count":2,
                        "keyed":true,
                        "questOnly":true,
                        "collectId":91001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 89,
                        "count":2,
                        "keyed":true,
                        "questOnly":true,
                        "collectId": 91002
                    },
                    {
                        "id": 87,
                        "count":2,
                        "keyed":true,
                        "questOnly":true,
                        "collectId":91003
                    },
                    {
                        "id": 140,
                        "count":1,
                        "pos":12,
                        "collectId":90001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:126}
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[
            49
        ],
        "prizeWxp":130,"prizeGold":600,
        "prizeXp":1000,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 43,
        "rank": 173,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS7":{"objects":[
                {"id":50,"weight":2},
                {"id":67,"weight":2},
                {"id":71,"weight":2},
                {"id":68,"weight":2},
                {"id":74,"weight":2},
                {"id":73,"weight":2}]},
            "PoolS7R":{"objects":[
                {"id":72,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:127}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:127},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:127},
                    {
                        "id": 50,
                        "count":4
                    },
                    {
                        "id": 71 ,
                        "count":2
                    },
                    {
                        "id": 67,
                        "count":2
                    },
                    {
                        "id": 94,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:127},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:127},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id":151,
                        "count":4,
                        "questOnly":true,
                        "collectId":93001
                    },
                    {
                        "id": 92,
                        "count":1,
                        "collectId":92001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:127}
                    }
                ]
            }
        ],
        "dropID":[
            50

        ],
        "prizeWxp":160,"prizeGold":800,
        "prizeXp":1200,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 44,
        "rank": 180,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185,  "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS7":{"objects":[
                {"id":50,"weight":2},
                {"id":67,"weight":2},
                {"id":71,"weight":2},
                {"id":68,"weight":2},
                {"id":74,"weight":2},
                {"id":73,"weight":2}]},
            "PoolS7R":{"objects":[
                {"id":72,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:128}],
        "collectId":95001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:128},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:128},
                    {
                        "id":152,
                        "count":4,
                        "questOnly":true,
                        "collectId":93002
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 94,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:128},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:128},
                    {
                        "id": 94 ,
                        "count":2,
                        "keyed":true
                    },
                    {
                        "id": 92,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:128}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            51
        ],
        "prizeWxp":160,"prizeGold":800,
        "prizeXp":1200,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 45,
        "rank": 192,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS7":{"objects":[
                {"id":50,"weight":2},
                {"id":67,"weight":2},
                {"id":71,"weight":2},
                {"id":68,"weight":2},
                {"id":74,"weight":2},
                {"id":73,"weight":2}]},
            "PoolS7R":{"objects":[
                {"id":72,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:129}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:129},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:129},
                    {
                        "id":144,
                        "count":2,
                        "questOnly":true,
                        "collectId":93003
                    },
                     {
                         "id": 153 ,
                         "count":1,
                         "questOnly":true,
                         "collectId":98001
                     },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 92,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:129},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:129},
                    {
                        "id": 61 ,
                        "count":1,
                        "collectId":97001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:129}
                    },
                     {
                         "id":144,
                         "count":2,
                         "questOnly":true,
                         "collectId":93003
                     },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            52
        ],
        "prizeWxp":160,"prizeGold":800,
        "prizeXp":1200,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 46,
        "rank": 200,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS7":{"objects":[
                {"id":50,"weight":2},
                {"id":67,"weight":2},
                {"id":71,"weight":2},
                {"id":68,"weight":2},
                {"id":74,"weight":2},
                {"id":73,"weight":2}]},
            "PoolS7R":{"objects":[
                {"id":72,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:130}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:130},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:130},
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 119 ,
                         "count":3,
                         "keyed":true,
                         "questOnly":true,
                         "collectId":100001
                     },
                    {
                        "id": 92,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:130},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:130},
                    {
                        "id": 119 ,
                        "count":1,
                        "collectId":99001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:130}
                    },
                    {
                        "id": 119 ,
                        "count":2,
                        "keyed":true,
                        "questOnly":true,
                        "collectId":100001
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            53
        ],
        "prizeWxp":160,"prizeGold":800,
        "prizeXp":1200,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 47,
        "rank": 220,
        "levelCount" :2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS7":{"objects":[
                {"id":50,"weight":2},
                {"id":67,"weight":2},
                {"id":71,"weight":2},
                {"id":68,"weight":2},
                {"id":74,"weight":2},
                {"id":73,"weight":2}]},
            "PoolS7R":{"objects":[
                {"id":72,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:131}],
        "collectId":101001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:131},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:131},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 61,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:131},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:131},
                    {
                        "id": 119 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:131}
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 94 ,
                        "count":2,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[
           54
        ],
        "prizeWxp":160,"prizeGold":800,
        "prizeXp":1200,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 48,
        "rank":235,
        "collectId":102001,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS7":{"objects":[
                {"id":50,"weight":2},
                {"id":67,"weight":2},
                {"id":71,"weight":2},
                {"id":68,"weight":2},
                {"id":74,"weight":2},
                {"id":73,"weight":2}]},
            "PoolS7R":{"objects":[
                {"id":72,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:132}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:132},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:132},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 119,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:132},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:132},
                    {
                        "id": 61 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 92 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:132}
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id":145,
                        "count":1,
                        "questOnly":true,
                        "collectId":94001
                    },
                    {
                        "id": 94 ,
                        "count":2,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[
            55
        ],
        "prizeWxp":160,"prizeGold":800,
        "prizeXp":1200,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 49,
        "rank": 254,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS7":{"objects":[
                {"id":50,"weight":2},
                {"id":67,"weight":2},
                {"id":71,"weight":2},
                {"id":68,"weight":2},
                {"id":74,"weight":2},
                {"id":73,"weight":2}]},
            "PoolS7R":{"objects":[
                {"id":72,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:133}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:133},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:133},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 119,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS7","from":10,to:13,skill:[{id:154}],dropPrize:133},
                     {"pool":"PoolS7R","from":0,to:2,skill:[{id:154}],dropPrize:133},
                    {
                        "id": 124 ,
                        "count":1,
                        "collectId":103001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:133}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
           56
        ],
        "prizeWxp":160,"prizeGold":800,
        "prizeXp":1200,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 50,
        "rank": 265,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS8":{"objects":[
                {"id":73,"weight":2},
                {"id":74,"weight":2},
                {"id":75,"weight":2},
                {"id":102,"weight":2},
                {"id":101,"weight":2},
                {"id":44,"weight":2}]},
            "PoolS8R":{"objects":[
                {"id":77,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:134}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:134},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:134},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 61,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:134},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:134},
                    {
                        "id": 124 ,
                        "count":1,
                        "collectId":104001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:134}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            57
        ],
        "prizeWxp":200,"prizeGold":1050,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 51,
        "rank": 275,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS8":{"objects":[
                {"id":73,"weight":2},
                {"id":74,"weight":2},
                {"id":75,"weight":2},
                {"id":102,"weight":2},
                {"id":101,"weight":2},
                {"id":44,"weight":2}]},
            "PoolS8R":{"objects":[
                {"id":77,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:135}],
        "collectId":106001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:135},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:135},
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 155,
                         "count":1,
                         "questOnly":true,
                         "collectId":107001
                     },
                    {
                        "id": 61,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:135},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:135},
                    {
                        "id": 124 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:135}
                    },
                    {
                        "id": 94 ,
                        "count":2,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
           58
        ],
        "prizeWxp":200,"prizeGold":1050,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 52,
        "rank": 285,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS8":{"objects":[
                {"id":73,"weight":2},
                {"id":74,"weight":2},
                {"id":75,"weight":2},
                {"id":102,"weight":2},
                {"id":101,"weight":2},
                {"id":44,"weight":2}]},
            "PoolS8R":{"objects":[
                {"id":77,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:136}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:136},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:136},
                    {
                        "id": 154,
                        "count":1,
                        "questOnly":true,
                        "collectId":107002
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 124,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:136},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:136},
                    {
                        "id": 121 ,
                        "count":1,
                        "collectId":109001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:136}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            59
        ],
        "prizeWxp":200,"prizeGold":1050,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 53,
        "rank": 292,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS8":{"objects":[
                {"id":73,"weight":2},
                {"id":74,"weight":2},
                {"id":75,"weight":2},
                {"id":102,"weight":2},
                {"id":101,"weight":2},
                {"id":44,"weight":2}]},
            "PoolS8R":{"objects":[
                {"id":77,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:137}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:137},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:137},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 124,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:137},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:137},
                    {
                        "id": 121 ,
                        "count":1,
                        "collectId":110001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:137}
                    },
                     {
                         "id": 156,
                         "count":1,
                         "questOnly":true,
                         "collectId":107003
                     },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            60
        ],
        "prizeWxp":200,"prizeGold":1050,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 54,
        "rank": 300,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS8":{"objects":[
                {"id":73,"weight":2},
                {"id":74,"weight":2},
                {"id":75,"weight":2},
                {"id":102,"weight":2},
                {"id":101,"weight":2},
                {"id":44,"weight":2}]},
            "PoolS8R":{"objects":[
                {"id":77,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:138}],
        "collectId":111001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:138},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:138},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 121,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:138},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:138},
                     {
                         "id": 130,
                         "count":1,
                         "questOnly":true,
                         "collectId":108001
                     },
                    {
                        "id": 149,
                        "count":2
                    },
                     {
                         "id": 121,
                         "count":1,
                         property:{
                             "keyed":true,
                             skill:[{id:153}],
                             dropPrize:138}
                     }
                ]
            }
        ],
        "dropID":[
            61
        ],
        "prizeWxp":200,"prizeGold":1050,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 55,
        "rank": 330,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS8":{"objects":[
                {"id":73,"weight":2},
                {"id":74,"weight":2},
                {"id":75,"weight":2},
                {"id":102,"weight":2},
                {"id":101,"weight":2},
                {"id":44,"weight":2}]},
            "PoolS8R":{"objects":[
                {"id":77,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:139}],
        "collectId":112001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:139},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:139},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 95,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:139},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:139},
                    {
                        "id": 121 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 124 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:139}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
           62
        ],
        "prizeWxp":200,"prizeGold":1050,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 56,
        "rank": 350,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS8":{"objects":[
                {"id":73,"weight":2},
                {"id":74,"weight":2},
                {"id":75,"weight":2},
                {"id":102,"weight":2},
                {"id":101,"weight":2},
                {"id":44,"weight":2}]},
            "PoolS8R":{"objects":[
                {"id":77,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:140}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:140},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:140},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 95,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS8","from":10,to:13,skill:[{id:154}],dropPrize:140},
                     {"pool":"PoolS8R","from":0,to:2,skill:[{id:154}],dropPrize:140},
                    {
                        "id": 130 ,
                        "count":1,
                        "collectId":115001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:140}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
           63
        ],
        "prizeWxp":200,"prizeGold":1050,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 57,
        "rank": 380,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS9":{"objects":[
                {"id":78,"weight":2},
                {"id":101,"weight":2},
                {"id":103,"weight":2},
                {"id":111,"weight":2},
                {"id":110,"weight":2}]},
            "PoolS9R":{"objects":[
                {"id":80,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:141}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:141},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:141},
                     {
                         "id": 161,
                         "count":2,
                         "collectId":116001,
                         "questOnly":true
                     },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 120,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:141},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:141},
                    {
                        "id": 128 ,
                        "count":1,
                        "collectId":117001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:141}
                    },
                     {
                         "id": 161,
                         "count":1,
                         "collectId":116001,
                         "questOnly":true
                     },
                    {
                        "id": 161,
                        "count":1,
                        "collectId":116001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
           64
        ],
        "prizeWxp":250,"prizeGold":1400,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 58,
        "rank": 400,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS9":{"objects":[
                {"id":78,"weight":2},
                {"id":101,"weight":2},
                {"id":103,"weight":2},
                {"id":111,"weight":2},
                {"id":110,"weight":2}]},
            "PoolS9R":{"objects":[
                {"id":80,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:142}],
        "collectId":119001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:142},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:142},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 97,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:142},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:142},
                    {
                        "id": 128 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:142}
                    },
                    {
                        "id": 97 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            65
        ],
        "prizeWxp":250,"prizeGold":1400,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 59,
        "rank": 430,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS9":{"objects":[
                {"id":78,"weight":2},
                {"id":101,"weight":2},
                {"id":103,"weight":2},
                {"id":111,"weight":2},
                {"id":110,"weight":2}]},
            "PoolS9R":{"objects":[
                {"id":80,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:143}],
        "collectId":120001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:143},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:143},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 97,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:143},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:143},
                    {
                        "id": 130 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:143}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            66
        ],
        "prizeWxp":250,"prizeGold":1400,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 60,
        "rank": 450,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS9":{"objects":[
                {"id":78,"weight":2},
                {"id":101,"weight":2},
                {"id":103,"weight":2},
                {"id":111,"weight":2},
                {"id":110,"weight":2}]},
            "PoolS9R":{"objects":[
                {"id":80,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:144}],
        "collectId":121001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:144},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:144},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 144,
                        "count":2,
                        "collectId":125001,
                        "keyed":true
                    },
                    {
                        "id": 128,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:144},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:144},
                    {
                        "id": 130 ,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:144}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            67
        ],
        "prizeWxp":250,"prizeGold":1400,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 61,
        "rank": 500,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS9":{"objects":[
                {"id":78,"weight":2},
                {"id":101,"weight":2},
                {"id":103,"weight":2},
                {"id":111,"weight":2},
                {"id":110,"weight":2}]},
            "PoolS9R":{"objects":[
                {"id":80,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:145}],
        "collectId":122001,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:145},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:145},
                    {
                        "id": 145,
                        "count":2,
                        "collectId":125002,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 127,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:145},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:145},
                    {
                        "id": 127,
                        "count":2,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:145}
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 97,
                        "count":2,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[
            68
        ],
        "prizeWxp":250,"prizeGold":1400,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 62,
        "rank": 520,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS9":{"objects":[
                {"id":78,"weight":2},
                {"id":101,"weight":2},
                {"id":103,"weight":2},
                {"id":111,"weight":2},
                {"id":110,"weight":2}]},
            "PoolS9R":{"objects":[
                {"id":80,"weight":2},
                {"id":104,"weight":2}]}
        },
        "collectId":123001,
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:146}],
        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:146},
                    {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:146},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 156,
                        "count":1,
                        "questOnly":true,
                        "collectId":127001
                    },
                    {
                        "id": 157,
                        "count":1,
                        "questOnly":true,
                        "collectId":127001
                    },
                    {
                        "id": 152,
                        "count":2,
                        "collectId":125003,
                        "keyed":true
                    },
                    {
                        "id": 127,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:146},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:146},
                    {
                        "id": 130,
                        "count":2,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:146}
                    },
                    {
                        "id": 153,
                        "count":1,
                        "questOnly":true,
                        "collectId":127001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 97,
                        "count":3,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[
            69
        ],
        "prizeWxp":250,"prizeGold":1400,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 63,
        "rank": 550,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS9":{"objects":[
                {"id":78,"weight":2},
                {"id":101,"weight":2},
                {"id":103,"weight":2},
                {"id":111,"weight":2},
                {"id":110,"weight":2}]},
            "PoolS9R":{"objects":[
                {"id":80,"weight":2},
                {"id":104,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:147}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:147},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:147},
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 130,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS9","from":10,to:13,skill:[{id:154}],dropPrize:147},
                     {"pool":"PoolS9R","from":0,to:2,skill:[{id:154}],dropPrize:147},
                    {
                        "id": 93,
                        "count":1,
                        "collectId":124001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:147}
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
            70
        ],
        "prizeWxp":250,"prizeGold":1400,
        "prizeXp":1400,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 64,
        "levelCount" :5,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                }
            ]},
            "elitePool":{"objects":[
                {
                    "id":22,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":23,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2,
                    "keyed":true
                }
            ]}
        },

        "levels" :[
            {
                 "objects" :[
                     {"pool":"normalPool","from":0,to:4},
                     {"pool":"soldierPool","from":6,to:9},
                     {"id": 149,from:0, to: 2
                     },
                     {id: 8,from:0, to: 2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,from:0, to: 2
                    },
                    {id: 8,from:0, to: 2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,from:0, to: 2
                    },
                    {id: 8,from:0, to: 2}
                ]
            },
    {
        "objects" :[
            {"pool":"normalPool","from":0,to:4},
            {"pool":"soldierPool","from":6,to:9},
            {"pool":"elitePool","count":1},
            {"id": 149,from:0, to: 2
            }
        ]
    },
    {
        "objects" :[
            {"pool":"normalPool","from":0,to:4},
            {"pool":"soldierPool","from":6,to:9},
            {"pool":"bossPool","count":1},
            {"id": 149,from:0, to: 2},
            {id: 8,from:0, to: 2}
        ]
    }],
        "dropID":
            [
                71
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 20
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":10,
                    "type":2,
                    "count": 20
                },
                {
                    "level":15,
                    "type":1,
                    "count": 1000
                },
                {
                    "level":20,
                    "type":1,
                    "count": 1500
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":2,
                    "count": 30
                },
                {
                    "level":45,
                    "type":2,
                    "count": 30
                },
                {
                    "level":55,
                    "type":2,
                    "count": 30
                },
                {
                    "level":65,
                    "type":2,
                    "count": 30
                },
                {
                    "level":75,
                    "type":2,
                    "count": 30
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,
        "prizeGold":100,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":0.4,
        "rank":4
    },
    {
        "dungeonId": 65,
        "levelCount" :5,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                }
            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "elitePool":{"objects":[
                {
                    "id":33,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2,
                    "keyed":true
                }
            ]},
            "rangePool":{"objects":[

                {
                    "id":8,
                    "weight":1
                },
                {
                    "id":16,
                    "weight":1
                }
            ]}
        },
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"pool":"rangePool","from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"pool":"rangePool","from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"pool":"rangePool","from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2},
                    {"pool":"rangePool","from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2},
                    {"pool":"rangePool","from":0,to:2}
                ]
            }],
        "dropID":
            [
                72
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 20
                },
                {
                    "level":5,
                    "type":1,
                    "count": 1000
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 3
                },
                {
                    "level":9,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":10,
                    "type":2,
                    "count": 20
                },
                {
                    "level":15,
                    "type":1,
                    "count": 1500
                },
                {
                    "level":20,
                    "type":1,
                    "count": 2500
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 4000
                },
                {
                    "level":45,
                    "type":2,
                    "count": 30
                },
                {
                    "level":55,
                    "type":2,
                    "count": 30
                },
                {
                    "level":65,
                    "type":2,
                    "count": 30
                },
                {
                    "level":75,
                    "type":2,
                    "count": 30
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":150,
        "prizeXp":0,
        "wxpRate":0,"goldRate":0.5,
        "xpRate":0,
        "rank":16
    },
    {
        "dungeonId": 66,
        "levelCount" :5,
        "pool":{
            "soldierPool":{"objects":[
            {
                "id":36,
                "weight":2
            },
            {
                "id":37,
                "weight":2
            },
            {
                "id":17,
                "weight":2
            },
            {
                "id":9,
                "weight":2
            },
            {
                "id":10,
                "weight":2
            },
            {
                "id":38,
                "weight":2
            }
        ]},
            "elitePool":{"objects":[
                {
                    "id":30,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"id":13,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"id":13,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"id":13,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2},
                    {"id":13,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2},
                    {"id":13,"from":0,to:2}
                ]
            }],
        "dropID":
            [
                73
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 20
                },
                {
                    "level":5,
                    "type":1,
                    "count": 1000
                },
                {
                    "level":7,
                    "type":0,
                    "value":854,
                    "count": 3
                },
                {
                    "level":9,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":10,
                    "type":2,
                    "count": 20
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2500
                },
                {
                    "level":20,
                    "type":1,
                    "count": 3500
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 4500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 30
                },
                {
                    "level":55,
                    "type":2,
                    "count": 30
                },
                {
                    "level":65,
                    "type":2,
                    "count": 30
                },
                {
                    "level":75,
                    "type":2,
                    "count": 30
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":200,
        "prizeXp":0,
        "wxpRate":0,"goldRate":0.5,
        "xpRate":0,
        "rank":46
    },
    {
        "dungeonId": 67,
        "levelCount" :5,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":50,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                }
            ]},
            "elitePool":{"objects":[
                {
                    "id":56,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                }
            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"id":40,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"id":40,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"id":40,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2},
                    {"id":40,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2},
                    {"id":40,"from":0,to:2}
                ]
            }],
        "dropID":
            [
                74
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 20
                },
                {
                    "level":5,
                    "type":1,
                    "count": 1500
                },
                {
                    "level":7,
                    "type":0,
                    "value":854,
                    "count": 5
                },
                {
                    "level":9,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":10,
                    "type":2,
                    "count": 20
                },
                {
                    "level":15,
                    "type":1,
                    "count": 3000
                },
                {
                    "level":20,
                    "type":0,
                    "value":854,
                    "count": 10
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 30
                },
                {
                    "level":55,
                    "type":2,
                    "count": 30
                },
                {
                    "level":65,
                    "type":2,
                    "count": 30
                },
                {
                    "level":75,
                    "type":2,
                    "count": 30
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":300,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":0.4,
        "rank":95
    },
    {
        "dungeonId": 68,
        "levelCount" :5,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                }
            ]},
            "elitePool":{"objects":[
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":62,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2,
                    "keyed":true
                }
            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"id":45,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"id":45,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2},
                    {"id":45,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2},
                    {"id":45,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2},
                    {"id":45,"from":0,to:2}
                ]
            }
        ],
        "dropID":
            [
                75
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 20
                },
                {
                    "level":5,
                    "type":1,
                    "count":2000
                },
                {
                    "level":7,
                    "type":0,
                    "value":855,
                    "count": 3
                },
                {
                    "level":9,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":10,
                    "type":2,
                    "count": 20
                },
                {
                    "level":15,
                    "type":1,
                    "count": 3500
                },
                {
                    "level":20,
                    "type":0,
                    "value":855,
                    "count": 7
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 6000
                },
                {
                    "level":45,
                    "type":2,
                    "count": 30
                },
                {
                    "level":55,
                    "type":2,
                    "count": 30
                },
                {
                    "level":65,
                    "type":2,
                    "count": 30
                },
                {
                    "level":75,
                    "type":2,
                    "count": 30
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":400,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":0.4,
        "rank":130
    },
    {
        "dungeonId": 69,
        "levelCount" :5,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":50,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                }
            ]},
            "elitePool":{"objects":[
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":1 ,
                    "keyed":true
                }
            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [
                76
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 20
                },
                {
                    "level":5,
                    "type":1,
                    "count":2500
                },
                {
                    "level":7,
                    "type":0,
                    "value":855,
                    "count": 5
                },
                {
                    "level":9,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":10,
                    "type":2,
                    "count": 20
                },
                {
                    "level":15,
                    "type":1,
                    "count": 4500
                },
                {
                    "level":20,
                    "type":0,
                    "value":855,
                    "count": 10
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 7000
                },
                {
                    "level":45,
                    "type":2,
                    "count": 30
                },
                {
                    "level":55,
                    "type":2,
                    "count": 30
                },
                {
                    "level":65,
                    "type":2,
                    "count": 30
                },
                {
                    "level":75,
                    "type":2,
                    "count": 30
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":600,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1,
        "rank":193
    },
    {
        "dungeonId": 70,
        "levelCount" :5,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":50,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                }
            ]},
            "elitePool":{"objects":[
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":92,
                    "weight":2
                },
                {
                    "id":94,
                    "weight":2
                },
                {
                    "id":61,
                    "weight":2
                },
                {
                    "id":119,
                    "weight":2
                },
                {
                    "id":124,
                    "weight":2
                }
            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 20
                },
                {
                    "level":5,
                    "type":1,
                    "count":3000
                },
                {
                    "level":7,
                    "type":0,
                    "value":856,
                    "count": 3
                },
                {
                    "level":9,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":10,
                    "type":2,
                    "count": 20
                },
                {
                    "level":15,
                    "type":1,
                    "count": 5000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 5
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 8000
                },
                {
                    "level":45,
                    "type":2,
                    "count": 30
                },
                {
                    "level":55,
                    "type":2,
                    "count": 30
                },
                {
                    "level":65,
                    "type":2,
                    "count": 30
                },
                {
                    "level":75,
                    "type":2,
                    "count": 30
                }
            ],
        "dropID":
            [
                77
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":800,
        "prizeXp":0,
        "wxpRate":0,"goldRate":0.5,
        "xpRate":0,
        "rank":280
    },
    {
        "dungeonId": 71,
        "levelCount" :5,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                }
            ]},
            "elitePool":{"objects":[
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [
                78
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 20
                },
                {
                    "level":5,
                    "type":1,
                    "count":3500
                },
                {
                    "level":7,
                    "type":0,
                    "value":856,
                    "count":6
                },
                {
                    "level":9,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":10,
                    "type":2,
                    "count": 20
                },
                {
                    "level":15,
                    "type":1,
                    "count": 6000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 10
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 9000
                },
                {
                    "level":45,
                    "type":2,
                    "count": 30
                },
                {
                    "level":55,
                    "type":2,
                    "count": 30
                },
                {
                    "level":65,
                    "type":2,
                    "count": 30
                },
                {
                    "level":75,
                    "type":2,
                    "count": 30
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":1050,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":0,
        "rank":440
    },
    {
        "dungeonId": 72,
        "levelCount" :5,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                } ,
                {
                    "id":110,
                    "weight":2
                }
            ]},
            "elitePool":{"objects":[
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2  ,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [
                79
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 20
                },
                {
                    "level":5,
                    "type":1,
                    "count":4000
                },
                {
                    "level":7,
                    "type":0,
                    "value":857,
                    "count":3
                },
                {
                    "level":9,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":10,
                    "type":2,
                    "count": 20
                },
                {
                    "level":15,
                    "type":1,
                    "count": 7000
                },
                {
                    "level":20,
                    "type":0,
                    "value":857,
                    "count": 5
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 10000
                },
                {
                    "level":45,
                    "type":2,
                    "count": 30
                },
                {
                    "level":55,
                    "type":2,
                    "count": 30
                },
                {
                    "level":65,
                    "type":2,
                    "count": 30
                },
                {
                    "level":75,
                    "type":2,
                    "count": 30
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":1400,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.3,
        "xpRate":0.4,
        "rank":558
    },
    {
        "dungeonId": 73,
        "levelCount" :5,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":8,
                    "weight":1
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":1
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                }
            ]},
            "elitePool":{"objects":[
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "bossPool":{"objects":[
                {
                    "id":32,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                }
            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"id": 149,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"elitePool","count":1},
                    {"id": 149,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":6,to:9},
                    {"pool":"bossPool","count":1},
                    {"id": 149,
                        "count":2
                    }
                ]
            }],
        "prize"://TODO
            [
                {
                    "rate": 0.2,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 525
                            },
                            {
                                "weight": 4,
                                "item": 3
                            }
                        ]
                }
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":0,
                    "count": 5
                },
                {
                    "level":2,
                    "type":2,
                    "count": 10
                },
                {
                    "level":5,
                    "type":3,
                    "count": 1000
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":488,"prizeGold":1940,
        "prizeXp":977,
        "wxpRate":1,"goldRate":0.3,
        "xpRate":0.4
    },
    {
        "dungeonId": 74,
        "levelCount" :5,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
        "soldierPool":{"objects":[
            {
                "id":15,
                "weight":2
            },
            {
                "id":14,
                "weight":2
            },
            {
                "id":8,
                "weight":1
            },
            {
                "id":6,
                "weight":2
            },
            {
                "id":16,
                "weight":1
            },
            {
                "id":37,
                "weight":2
            },
            {
                "id":35,
                "weight":2
            },
            {
                "id":36,
                "weight":2
            }
        ]},
        "elitePool":{"objects":[
            {
                "id":33,
                "weight":2,
                "keyed":true
            },
            {
                "id":23,
                "weight":2 ,
                "keyed":true
            },
            {
                "id":54,
                "weight":2 ,
                "keyed":true
            },
            {
                "id":34,
                "weight":2 ,
                "keyed":true
            },
            {
                "id":20,
                "weight":2,
                "keyed":true
            },
            {
                "id":21,
                "weight":2 ,
                "keyed":true
            }
        ]},
        "bossPool":{"objects":[
            {
                "id":32,
                "weight":2,
                "keyed":true
            },
            {
                "id":34,
                "weight":2,
                "keyed":true
            },
            {
                "id":33,
                "weight":2 ,
                "keyed":true
            },
            {
                "id":55,
                "weight":2 ,
                "keyed":true
            },
            {
                "id":52,
                "weight":2,
                "keyed":true
            },
            {
                "id":53,
                "weight":2 ,
                "keyed":true
            },
            {
                "id":30,
                "weight":2,
                "keyed":true
            }
        ]}
        },
        "levels" :[
            {
                "soldierCount":7
            },
            {
                "soldierCount":7 ,
                 "objects" :[{"pool":"normalPool","from":0,to:4}, {
                    "id": 149,
                    "count":2
                }
                ]
            },
            {
                "soldierCount":7 ,
                 "objects" :[{"pool":"normalPool","from":0,to:4}, {
                    "id": 149,
                    "count":2
                }
                ]
            },
            {
                "soldierCount":6,
                "eliteCount": 1
            },
            {
                "soldierCount":6 ,
                "bossCount":1 ,
                 "objects" :[{"pool":"normalPool","from":0,to:4}, {
                    "id": 149,
                    "count":2
                }
                ]
            }

        ],
        "prize"://TODO:
            [
                {
                    "rate": 0.2,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 525
                            },
                            {
                                "weight": 4,
                                "item": 3
                            }
                        ]
                }
            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":0,
                    "count": 5
                },
                {
                    "level":2,
                    "type":2,
                    "count": 10
                },
                {
                    "level":5,
                    "type":3,
                    "count": 1000
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":10,"prizeGold":30,
        "prizeXp":30,
        "wxpRate":1,"goldRate":0.3,
        "xpRate":0.4
    },
    {
        "dungeonId": 75,
        "levelCount" :6 ,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ] }
        },
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 140 ,
                        "count":1
                    },
                        {
                            "id": 149,
                            "count":2
                        }
                ],
                "rank": 20
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 139 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ],
                "rank": 20
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 138 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ],
                "rank": 20
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 137 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 136 ,
                        "count":1

                    } ,
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 135 ,
                        "count":1

                    },
                    {
                        "id": 149,
                        "count":2
                    }
                ]
            }
        ],
        "prize"://TODO:
            [
                {
                    "rate": 0.8,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 525
                            }
                        ]
                },
                {
                    "rate": 0.2,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 526
                            }
                        ]
                }
            ],
        "prizeWxp":100,
        "prizeGold": 400,
        "prizeXp":200,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 76,
        "rank": 0,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
         
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3,
                        "collectId":129001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2,
                        "collectId":130001
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3,
                        "collectId":129001
                    },
                    {
                        "id": 7,
                        "count":2,
                        "collectId":130001
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2,
                        "collectId":129001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2,
                        "collectId":130001
                    },
                    {
                        "id": 143,
                        "count":1,
                        "collectId":128001,
                        "questOnly":true
                    },
                    {
                        "id": 6,
                        "count":2
                    },
                    {
                        "id": 25,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3,
                        "collectId":129001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2,
                        "collectId":130001
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2,
                        "collectId":129001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2,
                        "collectId":130001
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2,
                        "collectId":129001
                    },
                    {
                        "id": 6 ,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2,
                        "collectId":130001
                    },
                    {
                        "id": 32,
                        "count":1,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":
            [
            ],
        "prizeWxp":0,"prizeGold": 0,
        "prizeXp":0,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1,
        "triggers": ["dungeon:no.reward.no.result"]
    },
    {
        "dungeonId": 77,
        "rank": 0,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
         
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 37 ,
                        "count":3
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":132001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":133001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 35,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 37 ,
                        "count":2
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":132001
                    },
                    {
                        "id": 16,
                        "count":1
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":133001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 35,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 53 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":132001
                    },
                    {
                        "id": 37,
                        "count":2
                    },
                    {
                        "id": 156,
                        "count":1,
                        "collectId":131001,
                        "questOnly":true
                    },
                    {
                        "id": 16,
                        "count":1
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":133001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 35,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 35,
                        "count":2
                    },
                    {
                        "id": 37 ,
                        "count":1
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":132001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":133001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 36,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 35,
                        "count":2
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":132001
                    },
                    {
                        "id": 37 ,
                        "count":2
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":133001
                    },
                    {
                        "id": 16,
                        "count":1
                    },
                    {
                        "id": 36,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 53,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":132001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":133001
                    },
                    {
                        "id": 52 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 36,
                        "count":1
                    },
                    {
                        "id": 35,
                        "count":2
                    }
                ]
            }
        ],
        "dropID":[
        ],
        "prizeWxp":0,"prizeGold": 0,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1,
        "triggers": ["dungeon:no.reward.no.result"]
    },
    {
        "dungeonId": 78,
        "rank": 0,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
         

        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 10,
                        "count":2
                    },
                    {
                        "id": 17,
                        "count":3 ,
                        "collectId":136001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 9,
                        "count":2
                    }
                ]
            },

            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 17,
                        "count":2 ,
                        "collectId":136001
                    },
                    {
                        "id": 10,
                        "count":1
                    },
                    {
                        "id": 13,
                        "count":1
                    },
                    {
                        "id": 9,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 17,
                        "count":1,
                        "collectId":136001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 36 ,
                        "count":1
                    },
                    {
                        "id": 154,
                        "count":1,
                        "questOnly":true,
                        "collectId":134001
                    },
                    {
                        "id": 10,
                        "count":2
                    },
                    {
                        "id": 55,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 13,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 17,
                        "count":1,
                        "collectId":136001
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 10,
                        "count":2
                    },
                    {
                        "id": 13,
                        "count":1
                    },
                    {
                        "id": 9,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 17,
                        "count":2,
                        "collectId":136001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 153,
                        "count":1,
                        "questOnly":true,
                        "collectId":134001
                    },
                    {
                        "id": 10,
                        "count":2
                    },
                    {
                        "id": 9,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 17,
                        "count":2,
                        "collectId":136001
                    },
                    {
                        "id": 10,
                        "count":2
                    },
                    {
                        "id": 153,
                        "count":1,
                        "questOnly":true,
                        "collectId":134001
                    },
                    {
                        "id": 156,
                        "count":1,
                        "questOnly":true,
                        "collectId":135001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 28,
                        "count":1,
                        "keyed":true,
                        "collectId":46001
                    },
                    {
                        "id": 13,
                        "count":1
                    }
                ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold":0,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1,
        "triggers": ["dungeon:no.reward.no.result"]
    },
    {
        "dungeonId": 79,
        "rank": 0,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
         

        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 18,
                        "count":4,
                        "collectId":139001
                    },
                    {
                        "id": 40,
                        "count":1
                    },
                    {
                        "id": 39,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 9,
                        "count":2
                    },
                    {
                        "id": 38,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 18,
                        "count":4,
                        "collectId":139001
                    },
                    {
                        "id": 40,
                        "count":1
                    },
                    {
                        "id": 9,
                        "count":1
                    },
                    {
                        "id": 38,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 18,
                        "count":5,
                        "collectId":139001
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 36 ,
                        "count":1
                    },
                    {
                        "id": 40,
                        "count":1
                    },
                    {
                        "id": 64,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 38,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 18,
                        "count":4,
                        "collectId":139001
                    },
                    {
                        "id": 39,
                        "count":2
                    },
                    {
                        "id": 11,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 38,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 18,
                        "count":5,
                        "collectId":139001
                    },
                    {
                        "id": 40,
                        "count":1
                    },
                    {
                        "id": 39,
                        "count":1
                    },
                    {
                        "id": 11,
                        "count":1
                    },
                    {
                        "id": 38,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 18,
                        "count":5,
                        "collectId":139001
                    },
                    {
                        "id": 149,
                        "count":3
                    },{
                        "id": 150,
                        "count":1,
                        "questOnly":true,
                        "collectId":137001
                    },
                    {
                        "id": 11,
                        "count":1
                    },
                    {
                        "id": 64,
                        "count":1,
                        "keyed":true,
                        "collectId":138001
                    },

                    {
                        "id": 40,
                        "count":1
                    },
                    {
                        "id": 66,
                        "count":1,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold": 0,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1,
        "triggers": ["dungeon:no.reward.no.result"]
    },
    {
        "dungeonId": 80,
        "rank": 0,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ] }
        },
         

        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 42,
                        "count":1,
                        "collectId":142001
                    },
                    {
                        "id": 43,
                        "count":1
                    },
                    {
                        "id": 49 ,
                        "count":2
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id": 69,
                        "count":1
                    },
                    {
                        "id": 45,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 42,
                        "count":1,
                        "collectId":142001
                    },
                    {
                        "id": 43,
                        "count":1
                    },
                    {
                        "id": 49 ,
                        "count":2
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id": 69,
                        "count":1
                    },
                    {
                        "id": 45,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 42,
                        "count":1,
                        "collectId":142001
                    },
                    {
                        "id": 49 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id": 43,
                        "count":1
                    },
                    {
                        "id":63,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 42,
                        "count":2,
                        "collectId":142001
                    },
                    {
                        "id": 43,
                        "count":1
                    },
                    {
                        "id": 47 ,
                        "count":1
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id": 69,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 42,
                        "count":2,
                        "collectId":142001
                    },
                    {
                        "id": 43,
                        "count":1
                    },
                    {
                        "id": 47 ,
                        "count":1
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id": 69,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 42,
                        "count":2,
                        "collectId":142001
                    },
                    {
                        "id": 47 ,
                        "count":1
                    },
                    {
                        "id": 12,
                        "count":1
                    },
                    {
                        "id": 43,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 158,
                        "count":1,
                        "collectId":140001,
                        "questOnly":true
                    },
                    {
                        "id": 69,
                        "count":1
                    },
                    {
                        "id": 87,
                        "count":2,
                        "collectId":141001,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold":0,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1,
        "triggers": ["dungeon:no.reward.no.result"]
    },
    {
        "dungeonId": 81,
        "rank": 0,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
         

        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 50,
                        "count":5
                    },
                    {
                        "id": 71,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 81 ,
                        "count":2
                    },
                    {
                        "id": 79,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 48,
                        "count":1,
                        "collectId":145001
                    },
                    {
                        "id": 50,
                        "count":4
                    },
                    {
                        "id": 71,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 81 ,
                        "count":1
                    },
                    {
                        "id": 79,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 48,
                        "count":1,
                        "collectId":145001
                    },
                    {
                        "id": 81 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 61,
                        "count":1,
                        "collectId":144001,
                        "questOnly":true
                    },
                    {
                        "id": 71,
                        "count":1
                    }, {
                        "id": 161,
                        "count":3,
                        "collectId":143001,
                        "questOnly":true
                    },
                    {
                        "id": 50,
                        "count":3
                    },
                    {
                        "id": 89 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 79,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 48,
                        "count":1,
                        "collectId":145001
                    },
                    {
                        "id": 50,
                        "count":5
                    }, {
                        "id": 161,
                        "count":3,
                        "collectId":143001,
                        "questOnly":true
                    },
                    {
                        "id": 81 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 79,
                        "count":1
                    },
                    {
                        "id": 71 ,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 48,
                        "count":1,
                        "collectId":145001
                    }, {
                        "id": 161,
                        "count":3,
                        "collectId":143001,
                        "questOnly":true
                    },
                    {
                        "id": 50,
                        "count":5
                    },
                    {
                        "id": 79,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 81 ,
                        "count":1
                    },
                    {
                        "id": 71 ,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 81 ,
                        "count":2
                    },
                    {
                        "id": 50,
                        "count":3
                    },
                    {
                        "id": 71 ,
                        "count":1
                    },
                    {
                        "id": 79,
                        "count":1
                    },
                    {
                        "id": 161,
                        "count":3,
                        "collectId":143001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 89,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 87,
                        "count":2,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold":0,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1,
        "triggers": ["dungeon:no.reward.no.result"]
    },
    {
        "dungeonId": 82,
        "rank":0,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
         

        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 68,
                        "count":2,
                        "collectId":148001
                    },
                    {
                        "id": 73,
                        "count":1
                    },
                    {
                        "id": 74 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 67,
                        "count":2
                    },
                    {
                        "id": 77,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 68,
                        "count":2,
                        "collectId":148001
                    },
                    {
                        "id": 73,
                        "count":1
                    },
                    {
                        "id": 74 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 67,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 68,
                        "count":2,
                        "collectId":148001
                    },
                    {
                        "id": 74,
                        "count":1
                    },
                    {
                        "id": 67,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 77,
                        "count":1
                    },
                    {
                        "id": 119,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 68,
                        "count":2,
                        "collectId":148001
                    },
                    {
                        "id": 74 ,
                        "count":2
                    },
                    {
                        "id": 73,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 67,
                        "count":2
                    }
                ]
            },

            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 68,
                        "count":2,
                        "collectId":148001
                    },
                    {
                        "id": 73,
                        "count":1
                    },
                    {
                        "id": 74 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 67,
                        "count":2
                    },
                    {
                        "id": 77,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 61 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 92 ,
                        "count":1,
                        "keyed":true,
                        "collectId":147001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 68,
                        "count":1,
                        "collectId":148001
                    },
                    {
                        "id":145,
                        "count":1,
                        "questOnly":true,
                        "collectId":146001
                    },
                    {
                        "id": 74 ,
                        "count":1
                    },
                    {
                        "id": 94 ,
                        "count":2,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold":0,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1,
        "triggers": ["dungeon:no.reward.no.result"]
    },
    {
        "dungeonId": 83,
        "rank": 0,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
         

        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 75,
                        "count":2
                    },
                    {
                        "id": 44,
                        "count":1
                    },
                    {
                        "id": 156,
                        "count":1,
                        "collectId":149001,
                        "questOnly":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 101 ,
                        "count":2,
                        "collectId":151001
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 75,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 44,
                        "count":1
                    },
                    {
                        "id": 101 ,
                        "count":2,
                        "collectId":151001
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 75,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 44,
                        "count":1
                    },
                    {
                        "id": 157,
                        "count":1,
                        "collectId":149001,
                        "questOnly":true
                    },
                    {
                        "id": 101 ,
                        "count":2,
                        "collectId":151001
                    },
                    {
                        "id": 104,
                        "count":1
                    },
                    {
                        "id": 95,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 75,
                        "count":2
                    },
                    {
                        "id": 44,
                        "count":1
                    },
                    {
                        "id": 101 ,
                        "count":1,
                        "collectId":151001
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 75,
                        "count":2
                    },
                    {
                        "id": 44,
                        "count":1
                    },
                    {
                        "id": 101 ,
                        "count":2,
                        "collectId":151001
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 156,
                        "count":1,
                        "collectId":149001,
                        "questOnly":true
                    },
                    {
                        "id": 104,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 121 ,
                        "count":1,
                        "keyed":true,
                        "collectId":150001
                    },
                    {
                        "id": 124 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 101 ,
                        "count":2
                    },
                    {
                        "id": 75,
                        "count":1
                    }
                ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold":0,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1,
        "triggers": ["dungeon:no.reward.no.result"]
    },
    {
    "dungeonId": 84,
    "levelCount" :6 ,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]}
        },
         

        "rank": 1,
    "levels" :[
        {
             "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 3,
                    "count":4
                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 4 ,
                    "count":3

                }
            ]
        },
        {
             "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 3,
                    "count":3

                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 4 ,
                    "count":4
                }
            ]
        },
        {
             "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 3,
                    "count":2
                },
                {
                    "id": 4 ,
                    "count":4
                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 22,
                    "count":1,
                    "keyed":true
                }
            ]
        },
        {
             "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 3,
                    "count":2
                },
                {
                    "id": 4 ,
                    "count":2
                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 5,
                    "count":3
                }
            ]
        },
        {
             "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 3,
                    "count":2
                },
                {
                    "id": 4 ,
                    "count":2
                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 5,
                    "count":4
                }
            ]
        },
        {
             "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 3,
                    "count":2
                },
                {
                    "id": 4 ,
                    "count":2
                },
                {
                    "id": 163,
                    "count":1,
                    "collectId":1001,
                    "keyed":true,
                    "questOnly":true
                },
                {
                    "id": 5,
                    "count":2
                },
                {
                    "id": 23,
                    "count":1,
                    "keyed":true
                }
            ]
        }
    ],
    "prize"://TODO:
        [
            {
                "rate": 0.8,
                "items":
                    [
                        {
                            "weight": 2,
                            "item": 525
                        }
                    ]
            },
            {
                "rate": 0.2,
                "items":
                    [
                        {
                            "weight": 2,
                            "item": 526
                        }
                    ]
            }
        ],
    "prizeWxp":100,
    "prizeGold": 400,
    "prizeXp":200,
    "wxpRate":1,
    "goldRate":0.5,
    "xpRate":1
},
    {
        "dungeonId": 85,
        "rank": 2,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]}
        },
         

        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":3
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 24,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":1
                    },
                    {
                        "id": 7,
                        "count":3
                    },
                    {
                        "id": 23,
                        "count":1,
                        "collectId":2001,
                        "keyed":true
                    }
                ]
            }
        ],
        "prize"://TODO:
            [
                {
                    "rate": 0.8,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 525
                            }
                        ]

                },
                {
                    "rate": 0.2,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 526
                            }
                        ]
                }
            ],
        "prizeWxp":100,
        "prizeGold": 400,
        "prizeXp":200,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 86,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]}
        },
         

        "rank": 2,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":3
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 24,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 144,
                        "count":1,
                        "questOnly":true,
                        "collectId":5001
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 5,
                        "count":1
                    },
                    {
                        "id": 7,
                        "count":3
                    },
                    {
                        "id": 25,
                        "count":1,
                        "keyed":true,
                        "collectId":4001
                    }
                ]
            }
        ],
        "prize"://TODO:
            [
                {
                    "rate": 0.8,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 525
                            }
                        ]

                },
                {
                    "rate": 0.2,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 526
                            }
                        ]
                }
            ],
        "prizeWxp":100,
        "prizeGold": 400,
        "prizeXp":200,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 87,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ] }
        },
         

        "rank": 2,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id":7,
                        "count":1
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 146,
                        "count":1,
                        "questOnly":true,
                        "collectId":7001
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 23,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":2
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 145,
                        "count":1,
                        "questOnly":true,
                        "collectId":10001
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 7,
                        "count":3
                    },
                    {
                        "id": 5,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 3,
                        "count":1
                    },
                    {
                        "id": 4 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 147,
                        "count":1,
                        "questOnly":true,
                        "collectId":8001
                    },
                    {
                        "id": 5,
                        "count":1
                    },
                    {
                        "id": 7,
                        "count":3
                    },
                    {
                        "id": 23,
                        "count":1,
                        "questOnly":true,
                        "collectId":11001
                    },
                    {
                        "id": 25,
                        "count":1,
                        "keyed":true,
                        "collectId":9001
                    }
                ]
            }
        ],
        "prize"://TODO:
            [
                {
                    "rate": 0.8,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 525
                            }
                        ]

                },
                {
                    "rate": 0.2,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 526
                            }
                        ]
                }
            ],
        "prizeWxp":100,"prizeGold": 400,
        "prizeXp":208,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 88,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]}
        },
         

        "rank": 2,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7 ,
                        "count":4
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 7 ,
                        "count":4
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7 ,
                        "count":3
                    },
                    {
                        "id": 23,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7 ,
                        "count":3
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 6 ,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 32,
                        "count":1,
                        "keyed":true,
                        "collectId":12001
                    }
                ]
            }
        ],
        "prize"://TODO:
            [
                {
                    "rate": 0.8,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 525
                            }
                        ]

                },
                {
                    "rate": 0.2,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 526
                            }
                        ]
                }
            ],
        "prizeWxp":100,"prizeGold": 400,
        "prizeXp":200,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 89,
        "rank": 6,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]}
        },
         

        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 143,
                        "count":1,
                        "collectId":14001,
                        "questOnly":true
                    },
                    {
                        "id": 6,
                        "count":2
                    },
                    {
                        "id": 25,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 6 ,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 32,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 141,
                        "count":1,
                        "keyed":true,
                        "collectId":13001,
                        "questOnly":true
                    },
                    {
                        "id": 142,
                        "count":1,
                        "keyed":true,
                        "collectId":13001,
                        "questOnly":true
                    }
                ]
            }
        ],
        "prize"://TODO:
            [
                {
                    "rate": 0.8,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 525
                            }
                        ]

                },
                {
                    "rate": 0.2,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 526
                            }
                        ]
                }
            ],
        "prizeWxp":100,"prizeGold": 400,
        "prizeXp":200,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 90,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
         

        "rank": 8,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 8 ,
                        "count":1
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":4
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 8 ,
                        "count":1
                    },
                    {
                        "id": 6,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 32,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 8 ,
                        "count":1
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 8 ,
                        "count":1
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 6 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 8,
                        "count":1
                    },
                    {
                        "id": 136,
                        "pos":12,
                        "count":1,
                        "collectId":15001,
                        "keyed":true
                    },
                    {
                        "id": 165,
                        "count":1,
                        "collectId":152001,
                        "keyed":true,
                        "questOnly":true
                    },
                    {
                        "id": 23,
                        "count":1,
                        "collectId":16001,
                        "keyed":true,
                        "questOnly":true
                    }
                ],
                "entrance":0,
                "exit": 29
            }
        ],
        "prize"://TODO:
            [
                {
                    "rate": 0.8,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 525
                            }
                        ]

                },
                {
                    "rate": 0.2,
                    "items":
                        [
                            {
                                "weight": 2,
                                "item": 526
                            }
                        ]
                }
            ],
        "prizeWxp":100,
        "prizeGold": 400,
        "prizeXp":200,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
    "dungeonId": 91,
    "levelCount" : 1,
    "levels" :[
        {
             "objects" : [
                {
                    "id": 7,
                    "count":1,
                    "pos":22
                },
                {
                    "id": 169,
                    "count":1,
                    "pos":23
                },
                {
                    "id": 4,
                    "count":1,
                    "pos":16
                },
                {
                    "id": 168,
                    "count":1
                },
                {
                    "id": 22,
                    "count":1,
                    "pos":18,
                    "keyed":true
                }
            ],
            "rank": 3,
            "entrance": [10],
            "exit":13,
            "layout":[0,0,0,0,0,2,2,2,2,0,19,9,13,29,4,9,12,14,12,4,8,6,3,10,4,0,1,1,1,0]
        }
    ],
    "triggers": ["stage0-1:FirstBoss","stage0-1:FirstMonster","stage0-1:Firstbaoxiang","stage0-1:FirstCard"],
    "collectId":153001,
    "prizeWxp":0,
    "dropID":[
         71
    ],
    "prizeGold": 100,
    "prizeXp":100,
    "wxpRate":1,
    "goldRate":0.3,
    "xpRate":0.2
},
    {

        "dungeonId": 92,
        "levelCount" :2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS1":{"objects":[
                {"id":3,"weight":2},
                {"id":4,"weight":2},
                {"id":5,"weight":2},
                {"id":6,"weight":2},
                {"id":7,"weight":2}]},
            "PoolS1R":{"objects":[
                {"id":8,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:91}],
        "rank": 1,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":8,to:10,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 22,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":8,to:10,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 23,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:91}
                    } ,
                    {
                        "id":163,
                        "count":1,
                        "questOnly":true,
                        "collectId":154001,
                        "keyed":true
                    }

                ]
            }

        ],
        "dropID":
            [ 8
            ],
        "prizeWxp":20,
        "prizeGold": 100,
        "prizeXp":150,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 93,
        "rank": 2,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS1":{"objects":[
                {"id":3,"weight":2},
                {"id":4,"weight":2},
                {"id":5,"weight":2},
                {"id":6,"weight":2},
                {"id":7,"weight":2}]},
            "PoolS1R":{"objects":[
                {"id":8,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:91}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":8,to:10,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 24,
                        "count":1,
                        "keyed":true
                    }

                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":8,to:10,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 23,
                        "count":1,
                        "collectId":156001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:91}
                    }
                ]
            }
        ],
        "dropID":
            [
                  9
            ],
        "prizeWxp":20,
        "prizeGold": 100,
        "prizeXp":200,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 94,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS1":{"objects":[
                {"id":3,"weight":2},
                {"id":4,"weight":2},
                {"id":5,"weight":2},
                {"id":6,"weight":2},
                {"id":7,"weight":2}]},
            "PoolS1R":{"objects":[
                {"id":8,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:91}],
        "rank": 2,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":8,to:10,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 24,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":8,to:10,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 25,
                        "count":1,
                        "collectId":157001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:91}
                    }
                ]
            }
        ],
        "dropID":
            [
                10
            ],
        "prizeWxp":20,
        "prizeGold": 100,
        "prizeXp":200,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 95,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS1":{"objects":[
                {"id":3,"weight":2},
                {"id":4,"weight":2},
                {"id":5,"weight":2},
                {"id":6,"weight":2},
                {"id":7,"weight":2}]},
            "PoolS1R":{"objects":[
                {"id":8,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:91}],
        "rank": 3,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":8,to:10,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 23,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":8,to:10,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 23,
                        "count":1,
                        "questOnly":true
                    },
                    {
                        "id": 25,
                        "count":1,
                        "collectId":159001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:91}
                    }
                ]
            }
        ],
        "dropID":
            [     11
            ],
        "prizeWxp":20,"prizeGold": 100,
        "prizeXp":250,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 96,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS1":{"objects":[
                {"id":3,"weight":2},
                {"id":4,"weight":2},
                {"id":5,"weight":2},
                {"id":6,"weight":2},
                {"id":7,"weight":2}]},
            "PoolS1R":{"objects":[
                {"id":8,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:91}],
        "rank": 3,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":10,to:12,skill:[{id:154}],dropPrize:91},
                     {"pool":"PoolS1R","from":0,to:1,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 23,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":10,to:12,skill:[{id:154}],dropPrize:91},
                     {"pool":"PoolS1R","from":0,to:1,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 6 ,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 32,
                        "count":1,
                        "collectId":160001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:91}
                    }
                ]
            }
        ],
        "dropID":
            [
                12
            ],
        "prizeWxp":100,"prizeGold": 400,
        "prizeXp":200,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 97,
        "rank": 6,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":182,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]},
            "PoolS1":{"objects":[
                {"id":3,"weight":2},
                {"id":4,"weight":2},
                {"id":5,"weight":2},
                {"id":6,"weight":2},
                {"id":7,"weight":2}]},
            "PoolS1R":{"objects":[
                {"id":8,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:91}],
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":10,to:12,skill:[{id:154}],dropPrize:91},
                     {"pool":"PoolS1R","from":0,to:1,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 25,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":10,to:12,skill:[{id:154}],dropPrize:91},
                     {"pool":"PoolS1R","from":0,to:1,skill:[{id:154}],dropPrize:91},
                     {
                         "id": 149,
                         "count":2
                     },
                    {
                        "id": 32,
                        "count":1,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:91}
                    },
                    {
                        "id": 165,
                        "count":1,
                        "collectId":162001,
                        "keyed":true,
                        "questOnly":true
                    }

                ]
            }
        ],
        "dropID":
            [
                13
            ],
        "prizeWxp":20,"prizeGold": 100,
        "prizeXp":250,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 98,
        "levelCount" : 2,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "PoolS1":{"objects":[
                {"id":3,"weight":2},
                {"id":4,"weight":2},
                {"id":5,"weight":2},
                {"id":6,"weight":2},
                {"id":7,"weight":2}]},
            "PoolS1R":{"objects":[
                {"id":8,"weight":2}]}
        },
        "global": [
            {id: 211,from: 1, to: 4,dropPrize:91}],
        "rank": 9,
        "levels" :[
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":10,to:12,skill:[{id:154}],dropPrize:91},
                     {"pool":"PoolS1R","from":0,to:1,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 32,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                 "objects" :[{"pool":"normalPool","from":0,to:4},
                     {"pool":"PoolS1","from":10,to:12,skill:[{id:154}],dropPrize:91},
                     {"pool":"PoolS1R","from":0,to:1,skill:[{id:154}],dropPrize:91},
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 136,
                        "pos":12,
                        "count":1,
                        "collectId":163001,
                        property:{
                            "keyed":true,
                            skill:[{id:153}],
                            dropPrize:91}
                    }
                ],
                "entrance":0,
                "exit": 29
            }
        ],
        "dropID":[ 14 ],
        "prizeWxp":20,
        "prizeGold": 100,
        "prizeXp":300,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 99,
        "levelCount" : 4,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 37,
                        "count":2
                    },
                    {
                        "id": 17,
                        "count":2
                    }
                ],
                "rank": 8
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 75,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 44,
                        "count":2
                    },
                    {
                        "id": 73,
                        "count":2
                    },
                    {
                        "id": 18,
                        "count":2
                    }
                ],
                "rank":8
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 75,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 187,
                        "count":1,
                        "keyed":true,
                        "pos":12
                    }
                ],
                "rank":8,
                "entrance":0,
                "exit": 29
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 73,
                        "count":2
                    },
                    {
                        "id": 18,
                        "count":2
                    },
                    {
                        "id": 144,
                        "count":3,
                        "collectId":155001,
                        "questOnly":true,
                        "keyed":true
                    }
                ],
                "rank": 8
            }
        ],
        "dropID":[ 71 ],
        "prizeWxp":10,
        "prizeGold": 100,
        "prizeXp":100,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 100,
        "levelCount" : 4,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]}
        },
         
        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 37,
                        "count":2
                    },
                    {
                        "id": 17,
                        "count":2
                    }
                ],
                "rank": 10
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 75,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 44,
                        "count":2
                    },
                    {
                        "id": 73,
                        "count":2
                    } ,
                    {
                        "id": 18,
                        "count":2
                    }
                ],
                "rank": 10
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 186,
                        "count":1,
                        "keyed":true,
                        "pos":12
                    }
                ],
            "dropID":[
                  71
            ],
                "rank": 10,
                "entrance":0,
                "exit": 29
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 157,
                        "count":1,
                        "collectId":158001,
                        "questOnly":true,
                        "keyed":true
                    },
                    {
                        "id": 44,
                        "count":2
                    },
                    {
                        "id": 73,
                        "count":2
                    } ,
                    {
                        "id": 18,
                        "count":2
                    }
                ],
                "rank": 10
            }
        ], "dropID":[   71

    ],
        "prizeWxp":10,
        "prizeGold": 100,
        "prizeXp":100,
        "wxpRate":1,
        "goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 101,
        "collectId":161001,
        "levelCount" :3,
        "levels" :[
            {
                 "objects" : [
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 37,
                        "count":2
                    },
                    {
                        "id": 17,
                        "count":2
                    }
                ],
                "rank": 13
            },
            {
                 "objects" : [
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 37,
                        "count":2
                    },
                    {
                        "id": 17,
                        "count":2
                    }
                ],
                "rank": 13
            },
            {
                 "objects" : [
                    {
                        "id": 167,
                        "count":1
                    }
                ],
                "entrance": [17,16,18],
                "exit":-1,
                "layout":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "rank": 26,
                "triggers": ["dungeon:no.reward.no.result"]
            }
        ],
        "prizeWxp":0,
        "prizeGold": 0,
        "prizeXp":0,
        "wxpRate":1,
        "goldRate":0.3,
        "xpRate":1
    },
    {
        "dungeonId": 102,
        "rank": 1,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 188,from: 8, to: 13}
            ],
            "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 39,
                    "count":2
                },
                {
                    "id":47 ,
                    "count":1
                },
                {
                    "id": 149,
                    "count":3
                },
                {
                    "id": 12,
                    "count":2
                },
                {
                    "id": 69,
                    "count":1
                },
                {
                    "id": 45,
                    "count":1
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 39,
                    "count":1
                },
                {
                    "id": 47 ,
                    "count":2
                },
                {
                    "id": 149,
                    "count":3
                },
                {
                    "id": 12,
                    "count":2
                },
                {
                    "id": 69,
                    "count":1
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 39,
                    "count":1
                },
                {
                    "id": 47 ,
                    "count":1
                },
                {
                    "id": 12,
                    "count":2
                },
                {
                    "id":59,
                    "count":1
                },
                {
                    "id":62,
                    "count":1
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 42,
                    "count":2
                },
                {
                    "id": 47 ,
                    "count":1
                },
                {
                    "id": 12,
                    "count":2
                },
                {
                    "id": 69,
                    "count":1
                },
                {
                    "id": 45,
                    "count":1
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 42,
                    "count":2
                },
                {
                    "id": 47 ,
                    "count":1
                },
                {
                    "id": 12,
                    "count":2
                },
                {
                    "id": 69,
                    "count":1
                },
                {
                    "id": 45,
                    "count":1
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 42,
                    "count":2
                },
                {
                    "id": 149,
                    "count":3
                },
                {
                    "id": 47 ,
                    "count":1
                },
                {
                    "id": 12,
                    "count":1
                },
                {
                    "id": 69,
                    "count":1
                },
                {
                    "id": 60,
                    "count":1
                },
                {
                    "id": 45,
                    "count":1
                },
                {
                    "id": 66,
                    "count":1
                }
            ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold":0,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 103,
        "rank": 70,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 189,from: 8, to: 13}
        ],
        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 68,
                    "count":2
                },
                {
                    "id": 74 ,
                    "count":2
                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 67,
                    "count":2
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 68,
                    "count":2
                },
                {
                    "id": 74 ,
                    "count":3
                },
                {
                    "id": 67,
                    "count":2
                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 72,
                    "count":1
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 68,
                    "count":2
                },
                {
                    "id": 74,
                    "count":1
                },
                {
                    "id": 67,
                    "count":2
                },
                {
                    "id": 72,
                    "count":1
                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 92,
                    "count":1,
                    "keyed":true
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 68,
                    "count":3
                },
                {
                    "id": 74,
                    "count":3
                },
                {
                    "id": 67,
                    "count":2
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 68,
                    "count":2
                },
                {
                    "id": 74 ,
                    "count":3
                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 67,
                    "count":2
                }
            ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                {
                    "id": 68,
                    "count":1
                },
                {
                    "id": 74 ,
                    "count":2
                },
                {
                    "id": 67,
                    "count":2
                },
                {
                    "id": 149,
                    "count":2
                },
                {
                    "id": 72,
                    "count":1
                }
            ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold":0,
        "prizeXp":0,
        "wxpRate":1,"goldRate":0.5,
        "xpRate":1
    },
    {
        "dungeonId": 104,
        "rank": 250,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                { "id":170, "weight":3 },
                { "id":171, "weight":3 },
                { "id":172, "weight":3 },
                { "id":173, "weight":3 },
                { "id":174, "weight":3 },
                { "id":175, "weight":3 },
                { "id":176, "weight":3 },
                { "id":177, "weight":3 },
                { "id":178, "weight":3 },
                { "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185,  "weight":3 }
            ]}
        },
        "global": [
        {id: 190,from: 8, to: 13}
    ],
        "levels": [
            {"normalCount":1,
                "objects" :
            [
              { "id": 49 , "count":2 },
              { "id": 42, "count":1 }, { "id": 43, "count":1 },
              { "id": 12, "count":2 },
              { "id": 69, "count":1 },
              { "id": 45, "count":1 }
          ]},
            {"normalCount":1,
                "objects" :
                    [
              { "id": 42, "count":1 }, { "id": 43, "count":1 },
              { "id": 149 , "count":2 },
              { "id": 12, "count":2 },
              { "id": 69, "count":1 },
              { "id": 45, "count":1 }
          ]},
            {"normalCount":1,
                "objects" :
          [
                  { "id": 49 , "count":2 },
              { "id": 42, "count":1 }, { "id": 43, "count":1 },
              { "id": 149, "count":3 },
              { "id": 12, "count":2 },
              { "id":63, "count":1 }
          ]}, {"normalCount":1,
                "objects":
          [
              { "id": 42, "count":2 }, { "id": 43, "count":1 },
              { "id": 47 , "count":1 },
              { "id": 12, "count":2 },
              { "id": 69, "count":1 }
          ]},
{"normalCount":1,
    "objects" :
        [
              { "id": 42, "count":2 }, { "id": 43, "count":1 },
              { "id": 47 , "count":1 },
              { "id": 12, "count":2 },
              { "id": 69, "count":1 }
          ]},
            {"normalCount":1,
                "objects" :
          [
              { "id": 42, "count":2 }, { "id": 43, "count":1 },
              { "id": 47 , "count":1 },
              { "id": 12, "count":1 },
              { "id": 149, "count":3 },
              { "id": 69, "count":1 }
          ]}
        ],
        "dropID":[ ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1
    },
    {
        "dungeonId": 105,
        "rank": 10,
        "levelCount" : 3,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 35,
                        "count":2
                    },
                    {
                        "id": 36 ,
                        "count":2
                    },
                    {
                        "id": 37,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 16,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 35,
                        "count":2
                    },
                    {
                        "id": 36 ,
                        "count":3
                    },
                    {
                        "id": 37,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 35,
                        "count":2
                    },
                    {
                        "id": 36 ,
                        "count":2
                    },
                    {
                        "id": 37,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 135,
                        "count":1,
                        "pos":12,
                        "keyed":true
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[ 80
        ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1
    },
    {
        "dungeonId": 106,
        "rank": 30,
        "levelCount" : 3,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 17,
                        "count":1
                    },
                    {
                        "id": 10,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 13,
                        "count":1
                    },
                    {
                        "id": 9,
                        "count":1
                    },
                    {
                        "id": 38,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 17,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 10,
                        "count":2
                    },
                    {
                        "id": 9,
                        "count":1
                    },
                    {
                        "id": 38,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 17,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 10,
                        "count":1
                    },
                    {
                        "id": 137,
                        "count":1,
                        "pos":12,
                        "keyed":true
                    },
                    {
                        "id": 13,
                        "count":2
                    },
                    {
                        "id": 38,
                        "count":1
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[ 81
        ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1
    },
    {
        "dungeonId": 107,
        "rank": 120,
        "levelCount" : 3,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 18,
                        "count":4
                    },
                    {
                        "id": 39,
                        "count":2
                    },
                    {
                        "id": 11,
                        "count":2
                    },
                    {
                        "id": 38,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 18,
                        "count":5
                    },
                    {
                        "id": 40,
                        "count":1
                    },
                    {
                        "id": 39,
                        "count":1
                    },
                    {
                        "id": 11,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 38,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 18,
                        "count":5
                    },
                    {
                        "id": 40,
                        "count":1
                    },
                    {
                        "id": 39,
                        "count":1
                    },
                    {
                        "id": 11,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 38,
                        "count":1
                    },
                    {
                        "id": 200,
                        "count":1,
                        "pos":12,
                        "keyed":true
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[  82
        ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1
    },
    {
        "dungeonId": 108,
        "rank": 190,
        "levelCount" : 3,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 42,
                        "count":2
                    },
                    {
                        "id": 43,
                        "count":1
                    },
                    {
                        "id": 47 ,
                        "count":1
                    },
                    {
                        "id": 46,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 42,
                        "count":2
                    },
                    {
                        "id": 43,
                        "count":1
                    },
                    {
                        "id": 47 ,
                        "count":2
                    },
                    {
                        "id": 46,
                        "count":2
                    },
                    {
                        "id": 45,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 42,
                        "count":2
                    },
                    {
                        "id": 47 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 43,
                        "count":1
                    },
                    {
                        "id": 46,
                        "count":2
                    },
                    {
                        "id": 201,
                        "count":1,
                        "pos":12,
                        "keyed":true
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[83

        ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1
    },
    {
        "dungeonId": 109,
        "rank": 300,
        "levelCount" : 3,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 48,
                        "count":1
                    },
                    {
                        "id": 50,
                        "count":4
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 79,
                        "count":1
                    },
                    {
                        "id": 81 ,
                        "count":1
                    },
                    {
                        "id": 71 ,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 48,
                        "count":2
                    },
                    {
                        "id": 50,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 79,
                        "count":1
                    },
                    {
                        "id": 81 ,
                        "count":2
                    },
                    {
                        "id": 71 ,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 48,
                        "count":2
                    },
                    {
                        "id": 50,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 79,
                        "count":1
                    },
                    {
                        "id": 81 ,
                        "count":2
                    },
                    {
                        "id": 71 ,
                        "count":1
                    },
                    {
                        "id": 202,
                        "count":1,
                        "pos":12,
                        "keyed":true
                    }
                ],
                "exit": 29,
                "entrance":0
            }
        ],
        "dropID":[    84

        ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1
    },
    {
        "dungeonId": 110,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":5
                },
                {
                    "id":171,
                    "weight":1
                },
                {
                    "id":173,
                    "weight":5
                },
                {
                    "id":174,
                    "weight":1
                },
                {
                    "id":176,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":5
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":1
                },
                {
                    "id":172,
                    "weight":5
                }
            ]}
        },

        "rank": 10,
        "global": [
            {id: 191,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7 ,
                        "count":4
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 7 ,
                        "count":4
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":3
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7 ,
                        "count":3
                    },
                    {
                        "id": 23,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":1
                    },
                    {
                        "id": 7 ,
                        "count":3
                    },
                    {
                        "id": 6,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 7 ,
                        "count":2
                    },
                    {
                        "id": 6,
                        "count":3
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 5,
                        "count":2
                    },
                    {
                        "id": 6 ,
                        "count":2
                    },
                    {
                        "id": 7,
                        "count":2
                    },
                    {
                        "id": 32,
                        "count":1,
                        "keyed":true
                    }
                ]
            }
        ],
        "dropID":
            [
            ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1
    },
    {
        "dungeonId": 111,
        "rank": 70,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 192,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 39,
                        "count":3
                    },
                    {
                        "id":47 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id": 69,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 39,
                        "count":3
                    },
                    {
                        "id": 47 ,
                        "count":2
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 69,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 39,
                        "count":1
                    },
                    {
                        "id": 47 ,
                        "count":1
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id":86,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id":62,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 39,
                        "count":2
                    },
                    {
                        "id": 47 ,
                        "count":1
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id": 69,
                        "count":1
                    },
                    {
                        "id": 45,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 39,
                        "count":2
                    },
                    {
                        "id": 47 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":3
                    },
                    {
                        "id": 12,
                        "count":2
                    },
                    {
                        "id": 69,
                        "count":1
                    },
                    {
                        "id": 45,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 39,
                        "count":2
                    },
                    {
                        "id": 47 ,
                        "count":1
                    },
                    {
                        "id": 12,
                        "count":1
                    },
                    {
                        "id": 69,
                        "count":1
                    },
                    {
                        "id": 60,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 45,
                        "count":1
                    }
                ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1
    },
    {
        "dungeonId": 112,
        "rank": 250,
        "levelCount" : 6,
        "pool":{
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":1
                },
                {
                    "id":171,
                    "weight":5
                },
                {
                    "id":172,
                    "weight":5
                },
                {
                    "id":173,
                    "weight":1
                },
                {
                    "id":174,
                    "weight":5
                },
                {
                    "id":175,
                    "weight":5
                },
                {
                    "id":176,
                    "weight":1
                },
                {
                    "id":177,
                    "weight":5
                },
                {
                    "id":178,
                    "weight":1
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 193,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 78,
                        "count":2
                    },
                    {
                        "id": 80 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 101 ,
                        "count":2
                    },
                    {
                        "id": 103,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 78,
                        "count":2
                    },
                    {
                        "id": 80 ,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 101 ,
                        "count":2
                    },
                    {
                        "id": 103,
                        "count":2
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 78,
                        "count":2
                    },
                    {
                        "id": 101 ,
                        "count":2
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 103,
                        "count":2
                    },
                    {
                        "id": 128,
                        "count":1,
                        "keyed":true
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 78,
                        "count":2
                    },
                    {
                        "id": 103,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 111 ,
                        "count":1
                    },
                    {
                        "id": 80,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 78,
                        "count":2
                    },
                    {
                        "id": 103,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 111 ,
                        "count":2
                    },
                    {
                        "id": 80,
                        "count":1
                    }
                ]
            },
            {
                "objects" :[{"pool":"normalPool","from":0,to:4},
                    {
                        "id": 130 ,
                        "count":1,
                        "keyed":true
                    },
                    {
                        "id": 78,
                        "count":2
                    },
                    {
                        "id": 103,
                        "count":1
                    },
                    {
                        "id": 149,
                        "count":2
                    },
                    {
                        "id": 111 ,
                        "count":2
                    },
                    {
                        "id": 80,
                        "count":1
                    }
                ]
            }
        ],
        "dropID":[

        ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1
    },
    {
        "dungeonId": 113,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 114,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 194,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 115,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 195,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 116,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },

        "global": [
            {id: 196,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 117,
        "levelCount" :1,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:3},
                    {"pool":"soldierPool","from":5,to:14},
                    {"pool":"rangePool","from":0,to:1},
                    {"id": 212,"from":0,to:2}

                ]
            }
        ],
        "dropID":
            [

            ],
        "rank":15
    },
    {
        "dungeonId": 118,
        "levelCount" :1,
        "pool":{
            "rangePool":{"objects":[
                { "id":8, "weight":2 },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]},
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]}
        },
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":2,to:5},
                    {"pool":"rangePool","from":0,to:1},
                    {"pool":"soldierPool","from":2,to:4},
                    {"pool":"PVP","count":1},
                    {"id": 212,"from":0,to:4}

                ]
            }
        ],
        "dropID":
            [

            ],
        "rank":15
    },
    {
        "dungeonId": 119,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 203,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 120,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 204,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 121,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 205,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 122,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 206,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 123,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 207,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 124,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 208,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 125,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 209,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 126,
        "levelCount" :3,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185, 
                    "weight":3
                }
            ]}
        },
        "global": [
            {id: 210,from: 4, to:6}],
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            }],
        "dropID":
            [

            ],
        "infinityPrize":
            [
                {
                    "level":1,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":2,
                    "type":2,
                    "count": 5
                },
                {
                    "level":5,
                    "type":1,
                    "count": 500
                },
                {
                    "level":7,
                    "type":0,
                    "value":853,
                    "count": 2
                },
                {
                    "level":9,
                    "type":0,
                    "value":854,
                    "count": 2
                },
                {
                    "level":10,
                    "type":0,
                    "value":855,
                    "count": 2
                },
                {
                    "level":15,
                    "type":1,
                    "count": 2000
                },
                {
                    "level":20,
                    "type":0,
                    "value":856,
                    "count": 2
                },
                {
                    "level":25,
                    "type":0,
                    "value":540,
                    "count": 1
                },
                {
                    "level":30,
                    "type":0,
                    "value":538,
                    "count": 1
                },
                {
                    "level":35,
                    "type":1,
                    "count": 5500
                },
                {
                    "level":45,
                    "type":2,
                    "count": 10
                },
                {
                    "level":55,
                    "type":2,
                    "count": 10
                },
                {
                    "level":65,
                    "type":2,
                    "count": 10
                },
                {
                    "level":75,
                    "type":2,
                    "count": 15
                },
                {
                    "level":85,
                    "type":2,
                    "count": 15
                },
                {
                    "level":95,
                    "type":2,
                    "count": 15
                }
            ],
        "infinity_a":0,
        "infinity_b":0,
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":15
    },
    {
        "dungeonId": 127,
        "levelCount" :2,
        "pool":{
            "soldierPool":{"objects":[
                {
                    "id":3,
                    "weight":2
                },
                {
                    "id":4,
                    "weight":2
                },
                {
                    "id":5,
                    "weight":2
                },
                {
                    "id":6,
                    "weight":2
                },
                {
                    "id":7,
                    "weight":2
                },
                {
                    "id":9,
                    "weight":2
                },
                {
                    "id":10,
                    "weight":2
                },
                {
                    "id":11,
                    "weight":2
                },
                {
                    "id":12,
                    "weight":2
                },
                {
                    "id":14,
                    "weight":2
                },
                {
                    "id":15,
                    "weight":2
                },
                {
                    "id":17,
                    "weight":2
                },
                {
                    "id":35,
                    "weight":2
                },
                {
                    "id":36,
                    "weight":2
                },
                {
                    "id":37,
                    "weight":2
                },
                {
                    "id":38,
                    "weight":2
                },
                {
                    "id":39,
                    "weight":2
                },
                {
                    "id":41,
                    "weight":2
                },
                {
                    "id":42,
                    "weight":2
                },
                {
                    "id":43,
                    "weight":2
                },
                {
                    "id":44,
                    "weight":2
                },
                {
                    "id":46,
                    "weight":2
                },
                {
                    "id":47,
                    "weight":2
                },
                {
                    "id":49,
                    "weight":2
                },
                {
                    "id":67,
                    "weight":2
                },
                {
                    "id":68,
                    "weight":2
                },
                {
                    "id":69,
                    "weight":2
                },
                {
                    "id":70,
                    "weight":2
                },
                {
                    "id":71,
                    "weight":2
                },
                {
                    "id":73,
                    "weight":2
                },
                {
                    "id":74,
                    "weight":2
                },
                {
                    "id":75,
                    "weight":2
                },
                {
                    "id":76,
                    "weight":2
                },
                {
                    "id":78,
                    "weight":2
                },
                {
                    "id":79,
                    "weight":2
                },
                {
                    "id":81,
                    "weight":2
                },
                {
                    "id":99,
                    "weight":2
                },
                {
                    "id":100,
                    "weight":2
                },
                {
                    "id":101,
                    "weight":2
                },
                {
                    "id":102,
                    "weight":2
                },
                {
                    "id":103,
                    "weight":2
                },
                {
                    "id":105,
                    "weight":2
                },
                {
                    "id":106,
                    "weight":2
                },
                {
                    "id":107,
                    "weight":2
                },
                {
                    "id":108,
                    "weight":2
                },

                {
                    "id":110,
                    "weight":2
                },
                {
                    "id":111,
                    "weight":2
                },
                {
                    "id":113,
                    "weight":2
                }
            ]},
            "rangePool":{"objects":[
                {
                    "id":8,
                    "weight":2
                },
                {
                    "id":13,
                    "weight":2
                },
                {
                    "id":16,
                    "weight":2
                },
                {
                    "id":40,
                    "weight":2
                },
                {
                    "id":45,
                    "weight":2
                },
                {
                    "id":48,
                    "weight":2
                },
                {
                    "id":72,
                    "weight":2
                },
                {
                    "id":77,
                    "weight":2
                },
                {
                    "id":80,
                    "weight":2
                },
                {
                    "id":104,
                    "weight":2
                },
                {
                    "id":109,
                    "weight":2
                },
                {
                    "id":112,
                    "weight":2
                }

            ]},
            "elitePool":{"objects":[
                {
                    "id":20,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2 ,
                    "keyed":true
                }

            ]},
            "bossPool":{"objects":[
                {
                    "id":20,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":21,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":22,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":23,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":24,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":25,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":26,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":27,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":28,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":29,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":30,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":31,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":32,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":33,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":34,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":52,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":53,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":54,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":55,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":56,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":57,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":58,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":59,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":60,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":61,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":62,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":63,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":64,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":65,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":66,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":84,
                    "weight":2  ,
                    "keyed":true
                },
                {
                    "id":85,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":86,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":87,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":88,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":89,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":90,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":91,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":92,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":93,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":94,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":95,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":96,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":97,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":98,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":116,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":117,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":118,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":119,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":120,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":121,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":123,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":124,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":125,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":126,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":127,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":128,
                    "weight":2,
                    "keyed":true
                },
                {
                    "id":129,
                    "weight":2 ,
                    "keyed":true
                },
                {
                    "id":130,
                    "weight":2,
                    "keyed":true
                }

            ]},
            "normalPool":{"objects":[
                {
                    "id":170,
                    "weight":3
                },
                {
                    "id":171,
                    "weight":3
                },
                {
                    "id":172,
                    "weight":3
                },
                {
                    "id":173,
                    "weight":3
                },
                {
                    "id":174,
                    "weight":3
                },
                {
                    "id":175,
                    "weight":3
                },
                {
                    "id":176,
                    "weight":3
                },
                {
                    "id":177,
                    "weight":3
                },
                {
                    "id":178,
                    "weight":3
                },
                {
                    "id":179, "weight":3}, {"id":180, "weight":2},{"id":181, "weight":2},{"id":182, "weight":2},{"id":183, "weight":2},{"id":184, "weight":2},{"id":185,
                    "weight":3
                }
            ]}
        },
        "levels" :[
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"elitePool","count":1},
                    {"id": 149,"from":0,to:2}
                ]
            },
            {
                "objects" :[
                    {"pool":"normalPool","from":0,to:4},
                    {"pool":"soldierPool","from":8,to:14},
                    {"pool":"rangePool","from":0,to:3},
                    {"pool":"bossPool","count":1},
                    {"id": 149,"from":0,to:2},
                    {
                        "id": 201,
                        "count":1,
                        "pos":12,
                        "keyed":true
                    }
                ],
                "exit": 29,
                "entrance":0
            }],
        "dropID":
            [

            ],
        "prizeWxp":0,"prizeGold":0, "prizeXp":0,
        "wxpRate":1,"goldRate":0.5, "xpRate":1,
        "rank":500}
];
