exports.data = [
    {//0
        "interval":{"value":7,"unit":"hour"},//second minite hour day
        "diamond":{"1":0},
        "basic_times":3,
        "advanced_option":[//若存在，优先读取advanced_option
            {
                "condition":"less",//less 小于 equal 等于 more 大于 interval 周期
                "count_value":[4],
                "basic_prize": [
                    {
                        "rate": 1,
                        "prize": [
                            {
                                "weight": 100,
                                "type": 0,
                                "value": 871,
                                "count": 5
                            },
                            {
                                "weight": 100,
                                "type": 0,
                                "value":540,
                                "count": 1
                            },
                            {
                                "weight": 100,
                                "type": 1,
                                "count": 1000
                            },
                            {
                                "weight": 80,
                                "type": 0,
                                "value": 1484,
                                "count": 1
                            },
                            {
                                "weight": 80,
                                "type": 0,
                                "value": 1485,
                                "count": 1
                            },
                            {
                                "weight": 80,
                                "type": 0,
                                "value": 1486,
                                "count": 1
                            },
                            {
                                "weight": 80,
                                "type": 0,
                                "value": 1487,
                                "count": 1
                            },
                            {
                                "weight": 80,
                                "type": 0,
                                "value": 1488,
                                "count": 1
                            },
                            {
                                "weight": 80,
                                "type": 0,
                                "value": 1489,
                                "count": 1
                            },
                            {
                                "weight": 80,
                                "type": 0,
                                "value": 1490,
                                "count": 1
                            },
                            {
                                "weight": 80,
                                "type": 0,
                                "value": 1491,
                                "count": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "basic_prize": [
            {
                "rate": 1,
                "prize": [
                    {
                        "weight": 150,
                        "type": 0,
                        "value": 871,
                        "count": 5
                    },
                    {
                        "weight": 100,
                        "type": 0,
                        "value":540,
                        "count": 1
                    },
                    {
                        "weight": 300,
                        "type": 1,
                        "count": 1000
                    },
                    {
                        "weight": 10,
                        "type": 0,
                        "value": 1484,
                        "count": 1
                    },
                    {
                        "weight": 10,
                        "type": 0,
                        "value": 1485,
                        "count": 1
                    },
                    {
                        "weight": 10,
                        "type": 0,
                        "value": 1486,
                        "count": 1
                    },
                    {
                        "weight": 10,
                        "type": 0,
                        "value": 1487,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1488,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1489,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1490,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1491,
                        "count": 1
                    }
                ]
            }
        ],
        "advanced_prize": [
            {
                "rate": 1,
                "prize": [
                    {
                        "weight": 150,
                        "type": 0,
                        "value": 871,
                        "count": 5
                    },
                    {
                        "weight": 100,
                        "type": 0,
                        "value":540,
                        "count": 1
                    },
                    {
                        "weight": 300,
                        "type": 1,
                        "count": 1000
                    },
                    {
                        "weight": 10,
                        "type": 0,
                        "value": 1484,
                        "count": 1
                    },
                    {
                        "weight": 10,
                        "type": 0,
                        "value": 1485,
                        "count": 1
                    },
                    {
                        "weight": 10,
                        "type": 0,
                        "value": 1486,
                        "count": 1
                    },
                    {
                        "weight": 10,
                        "type": 0,
                        "value": 1487,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1488,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1489,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1490,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1491,
                        "count": 1
                    }
                ]
            }
        ]
    },
    { //1
        "interval":{"value":1,"unit":"second"},
        "diamond":{"1":600,"11":6000},
        "basic_times":10,
        "advanced_option":[//若存在，优先读取advanced_option
            {
                "condition":"equal",//less 小于 equal 等于 more 大于 interval 周期
                "count_value":[5],
                "basic_prize": [
                    {
                        "rate": 1,
                        "prize": [
                            {
                                "weight": 25,
                                "type": 0,
                                "value": 1548,
                                "count": 1
                            },
                            {
                                "weight": 25,
                                "type": 0,
                                "value": 1549,
                                "count": 1
                            },
                            {
                                "weight": 25,
                                "type": 0,
                                "value": 1550,
                                "count": 1
                            },
                            {
                                "weight": 25,
                                "type": 0,
                                "value": 1551,
                                "count": 1
                            }
                        ]
                    }
                ]
            },
            {
                "condition":"interval",//less 小于 equal 等于 more 大于 interval 周期
                "count_value":[750],
                "basic_prize": [
                    {
                        "rate": 1,
                        "prize": [
                            {
                                "rare":true,
                                "weight": 25,
                                "type": 0,
                                "value": 1476,
                                "count": 1
                            },
                            {
                                "rare":true,
                                "weight": 25,
                                "type": 0,
                                "value": 1478,
                                "count": 1
                            },
                            {
                                "rare":true,
                                "weight": 25,
                                "type": 0,
                                "value": 1480,
                                "count": 1
                            },
                            {
                                "rare":true,
                                "weight": 25,
                                "type": 0,
                                "value": 1482,
                                "count": 1
                            }
                        ]
                    }
                ]
            },
            {
                "condition":"interval",//less 小于 equal 等于 more 大于 interval 周期
                "count_value":[100],
                "basic_prize": [
                    {
                        "rate": 1,
                        "prize": [
                            {
                                "rare":true,
                                "weight": 25,
                                "type": 0,
                                "value": 1580,
                                "count": 1
                            },
                            {
                                "rare":true,
                                "weight": 25,
                                "type": 0,
                                "value": 1581,
                                "count": 1
                            },
                            {
                                "rare":true,
                                "weight": 25,
                                "type": 0,
                                "value": 1582,
                                "count": 1
                            },
                            {
                                "rare":true,
                                "weight": 25,
                                "type": 0,
                                "value": 1583,
                                "count": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "basic_prize": [
            {
                "rate": 1,
                "prize": [
                    {
                        "weight": 1500,
                        "type": 0,
                        "value": 871,
                        "count": 20
                    },
                    {
                        "weight": 1000,
                        "type": 0,
                        "value": 540,
                        "count": 3
                    },
                    {
                        "weight": 6000,
                        "type": 1,
                        "count": 3000
                    },
                    {
                        "weight": 100,
                        "type": 0,
                        "value": 1516,
                        "count": 1
                    },
                    {
                        "weight": 100,
                        "type": 0,
                        "value": 1517,
                        "count": 1
                    },
                    {
                        "weight": 100,
                        "type": 0,
                        "value": 1518,
                        "count": 1
                    },
                    {
                        "weight": 100,
                        "type": 0,
                        "value": 1519,
                        "count": 1
                    },
                    {
                        "weight": 200,
                        "type": 0,
                        "value": 1520,
                        "count": 1
                    },
                    {
                        "weight": 200,
                        "type": 0,
                        "value": 1521,
                        "count": 1
                    },
                    {
                        "weight": 200,
                        "type": 0,
                        "value": 1522,
                        "count": 1
                    },
                    {
                        "weight": 200,
                        "type": 0,
                        "value": 1523,
                        "count": 1
                    },
                    {
                        "weight": 80,
                        "type": 0,
                        "value": 1548,
                        "count": 1
                    },
                    {
                        "weight": 80,
                        "type": 0,
                        "value": 1549,
                        "count": 1
                    },
                    {
                        "weight": 80,
                        "type": 0,
                        "value": 1550,
                        "count": 1
                    },
                    {
                        "weight": 80,
                        "type": 0,
                        "value": 1551,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 15,
                        "type": 0,
                        "value": 1580,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 15,
                        "type": 0,
                        "value": 1581,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 15,
                        "type": 0,
                        "value": 1582,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 15,
                        "type": 0,
                        "value": 1583,
                        "count": 1
                    },
                    {
                        "weight": 135,
                        "type": 0,
                        "value": 1475,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 3,
                        "type": 0,
                        "value": 1476,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 3,
                        "type": 0,
                        "value": 1478,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 3,
                        "type": 0,
                        "value": 1480,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 3,
                        "type": 0,
                        "value": 1482,
                        "count": 1
                    }
                ]
            }
        ],
        "advanced_prize": [
            {
                "rate": 1,
                "prize": [
                    {
                        "weight": 25,
                        "type": 0,
                        "value": 1520,
                        "count": 1
                    },
                    {
                        "weight": 25,
                        "type": 0,
                        "value": 1521,
                        "count": 1
                    },
                    {
                        "weight": 25,
                        "type": 0,
                        "value": 1522,
                        "count": 1
                    },
                    {
                        "weight": 25,
                        "type": 0,
                        "value": 1523,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1516,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1517,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1518,
                        "count": 1
                    },
                    {
                        "weight": 15,
                        "type": 0,
                        "value": 1519,
                        "count": 1
                    }
                ]
            }
        ]
    }
]