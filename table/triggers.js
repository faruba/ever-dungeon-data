exports.data = {
    "test": {
        "description": "測試",
        "triggerEvent": ["onTestEvent"],
        "action": [{"type": "newVariable", "name": "v_flag", "value": true}]
    },
    "test1": {
        "description": "測試",
        "variable": {"v_flag": false},
        "triggerEvent": ["onTestEvent"],
        "condition": { "and": [ "v_flag" ] },
        "action": [{"type": "newVariable", "name": "v_done", "value": true}]
    },
    "test2": {
        "action": [{"type": "modifyVariable", "name": "v_flag", "value": true, "trigger": "test1"}]
    },
    "test3": {
        "variable": {"v_count": 0},
        "triggerEvent": ["onTestEvent"],
        "action": [
            {"type": "modifyVariable", "name": "v_count", "value": {"+": ["v_count", 1]}}
        ]
    },
    "stage0-1:Introduction": {
        "description": "第一層開始時的對話",
        "triggerEvent": ["onEnterLevel"],
        "condition": { "and": [ {"==": ["currentLevel", 0]} ] },
        "action": [
            {"type": "whiteScreen","time":0,"mode":0},
            {"type": "delay","delay":1},
            {"type":"dialog","dialogId":18},
            {"type": "whiteScreen","time":2,"mode":1},
            {"type": "delay","delay":2},
            {"type":"tutorial","tutorialId":0}]
    },
    "stage0-1:FirstMonster": {
        "description": "第一次遇到怪物時的對話",
        "variable": {"v_flag": true},
        "triggerEvent": ["onMonsterShow"],
        "condition": { "and": [ "v_flag" ] },
        "action": [
            {"type": "tutorial", "tutorialId":1},
            {"type": "modifyVariable", "name": "v_flag", "value": false}
        ]
    },
    "stage0-1:Firstbaoxiang": {
        "description": "第一次遇到寶箱的對話",
        "variable": {"v_flag": true},
        "triggerEvent": ["onMonsterShow"],
        "condition": { "and": [ "v_flag",{ "==": [ { "type": "getProperty", "key": "monster.id"},169 ] } ] },
        "action": [
            {"type": "tutorial", "tutorialId":2},
            {"type": "modifyVariable", "name": "v_flag", "value": false}
        ]
    },
    "stage0-1:FirstBoss": {
        "description": "第一次遇到怪物時的對話",
        "variable": {"v_flag": true},
        "triggerEvent": ["Kill"],
        "condition": { "and": [ "v_flag",{ "==": [ { "type": "getProperty", "key": "tar.id"},22 ] } ] },
        "action": [
            {"type": "tutorial", "tutorialId":3},
            {"type": "modifyVariable", "name": "v_flag", "value": false}
        ]
    },
    "stage0-1:FirstCard": {
        "description": "第一次遇到怪物時的對話",
        "variable": {"v_flag": true},
        "triggerEvent": ["Kill"],
        "condition": { "and": [ "v_flag",{ "==": [ { "type": "getProperty", "key": "tar.id"},169 ] } ] },
        "action": [
            {"type": "tutorial", "tutorialId":9},
            {"type": "modifyVariable", "name": "v_flag", "value": false}
        ]
    },
    "stage0-1:FirstExit": {
        "description": "第一次發現出口時的對話",
        "variable": {"v_flag": true},
        "triggerEvent": ["onFindExit"],
        "condition": { "and": [ "v_flag" ] },
        "action": [
            {"type": "dialog", "dialogId":0},
            {"type": "modifyVariable", "name": "v_flag", "value": false}
        ]
    },
    "stage0-1:FirstItem": {
        "description": "第一次獲得道具時的對話",
        "variable": {"v_flag": true},
        "triggerEvent": ["onGetItem"],
        "condition": { "and": [ "v_flag" ] },
        "action": [
            {"type": "dialog", "dialogId":0},
            {"type": "modifyVariable", "name": "flag", "value": false}
        ]
    },
    "dungeon:no.reward.no.result": {
        "description": "無地下城獎勵",
        "triggerEvent": ["onClaimResult"],
        "action": [ {"type": "modifyEnvVariable", "name": "win", "value": 2} ]
    },


    "X": [
        {
            "config": {
                "basic": { "spellAction": 4, "spellEffect": 1, "spellDelay": 0.3 },
                "triggerCondition": [
                    { "type": "event", "event": "onBePhysicalDamage" },
                    { "type": "event", "event": "onBePhysicalRangeDamage" },
                    { "type": "event", "event": "onBeSpellDamage" },
                    { "type": "event", "event": "onBeSpellRangeDamage" }
                ],
                "availableCondition": [ { "type": "effectCount" } ],
                "action": [
                    { "type": "modifyVar", "x": "damage", "formular": {"environment": {"damage":0}} }
                ],
                "levelConfig": [ {"count": 1}, {"count": 2}, {"count": 3} ]
            }
        },
        {
            "skillId": 2,
            "label":"援護",
            "icon": "skill-warrior2.png",
            "desc":"戰士運用自身厚實的裝備保護隊友，為其承受傷害，技能等級越高，所受傷害越少。",
            "slotId": 1 ,
            "config": {
                "basic" : {
                    "spellAction":4,
                    "spellEffect": 9,
                    "targetEffect": 1 ,
                    "spellDelay": 0,
                    "targetDelay": 0
                },
                "targetSelection": {
                    "pool": "Target",
                    "filter": ["Alive", "Visible"]
                },
                "triggerCondition": [
                    { "type": "event", "event": "onTeammateBePhysicalDamage" },
                    { "type": "event", "event": "onTeammateBePhysicalRangeDamage" },
                    { "type": "chance", "chance": 0.3 },
                    { "type": "targetMutex", "mutex": "reinforce" },
                    {"type":"alive"}
                ],
                "action": [
                    {"type": "modifyVar", "x": "damage" },
                    {"type": "setTargetMutex", "mutex": "reinforce", "count": 1 },
                    {"type": "setMyMutex", "mutex": "reinforce", "count": 1 },
                    {"type": "replaceTar" },
                    {"type": "ignoreHurt" }
                ],
                "levelConfig": [
                    { "formular": {"environment": {"damage":0.8}} },
                    { "formular": {"environment": {"damage":0.7}} },
                    { "formular": {"environment": {"damage":0.5}} }
                ]
            }
        },
        {
            "skillId": 3,
            "label": "自愈",
            "icon": "skill-warrior3.png",
            "desc":"戰士在受到治療時，能夠獲得額外的生命值回復，回復值與韌性值有關。",
            "slotId": 2,
            "config": {
                "basic" : { },
                "triggerCondition": [
                    { "type": "event", "event": "onBeHeal" }
                ],
                "targetSelection": {
                    "pool": "Self",
                    "filter": ["Alive", "Visible"]
                },
                "action": [
                    { "type": "modifyVar", "x": "hp" }
                ],
                "levelConfig" : [
                    { "formular": {"tar":{"strong":0.1}, "c": 5,"environment": {"hp": 1}} },
                    { "formular": {"tar":{"strong":0.1}, "c": 10,"environment": {"hp": 1}} },
                    { "formular": {"tar":{"strong":0.2}, "c": 20,"environment": {"hp": 1}} }
                ]
            }
        },
        {
            "skillId": 4,
            "label":"奮勇一擊",
            "icon": "skill-warrior4.png",
            "desc":"戰士攻擊時有一定概率使出全力一擊，造成的傷害與生命值有關。",
            "slotId": 3,
            "config": {
                "basic" : {
                    "spellAction": 3,
                    "spellEffect": 4,
                    "targetEffect": 7,
                    "spellDelay": 0.6,
                    "targetDelay": 0.9
                },
                "triggerCondition": [
                    { "type": "event", "event": "onTarget" },
                    { "type": "chance", "chance": 0.1 }
                ],
                "action": [
                    { "type": "modifyVar", "x": "damage", "formular": {"src": {"health":0.3}} }
                ]
            }
        },
        {
            "skillId": 5,
            "label":"閃電",
            "icon": "skill-mage1.png",
            "desc":"召喚閃電，對一名敵人造成傷害，傷害值與法師攻擊力相關。",
            "slotId": 0,
            "config": {
                "basic": {
                    "spellAction": 1,
                    "spellEffect": 4,
                    "targetEffect": 0,
                    "targetDelay": 0.3
                },
                "triggerCondition": [
                    { "type": "countDown", "cd": 10 }
                ],
                "targetSelection": {
                    "pool": "Enemy",
                    "filter": ["Alive", "Visible"],
                    "method": "Rand"
                },
                "action": [
                    { "type": "damage","damageType":"Spell","isRange":true }
                ],
                "levelConfig" : [
                    { "formular": {"src":{"attack":0.8}} },
                    { "formular": {"src":{"attack":1}} },
                    { "formular": {"src":{"attack":1.2}} }
                ]
            }
        },
        {
            "skillId": 6,
            "label":"超載",
            "icon": "skill-mage2.png",
            "desc":"攻擊造成暴擊時，法師能夠施展法術超載，對全體敵人造成傷害，傷害值與攻擊力相關。",
            "slotId": 3,
            "config":{
                "basic":{
                    "spellAction": 2,
                    "spellEffect": 4,
                    "targetEffect": 10,
                    "spellDelay": 0.3,
                    "targetDelay": 0.3
                },
                "triggerCondition": [{
                    "type": "event", "event": "onCriticalDamage"
                }],
                "targetSelection": {
                    "pool": "Enemy",
                    "filter": ["Alive", "Visible"]
                },
                "action": [
                    {"type": "damage","damageType":"Spell","isRange":true,"formular": {"src":{"attack":0.7},"c":15}},
                    {"type": "playEffect","effect":4,"pos":"self"}
                ]
            }
        },
        {
            "skillId": 7,
            "label":"炎甲",
            "icon": "skill-mage3.png",
            "desc":"法師使用一層火焰魔法保護自己，當受到攻擊時，對敵人造成傷害，傷害值與攻擊力有關。",
            "slotId":2,
            "config":{
                "basic":{
                    "spellEffect": 1,
                    "targetEffect": 10,
                    "spellDelay": 0.3,
                    "targetDelay": 0
                },
                "triggerCondition": [
                    { "type": "event", "event": "onBePhysicalDamage" },
                    { "type": "chance", "chance": 0.3 }
                ],
                "action": [
                    { "type": "damage","damageType":"Spell" }
                ],
                "targetSelection": {
                    "pool": "Attacker",
                    "filter": ["Alive", "Visible"]
                },
                "levelConfig":[
                    {"formular": {"src":{"attack":0.2},"c":2}},
                    {"formular": {"src":{"attack":0.3},"c":10}},
                    {"formular": {"src":{"attack":0.4},"c":15}}
                ]
            }
        },
        {
            "skillId": 8,
            "label":"治癒",
            "icon": "skill-priest1.png",
            "desc":"對隊伍中生命值最低的成員進行回復，回復值與命中值相關。",
            "slotId": 0,
            "config": {
                "basic": {
                    "spellAction":1,
                    "spellEffect": 4,
                    "targetEffect": 3,
                    "spellDelay": 0.3,
                    "targetDelay": 0.3
                },
                "triggerCondition": [
                    { "type": "countDown", "cd": 10 }
                ],
                "targetSelection": {
                    "pool": "Team",
                    "filter": ["Alive", "Visible"],
                    "method": "LowHealth"
                },
                "action": [
                    { "type": "heal" }
                ],
                "levelConfig" : [
                    {"formular": { "src":{"accuracy":0.2}, "c": 5 }},
                    {"formular": { "src":{"accuracy":0.2}, "c": 10 }},
                    {"formular": { "src":{"accuracy":0.2}, "c": 20 }}
                ]
            }
        },
        {
            "skillId": 9,
            "label":"寬恕",
            "icon": "skill-priest2.png",
            "desc":"當牧師對敵人造成傷害時，有一定幾率能回復我方隊友生命值，回復生命值與命中值相關。",
            "slotId": 1,
            "config": {
                "basic": {
                    "targetEffect": 3,
                    "targetDelay": 0.3
                },
                "triggerCondition": [
                    { "type": "event", "event": "onPhysicalDamage" },
                    { "type": "chance", "chance":0.4 }
                ],
                "action": [
                    { "type": "heal","formular":{"src":{"accuracy":0.1}}}
                ],
                "targetSelection": {
                    "pool": "Team",
                    "filter": ["Alive", "Visible"],
                    "method": "LowHealth"
                },
                "levelConfig" : [
                    { "c": 3 },
                    { "c": 10 },
                    { "c": 20 }
                ]
            }
        },
        {
            "skillId": 10,
            "label":"救贖",
            "icon": "skill-priest3.png",
            "desc":"牧師成功擊殺敵人時，能夠有一定概率短時間提升全體成員的攻擊力。",
            "slotId": 2,
            "config":{
                "basic":{
                    "spellAction": 1,
                    "spellEffect": 4,
                    "targetEffect": 13,
                    "spellDelay": 0.3,
                    "targetDelay": 0.3
                },
                "triggerCondition": [
                    { "type": "event", "event": "onKill" },
                    { "type": "chance", "chance":0.3 }
                ],
                "action": [
                    {"type":"delay"},
                    {"type": "installSpell", "spell": 14 }
                ],
                "targetSelection": {
                    "pool": "Team",
                    "filter": ["Alive", "Visible"]
                },
                "levelConfig" : [
                    { "level": 1 }, { "level": 2 }, { "level": 3 }
                ]
            }
        },
        {
            "skillId": 11,
            "label":"奇跡之光",
            "icon": "skill-priest4.png",
            "desc":"當我方成員受到致命一擊時，牧師能夠一定概率召喚奇跡之光，使其免除此次傷害。",
            "slotId": 3,
            "config": {
                "basic": {
                    "spellAction": 1,
                    "spellEffect": 4,
                    "targetEffect": 22,
                    "spellDelay": 0.3,
                    "targetDelay": 0.3
                },
                "triggerCondition": [
                    { "type": "event", "event": "onTeammateBeDeathStrike" },
                    { "type": "event", "event": "onBeDeathStrike" },
                    { "type": "chance", "chance": 0.4 },
                    { "type": "targetMutex", "mutex": "lightOfMiracel" }
                ],
                "targetSelection": {
                    "pool": "Target",
                    "filter": ["Alive", "Visible"]
                },
                "action": [
                    {"type": "modifyVar", "x": "damage", "formular": {"environment":{"c":0}}},
                    {"type": "setTargetMutex", "mutex": "lightOfMiracel", "count": 1 }
                ]
            }
        },
        {
            "skillId": 12,
            "label":"元素爆發",
            "icon": "skill-mage4.png",
            "desc":"法師每次攻擊能夠增加自身暴擊值，直至造成暴擊後清空。",
            "slotId": 1,
            "config":{
                "targetSelection": { "pool": "Self" },
                "triggerCondition": [
                    { "type": "event", "event": "onCriticalDamage", "count": 1 }
                ],
                "installAction": [
                    { "type": "removeSpell", "spell": 33},
                    { "type": "installSpell", "spell": 33}
                ],
                "action": [
                    { "type": "removeSpell", "spell": 33},
                    { "type": "installSpell", "spell": 33}
                ],
                "levelConfig":[{"level":1},{"level":2},{"level":3}]
            }
        },
        {
            "skillId": 13,
            "label":"援護",
            "icon": "skill-warrior2.png",
            "desc":"戰士運用自身厚實的裝備保護隊友，為其承受傷害，技能等級越高，所受傷害越少。",
            "slotId": 1 ,
            "config": {
                "basic" : {
                    "spellAction":4,
                    "spellEffect": 9,
                    "targetEffect": 1 ,
                    "spellDelay": 0,
                    "targetDelay": 0
                },
                "targetSelection": {
                    "pool": "Target",
                    "filter": ["Alive", "Visible"]
                },
                "triggerCondition": [
                    { "type": "event", "event": "onTeammateBePhysicalDamage" },
                    { "type": "event", "event": "onTeammateBePhysicalRangeDamage" },
                    { "type": "chance", "chance": 1 },
                    {"type":"alive"},
                    { "type": "targetMutex", "mutex": "reinforce" }
                ],
                "action": [
                    {"type": "modifyVar", "x": "damage", "formular": {"environment": {"damage":0.4}} },
                    {"type": "setMyMutex", "mutex": "reinforce", "count": 1 },
                    {"type": "setTargetMutex", "mutex": "reinforce", "count": 1 },
                    {"type": "replaceTar" },
                    {"type": "ignoreHurt" }
                ]
            }
        },
        {
            "skillId": 14,
            "config": {
                "installAction": [
                    { "type": "setProperty" }
                ],
                "uninstallAction": [
                    { "type": "resetProperty" }
                ],
                "buffType":"AttackBuff",
                "availableCondition": [
                    { "type": "event", "event": "onBeginBattleTurn", "eventCount": 2 }
                ],
                "levelConfig" : [
                    { "modifications": {"attack":{"src":{"attack":0.5},"c":2}}},
                    { "modifications": {"attack":{"src":{"attack":0.5},"c":5}}},
                    { "modifications": {"attack":{"src":{"attack":0.5},"c":15}}}
                ]
            }
        },
        {
            "skillId": 15,
            "label":"草藥",
            "desc":"對生命值最少的隊友進行恢復",
            "config": {
                "basic": {
                    "targetEffect": 19
                },
                "triggerCondition": [
                    {"type" :"card", "id": 0}
                ],
                "targetSelection": {
                    "pool": "Teammate",
                    "filter": ["Alive", "Visible"],
                    "method": "LowHealth"
                },
                "action":[
                    {"type": "heal", "formular": {"tar":{"strong":1}, "c":5}},
                    {"type": "costCard", "card":0}
                ]
            }
        },
        {
            "skillId": 16,
            "label":"萬能藥",
            "desc":"恢復一切異常狀態",
            "config": {
                "basic": {
                    "targetEffect": 14
                },
                "triggerCondition": [
                    {"type" :"card", "id": 1}
                ],
                "targetSelection": {
                    "pool": "Team",
                    "filter": ["Alive", "Visible"]
                },
                "action":[
                    {"type": "clearDebuff"},
                    {"type": "costCard", "card":1}
                ]
            }
        },
        {
            "skillId": 17,
            "label":"復活十字章",
            "desc":"被擊倒後重生",
            "config": {
                "basic": {
                    "targetEffect": 22
                },
                "triggerCondition": [
                    {"type" :"card", "id": 4},
                    {"type" :"event", "event": "onTeammateBeKill"},
                    {"type" :"event", "event": "onBeKill"}
                ],
                "targetSelection": {
                    "pool": "Target"
                },
                "action":[
                    {"type": "resurrect"},
                    {"type": "costCard", "card":4}
                ]
            }
        },
        {
            "skillId": 18,
            "label":"極速之靴",
            "desc":"提升全體回避率",
            "config": {
                "basic": {
                    "targetEffect": 16
                },
                "triggerCondition": [
                    {"type" :"card", "id": 5}
                ],
                "targetSelection": {
                    "pool": "Team",
                    "filter": ["Alive"]
                },
                "action":[
                    {"type": "costCard", "card":5},
                    {"type":"installSpell", "spell": 22}
                ]
            }
        },
        {
            "skillId": 19,
            "label":"集中藥水",
            "desc":"提升全體命中值",
            "config": {
                "basic": {
                    "targetEffect": 15
                },
                "triggerCondition": [
                    {"type" :"card", "id": 6}
                ],
                "targetSelection": {
                    "pool": "Team",
                    "filter": ["Alive"]
                },
                "action":[
                    {"type": "costCard", "card":6},
                    {"type":"installSpell", "spell": 23}
                ]
            }
        },
        {
            "skillId": 20,
            "label":"怪力藥水",
            "desc":"短時間內提升全體攻擊力",
            "config": {
                "basic": {
                    "targetEffect": 13
                },
                "triggerCondition": [
                    {"type" :"card", "id": 7}
                ],
                "targetSelection": {
                    "pool": "Team",
                    "filter": ["Alive"]
                },
                "action":[
                    {"type": "costCard", "card":7},
                    {"type":"installSpell", "spell": 24}
                ]
            }
        },
        {
            "skillId": 21,
            "label":"時間沙漏",
            "desc":"立即恢復技能冷卻",
            "config": {
                "basic": {
                    "targetEffect": 14
                },
                "triggerCondition": [
                    {"type" :"card", "id": 8}
                ],
                "targetSelection": {
                    "pool": "Team",
                    "filter": ["Alive"]
                },
                "action":[
                    {"type": "costCard", "card":8},
                    {"type": "resetSpellCD"}
                ]
            }
        },
        {
            "skillId": 22,
            "config": {
                "installAction":[
                    { "type": "setProperty",  "modifications": {"reactivity":{"src":{"reactivity":1}}} }
                ],
                "uninstallAction": [
                    { "type": "resetProperty" }
                ],
                "buffType":"RoleBuff",
                "availableCondition": [
                    { "type": "event", "event": "onEndBattleTurn", "eventCount": 2 }
                ]
            }
        },
        {
            "skillId": 23,
            "config": {
                "installAction":[
                    { "type": "setProperty",  "modifications": {"speed":{"src":{"speed":1}}} }
                ],
                "uninstallAction": [
                    { "type": "resetProperty" }
                ],
                "buffType":"RoleBuff",
                "availableCondition": [
                    { "type": "event", "event": "onEndBattleTurn", "eventCount": 2 }
                ]
            }
        },
        {
            "skillId": 24,
            "config": {
                "installAction":[
                    { "type": "setProperty",  "modifications": {"attack":{"src":{"attack":1}}} }
                ],
                "uninstallAction": [
                    { "type": "resetProperty" }
                ],
                "buffType":"AttackBuff",
                "availableCondition": [
                    { "type": "event", "event": "onEndBattleTurn", "eventCount": 1 }
                ]
            }
        },
        {
            "skillId": 25,
            "label":"地牢指針",
            "desc":"立刻顯示下一層出口位置",
            "config": {
                "basic": {
                    "targetEffect": 14
                },
                "triggerCondition": [
                    {"type" :"card", "id": 3}
                ],
                "action":[
                    {"type": "costCard", "card":3},
                    {"type": "showExit"}
                ]
            }
        },
        { "skillId": 26,
            "label":"遠程攻擊",
            "config": {
                "triggerCondition": [
                    {"type" :"event", "event":"onBattleTurnEnd" },
                    {"type" :"event", "event":"onMoveTurnEnd" }
                ],
                "targetSelection": {
                    "pool": "Enemy",
                    "filter": ["Alive","Visible"],
                    "method": "Rand"
                },
                "action":[
                    {"type": "rangeAttack"}
                ]
            }
        },
        {
            "skillId": 27,
            "label":"直接現身",
            "config": {
                "triggerCondition": [
                    {"type":"event", "event":"onEnterLevel" }
                ],
                "targetSelection": {
                    "pool": "Self"
                },
                "action": [
                    {"type": "showUp"}
                ]
            }
        },
        {
            "skillId": 28,
            "label":"傳送",
            "config": {
                "triggerCondition": [
                    {"type":"event","event":"onBePhysicalDamage"},
                    {"type":"event","event":"onBePhysicalRangeDamage"},
                    {"type":"event","event":"onBeSpellDamage"},
                    {"type":"event","event":"onBeSpellRangeDamage"},
                    {"type":"alive"}
                ],
                "targetSelection":{
                    "pool":"Self",
                    "filter": ["Alive"]
                },
                "action": [
                    {"type": "delay"},
                    {"type":"playEffect","effect":20,"pos":"self"},
                    {"type":"playAction","motion":6,"pos":"self"},
                    {"type": "delay"},
                    {"type": "randTeleport"},
                    {"type":"playEffect","effect":21,"pos":"self"},
                    {"type":"playAction","motion":5,"pos":"self"}
                ]
            }
        },
        {
            "skillId": 29,
            "label":"束縛",
            "config": {
                "basic": {
                    "targetEffect": 17 ,
                    "targetDelay": 0.3
                },
                "triggerCondition": [
                    {"type":"event","event":"onPhysicalDamage"},
                    { "type": "chance", "chance": 0.3 }
                ],
                "targetSelection":{
                    "pool":"Target",
                    "filter": ["Alive"]
                },
                "action": [
                    {"type": "installSpell","spell": 30}
                ]
            }
        },
        {
            "skillId": 30,
            "config": {
                "installAction":[
                    {
                        "type": "setProperty","modifications": {"reactivity":{"src":{"reactivity":-0.5}},"speed":{"src":{"speed":-0.5}}}}
                ],
                "uninstallAction": [
                    { "type": "resetProperty" }
                ],
                "buffType":"RoleDebuff",
                "availableCondition": [
                    { "type": "event", "event": "onEndBattleTurn", "eventCount": 2 }
                ]
            }
        },
        {
            "skillId": 31,
            "label":"史萊姆分裂",
            "config": {
                "triggerCondition": [
                    {"type":"event","event":"onBeKill"}
                ],
                "targetSelection":{
                    "pool":"Self"
                },
                "action": [{"type": "createMonster","objectCount":4,"randomPos":true}] ,
                "levelConfig" : [
                    { "monsterID":19},
                    { "monsterID":19,"withKey":true},
                    { "monsterID":51},
                    { "monsterID":51,"withKey":true},
                    { "monsterID":83},
                    { "monsterID":83,"withKey":true},
                    { "monsterID":115},
                    { "monsterID":115,"withKey":true}
                ]
            }
        },
        {"skillId": 32,
            "label":"狼騎士",
            "config": {
                "triggerCondition": [
                    {"type":"event","event":"onBeKill"}
                ],
                "targetSelection":{
                    "pool":"Self"
                },
                "action": [{"type": "createMonster"}] ,
                "levelConfig" : [
                    { "monsterID":5},
                    { "monsterID":22,"withKey":true},
                    { "monsterID":37},
                    { "monsterID":54,"withKey":true},
                    { "monsterID":69},
                    { "monsterID":86,"withKey":true},
                    { "monsterID":101},
                    { "monsterID":118,"withKey":true}
                ]
            }
        },
        {"skillId": 33,
            "config": {
                "action":[
                    { "type": "setProperty"}
                ],
                "targetSelection":{ "pool":"Self" },
                "uninstallAction": [
                    { "type": "resetProperty" },
                    { "type": "shock", "delay":0.3, "range":5, "time":0.2 }
                ],
                "triggerCondition": [
                    { "type":"event", "event":"onBeginBattleTurn" }
                ],
                "levelConfig":[
                    { "modifications": {"critical":{"c":1}}, "level": 1},
                    { "modifications": {"critical":{"c":2}}, "level": 2},
                    { "modifications": {"critical":{"c":4}}, "level": 3}
                ]
            }
        },
        { "skillId": 34,
            "label":"盜竊",
            "config": {
                "triggerCondition": [
                    {"type":"event","event":"onPhysicaDamage"}
                ],
                "targetSelection":{
                    "pool":"Target",
                    "filter": ["Alive"]
                },
                "action": [
                    {"type": "costCard"}
                ]
            }

        },
        {
            "skillId": 35,
            "label":"落石",
            "config": {
                "basic":{
                    "spellAction": 1
                },
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd","eventCount":3,"reset":true }
                ],
                "targetSelection": {
                    "pool": "Block",
                    "blocks":[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],
                    "count":8,
                    "method": "Rand"
                },
                "action":[
                    {"type":"installSpell", "spell": 36,"delay":{"base":1.6,"range":3}},
                    {"type":"shock","delay":1.6,"range":20,"time":2}
                ]
            }
        },
        { "skillId": 36,
            "config":{
                "installAction":[
                    {"type": "damage","damageType":"Spell","isRange":true,"delay":0.4,"formular": {"c":150}},
                    {"type": "playEffect","effect":18,"pos":"self"}
                ],
                "targetSelection": {
                    "pool": "SamePosition",
                    "filter": ["Hero"]
                },
                "availableCondition": [
                    { "type": "event", "event": "onTurnEnd" }
                ]
            }
        },
        { "skillId": 37,
            "label":"治癒龜",
            "config": {
                "triggerCondition": [
                    { "type": "countDown", "cd": 8 }
                ],
                "targetSelection": {
                    "pool": "RoleId",
                    "filter": ["Alive", "Visible"],
                    "roleId": 600
                },
                "action": [
                    { "type": "heal","formular": {"c": 10}}
                ]
            }
        },
        {
            "skillId": 38,
            "label":"boss戰1",
            "config": {
                "triggerCondition": [
                    {"type":"event", "event":"onEnterLevel" }
                ],
                "targetSelection": {
                    "pool": "Self"
                },
                "action": [
                    {"type": "delay","delay":0.3},
                    {"type":"chainBlock","source":[0,1,2,3,4,5,6,7,8,9,10,11,13,14],"target":12},
                    {"type": "kill"},
                    {"type":"changeBGM"},
                    {"type": "delay"},
                    {"type":"playSound","sound":"dragon.mp3"},
                    {"type":"dialog","dialogId":3},
                    {"type": "delay","delay":1},
                    {"type":"shock","delay":0,"range":20,"time":0.9},
                    {"type": "delay","delay":0.3},
                    {"type":"shock","delay":0,"range":20,"time":0.2},
                    {"type":"openBlock","block":0},
                    {"type":"openBlock","block":1},
                    {"type":"openBlock","block":2},
                    {"type":"openBlock","block":3},
                    {"type":"openBlock","block":4},
                    {"type": "delay","delay":0.3},
                    {"type":"shock","delay":0,"range":20,"time":0.2},
                    {"type":"openBlock","block":5},
                    {"type":"openBlock","block":6},
                    {"type":"openBlock","block":7},
                    {"type":"openBlock","block":8},
                    {"type":"openBlock","block":9},
                    {"type": "delay","delay":0.3},
                    {"type":"shock","delay":0,"range":20,"time":0.2},
                    {"type":"openBlock","block":10},
                    {"type":"openBlock","block":11},
                    {"type":"openBlock","block":12},
                    {"type":"openBlock","block":13},
                    {"type":"openBlock","block":14},
                    {"type": "delay","delay":0.3},
                    {"type":"shock","delay":0,"range":20,"time":0.2},
                    {"type":"openBlock","block":15},
                    {"type":"openBlock","block":19},
                    {"type": "delay","delay":0.3},
                    {"type":"shock","delay":0,"range":20,"time":0.2},
                    {"type":"openBlock","block":20},
                    {"type":"openBlock","block":21},
                    {"type":"openBlock","block":22},
                    {"type":"openBlock","block":23},
                    {"type":"openBlock","block":24},
                    {"type": "delay","delay":1.5},
                    {"type":"shock","delay":0,"range":20,"time":0.2},
                    {"type":"openBlock","block":25},
                    {"type":"openBlock","block":26},
                    {"type":"openBlock","block":27},
                    {"type":"openBlock","block":28},
                    {"type":"openBlock","block":29},
                    {"type": "delay","delay":1},
                    {"type":"playSound","sound":"dragon.mp3"},
                    {"type":"dialog","dialogId":17},
                    {"type": "delay","delay":8},
                    {"type":"createMonster","count":1,"monsterID":133,"pos":12,"collectID":1000},
                    {"type":"shock","delay":0.8,"range":10,"time":0.3},
                    {"type":"shock","delay":3,"range":10,"time":0.3},
                    {"type":"shock","delay":4.7,"range":10,"time":0.3},
                    {"type":"shock","delay":5.2,"range":10,"time":0.3},
                    {"type":"changeBGM","music":"boss.mp3"},
                    {"type": "delay"},
                    {"type":"dialog","dialogId":4}
                ]
            }
        },
        {
            "skillId": 39,
            "label":"boss戰2",
            "config": {
                "triggerCondition": [
                    {"type" :"event", "event":"onBeDeathStrike"}
                ],
                "targetSelection": {
                    "pool": "Self"
                },
                "action":[
                    {"type": "modifyVar", "x": "damage", "formular": {"environment":{"c":0}}},
                    {"type": "delay","delay":0.3},
                    {"type":"dialog","dialogId":5},
                    {"type": "delay","delay":2},
                    {"type":"castSpell","spell":40},
                    {"type": "delay","delay":3},
                    {"type":"dialog","dialogId":6},
                    {"type":"castSpell","spell":41},
                    {"type": "delay","delay":3},
                    {"type":"castSpell","spell":41},
                    {"type": "delay","delay":3},
                    {"type": "whiteScreen","time":5,"mode":0,"color":1},
                    {"type":"castSpell","spell":41},
                    {"type": "delay","delay":2},
                    {"type":"castSpell","spell":41},
                    {"type":"dialog","dialogId":7},
                    {"type": "delay","delay":2},
                    {"type": "kill"},
                    {"type": "delay","delay":0.3},
                    {"type": "endDungeon","result":2}
                ]
            }
        },
        {
            "skillId": 40,
            "label":"龍復活",
            "config": {
                "basic": {
                    "spellAction": 3
                },
                "targetSelection": {
                    "pool": "Self"
                },
                "action":[
                    {"type": "blink","delay":0.6,"time":0.08},
                    {"type":"shock","delay":0.5,"range":20,"time":2}
                ]
            }
        },
        {
            "skillId": 41,
            "label":"全屏落石",
            "config": {
                "basic":{
                    "spellAction": 1

                },
                "targetSelection": {
                    "pool": "Block",
                    "blocks":[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],
                    "count":8,
                    "method": "Rand"
                },
                "action":[
                    {"type":"installSpell", "spell": 44,"delay":{"base":1.6,"range":5}},
                    {"type":"shock","delay":1.6,"range":20,"time":2}
                ]
            }
        },
        {
            "skillId": 42,
            "label":"龍息",
            "config": {
                "basic" : {
                    "spellAction":2,
                    "targetEffect": 10 ,
                    "targetDelay": 3.6
                },
                "triggerCondition": [
                    {"type": "countDown", "cd": 6 },
                    {"type" :"event", "event":"onTurnEnd" }

                ],
                "targetSelection": {
                    "pool": "Enemy",
                    "filter": ["Alive", "Visible"]
                },
                "action":[
                    {"type": "damage","damageType":"Spell","isRange":true,"delay":3.6,"formular": {"c":50}},
                    {"type": "blink","delay":1.7,"time":0.08},
                    {"type":"shock","delay":1.6,"range":20,"time":2}
                ]
            }
        },
        {
            "skillId": 43,
            "label":"法師復活",
            "desc":"重生",
            "config": {
                "basic": {
                    "spellAction": 1,
                    "spellEffect": 4,
                    "targetEffect": 1,
                    "spellDelay": 0.3,
                    "targetDelay": 0.3
                },
                "triggerCondition": [
                    { "type": "event", "event": "onTeammateBeDeathStrike" },
                    { "type": "event", "event": "onBeDeathStrike" }
                ],
                "targetSelection": {
                    "pool": "Target"
                },
                "action": [
                    { "type": "modifyVar", "x": "damage", "formular": {"environment": {"damage":0}} }
                ]
            }
        },
        {
            "skillId": 44,
            "config":{
                "installAction":[
                    {"type": "playEffect","effect":18,"pos":"self"},
                    {"type":"shock","delay":0.5,"range":20,"time":0.3}
                ],
                "targetSelection": {
                    "pool": "SamePosition"
                },
                "availableCondition": [
                    { "type": "event", "event": "onTurnEnd" }
                ]
            }
        },
        {
            "skillId": 45,
            "label":"狂暴",
            "config": {
                "installAction":[
                    { "type": "setProperty",  "modifications": {"attack":{"c":4}} }
                ],
                "triggerCondition": [
                    {"type": "property", "property":"health","to": 20 },
                    {"type":"event","event":"onBattleTurnEnd"}
                ],
                "targetSelection": {
                    "pool": "Self"
                },
                "buffType":"RoleBuff"
            }

        },
        {
            "skillId": 46,
            "label":"食人魔無敵buff",
            "config": {
                "basic": {
                    "spellEffect": 1,
                    "spellDelay": 0.3
                },
                "triggerCondition": [
                    { "type": "event", "event": "onBePhysicalDamage" },
                    { "type": "event", "event": "onBePhysicalRangeDamage" },
                    { "type": "event", "event": "onBeSpellDamage" },
                    { "type": "event", "event": "onBeSpellRangeDamage" }
                ],
                "availableCondition": [
                    { "type": "effectCount","count":6 }
                ],
                "action": [
                    { "type": "modifyVar", "x": "damage", "formular": {"environment": {"damage":0}} }
                ]
            }
        },
        {
            "skillId": 47,
            "label":"食人魔重生",
            "config": {
                "triggerCondition": [
                    {"type" :"event", "event":"onBeDeathStrike"}
                ],
                "targetSelection": {
                    "pool": "Self"
                },
                "availableCondition": [
                    { "type": "effectCount","count":1 }
                ],
                "action":[
                    {"type": "modifyVar", "x": "damage", "formular": {"environment":{"c":0}}},
                    {"type": "delay","delay":1},
                    {"type": "playEffect","effect":19,"pos":"self"},
                    {"type": "heal", "formular": {"c":30}},
                    {"type": "installSpell", "spell": 46}
                ]
            }
        },
        { "skillId": 48,
            "label": "寶箱",
            "config": {
                "triggerCondition": [
                    { "type": "event", "event": "onBeActivate" }
                ],
                "targetSelection":{
                    "pool":"Self",
                    "filter": ["Alive", "Visible"]
                },
                "action": [
                    { "type": "dropItem", "dropList": [
                        {"weight":5, "item":0},
                        {"weight":5, "item":1},
                        {"weight":0, "item":2},
                        {"weight":5, "item":3},
                        {"weight":2, "item":4},
                        {"weight":5, "item":5},
                        {"weight":5, "item":6},
                        {"weight":5, "item":7},
                        {"weight":5, "item":8},
                        {"weight":0, "item":9}
                    ]
                    },
                    {"type":"playAction","motion":1,"pos":"self"},
                    {"type":"delay"},
                    {"type":"kill"}
                ]
            }
        },
        {
            "skillId": 49,
            "label": "DropCard",
            "config": {
                "triggerCondition": [
                    { "type": "event", "event": "onBeDeathStrike" },
                    { "type": "chance", "chance": 0.08 }
                ],
                "action": [
                    { "type": "dropItem", "dropList": [
                        {"weight":5, "item":0},
                        {"weight":5, "item":1},
                        {"weight":0, "item":2},
                        {"weight":5, "item":3},
                        {"weight":2, "item":4},
                        {"weight":5, "item":5},
                        {"weight":5, "item":6},
                        {"weight":5, "item":7},
                        {"weight":5, "item":8},
                        {"weight":0, "item":9}
                    ]
                    },
                    {"type":"playEffect","effect":23,"delay":0.3,"pos":"self"},
                    {"type":"delay"},
                    {"type":"kill"}
                ]
            }
        },
        {
            "skillId": 50,
            "label": "測試資料",
            "config": {
                "action": [],
                "availableCondition": [
                    { "type": "effectCount", "count": 1 },
                    { "type": "tick", "tickType": "Battle", "ticks": 2 },
                    { "type": "tick", "tickType": "Move", "ticks": 1 }
                ]
            }
        },
        {
            "skillId": 51,
            "label":"劍雨",
            "config": {
                "basic":{
                    "spellAction": 1
                },
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd","eventCount":3,"reset":true },
                    {"type":"visible"}
                ],
                "targetSelection": {
                    "pool": "Block",
                    "count":5,
                    "method": "Rand"
                },
                "action":[
                    {"type":"installSpell", "spell": 52,"delay":{"base":0,"range":1}}
                ]
            }
        },
        { "skillId": 52,
            "config":{
                "installAction":[
                    {"type":"playEffect","effect":26,"pos":"self"}
                ],
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd","eventCount":2 }
                ],
                "targetSelection": {
                    "pool": "SamePosition",
                    "filter": ["Hero"]
                },
                "availableCondition": [
                    { "type": "effectCount", "count":1}
                ],
                "action":[
                    {"type": "damage","damageType":"Spell","isRange":true,"delay":0.4,"formular": {"c":15}},
                    {"type": "playEffect","effect":24,"pos":"self"}
                ]
            }
        },
        {
            "skillId": 53,
            "label":"召喚小遊俠",
            "config": {
                "triggerCondition": [
                    {"type": "countDown", "cd": 6 },
                    {"type":"visible"},
                    {"type" :"event", "event":"onTurnEnd" }
                ],
                "targetSelection":{
                    "pool":"Self"
                },
                "action": [{"type": "createMonster","objectCount":1,"randomPos":true,"monsterID":13}]
            }
        },
        {
            "skillId": 54,
            "label":"分身",
            "config": {
                "triggerCondition": [
                    {"type": "countDown", "cd": 5 },
                    {"type":"visible"},
                    {"type": "property", "property":"health","to": 900 },
                    {"type":"event","event":"onBeEndBattleTurn"},
                    {"type":"alive"}
                ],
                "targetSelection":{
                    "pool":"RoleID","roleID": 148,
                    "filter": ["Alive", "Visible"]
                },
                "action": [
                    {"type":"kill"},
                    {"type": "delay"},
                    {"type": "randTeleport"},
                    {"type": "createMonster","objectCount":3,"randomPos":true,"monsterID":148}]
            }
        },
        {
            "skillId": 55,
            "label":"boss戰BGM",
            "config": {
                "triggerCondition": [
                    {"type":"event", "event":"onEnterLevel" }
                ],
                "targetSelection": {
                    "pool": "Self"
                },
                "action": [
                    {"type":"changeBGM","music":"boss.mp3"}
                ]
            }
        },
        {
            "skillId": 56,
            "label":"召喚小史萊姆",
            "config": {
                "triggerCondition": [
                    {"type": "countDown", "cd": 6 },
                    {"type":"visible"},
                    {"type": "myMutex", "mutex": "shilaimu" },
                    {"type" :"event", "event":"onTurnEnd" }
                ],
                "action": [
                    {"type": "createMonster","objectCount":4,"randomPos":true,"monsterID":19},
                    {"type": "setMyMutex", "mutex": "shilaimu", "count": 3}]
            }
        },
        {
            "skillId": 57,
            "label":"吸收史萊姆",
            "config": {
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd"},
                    {"type": "myMutex", "mutex": "shilaimu" },
                    {"type":"visible"}
                ],
                "targetSelection":{
                    "pool":"RoleID","roleID":19,
                    "filter": ["Alive", "Visible"]

                },
                "action": [
                    {"type": "heal","self":true,"formular": {"tar":{"c":20}}},
                    {"type": "setMyMutex", "mutex": "shilaimu", "count": 9999},
                    {"type":"kill"}
                ]
            }
        },
        {
            "skillId": 58,
            "label":"召喚小哥布林",
            "config": {
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd","eventCount":4,"reset":true },
                    {"type":"visible"},
                    {"type" :"event", "event":"onTurnEnd" }
                ],
                "action": [{"type": "createMonster","objectCount":2,"randomPos":true,"monsterID":7}]
            }
        },
        {
            "skillId": 59,
            "label":"哥布林投手1",
            "config": {
                "basic":{
                    "spellAction": 1
                },
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd","eventCount":3,"reset":true },
                    {"type":"visible"},
                    {"type":"property","property":"health","from":500}
                ],
                "targetSelection": {
                    "pool": "Block",
                    "count":1,
                    "anchor":[{"x":1,"y":0},{"x":-1,"y":0},{"x":0,"y":-1},{"x":0,"y":1},{"x":0,"y":0}],
                    "method": "Rand"
                },
                "action":[
                    {"type":"installSpell", "spell": 60,"delay":{"base":0.3}}
                ]
            }
        },
        {
            "skillId": 60,
            "config":{
                "installAction":[
                    {"type":"playEffect","effect":26,"pos":"self"}
                ],
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd","eventCount":2 }
                ],
                "targetSelection": {
                    "pool": "SamePosition",
                    "filter": ["Hero"]
                },
                "availableCondition": [
                    { "type": "effectCount", "count":1}
                ],
                "action":[
                    {"type": "damage","damageType":"Spell","isRange":true,"delay":0.4,"formular": {"c":15}},
                    {"type": "playEffect","effect":24,"pos":"self"}
                ]
            }
        },
        {
            "skillId": 61,
            "label":"哥布林投手2",
            "config": {
                "basic":{
                    "spellAction": 1
                },
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd","eventCount":3,"reset":true },
                    {"type":"visible"},
                    {"type":"property","property":"health","to":500}
                ],
                "targetSelection": {
                    "pool": "Block",
                    "count":3,
                    "anchor":[{"x":1,"y":0},{"x":-1,"y":0},{"x":0,"y":-1},{"x":0,"y":1},{"x":0,"y":0}],
                    "method": "Rand"
                },
                "action":[
                    {"type":"installSpell", "spell": 60,"delay":{"base":0.3}}
                ]
            }
        },
        {
            "skillId": 62,
            "label":"召喚狼群",
            "config": {
                "triggerCondition": [
                    {"type": "countDown", "cd": 4 },
                    {"type":"visible"},
                    {"type" :"event", "event":"onTurnEnd" }
                ],
                "action": [
                    {"type": "createMonster","objectCount":2,"randomPos":true,"monsterID":69},
                    {"type": "setMyMutex", "mutex": "langqun", "count": 2}]
            }
        },
        {
            "skillId": 63,
            "label":"吸收狼群",
            "config": {
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd"},
                    {"type": "myMutex", "mutex": "langqun" },
                    {"type":"visible"}
                ],
                "targetSelection":{
                    "pool":"RoleID","roleID":69,
                    "filter": ["Alive", "Visible"]

                },
                "action": [
                    {"type": "heal","self":true,"formular": {"tar":{"c":40}}},
                    {"type": "setMyMutex", "mutex": "langqun", "count": 9999},
                    {"type":"kill"}
                ]
            }
        },
        {
            "skillId": 64,
            "label":"狼王蓄力",
            "slotId": 1,
            "config":{
                "targetSelection": { "pool": "Self" },
                "triggerCondition": [
                    { "type": "event", "event": "onBeEndBattleTurn", "count": 1 },
                    {"type":"visible"}
                ],
                "installAction": [
                    { "type": "removeSpell", "spell": 65},
                    { "type": "installSpell", "spell": 65}
                ],
                "action": [
                    {"type": "setMyMutex", "mutex": "xuli", "count": 1},
                    { "type": "removeSpell", "spell": 65},
                    { "type": "installSpell", "spell": 65}
                ]
            }
        },
        {"skillId": 65,
            "config": {
                "action":[
                    {"type": "playEffect","effect":1,"pos":"self"},
                    { "type": "setProperty","modifications": {"critical":{"c":5}}},
                    { "type": "setProperty","modifications": {"attack":{"c":2}}}
                ],
                "targetSelection":{ "pool":"Self" },
                "uninstallAction": [
                    { "type": "resetProperty" }
                ],
                "triggerCondition": [
                    { "type":"event", "event":"onBattleTurnEnd" },
                    { "type":"event", "event":"onMoveTurnEnd" },
                    {"type":"visible"},
                    {"type": "myMutex", "mutex": "xuli" }
                ]
            }
        },
        {
            "skillId": 66,
            "label":"流血傷害",
            "config": {
                "triggerCondition": [
                    {"type":"event","event":"onPhysicalDamage"},
                    { "type": "chance", "chance": 1.3 }
                ],
                "targetSelection":{
                    "pool":"Target",
                    "filter": ["Alive"]
                },
                "action": [
                    {"type": "installSpell","spell": 67},
                    {"type": "installSpell","spell": 68}
                ]
            }
        },
        {
            "skillId": 67,
            "config": {
                "installAction":[
                    {"type": "setProperty","modifications": {"attack":{"src":{"attack":-0.2}}}}
                ],
                "uninstallAction": [
                    { "type": "resetProperty" }
                ],
                "buffType":"AttackDebuff",
                "availableCondition": [
                    { "type": "event", "event": "onEndBattleTurn", "eventCount": 3}
                ]
            }
        },
        {
            "skillId": 68,
            "config": {
                "action":[
                    {"type": "damage","damageType":"Bleed","formular": {"src":{"c":10}}}
                ],
                "targetSelection":
                { "pool":"Self",
                    "filter": ["Alive"]},
                "buffType":"HealthDebuff",
                "triggerCondition":[
                    { "type": "event", "event": "onBattleTurnEnd"},
                    { "type": "event", "event": "onMoveTurnEnd"}

                ],
                "availableCondition": [
                    { "type": "effectCount", "count":3}
                ]
            }
        },
        {
            "skillId": 69,
            "label":"劍氣1",
            "config": {
                "basic":{
                    "spellAction": 1
                },
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd","eventCount":3,"reset":true },
                    {"type":"visible"}
                ],
                "targetSelection": {
                    "pool": "Self",
                    "count":1,
                    "anchor":[{"x":1,"y":0},{"x":-1,"y":0},{"x":0,"y":-1},{"x":0,"y":1},{"x":1,"y":1},{"x":-1,"y":1},{"x":-1,"y":-1},{"x":1,"y":-1}]
                },
                "action":[
                    {"type":"installSpell", "spell": 70,"delay":0.3}
                ]
            }
        },
        {
            "skillId": 70,
            "config":{
                "installAction":[
                    {"type":"playEffect","effect":26,"pos":"self"}
                ],
                "triggerCondition": [
                    {"type" :"event", "event":"onTurnEnd","eventCount":2 }
                ],
                "targetSelection": {
                    "pool": "SamePosition",
                    "filter": ["Hero"]
                },
                "availableCondition": [
                    { "type": "effectCount", "count":1}
                ],
                "action":[
                    {"type": "damage","damageType":"Spell","isRange":true,"formular": {"c":20}},
                    {"type": "playEffect","effect":25,"pos":"self"}
                ]
            }
        },
        {
            "skillId": 71,
            "label":"劍聖自愈",
            "config": {
                "triggerCondition": [
                    {"type" :"countDown","cd":5},
                    {"type" :"event","event":"onTurnBegin"},
                    {"type":"visible"}
                ],
                "targetSelection":{
                    "pool":"Self",
                    "filter": ["Alive", "Visible"]
                },
                "action": [
                    {"type": "heal","self":true,"formular": {"c":50}}
                ]
            }
        },
        {
            "skillId": 72,
            "label":"劍聖無敵",
            "config": {
                "triggerCondition": [
                    {"type" :"countDown","cd":10},
                    {"type" :"event","event":"onTurnBegin"},
                    {"type":"visible"}
                ],
                "targetSelection":{
                    "pool":"Self",
                    "filter": ["Alive", "Visible"]
                },
                "action": [
                    {"type": "installSpell", "spell": 73}
                ]
            }
        },
        {
            "skillId": 73,
            "label":"劍聖無敵buff",
            "config": {
                "basic": {
                    "spellEffect": 1,
                    "spellDelay": 0.3
                },
                "triggerCondition": [
                    { "type": "event", "event": "onBePhysicalDamage" },
                    { "type": "event", "event": "onBePhysicalRangeDamage" },
                    { "type": "event", "event": "onBeSpellDamage" },
                    { "type": "event", "event": "onBeSpellRangeDamage" }
                ],
                "availableCondition": [
                    { "type": "effectCount","count":2 }
                ],
                "action": [
                    { "type": "modifyVar", "x": "damage", "formular": {"environment": {"damage":0}} }
                ]
            }
        },
        {
            "skillId": 74,
            "label":"npc啟動",
            "config": {
                "targetSelection":{
                    "pool":"Self",
                    "filter": ["Alive", "Visible"]
                },
                "triggerCondition": [
                    { "type": "event", "event": "onBeActivate" }
                ],
                "action": [
                    { "type": "kill"}
                ]
            }
        },
        {
            "skillId": 75,
            "label":"遊俠分身",
            "config": {
                "targetSelection":{
                    "pool":"Self",
                    "filter": ["Alive", "Visible"]
                },
                "triggerCondition": [
                    { "type": "event", "event": "onBeDamage" }
                ],
                "action": [
                    { "type": "kill"}
                ]
            }
        }
    ]

}
