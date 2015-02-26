var helperLib= require('./helper');
var LeaderboardIdx= helperLib.LeaderboardIdx;
var diffDate = helperLib.diffDate;  
var checkBountyValidate =  helperLib.checkBountyValidate;
var ConstValue = helperLib.ConstValue ;
var dbLib = require('./db');
var moment = require('moment');
require('./globals');
require('./define');
var L = function(key) {
 return translate_with("chinese", key);
}
// events:
// ?when to run this cfg: search syncEvent()
// ?the means of field
//  id: bountyid, table/bounty.js 
//     if id is null  only canReset and reset will be excute
exports.events = {
  "event_daily": {
    "flag": "daily",
    "resetTime": { hour: 8 },
    "storeType": "player",
    "daily": true,
    "reward": [
    { "prize": { "type": 0, "value": 33, "count": 1 }, "weight": 1 }, 
    { "prize": { "type": 0, "value": 34, "count": 1 }, "weight": 1 },
    { "prize": { "type": 0, "value": 35, "count": 1 }, "weight": 1 },
    { "prize": { "type": 0, "value": 36, "count": 1 }, "weight": 1 }, 
    { "prize": { "type": 0, "value": 37, "count": 1 }, "weight": 1 }
    ],
    "steps": 4,
    "quest": [128, 129, 130, 131, 132, 133, 134, 135, 136, 137,
    138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151]
  },
  goblin: {
    storeType: "player",
    id: 0,
    actived: 1,
    count: function(obj, util) {
      return obj.getPrivilege('tuHaoCount');
    },
    canReset: function(obj, util) {
      return util.diffDay(obj.timestamp.goblin, util.today);
    },
    reset: function(obj, util) {
      obj.timestamp['goblin'] = util.currentTime();
      return obj.counters['goblin'] = 0;
    }
  },
  enhance: {
    storeType: "player",
    id: 1,
    actived: 1,
    count: function(obj, util) {
      return obj.getPrivilege('EvilChieftains');
    },
    canReset: function(obj, util) {
      return (util.diffDay(obj.timestamp.enhance, util.today)) 
          && (util.today.weekday() === 2 || util.today.weekday() === 4 || util.today.weekday() === 6 || util.today.weekday() === 0);
    },
    reset: function(obj, util) {
      obj.timestamp['enhance'] = util.currentTime();
      return obj.counters['enhance'] = 0;
    }
  },
  weapon: {
    storeType: "player",
    id: 2,
    actived: 1,
    count: function(obj, util) {
      return obj.getPrivilege('EquipmentRobbers');
    },
    canReset: function(obj, util) {
      return (util.diffDay(obj.timestamp.weapon, util.today)) 
          && (util.today.weekday() === 1 || util.today.weekday() === 3 || util.today.weekday() === 5 || util.today.weekday() === 0);
    },
    reset: function(obj, util) {
      obj.timestamp['weapon'] = util.currentTime();
      return obj.counters['weapon'] = 0;
    }
  },
  infinite: {
    storeType: "player",
    id: 3,
    actived: function(obj, util) {
      if (checkBountyValidate(3, util.today)) {
        return 1;
      } else {
        return 0;
      }
    },
    canReset: function(obj, util) {
      return util.today.hour() >= 8 && diffDate(obj.timestamp.infinite, util.today) >= 7;
    },
    reset: function(obj, util) {
      obj.timestamp['infinite'] = util.currentTime();
      obj.stage[120]['level'] = 0;
      return obj.notify('stageChanged', {
        stage: 120
      });
    }
  },
  hunting: {
    storeType: "player",
    id: 4,
    actived: function(obj, util) {
      if (checkBountyValidate(4, util.today)) {
        return 1;
      } else {
        return 0;
      }
    },
    stages: [121, 122, 123, 125, 126, 127, 128, 129, 130, 131, 132],
    canReset: function(obj, util) {
      return diffDate(obj.timestamp.hunting, util.today) >= 7;
    },
    reset: function(obj, util) {
      var s, stages, _i, _len;
      obj.timestamp.hunting = util.currentTime();
      stages = [121, 122, 123, 125, 126, 127, 128, 129, 130, 131, 132];
      for (_i = 0, _len = stages.length; _i < _len; _i++) {
        s = stages[_i];
        if (obj.stage[s]) {
          obj.stage[s].level = 0;
        }
      }
      return obj.modifyCounters('monster', {
        value: 0,
        notify: {
          name: 'countersChanged',
          arg: {
            type: 'monster'
          }
        }
      });
    }
  },
  happyNewYear: {
    storeType: "player",
    id: 5,
    actived: function(obj, util) {
        var today =  util.today;
        var isOpen = today.isBefore('2015-02-25') && today.isAfter('2015-2-18');
        return isOpen ? 1: 0;
    },
    count: function(obj, util) {
      return 2;
    },
 
    canReset: function(obj, util) {
        return (util.diffDay(obj.timestamp.happyNewYear, util.today)) 
    },
    reset: function(obj, util) {
        obj.timestamp['happyNewYear'] = util.currentTime();
        return obj.counters['happyNewYear'] = 0;
    }
  },
  monthCard: {
    storeType: "player",
    id: -1,
    actived: function(obj, util) {
      if (!obj.counters.monthCard) {
        return 0;
      }
      if (!obj.timestamp.monthCard) {
        return 1;
      }
      if (moment().isSame(obj.timestamp.monthCard, 'day')) {
        return 0;
      }
      return 1;
    }
  },
  pkCounter: {
    storeType: "player",
    actived: 1,
    canReset: function(obj, util) {
      return util.diffDay(obj.timestamp.currentPKCount, util.today);
    },
    reset: function(obj, util) {
      obj.timestamp.currentPKCount = util.currentTime();
      obj.counters.currentPKCount = 0;
      obj.counters.addPKCount = 0;
      return obj.flags.rcvAward = false;
    }
  },
  chargeDiamond:{
    storeType: "player",
    canReset: function(obj, util) {
        if (obj.timestamp.chargeDiamond == null) {
            obj.timestamp.chargeDiamond = util.moment(0);
        }
        var ret =  util.isFristInTime(['2015-02-22 00:00:00'],
                obj.timestamp.chargeDiamond,
                util.currentTime());

        return ret;
 
    },
    reset: function(obj, util) {
        obj.counters.chargeDiamond  = 0;
        obj.timestamp.chargeDiamond = util.currentTime();
    }
  },
  buyTreasureTimes:{
    storeType: "player",
    canReset: function(obj, util) {
        if (obj.timestamp.buyTreasureTimes == null) {
            obj.timestamp.buyTreasureTimes = util.moment(0);
        }
        var ret =  util.isFristInTime(['2015-02-12','2015-02-17 23:58:00'],
                obj.timestamp.buyTreasureTimes,
                util.currentTime());
        return ret;
    },
    reset: function(obj, util) {
        obj.counters.buyTreasureTimes = 0;
        obj.timestamp.buyTreasureTimes = util.currentTime();
        
    }
  },

};

exports.intervalEvent = {
  infinityDungeonPrize: {
    time: {
      minite: 59
    },
    func: function(libs) {
      var cfg;
      cfg = [
        {
          from: 0,
          to: 0,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src: MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [
              { type: 2, count: 50 },
              { type: 0, value: 869, count: 1 }
            ],
            tit: L("RU_SupperMan"),
            txt: L("RU_SupperMan_First")
          }
        }, {
          from: 1,
          to: 4,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src: MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [
              { type: 2, count: 20 },
              { type: 0, value: 868, count: 1 }
            ],
            tit: L("RU_SupperMan"),
            txt: L("RU_SupperMan_Top5")
          }
        }, {
          from: 5,
          to: 9,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src: MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [
              { type: 2, count: 10 },
              { type: 0, value: 867, count: 1 }
            ],
            tit: L("RU_SupperMan"),
            txt: L("RU_SupperMan_Top10")
          }
        }
      ];
      return cfg.forEach(function(e) {
        return libs.helper.getPositionOnLeaderboard(LeaderboardIdx.InfinityDungeon, 'nobody', e.from, e.to, function(err, result) {
          return result.board.name.forEach(function(name, idx) {
            var infoStr;
            libs.db.deliverMessage(name, e.mail);
            infoStr = ' from:' + e.from + ' to: ' + e.to + ' rank:' + result.board.score[idx];
            return logInfo({
              action: 'leadboradPrize',
              index: 0,
              msg: infoStr
            });
          });
        });
      });
    }
  },
  killMonsterPrize: {
    time: {
      minite: 59
    },
    func: function(libs) {
      var cfg;
      cfg = [
        {
          from: 0,
          to: 0,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src: MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [
            { type: 2, count: 50 },
            { type: 0, value: 866, count: 1 }
            ],
            tit: L("HuntingRank"),
            txt: L("HuntingRank_Top1")
          }
        }, {
          from: 1,
          to: 4,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src: MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [
              { type: 2, count: 20 },
              { type: 0, value: 865, count: 1 }
            ],
            tit: L("HuntingRank"),
            txt: L("HuntingRank_Top5")
          }
        }, {
          from: 5,
          to: 9,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src: MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [
              { type: 2, count: 10 }, 
              { type: 0, value: 864, count: 1 }
            ],
            tit: L("HuntingRank"),
            txt: L("HuntingRank_Top10")
          }
        }
      ];
      return cfg.forEach(function(e) {
        return libs.helper.getPositionOnLeaderboard(LeaderboardIdx.KillingMonster, 'nobody', e.from, e.to, function(err, result) {
          return result.board.name.forEach(function(name, idx) {
            var infoStr;
            libs.db.deliverMessage(name, e.mail);
            infoStr = ' from:' + e.from + ' to: ' + e.to + ' rank:' + result.board.score[idx];
            return logInfo({
              action: 'leadboradPrize',
              index: 1,
              msg: infoStr
            });
          });
        });
      });
    }
  },
  worldBoss: {
    time: {
      weekday: 2
    },
    func: function(libs) {
      var cfg, stageId, _base;
      stageId = '133';
      if ((_base = libs.sObj.counters)[stageId] == null) {
        _base[stageId] = 0;
      }
      if (libs.sObj.counters[stageId] >= ConstValue.WorldBossTimes) {
        cfg = [
          {
            from: 0,
            to: 0,
            mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
                { type: 2, count: 100 },
                { type: 0, value: 878, count: 1 }
              ],
              tit: L("evilWizard"),
              txt: L("evilWizard_Top1")
            }
          }, {
            from: 1,
            to: 9,
            mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
                { type: 2, count: 100 }
              ],
              tit: L("evilWizard"),
              txt: L("evilWizard_else")
            }
          }, {
            from: 10,
            to: 29,
            mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
                { type: 2, count: 50 }
              ],
              tit: L("evilWizard"),
              txt: L("evilWizard_else")
            }
          }
        ];
        return async.series([
          function(cb) {
            cfg.forEach(function(e) {
              return libs.helper.getPositionOnLeaderboard(LeaderboardIdx.WorldBoss, 'nobody', e.from, e.to, function(err, result) {
                return result.board.name.forEach(function(name, idx) {
                  var infoStr;
                  libs.db.deliverMessage(name, e.mail);
                  infoStr = ' from:' + e.from + ' to: ' + e.to + ' rank:' + result.board.score[idx];
                  return logInfo({
                    action: 'leadboradPrize',
                    index: 1,
                    msg: infoStr
                  });
                });
              });
            });
            return cb();
          }
        ], function(err, ret) {
          libs.sObj.notify('countersChanged', {
            type: stageId,
            delta: -libs.sObj.counters[stageId]
          });
          return libs.sObj.counters[stageId] = 0;
        });
      }
    }
  },
  chargeDiamond: {
    time: {
      month: 1,
      monthday: 25,
      hour:20,
    },
    func:function(libs){
      cfg = [
      {
          from: 0,
          to: 0,
          mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
              { type: 0, value: 1475, count: 1 }
              ],
                  tit: L("chargeDiamondTitle"),
                  txt: L("chargeDiamondTxt_1")
          }
      }, {
          from: 1,
          to: 9,
          mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
              { type: 0, value: 1480, count: 1 }
              ],
                  tit: L("chargeDiamondTitle"),
                  txt: L("chargeDiamondTxt_2")
          }
      }, {
          from: 10,
          to: 49,
          mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
              { type: 0, value: 1617, count: 1 }
              ],
                  tit: L("chargeDiamondTitle"),
                  txt: L("chargeDiamondTxt_3")
          }
      },

      ];
      

      return cfg.forEach(function(e) {
        return libs.helper.getPositionOnLeaderboard(LeaderboardIdx.TopTenRich , 'nobody', e.from, e.to, function(err, result) {
          return result.board.name.forEach(function(name, idx) {
            var infoStr;
            libs.db.deliverMessage(name, e.mail);
            infoStr = ' from:' + e.from + ' to: ' + e.to + ' rank:' + result.board.score[idx];
            return logInfo({
              action: 'leadboradPrize',
              index: 0,
              msg: infoStr
            });
          });
        });
      });
    }
 
  },
  openBox1:{
    time: {
        month: 1,
        monthday: 17,
        hour: 20,
    },
    func:function(libs){
      cfg = [
      {
          from: 0,
          to: 49,
          mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
              { type: 0, value: 4, count: 1 }
              ],
                  tit: L("openBoxTitle1"),
                  txt: L("openBoxTxt1")
          }
      },
      ];
      return cfg.forEach(function(e) {
        return libs.helper.getPositionOnLeaderboard(LeaderboardIdx.BuyLikeWomen, 'nobody', e.from, e.to, function(err, result) {
          return result.board.name.forEach(function(name, idx) {
            var infoStr;
            libs.db.deliverMessage(name, e.mail);
            infoStr = ' from:' + e.from + ' to: ' + e.to + ' rank:' + result.board.score[idx];
            return logInfo({
              action: 'leadboradPrize',
              index: 0,
              msg: infoStr
            });
          });
        });
      });
    }
  },
  openBox2:{
    time: {
        month:1,
        monthday: 25,
        hour:20,
    },
    func:function(libs){
      cfg = [
      {
          from: 0,
          to: 0,
          mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
              { type: 0, value: 1624, count: 1 }
              ],
                  tit: L("openBoxTitle2"),
                  txt: L("openBoxTxt21")
          }
      }, {
          from: 1,
          to: 4,
          mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
              { type: 0, value: 1625,count: 1}
              ],
                  tit: L("openBoxTitle2"),
                  txt: L("openBoxTxt22")
          }
      },{
          from: 5,
          to: 19,
          mail: {
              type: MESSAGE_TYPE_SystemReward,
              src: MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [
              { type: 0, value: 1626,count: 1}
              ],
                  tit: L("openBoxTitle2"),
                  txt: L("openBoxTxt23")
          }
      },

      ];
      return cfg.forEach(function(e) {
        return libs.helper.getPositionOnLeaderboard(LeaderboardIdx.BuyLikeWomen, 'nobody', e.from, e.to, function(err, result) {
          return result.board.name.forEach(function(name, idx) {
            var infoStr;
            libs.db.deliverMessage(name, e.mail);
            infoStr = ' from:' + e.from + ' to: ' + e.to + ' rank:' + result.board.score[idx];
            return logInfo({
              action: 'leadboradPrize',
              index: 0,
              msg: infoStr
            });
          });
        });
      });
    }
  }
};

exports.newCampainTable = {
    startupPlayer: {
        storeType: "player",
        counter: {
            key: 'startupReward',
            initial_value: 0,
            count_down: { time: 'time@ThisCounter', units: 'day' }
        },
        available_condition: [
            { type: 'counter', func: "notCounted" },
            {
                type: 'function',
                func: function (theData, utils) {
                    return startup_campaign_battle_force_server.isActive(theData.object.getServer(), theData.time);
                }
            }
        ],
        activate: function (theData, util) {
            var obj = theData.object;
            var server = obj.getServer();
            var prize = server.startup_reward;
            dbLib.deliverMessage(obj.name, {
                type: MESSAGE_TYPE_SystemReward,
                src: MESSAGE_REWARD_TYPE_SYSTEM,
                prize: prize,
                tit: L("just4Test"),
                txt: L("just4Test_txt")
            });
        }
    },
    startupServer: {
        storeType: "server",
        counter: {
            key: 'startupReward_checkin',
            initial_value: -1,
            uplimit: 7,
            count_down: { time: 'time@ThisCounter', units: 'day' }
        },
        available_condition: [ { type: 'counter', func: "notFulfiled" } ],
        prize: [
            [ {"type":1,"count":10000}, {"type":2,"count":2015} ],
            [ {"type":1,"count":10000}, {"type":2,"count":2015} ],
            [ {"type":1,"count":10000}, {"type":2,"count":2015} ],
            [ {"type":1,"count":10000}, {"type":2,"count":2015} ],
            [ {"type":1,"count":10000}, {"type":2,"count":2015} ],
            [ {"type":1,"count":10000}, {"type":2,"count":2015} ],
            [ {"type":1,"count":10000}, {"type":2,"count":2015} ]
        ],
        update: function (theData, util) {
            var obj = theData.object;
            var counter = obj.counters.startupReward.counter;
            obj.startup_reward = this.prize[counter];
            var key = this.counter.key;
            dbLib.setServerProperty("counters", key, JSON.stringify(obj.counters[key]));
        }
    },
    startupServer_battle_force : {
        storeType: "server",
        counter: {
            key: 'startupReward_battle_force_week',
            initial_value: 0,
            uplimit: 47,
            count_down: { time: 'time@ThisCounter', units: 'day' }
        },
        available_condition: [ { type: 'counter', func: "notCounted" } ],
        prizeConfig: [
        {
          from: 0,
          to: 0,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":2,"count":400},{"type":1,"count":6000},{"type":0,"value":871,"count":60}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        },
        {
          from: 1,
          to: 1,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":2,"count":150},{"type":1,"count":3000},{"type":0,"value":871,"count":30}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        },
        {
          from: 2,
          to: 2,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":2,"count":50},{"type":1,"count":2000},{"type":0,"value":871,"count":15}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        },
        {
          from: 3,
          to: 9,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":1,"count":2000},{"type":0,"value":871,"count":5}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        },

        {
          from: 10,
          to: 19,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":0,"value":871,"count":5}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        }
        ],
        finalPrize: [{
          from: 0,
          to: 0,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":2,"count":800},{"type":0,"value":871,"count":100},{"type":0,"value":0,"count":1}],
            tit: L("whoIsKing"),
            txt: L("battleForeNo1")
          }
        }],
        update: function (theData, util) {
            var key = this.counter.key;
            var counter = theData.object.counters[key].counter;
            var prizeConfig = [];

            var obj = theData.object;
            dbLib.setServerProperty("counters", key, JSON.stringify(obj.counters[key]));

            if (counter % 7 && counter != 47) return false;
            if (counter == 47) {
                prizeConfig = this.finalPrize;
            } else {
                prizeConfig = this.prizeConfig;
            }
            prizeConfig.forEach( function (e) {
                helperLib.getPositionOnLeaderboard(
                    helperLib.LeaderboardIdx.BattleForce,
                    'nobody', e.from, e.to,
                    function (err, result) {
                        result.board.name.forEach(function (name, idx) {
                            dbLib.deliverMessage(name, e.mail)
                            logInfo({
                                action: 'leadboradPrize_startupReward_battle_force',
                                counter: counter,
                                from: e.from,
                                to: e.to,
                                player: name
                            })
                        })
                    }
                );
            })
        }
    },
    startupServer_pvp : {
        storeType: "server",
        counter: {
            key: 'startupReward_pk_rank_week',
            initial_value: 0,
            uplimit: 31,
            count_down: { time: 'time@ThisCounter', units: 'day' }
        },
        available_condition: [ { type: 'counter', func: "notCounted" } ],
        prizeConfig: [
        {
          from: 0,
          to: 0,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":2,"count":500},{"type":1,"count":8000},{"type":0,"value":871,"count":70}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        },
        {
          from: 1,
          to: 1,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":2,"count":200},{"type":1,"count":4000},{"type":0,"value":871,"count":50}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        },
        {
          from: 2,
          to: 2,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":2,"count":100},{"type":1,"count":2500},{"type":0,"value":871,"count":20}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        },
        {
          from: 3,
          to: 9,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":1,"count":2000},{"type":0,"value":871,"count":5}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        },

        {
          from: 10,
          to: 19,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{"type":0,"value":871,"count":5}],
            tit: L("whoIsKing"),
            txt: L("justSoSo")
          }
        }
        ],
        finalPrize: [{
          from: 0,
          to: 0,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
    
            prize: [{"type":2,"count":800},{"type":0,"value":871,"count":100},{"type":0,"value":1,"count":1}],
            tit: L("whoIsKing"),
            txt: L("LongLiveTheKing")
          }
        }],
        update: function (theData, util) {
            var counter = theData.object.counters[this.counter.key].counter;
            var prizeConfig = [];
            var counter = theData.object.counters[this.counter.key].counter;

            var obj = theData.object;
            var key = this.counter.key;
            dbLib.setServerProperty("counters", key, JSON.stringify(obj.counters[key]));

            if (counter % 7 && counter != 30) return false;
            if (counter == 30) {
                prizeConfig = this.finalPrize;
            } else {
                prizeConfig = this.prizeConfig;
            }
            prizeConfig.forEach( function (e) {
                helperLib.getPositionOnLeaderboard(
                    helperLib.LeaderboardIdx.Arena,
                    'nobody', e.from, e.to,
                    function (err, result) {
                        result.board.name.forEach(function (name, idx) {
                            dbLib.deliverMessage(name, e.mail)
                            logInfo({
                                action: 'leadboradPrize_startupReward_pvp',
                                counter: counter,
                                from: e.from,
                                to: e.to,
                                player: name
                            })
                        })
                    }
                );
            })
        }
    },
};

