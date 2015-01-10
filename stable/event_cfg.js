exports.events = {
    "event_daily": {
      "flag": "daily",
      "resetTime": { hour: 8 },
      "storeType": "player",
      "daily": true,
      "reward": [
        { "prize":{ "type":0, "value":33, "count":1 }, "weight":1 },
        { "prize":{ "type":0, "value":34, "count":1 }, "weight":1 },
        { "prize":{ "type":0, "value":35, "count":1 }, "weight":1 },
        { "prize":{ "type":0, "value":36, "count":1 }, "weight":1 },
        { "prize":{ "type":0, "value":37, "count":1 }, "weight":1 }
      ],
      "steps": 4,
      "quest": [
        128, 129, 130, 131, 132, 133, 134, 135,
        136, 137, 138, 139, 140, 141, 142, 143,
        144, 145, 146, 147, 148, 149, 150, 151
      ]
    },
    goblin: {
      storeType: "player",
      id: 0,
      actived: 1,
      count: (obj, util) ->
        return obj.getPrivilege('tuHaoCount')
      ,
      canReset: (obj, util) ->
        return util.diffDay(obj.timestamp.goblin, util.today)
      ,
      reset: (obj, util) ->
        obj.timestamp['goblin'] = util.currentTime()
        obj.counters['goblin'] = 0
    },

    enhance: {
      storeType: "player",
      id: 1,
      actived: 1,
      count: (obj, util) ->
        return obj.getPrivilege('EvilChieftains')
      ,
      canReset: (obj, util) ->
        return ( util.diffDay(obj.timestamp.enhance, util.today)) and (
          util.today.weekday() is 2 or
          util.today.weekday() is 4 or
          util.today.weekday() is 6 or
          util.today.weekday() is 0
        )
      ,
      reset: (obj, util) ->
        obj.timestamp['enhance'] = util.currentTime()
        obj.counters['enhance'] = 0
    },

    weapon: {
      storeType: "player",
      id: 2,
      actived: 1,
      count: (obj, util) ->
        return obj.getPrivilege('EquipmentRobbers')
      ,
      canReset: (obj, util) ->
        return (util.diffDay(obj.timestamp.weapon, util.today)) and (
          util.today.weekday() is 1 or
          util.today.weekday() is 3 or
          util.today.weekday() is 5 or
          util.today.weekday() is 0
        )
      ,
      reset: (obj, util) ->
        obj.timestamp['weapon'] = util.currentTime()
        obj.counters['weapon'] = 0
    },

    infinite: {
      storeType: "player",
      id: 3,
      actived: (obj, util) ->
        if checkBountyValidate(3,util.today)
        #if exports.dateInRange(util.today,[{from:1,to:6},{from:14,to:20},{from:28,to:28}])
          return 1
        else
          return 0
      canReset: (obj, util) ->
        return (util.today.hour() >= 8 && diffDate(obj.timestamp.infinite, util.today) >= 7)
      ,
      reset: (obj, util) ->
        obj.timestamp['infinite'] = util.currentTime()
        obj.stage[120]['level'] = 0
        obj.notify('stageChanged',{stage:120})
    },

    hunting: {
      storeType: "player",
      id: 4,
      actived: (obj, util) ->
        if checkBountyValidate(4,util.today)
          #if exports.dateInRange(util.today,[{from:7,to:13},{from:21,to:27}])
          return 1
        else
          return 0
      ,
      stages: [121, 122, 123, 125, 126, 127, 128, 129, 130, 131, 132],
      canReset: (obj, util) ->
        return (diffDate(obj.timestamp.hunting, util.today) >= 7 )
      ,
      reset: (obj, util) ->
        obj.timestamp.hunting = util.currentTime()
        stages = [121, 122, 123, 125, 126, 127, 128, 129, 130, 131, 132]
        for s in stages when obj.stage[s]
          obj.stage[s].level = 0
        obj.modifyCounters('monster',{ value : 0,notify:{name:'countersChanged',arg:{type : 'monster'}}})
    },

    monthCard: {
      storeType: "player",
      id: -1,
      actived: (obj, util) ->
        return 0 unless obj.counters.monthCard
        return 1 unless obj.timestamp.monthCard
        return 0 if moment().isSame(obj.timestamp.monthCard, 'day')
        return 1
    },
    
    pkCounter: {
      storeType: "player",
      #id: -1,
      actived: 1,
      canReset: (obj, util) ->
        return (util.diffDay(obj.timestamp.currentPKCount, util.today))
      ,
      reset: (obj, util) ->
        obj.timestamp.currentPKCount = util.currentTime()
        obj.counters.currentPKCount = 0
        obj.flags.rcvAward = false
    },
}

exports.intervalEvent = {
  infinityDungeonPrize: {
    time: { minite: 59 },
    func: (libs) ->
      cfg = [
        {
          from: 0,
          to: 0,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{ type: 2, count: 50},
                    { type: 0,value:869, count: 1}],
            tit: "铁人试炼排行奖励",
            txt: "恭喜你成为铁人试炼冠军，点击领取奖励。"
          }
        },
        {
          from: 1,
          to: 4,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{ type: 2, count: 20},
                    { type: 0,value:868, count: 1}],
            tit: "铁人试炼排行奖励",
            txt: "恭喜你进入铁人试炼前五，点击领取奖励。"
          }
        },
        {
          from: 5,
          to: 9,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{ type: 2, count: 10},
                    { type: 0,value:867, count: 1}],
            tit: "铁人试炼排行奖励",
            txt: "恭喜你进入铁人试炼前十，点击领取奖励。"
          }
        }
      ]
      cfg.forEach( (e) ->
        libs.helper.getPositionOnLeaderboard(
          exports.LeaderboardIdx.InfinityDungeon,
          'nobody',
          e.from,
          e.to,
          (err, result) ->
            result.board.name.forEach( (name, idx) ->
              libs.db.deliverMessage(name, e.mail)
              infoStr =' from:' + e.from + ' to: '+ e.to + ' rank:' + result.board.score[idx]
              logInfo({action: 'leadboradPrize', index: 0, msg: infoStr })
            )
        )
      )
  },
  killMonsterPrize: {
    time: { minite: 59 },
    func: (libs) ->
      cfg = [
        {
          from: 0,
          to: 0,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{ type: 2, count: 50},
                    { type: 0,value:866, count: 1}],
            tit: "狩猎任务排行奖励",
            txt: "恭喜你成为狩猎任务冠军，点击领取奖励。"
          }
        },
        {
          from: 1,
          to: 4,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{ type: 2, count: 20},
                    { type: 0,value:865, count: 1}],
            tit: "狩猎任务排行奖励",
            txt: "恭喜你进入狩猎任务前五，点击领取奖励。"
          }
        },
        {
          from: 5,
          to: 9,
          mail: {
            type: MESSAGE_TYPE_SystemReward,
            src:  MESSAGE_REWARD_TYPE_SYSTEM,
            prize: [{ type: 2, count: 10},
                    { type: 0,value:864, count: 1}],
            tit: "狩猎任务排行奖励",
            txt: "恭喜你进入狩猎任务前十，点击领取奖励。"
          }
        }
      ]
      cfg.forEach( (e) ->
        libs.helper.getPositionOnLeaderboard(
          exports.LeaderboardIdx.KillingMonster,
          'nobody',
          e.from,
          e.to,
          (err, result) ->
            result.board.name.forEach( (name, idx) ->
              libs.db.deliverMessage(name, e.mail)
              infoStr =' from:' + e.from + ' to: '+ e.to + ' rank:' + result.board.score[idx]
              logInfo({action: 'leadboradPrize', index: 1, msg: infoStr })
           )
        )
      )
  },
  worldBoss: {
    time: { weekday: 2 },
    func: (libs) ->
      stageId = '133'
      libs.sObj.counters[stageId] ?= 0

      if libs.sObj.counters[stageId] >= CONST_MAX_WORLD_BOSS_TIMES
        cfg = [
          {
            from: 0,
            to: 0,
            mail: {
              type: MESSAGE_TYPE_SystemReward,
              src:  MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [{ type: 2, count: 100},
                      { type: 0,value:878, count: 1}],
              tit: "邪恶巫师的诡计",
              txt: "恭喜你获得《邪恶巫师的诡计》第一名，点击领取奖励"
            }
          },
          {
            from: 1,
            to: 9,
            mail: {
              type: MESSAGE_TYPE_SystemReward,
              src:  MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [{ type: 2, count: 100} ],
              tit: "邪恶巫师的诡计",
              txt: "恭喜你获得《邪恶巫师的诡计》奖励，点击领取"
            }
          },
          {
            from: 10,
            to: 29,
            mail: {
              type: MESSAGE_TYPE_SystemReward,
              src:  MESSAGE_REWARD_TYPE_SYSTEM,
              prize: [{ type: 2, count: 50} ],
              tit: "邪恶巫师的诡计",
              txt: "恭喜你获得《邪恶巫师的诡计》奖励，点击领取"
            }
          }
        ]
        async.series([
          (cb) ->
            cfg.forEach( (e) ->
              libs.helper.getPositionOnLeaderboard(
                exports.LeaderboardIdx.WorldBoss,
                'nobody',
                e.from,
                e.to,
                (err, result) ->
                  result.board.name.forEach( (name, idx) ->
                    libs.db.deliverMessage(name, e.mail)
                    infoStr =' from:' + e.from + ' to: '+ e.to + ' rank:' + result.board.score[idx]
                    logInfo({action: 'leadboradPrize', index: 1, msg: infoStr })
                  )
              )
            )
            cb()
        ],
        (err, ret) ->
          # counter=>0
          libs.sObj.notify('countersChanged',{type : stageId, delta: -libs.sObj.counters[stageId]})
          libs.sObj.counters[stageId] = 0
          # reset leaderboardid
        )
  },

}


