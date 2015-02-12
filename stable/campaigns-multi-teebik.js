iaplist = require('./iaplist').data.list;
moment = require('moment');
exports.data = {
    "Charge": {
        "show": true,
        "title": "中秋充值獎勵",
        "banner":"event-banner-wzydr.png",
        "description": [
            "單筆充值達到6元，12元，30元，68元，128元，198元，328元，648元分別得到獎勵。",
            "***獎勵內容：",
            "** \n充值6元，即可獲得",
            "##[{\"type\":2,\"count\":60},{\"type\":0,\"value\":853,\"count\":5},{\"type\":0,\"value\":540,\"count\":2}]",
            "** \n充值12元，即可獲得",
            "##[{\"type\":2,\"count\":130},{\"type\":0,\"value\":853,\"count\":10},{\"type\":0,\"value\":540,\"count\":2},{\"type\":0,\"value\":538,\"count\":1}]",
            "** \n充值30元，即可獲得",
            "##[{\"type\":2,\"count\":330},{\"type\":0,\"value\":871,\"count\":5},{\"type\":0,\"value\":540,\"count\":3},{\"type\":0,\"value\":538,\"count\":1}]",
            "** \n充值68元，即可獲得",
            "##[{\"type\":2,\"count\":760},{\"type\":0,\"value\":871,\"count\":5},{\"type\":0,\"value\":538,\"count\":1},{\"type\":0,\"value\":540,\"count\":3},{\"type\":0,\"value\":860,\"count\":1}]",
            "** \n充值128元，即可獲得",
            "##[{\"type\":2,\"count\":1460},{\"type\":0,\"value\":871,\"count\":10},{\"type\":0,\"value\":539,\"count\":1},{\"type\":0,\"value\":860,\"count\":3},{\"type\":0,\"value\":552,\"count\":1}]",
            "** \n充值198元，即可獲得",
            "##[{\"type\":2,\"count\":2260},{\"type\":0,\"value\":871,\"count\":20},{\"type\":0,\"value\":539,\"count\":1},{\"type\":0,\"value\":552,\"count\":1},{\"type\":0,\"value\":860,\"count\":6}]",
            "** \n充值328元，即可獲得",
            "##[{\"type\":2,\"count\":3760},{\"type\":0,\"value\":871,\"count\":20},{\"type\":0,\"value\":28,\"count\":4},{\"type\":0,\"value\":551,\"count\":1},{\"type\":0,\"value\":860,\"count\":10}]",
            "** \n充值648元，即可獲得",
            "##[{\"type\":2,\"count\":7480}, {\"type\":0,\"value\":871,\"count\":30},{\"type\":0,\"value\":28,\"count\":10},{\"type\":0,\"value\":552,\"count\":1},{\"type\":0,\"value\":551,\"count\":1},{\"type\":0,\"value\":860,\"count\":20}]"
        ],
        "mailTitle": "《中秋充值》活動獎勵",
        "mailBody": "恭喜你完成活動，點擊領取活動獎勵！",
        "date": "2014/09/15",
        "dateDescription": "截止日期2014年9月15日24時",
        "objective": {
            "6": {
                "award": [
                    {"type":0,"value":853,"count":5},
                    {"type":0,"value":540,"count":2}
                ]
            },
            "12": {
                "award": [
                    {"type":0,"value":853,"count":10},
                    {"type":0,"value":540,"count":2},
                    {"type":0,"value":538,"count":1}
                ]
            },
            "30": {
                "award": [
                    {"type":0,"value":871,"count":5},
                    {"type":0,"value":540,"count":3},
                    {"type":0,"value":538,"count":1}
                ]
            },
            "68": {
                "award": [
                    {"type":0,"value":871,"count":5},
                    {"type":0,"value":538,"count":1},
                    {"type":0,"value":540,"count":4},
                    {"type":0,"value":860,"count":1}
                ]
            },
            "128": {
                "award": [
                    {"type":0,"value":871,"count":10},
                    {"type":0,"value":539,"count":1},
                    {"type":0,"value":860,"count":3},
                    {"type":0,"value":552,"count":1}
                ]
            },
            "198": {
                "award": [
                    {"type":0,"value":871,"count":20},
                    {"type":0,"value":539,"count":1},
                    {"type":0,"value":552,"count":1},
                    {"type":0,"value":860,"count":6}
                ]
            },
            "328": {
                "award": [
                    {"type":0,"value":871,"count":20},
                    {"type":0,"value":28,"count":4},
                    {"type":0,"value":551,"count":1},
                    {"type":0,"value":860,"count":10}
                ]
            },
            "648": {
                "award": [
                    {"type":0,"value":871,"count":30},
                    {"type":0,"value":28,"count":10},
                    {"type":0,"value":552,"count":1},
                    {"type":0,"value":551,"count":1},
                    {"type":0,"value":860,"count":20}
                ]
            }
        }
    },
    "DuanwuCharge": {
        "show": true,
        "title": "端午粽子派送",
        "banner":"event-banner-dwj.png",
        "description": [
            "單筆充值達到6元，12元，30元，68元，128元，198元，328元，648元分別得到獎勵。",
            "***獎勵內容：",
            "充值6元，即可獲得",
            "##[{\"type\":2,\"count\":60},{\"type\":0,\"value\":862,\"count\":1}]",
            "** \n充值12元，即可獲得",
            "##[{\"type\":2,\"count\":130},{\"type\":0,\"value\":862,\"count\":3}]",
            "** \n充值30元，即可獲得",
            "##[{\"type\":2,\"count\":330},{\"type\":0,\"value\":862,\"count\":7}]",
            "** \n充值68元，即可獲得",
            "##[{\"type\":2,\"count\":760},{\"type\":0,\"value\":862,\"count\":10}]",
            "** \n充值128元，即可獲得",
            "##[{\"type\":2,\"count\":1460},{\"type\":0,\"value\":862,\"count\":10},{\"type\":0,\"value\":863,\"count\":3}]",
            "** \n充值198元，即可獲得",
            "##[{\"type\":2,\"count\":2260},{\"type\":0,\"value\":862,\"count\":12},{\"type\":0,\"value\":863,\"count\":6}]",
            "** \n充值328元，即可獲得",
            "##[{\"type\":2,\"count\":3760},{\"type\":0,\"value\":862,\"count\":15},{\"type\":0,\"value\":863,\"count\":9}]",
            "** \n充值648元，即可獲得",
            "##[{\"type\":2,\"count\":7480}, {\"type\":0,\"value\":862,\"count\":17},{\"type\":0,\"value\":863,\"count\":11}]"
        ],
        "mailTitle": "《端午送粽子》活動獎勵",
        "mailBody": "恭喜你完成活動，點擊領取禮包！",
        "date": "2014/06/05",
        "dateDescription": "截止日期2014年6月5日24時",
        "objective": {
            "6": {
                "award": [
                    {"type":0,"value":862,"count":1}
                ]
            },
            "12": {
                "award": [
                    {"type":0,"value":862,"count":3}
                ]
            },
            "30": {
                "award": [
                    {"type":0,"value":862,"count":7}
                ]
            },
            "68": {
                "award": [
                    {"type":0,"value":862,"count":10}
                ]
            },
            "128": {
                "award": [
                    {"type":0,"value":862,"count":10},
                    {"type":0,"value":863,"count":3}
                ]
            },
            "198": {
                "award": [
                    {"type":0,"value":862,"count":12},
                    {"type":0,"value":863,"count":6}
                ]
            },
            "328": {
                "award": [
                    {"type":0,"value":862,"count":15},
                    {"type":0,"value":863,"count":9}
                ]
            },
            "648": {
                "award": [
                    {"type":0,"value":862,"count":17},
                    {"type":0,"value":863,"count":11}
                ]
            }
        }
    },
    "LevelUp": {
        "show": true,
        "banner":"event-banner-jncj.png",
        "title": "沖級得禮包",
        "description": ["玩家凡註冊之日起一周內沖到6級即可獲得豐厚獎勵。"],
        "mailTitle": "《沖級得禮包》獎勵",
        "mailBody": "恭喜你完成沖級活動，點擊領取獎勵！",
        "date": "2014/07/05",
        "timeLimit": 604800,
        "dateDescription": "截止日期為2014年7月5日24時",
        "level": [
            {
                "count": 6,
                "award": [
                    {"type":1, "count":6000 },
                    { "type":2,"count":150 }
                ]
            }
        ]
    },
    "TotalCharge": {
        "show": false,
        "title": "累充活動",
        "description": ["累積充值達到指定數值，即可獲得相應禮包！"],
        "mailTitle": "VIP等級提升",
        "mailBody": "VIP等級得到提升，您已經擁有購買相應VIP寶箱的許可權以及以禮品。",
        "level": [
            {
                "count": 0.99,
                "award": [
                    {"type":2, "count":100 },
                    {"type":0,"value":540,"count":3},
                    {"type":0,"value":539,"count":1}
                ]
            },
            {
                "count": 9.99,
                "award": [
                    {"type":2, "count":300 },
                    {"type":0,"value":540,"count":3},
                    {"type":0,"value":539,"count":1}
                ]
            },
            {
                "count": 49.99,
                "award": [
                    {"type":0,"value":540,"count":3},
                    {"type":0,"value":539,"count":1},
                    {"type":0,"value":871,"count":10}
                ]
            },
            {
                "count": 149.99,
                "award": [
                    {"type":0,"value":540,"count":3},
                    {"type":0,"value":539,"count":1},
                    {"type":0,"value":871,"count":20},
                    {"type":0,"value":3,"count":1}
                ]
            },
            {
                "count": 399.99,
                "award": [
                    {"type":0,"value":540,"count":3},
                    {"type":0,"value":871,"count":30},
                    {"type":0,"value":552,"count":1}
                ]
            },
            {
                "count": 999.99,
                "award": [
                    {"type":0,"value":540,"count":3},
                    {"type":0,"value":871,"count":30},
                    {"type":0,"value":551,"count":1}
                ]
            },
            {
                "count": 3999.99,
                "award": [
                    {"type":0,"value":540,"count":3},
                    {"type":0,"value":0,"count":1}
                ]
            },
            {
                "count": 7999.99,
                "award": [
                    {"type":0,"value":2,"count":1}
                ]
            }
        ]
    },
    "Friend": {
        "show": true,
        "title": "朋友去哪兒？！",
        "banner":"event-banner-zyqne.png",
        "description": ["俗話說“一個好漢三個幫”，身為勇士的你單槍匹馬可不成，多加些小夥伴一起冒險吧。活動期間內成功添加20名好友就有驚喜大禮哦！"],
        "mailTitle": "《朋友去哪兒？！》活動獎勵",
        "mailBody": "恭喜你完成《朋友去哪兒？！》活動，點擊領取獎勵禮包！",
        "date": "2014/02/28",
        "dateDescription": "截止日期2014年2月28日24時",
        "level": [
            {
                "count": 20,
                "award": [
                    { "type":2, "count":50 },
                    { "type":0,"value":0, "count":5 },
                    { "type":0,"value":540, "count":1 }
                ]
            }
        ]
    },
    "FirstCharge": {
        "show": true,
        "title": "首充翻倍大行動",
        "banner":"event-banner-scfb.png",
        "description":["首次充值即可獲得寶石翻倍的獎勵，充多少送多少，媽媽再也不用擔心我的寶石了！"],
        "mailTitle": "《首充翻倍大行動》活動獎勵",
        "mailBody": "恭喜你完成活動，點擊領取活動獎勵！",
        "date": "2016/12/25",
        "dateDescription": "截止日期2016年12月25日24時",
        // iaplist.list will modify by initCampaignTable =>{award:[{type:2,count:60}}
        "objective" : iaplist
    },
    "serviceOpening": {
        "show": true,
        "title": "王者角逐",
        "banner":"event-banner-wzjz.png",
        "description": [
            "開服第一個月內每週登上戰鬥力排行榜前20名都將獲得獎勵，在活動截止的時候登上戰鬥力排行榜榜第一和PK排行榜第一分別會獲得額外的特殊獎勵",
            "***獎勵內容：",
            "** \n在活動截止的時候登上戰鬥力排行榜第一，即可獲得",
            "##[{\"type\":2,\"count\":800},{\"type\":0,\"value\":871,\"count\":100},{\"type\":0,\"value\":0,\"count\":1}]",
            "** \n在活動截止的時候登上PK排行榜第一，即可獲得",
            "##[{\"type\":2,\"count\":800},{\"type\":0,\"value\":871,\"count\":100},{\"type\":0,\"value\":1,\"count\":1}]",
            "** \n每週戰鬥力排行榜第一，即可獲得",
            "##[{\"type\":2,\"count\":400},{\"type\":1,\"count\":6000},{\"type\":0,\"value\":871,\"count\":60}]",
            "** \n每週戰鬥力排行榜第二，即可獲得",
            "##[{\"type\":2,\"count\":150},{\"type\":1,\"count\":3000},{\"type\":0,\"value\":871,\"count\":30}]",
            "** \n每週戰鬥力排行榜第三，即可獲得",
            "##[{\"type\":2,\"count\":50},{\"type\":1,\"count\":2000},{\"type\":0,\"value\":871,\"count\":15}]",
            "** \n每週戰鬥力排行榜第四到第十，即可獲得",
            "##[{\"type\":1,\"count\":2000},{\"type\":0,\"value\":871,\"count\":5}]",
            "** \n每週戰鬥力排行榜第十一到二十，即可獲得",
            "##[{\"type\":0,\"value\":871,\"count\":5}]",
            "** \n每週PK排行榜第一，即可獲得",
            "##[{\"type\":2,\"count\":500},{\"type\":1,\"count\":8000},{\"type\":0,\"value\":871,\"count\":70}]",
            "** \n每週PK排行榜第二，即可獲得",
            "##[{\"type\":2,\"count\":200},{\"type\":1,\"count\":4000},{\"type\":0,\"value\":871,\"count\":50}]",
            "** \n每週PK排行榜第三，即可獲得",
            "##[{\"type\":2,\"count\":100},{\"type\":1,\"count\":2500},{\"type\":0,\"value\":871,\"count\":20}]",
            "** \n每週PK排行榜第四到第十，即可獲得",
            "##[{\"type\":1,\"count\":2000},{\"type\":0,\"value\":871,\"count\":5}]",
            "** \n每週PK排行榜第十一到二十，即可獲得",
            "##[{\"type\":0,\"value\":871,\"count\":5}]"
        ],
        "mailTitle": "《王者角逐》活動獎勵",
        "mailBody": "恭喜你完成活動，點擊領取活動獎勵！",
        "date": "2015/02/28",
        "dateDescription": "截止日期2015年2月28日24時"
    },
    "lottery1": {
        "show": true,
        "title": "免費抽獎！抽不停！",
        "banner":"event-banner-mfcj.png",
        "description": ["幸運寶箱抽取冷卻時間減半，由24小時縮減為12小時。"],
        "date": "2015/03/05",
        "dateDescription": "截止日期2015年3月5日24時"
    },
    "lottery2": {
        "show": true,
        "title": "十一連抽大優惠！",
        "banner":"event-banner-sylc.png",
        "description": ["購買尊貴寶箱X10即可額外獲贈一次"],
        "date": "2014/03/05",
        "dateDescription": "截止日期2015年3月5日24時"
    },
    "lottery3": {
        "show": true,
        "title": "X戰甲神秘登場",
        "banner":"event-banner-xzjs.png",
        "description": [
            "開啟尊貴寶箱就有機會抽得X戰甲零件以及圖紙",
            "***零件以及圖紙：",
            "##[{\"type\":0,\"value\":1475,\"count\":1},{\"type\":0,\"value\":1476,\"count\":1},{\"type\":0,\"value\":1478,\"count\":1},{\"type\":0,\"value\":1480,\"count\":1},{\"type\":0,\"value\":1482,\"count\":1}]"
        ],
        "date": "2016/12/25",
        "dateDescription": "截止日期2016年12月25日24時"
    },
    "lottery4": {
        "show": true,
        "title": "限時時裝強勢來襲",
        "banner":"event-banner-xssz.png",
        "description": ["開啟尊貴寶箱均有機會獲得帥氣時裝，低概率獲得永久屬性時裝"],
        "date": "2015/03/05",
        "dateDescription": "截止日期2015年3月5日24時"
    },
    timeLimitAwardMsg:{
        "show": true,
		"type":"timeLimitAward",
		"poster":"",
        "title":"",
        "banner":"event-banner-xssz.png",
        "description": ["開啟尊貴寶箱均有機會獲得帥氣時裝，低概率獲得永久屬性時裝"],
        "dateDescription": "截止日期2015年2月13日24時",
		"durationDesc":[{beginTime:'2015-02-13 18:00:00',endTime:'2015-02-13 19:00:00'},
					{beginTime:'2015-02-14 18:00:00',endTime:'2015-02-14 19:00:00'},
					{beginTime:'2015-02-15 18:00:00',endTime:'2015-02-15 19:00:00'},
					{beginTime:'2015-02-16 18:00:00',endTime:'2015-02-16 19:00:00'},
					{beginTime:'2015-02-17 18:00:00',endTime:'2015-02-17 19:00:00'}, ]
    },
	timeLimitAward:{
        "show": false,
        "duration":[{beginTime:'2015-02-13 18:00:00',endTime:'2015-02-13 19:00:00'},
					{beginTime:'2015-02-14 18:00:00',endTime:'2015-02-14 19:00:00'},
					{beginTime:'2015-02-15 18:00:00',endTime:'2015-02-15 19:00:00'},
					{beginTime:'2015-02-16 18:00:00',endTime:'2015-02-16 19:00:00'},
					{beginTime:'2015-02-17 18:00:00',endTime:'2015-02-17 19:00:00'},
					],
        "generation":{
            "value":1, //add one for new LimitAward
            "awards":[
			{ "type":0,"value":1623, "count":1 }
			]
        }
    },
    "newYears1": {
        "show": true,
        "title": "新年红包送不停",
        "banner":"event-banner-xssz.png",
        "description": [
            "口袋红包无限派送，最高返宝石100%",
            "***活动期间每储值888宝石就有机会获得：",
            "##[{\"type\":0,\"value\":1630,\"count\":1}]"
        ],
        "date": "2015/02/21",
        "dateDescription": "截止日期2015年2月21日24時",
        "duration":{beginTime:'2015-02-18 00:00:00',endTime:'2015-02-21 23:59:59'}
    },
    "newYears2": {
        "show": true,
        "title": "口袋陪你过新年",
        "banner":"event-banner-xssz.png",
        "description": [
            "限时关卡每日挑战，众多奖励等你来拿",
            "***每日开放高奖励关卡，击败土豪哥布林就有豪华奖励。"
        ],
        "date": "2015/02/25",
        "dateDescription": "截止日期2015年2月25日24時",
        "duration":{beginTime:'2015-02-18 00:00:00',endTime:'2015-02-25 23:59:59'}
    },
    "newYears3": {
        "show": true,
        "title": "羊年限定装扮强势登场",
        "banner":"event-banner-xssz.png",
        "description": [
            "羊年限定专属装扮现已加入至尊宝箱，抽取排行前50更能获得超稀有的顶级装扮",
            "***活动期间抽取宝箱有机会获得：",
            "##[{\"type\":0,\"value\":1627,\"count\":1},{\"type\":0,\"value\":1628,\"count\":1}]",
            "** \n排行第1名将获得",
            "##[{\"type\":0,\"value\":1624,\"count\":1}]",
            "** \n排行前10名将获得",
            "##[{\"type\":0,\"value\":1625,\"count\":1}]",
            "** \n排行前50名将获得",
            "##[{\"type\":0,\"value\":1626,\"count\":1}]"
        ],
        "date": "2015/02/25",
        "dateDescription": "截止日期2015年2月25日24時",
        "duration":{beginTime:'2015-02-18 00:00:00',endTime:'2015-02-25 23:59:59'}
    },
    "newYears4": {
        "show": true,
        "title": "新年壕不停",
        "banner":"event-banner-xssz.png",
        "description": [
            "充值有礼惊喜不断（涉及奖励 时装碎片 万能碎片 x手甲图纸）",
            "** \n活动期间充值排行第1名将获得",
            "##[{\"type\":0,\"value\":1480,\"count\":1},{\"type\":0,\"value\":5,\"count\":3},{\"type\":0,\"value\":1617,\"count\":5}]",
            "** \n充值前10名将获得",
            "##[{\"type\":0,\"value\":5,\"count\":1},{\"type\":0,\"value\":1617,\"count\":3}]",
            "** \n充值前50名将获得",
            "##[{\"type\":0,\"value\":1617,\"count\":3}]"
        ],
        "date": "2015/02/25",
        "dateDescription": "截止日期2015年2月25日24時",
        "duration":{beginTime:'2015-02-22 00:00:00',endTime:'2015-02-25 23:59:59'}
    },
    "newYears5": {
        "show": true,
        "title": "年货大礼包",
        "banner":"event-banner-xssz.png",
        "description": [
            "新春大礼包限时团购，超值的道具绝不能错过",
            "***新春大礼包开放团购，每日限购1次，内含体力药水、复活药水、扫荡卷轴",
            "##[{\"type\":0,\"value\":1629,\"count\":1}]"
        ],
        "date": "2015/03/05",
        "dateDescription": "截止日期2015年3月5日24時",
        "duration":{beginTime:'2015-02-25 00:00:00',endTime:'2015-03-05 23:59:59'}
    },
    "newYears6": {
        "show": true,
        "title": "春节新衣大放送",
        "banner":"event-banner-xssz.png",
        "description": [
            "高阶时装抽取几率提升500%",
            "***新春高阶时装大放送",
            "** \n2015/02/18-2015/02/21",
            "##[{\"type\":0,\"value\":1588,\"count\":1},{\"type\":0,\"value\":1589,\"count\":1},{\"type\":0,\"value\":1590,\"count\":1},{\"type\":0,\"value\":1591,\"count\":1}]",
            "** \n2015/02/22-2015/02/25",
            "##[{\"type\":0,\"value\":1592,\"count\":1},{\"type\":0,\"value\":1593,\"count\":1},{\"type\":0,\"value\":1594,\"count\":1},{\"type\":0,\"value\":1595,\"count\":1}]"
        ],
        "date": "2015/02/25",
        "dateDescription": "截止日期2015年2月25日24時",
        "duration":{beginTime:'2015-02-18 00:00:00',endTime:'2015-02-25 23:59:59'}
    },
    "Valentine's day": {
        "show": true,
        "title": "情人节浪漫来袭",
        "banner":"event-banner-qrj.png",
        "description": [
            "浪漫头饰限时送，浪漫套装、精美表情全面登场",
            "** \n浪漫头饰每日18时免费抢",
            "##[{\"type\":0,\"value\":1623,\"count\":1}]",
            "** \n宝箱抽取有机会获得浪漫套装",
            "##[{\"type\":0,\"value\":1622,\"count\":1}]",
            "** \截止活动结束宝箱抽取排名前50名获得魅力之眼",
            "##[{\"type\":0,\"value\":4,\"count\":1}]"
        ],
        "date": "2015/02/17",
        "dateDescription": "截止日期2015年2月17日24時",
        "duration":{beginTime:'2015-02-13 00:00:00',endTime:'2015-02-17 23:59:59'}
    }
};
