var L = L || function(dummy) {return dummy;}
exports.data = [
  {
    "skillId": 0,
    "activeSpell": true,
    "label": L("dic_skill_0_label"), //盾墙
    "icon": "skill-warrior1.png",
    "desc": L("dic_skill_0_desc"), //用坚实的盾牌来格挡攻击，抵消伤害，格挡次数随等级增加。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 45,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 1,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 1,
    "slotId": -1,
    "config": {
      "basic": {
        "buffEffect": 42,
        "spellAction": 4,
        "spellEffect": 46,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "#count": [
            1,
            2,
            3
          ]
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 2,
    "label": L("dic_skill_2_label"), //援护
    "icon": "skill-warrior5.png",
    "labelIcon": "warriorsk5.png",
    "desc": L("dic_skill_2_desc"), //战士运用自身厚实的装备保护队友，为其承受伤害，技能等级越高，所受伤害越少。
    "slotId": 1,
    "config": {
      "basic": {
        "spellAction": 4,
        "spellEffect": 9,
        "targetEffect": 1,
        "spellDelay": 0,
        "targetDelay": 0
      },
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBePhysicalRangeDamage"
        },
        {
          "type": "chance",
          "chance": 0.45
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": [
            {
              "environment": {
                "damage": 0.8
              }
            },
            {
              "environment": {
                "damage": 0.7
              }
            },
            {
              "environment": {
                "damage": 0.5
              }
            }
          ]
        },
        {
          "type": "setTargetMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "replaceTar"
        },
        {
          "type": "ignoreHurt"
        }
      ]
    }
  },
  {
    "skillId": 3,
    "label": L("dic_skill_3_label"), //自愈
    "icon": "skill-warrior6.png",
    "labelIcon": "warriorsk6.png",
    "desc": L("dic_skill_3_desc"), //战士在受到治疗时，能够获得额外的生命值回复，回复值与韧性值有关。
    "slotId": 3,
    "config": {
      "basic": {},
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeHeal"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "hp",
          "#formular": [
            {
              "tar": {
                "strong": 0.1
              },
              "environment": {
                "hp": 1
              },
              "c": 2
            },
            {
              "tar": {
                "strong": 0.1
              },
              "environment": {
                "hp": 1
              },
              "c": 8
            },
            {
              "tar": {
                "strong": 0.15
              },
              "environment": {
                "hp": 1
              },
              "c": 15
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 4,
    "label": L("dic_skill_4_label"), //奋勇一击
    "icon": "skill-warrior4.png",
    "desc": L("dic_skill_4_desc"), //战士攻击时有一定概率使出全力一击，造成的伤害与生命值有关。
    "slotId": 3,
    "config": {
      "basic": {
        "targetEffect": 7,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTarget"
        },
        {
          "type": "chance",
          "chance": 0.25
        }
      ],
      "targetSelection": {
        "pool": "target"
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "src": {
              "health": 0.18,
              "attack": 1
            }
          }
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 5,
    "activeSpell": true,
    "label": L("dic_skill_5_label"), //闪电闪电
    "icon": "skill-mage1.png",
    "labelIcon": "magesk1.png",
    "desc": L("dic_skill_5_desc"), //召唤闪电，对一名敌人造成伤害，伤害值与法师攻击力相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "#formular": [
            {
              "src": {
                "attack": 0.8
              }
            },
            {
              "src": {
                "attack": 1
              }
            },
            {
              "src": {
                "attack": 1.2
              }
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 44,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 0,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 6,
    "label": L("dic_skill_6_label"), //过载
    "icon": "skill-mage2.png",
    "desc": L("dic_skill_6_desc"), //攻击造成暴击时，法师能够施展法术过载，对全体敌人造成伤害，伤害值与攻击力相关。
    "slotId": 3,
    "config": {
      "basic": {
        "spellEffect": 29,
        "spellDelay": 0.6,
        "targetDelay": 0.9
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage"
        },
        {
          "type": "chance",
          "chance": 0.8
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            "src": {
              "attack": 0.3
            },
            "c": 15
          }
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 7,
    "label": L("dic_skill_7_label"), //炎甲
    "icon": "skill-mage3.png",
    "desc": L("dic_skill_7_desc"), //法师使用一层火焰魔法保护自己，当受到攻击时，对敌人造成伤害，伤害值与攻击力有关。
    "slotId": 2,
    "config": {
      "basic": {
        "spellEffect": 32,
        "targetEffect": 10,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "#formular": [
            {
              "src": {
                "attack": 0.2
              },
              "c": 2
            },
            {
              "src": {
                "attack": 0.3
              },
              "c": 10
            },
            {
              "src": {
                "attack": 0.4
              },
              "c": 15
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      }
    }
  },
  {
    "skillId": 8,
    "activeSpell": true,
    "label": L("dic_skill_8_label"), //治愈
    "icon": "skill-priest1.png",
    "labelIcon": "priestsk1.png",
    "desc": L("dic_skill_8_desc"), //对队伍中生命值最低的成员进行回复，回复值与命中值相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 47,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "sort",
            "by": "health"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.15
              },
              "c": 5
            },
            {
              "src": {
                "accuracy": 0.2
              },
              "c": 10
            },
            {
              "src": {
                "accuracy": 0.25
              },
              "c": 20
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 9,
    "label": L("dic_skill_9_label"), //宽恕
    "icon": "skill-priest2.png",
    "desc": L("dic_skill_9_desc"), //当牧师对敌人造成伤害时，有一定几率能回复我方队友生命值，回复生命值与命中值相关。
    "slotId": 1,
    "config": {
      "basic": {
        "targetEffect": 3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.6
        }
      ],
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.1
              },
              "c": 3
            },
            {
              "src": {
                "accuracy": 0.15
              },
              "c": 10
            },
            {
              "src": {
                "accuracy": 0.2
              },
              "c": 20
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "sort",
            "by": "health"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      }
    }
  },
  {
    "skillId": 10,
    "label": L("dic_skill_10_label"), //救赎
    "icon": "skill-priest5.png",
    "labelIcon": "priestsk5.png",
    "desc": L("dic_skill_10_desc"), //牧师成功击杀敌人时，能够有一定概率短时间提升全体成员的攻击力。
    "slotId": 1,
    "config": {
      "basic": {
        "spellAction": 1,
        "targetEffect": 13,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onKill"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "installSpell",
          "spell": 14,
          "#level": [
            1,
            2,
            3
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      }
    }
  },
  {
    "skillId": 11,
    "label": L("dic_skill_11_label"), //奇迹之光
    "icon": "skill-priest6.png",
    "labelIcon": "priestsk6.png",
    "desc": L("dic_skill_11_desc"), //当我方成员受到致命一击时，牧师能够一定概率召唤奇迹之光，使其吸收此次伤害。
    "slotId": 3,
    "config": {
      "basic": {
        "spellAction": 1,
        "targetEffect": 33,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBeDeathStrike"
        },
        {
          "type": "event",
          "event": "onBeDeathStrike"
        },
        {
          "type": "alive"
        },
        {
          "type": "chance",
          "#chance":[
              0.2,
              0.3,
              0.4
          ]
        },
        {
          "type": "targetMutex",
          "mutex": "lightOfMiracel"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "heal",
          "formular": {
            "environment": {
              "damage": 1
            }
          }
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        },
        {
          "type": "setTargetMutex",
          "mutex": "lightOfMiracel",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 12,
    "label": L("dic_skill_12_label"), //元素爆发
    "icon": "skill-mage5.png",
    "labelIcon": "magesk5.png",
    "desc": L("dic_skill_12_desc"), //法师每次攻击能够增加自身暴击值，直至造成暴击后清空。
    "slotId": 1,
    "config": {
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage",
          "count": 1
        }
      ],
      "installAction": [
        {
          "type": "removeSpell",
          "spell": 33
        },
        {
          "type": "installSpell",
          "spell": 33,
          "#level": [
            1,
            2,
            3
          ]
        }
      ],
      "action": [
        {
          "type": "removeSpell",
          "spell": 33
        },
        {
          "type": "installSpell",
          "spell": 33,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 13,
    "label": L("dic_skill_13_label"), //援护
    "icon": "skill-warrior2.png",
    "desc": L("dic_skill_13_desc"), //战士运用自身厚实的装备保护队友，为其承受伤害，技能等级越高，所受伤害越少。
    "slotId": 1,
    "config": {
      "basic": {
        "spellAction": 4,
        "spellEffect": 9,
        "targetEffect": 1,
        "spellDelay": 0,
        "targetDelay": 0
      },
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBePhysicalRangeDamage"
        },
        {
          "type": "chance",
          "chance": 1
        },
        {
          "type": "alive"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0.4
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "setTargetMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "replaceTar"
        },
        {
          "type": "ignoreHurt"
        }
      ]
    }
  },
  {
    "skillId": 14,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": 0.4
                },
                "c": 2
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 0.5
                },
                "c": 5
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 0.7
                },
                "c": 15
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onBeginBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 15,
    "label": L("dic_skill_15_label"), //草药
    "desc": L("dic_skill_15_desc"), //对生命值最少的队友进行恢复
    "config": {
      "basic": {
        "targetEffect": 19
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 0
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "sort",
            "by": "health"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "formular": {
            "tar": {
              "strong": 1
            },
            "c": 5
          }
        },
        {
          "type": "costCard",
          "card": 0
        }
      ]
    }
  },
  {
    "skillId": 16,
    "label": L("dic_skill_16_label"), //万能药
    "desc": L("dic_skill_16_desc"), //恢复一切异常状态
    "config": {
      "basic": {
        "targetEffect": 14
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 1
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "clearDebuff"
        },
        {
          "type": "costCard",
          "card": 1
        }
      ]
    }
  },
  {
    "skillId": 17,
    "label": L("dic_skill_17_label"), //复活十字章
    "desc": L("dic_skill_17_desc"), //被击倒后重生
    "config": {
      "basic": {
        "targetEffect": 22
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 4
        },
        {
          "type": "event",
          "event": "onTeammateBeKill"
        },
        {
          "type": "event",
          "event": "onBeKill"
        }
      ],
      "targetSelection": {
        "pool": "target"
      },
      "action": [
        {
          "type": "resurrect"
        },
        {
          "type": "costCard",
          "card": 4
        }
      ]
    }
  },
  {
    "skillId": 18,
    "label": L("dic_skill_18_label"), //极速之靴
    "desc": L("dic_skill_18_desc"), //提升全体回避率
    "config": {
      "basic": {
        "targetEffect": 16
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 5
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "costCard",
          "card": 5
        },
        {
          "type": "installSpell",
          "spell": 22
        }
      ]
    }
  },
  {
    "skillId": 19,
    "label": L("dic_skill_19_label"), //集中药水
    "desc": L("dic_skill_19_desc"), //提升全体命中值
    "config": {
      "basic": {
        "targetEffect": 15
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 6
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "costCard",
          "card": 6
        },
        {
          "type": "installSpell",
          "spell": 23
        }
      ]
    }
  },
  {
    "skillId": 20,
    "label": L("dic_skill_20_label"), //怪力药水
    "desc": L("dic_skill_20_desc"), //短时间内提升全体攻击力
    "config": {
      "basic": {
        "targetEffect": 13
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 7
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "costCard",
          "card": 7
        },
        {
          "type": "installSpell",
          "spell": 24
        }
      ]
    }
  },
  {
    "skillId": 21,
    "label": L("dic_skill_21_label"), //时间沙漏
    "desc": L("dic_skill_21_desc"), //立即恢复技能冷却
    "config": {
      "basic": {
        "targetEffect": 14
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 8
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "costCard",
          "card": 8
        },
        {
          "type": "resetSpellCD"
        }
      ]
    }
  },
  {
    "skillId": 22,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "reactivity": 1
              },
              "c": 40
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 23,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": 1
              },
              "c": 40
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 24,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": 1
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 1
        }
      ]
    }
  },
  {
    "skillId": 25,
    "label": L("dic_skill_25_label"), //地牢指针
    "desc": L("dic_skill_25_desc"), //立刻显示下一层出口位置
    "config": {
      "basic": {
        "targetEffect": 14
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 3
        }
      ],
      "action": [
        {
          "type": "costCard",
          "card": 3
        },
        {
          "type": "showExit"
        }
      ]
    }
  },
  {
    "skillId": 26,
    "label": L("dic_skill_26_label"), //远程攻击
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        },
        {
          "type": "chance",
          "chance": 0.8
        },
        {
          "type": "targetMutex",
          "mutex": "range"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "castSpell",
          "spell": 272
        },
        {
          "type": "rangeAttack",
          "hurtDelay": 0.6,
          "effDelay": 0.3,
          "#effect": [
            50,
            51,
            52
          ]
        }
      ]
    }
  },
  {
    "skillId": 27,
    "label": L("dic_skill_27_label"), //直接现身
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEnterLevel"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "showUp"
        }
      ]
    }
  },
  {
    "skillId": 28,
    "label": L("dic_skill_28_label"), //传送
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "playAction",
          "motion": 6,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 21,
          "pos": "self"
        },
        {
          "type": "playAction",
          "motion": 5,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 29,
    "label": L("dic_skill_29_label"), //束缚
    "config": {
      "basic": {
        "targetEffect": 17,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 30
        }
      ]
    }
  },
  {
    "skillId": 30,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "reactivity": -0.5
              }
            },
            "speed": {
              "src": {
                "speed": -0.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 31,
    "label": L("dic_skill_31_label"), //史莱姆分裂
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeKill"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "createMonster",
          "effect": 21,
          "randomPos": true,
          "#objectCount": [
            2,
            4,
            2,
            4,
            2,
            4,
            2,
            4
          ],
          "#monsterID": [
            19,
            19,
            51,
            51,
            83,
            83,
            115,
            115
          ],
          "#withKey": [
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true
          ]
        }
      ]
    }
  },
  {
    "skillId": 32,
    "label": L("dic_skill_32_label"), //狼骑士
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeKill"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "createMonster",
          "#monsterID": [
            5,
            22,
            37,
            54,
            69,
            86,
            101,
            118
          ],
          "#withKey": [
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true
          ]
        }
      ]
    }
  },
  {
    "skillId": 33,
    "config": {
      "action": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "critical": {
                "c": 1
              }
            },
            {
              "critical": {
                "c": 2
              }
            },
            {
              "critical": {
                "c": 4
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "Self"
      },
      "uninstallAction": [
        {
          "type": "resetProperty"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeginBattleTurn"
        }
      ]
    }
  },
  {
    "skillId": 34,
    "label": L("dic_skill_34_label"), //先制攻击
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "attack"
        }
      ]
    }
  },
  {
    "skillId": 35,
    "label": L("dic_skill_35_label"), //落石
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "blocks": [
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29
        ],
        "filter": [
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 8
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 36,
          "delay": {
            "base": 1.6,
            "range": 3
          }
        },
        {
          "type": "shock",
          "delay": 1.6,
          "range": 20,
          "time": 2
        }
      ]
    }
  },
  {
    "skillId": 36,
    "config": {
      "installAction": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "formular": {
            "c": 150
          }
        },
        {
          "type": "playEffect",
          "effect": 18,
          "pos": "self"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        }
      ]
    }
  },
  {
    "skillId": 37,
    "label": L("dic_skill_37_label"), //boss光环
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 35,
          "pos": "self"
        }
      ]
    }
  },
  {
    "abtest": [
      {
        "skillId": 38,
        "label": "boss战1",
        "config": {
          "triggerCondition": [
            {
              "type": "event",
              "event": "onEnterLevel"
            }
          ],
          "targetSelection": {
            "pool": "self"
          },
          "action": [
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "chainBlock",
              "source": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                13,
                14
              ],
              "target": 12
            },
            {
              "type": "kill"
            },
            {
              "type": "changeBGM"
            },
            {
              "type": "delay"
            },
            {
              "type": "playSound",
              "sound": "dragon.mp3"
            },
            {
              "type": "dialog",
              "dialogId": 3
            },
            {
              "type": "delay",
              "delay": 1
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.9
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 0
            },
            {
              "type": "openBlock",
              "block": 1
            },
            {
              "type": "openBlock",
              "block": 2
            },
            {
              "type": "openBlock",
              "block": 3
            },
            {
              "type": "openBlock",
              "block": 4
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 5
            },
            {
              "type": "openBlock",
              "block": 6
            },
            {
              "type": "openBlock",
              "block": 7
            },
            {
              "type": "openBlock",
              "block": 8
            },
            {
              "type": "openBlock",
              "block": 9
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 10
            },
            {
              "type": "openBlock",
              "block": 11
            },
            {
              "type": "openBlock",
              "block": 12
            },
            {
              "type": "openBlock",
              "block": 13
            },
            {
              "type": "openBlock",
              "block": 14
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 15
            },
            {
              "type": "openBlock",
              "block": 19
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 20
            },
            {
              "type": "openBlock",
              "block": 21
            },
            {
              "type": "openBlock",
              "block": 22
            },
            {
              "type": "openBlock",
              "block": 23
            },
            {
              "type": "openBlock",
              "block": 24
            },
            {
              "type": "delay",
              "delay": 1.5
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 25
            },
            {
              "type": "openBlock",
              "block": 26
            },
            {
              "type": "openBlock",
              "block": 27
            },
            {
              "type": "openBlock",
              "block": 28
            },
            {
              "type": "openBlock",
              "block": 29
            },
            {
              "type": "delay",
              "delay": 1
            },
            {
              "type": "playSound",
              "sound": "dragon.mp3"
            },
            {
              "type": "delay",
              "delay": 8
            },
            {
              "type": "createMonster",
              "count": 1,
              "monsterID": 133,
              "pos": 12,
              "collectID": 1000
            },
            {
              "type": "shock",
              "delay": 0.8,
              "range": 10,
              "time": 0.3
            },
            {
              "type": "shock",
              "delay": 3,
              "range": 10,
              "time": 0.3
            },
            {
              "type": "shock",
              "delay": 4.7,
              "range": 10,
              "time": 0.3
            },
            {
              "type": "shock",
              "delay": 5.2,
              "range": 10,
              "time": 0.3
            },
            {
              "type": "changeBGM",
              "music": "boss.mp3"
            },
            {
              "type": "delay"
            },
            {
              "type": "dialog",
              "dialogId": 4
            }
          ]
        }
      },
      {
        "skillId": 38,
        "label": "boss战1",
        "config": {
          "triggerCondition": [
            {
              "type": "event",
              "event": "onEnterLevel"
            }
          ],
          "targetSelection": {
            "pool": "self"
          },
          "action": [
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "chainBlock",
              "source": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                13,
                14
              ],
              "target": 12
            },
            {
              "type": "kill"
            },
            {
              "type": "changeBGM"
            },
            {
              "type": "delay"
            },
            {
              "type": "playSound",
              "sound": "dragon.mp3"
            },
            {
              "type": "delay",
              "delay": 1
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.9
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 0
            },
            {
              "type": "openBlock",
              "block": 1
            },
            {
              "type": "openBlock",
              "block": 2
            },
            {
              "type": "openBlock",
              "block": 3
            },
            {
              "type": "openBlock",
              "block": 4
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 5
            },
            {
              "type": "openBlock",
              "block": 6
            },
            {
              "type": "openBlock",
              "block": 7
            },
            {
              "type": "openBlock",
              "block": 8
            },
            {
              "type": "openBlock",
              "block": 9
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 10
            },
            {
              "type": "openBlock",
              "block": 11
            },
            {
              "type": "openBlock",
              "block": 12
            },
            {
              "type": "openBlock",
              "block": 13
            },
            {
              "type": "openBlock",
              "block": 14
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 15
            },
            {
              "type": "openBlock",
              "block": 19
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 20
            },
            {
              "type": "openBlock",
              "block": 21
            },
            {
              "type": "openBlock",
              "block": 22
            },
            {
              "type": "openBlock",
              "block": 23
            },
            {
              "type": "openBlock",
              "block": 24
            },
            {
              "type": "delay",
              "delay": 1.5
            },
            {
              "type": "shock",
              "delay": 0,
              "range": 20,
              "time": 0.2
            },
            {
              "type": "openBlock",
              "block": 25
            },
            {
              "type": "openBlock",
              "block": 26
            },
            {
              "type": "openBlock",
              "block": 27
            },
            {
              "type": "openBlock",
              "block": 28
            },
            {
              "type": "openBlock",
              "block": 29
            },
            {
              "type": "delay",
              "delay": 1
            },
            {
              "type": "playSound",
              "sound": "dragon.mp3"
            },
            {
              "type": "delay",
              "delay": 8
            },
            {
              "type": "createMonster",
              "count": 1,
              "monsterID": 133,
              "pos": 12,
              "collectID": 1000
            },
            {
              "type": "shock",
              "delay": 0.8,
              "range": 10,
              "time": 0.3
            },
            {
              "type": "shock",
              "delay": 3,
              "range": 10,
              "time": 0.3
            },
            {
              "type": "shock",
              "delay": 4.7,
              "range": 10,
              "time": 0.3
            },
            {
              "type": "shock",
              "delay": 5.2,
              "range": 10,
              "time": 0.3
            },
            {
              "type": "changeBGM",
              "music": "boss.mp3"
            },
            {
              "type": "delay"
            }
          ]
        }
      }
    ]
  },
  {
    "abtest": [
      {
        "skillId": 39,
        "label": "boss战2",
        "config": {
          "triggerCondition": [
            {
              "type": "event",
              "event": "onBeDeathStrike"
            }
          ],
          "targetSelection": {
            "pool": "self"
          },
          "action": [
            {
              "type": "modifyVar",
              "x": "damage",
              "formular": {
                "environment": {
                  "c": 0
                }
              }
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "delay",
              "delay": 2
            },
            {
              "type": "castSpell",
              "spell": 40
            },
            {
              "type": "delay",
              "delay": 3
            },
            {
              "type": "castSpell",
              "spell": 41
            },
            {
              "type": "delay",
              "delay": 3
            },
            {
              "type": "castSpell",
              "spell": 42
            },
            {
              "type": "delay",
              "delay": 2
            },
            {
              "type": "collect",
              "collectID": 1000
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "endDungeon",
              "result": 2
            }
          ]
        }
      },
      {
        "skillId": 39,
        "label": "boss战2",
        "config": {
          "triggerCondition": [
            {
              "type": "event",
              "event": "onBeDeathStrike"
            }
          ],
          "targetSelection": {
            "pool": "self"
          },
          "action": [
            {
              "type": "modifyVar",
              "x": "damage",
              "formular": {
                "environment": {
                  "c": 0
                }
              }
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "dialog",
              "dialogId": 5
            },
            {
              "type": "delay",
              "delay": 2
            },
            {
              "type": "castSpell",
              "spell": 40
            },
            {
              "type": "delay",
              "delay": 3
            },
            {
              "type": "dialog",
              "dialogId": 6
            },
            {
              "type": "castSpell",
              "spell": 41
            },
            {
              "type": "delay",
              "delay": 3
            },
            {
              "type": "castSpell",
              "spell": 42
            },
            {
              "type": "whiteScreen",
              "time": 5,
              "mode": 0,
              "color": 1
            },
            {
              "type": "dialog",
              "dialogId": 7
            },
            {
              "type": "collect",
              "collectID": 1000
            },
            {
              "type": "delay",
              "delay": 0.3
            },
            {
              "type": "endDungeon",
              "result": 2
            }
          ]
        }
      }
    ]
  },
  {
    "skillId": 40,
    "label": L("dic_skill_40_label"), //龙复活
    "config": {
      "basic": {
        "spellAction": 3
      },
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.5,
          "range": 20,
          "time": 2
        }
      ]
    }
  },
  {
    "skillId": 41,
    "label": L("dic_skill_41_label"), //全屏落石
    "config": {
      "basic": {
        "spellAction": 1
      },
      "targetSelection": {
        "pool": "blocks",
        "blocks": [
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29
        ],
        "filter": [
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 8
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 44,
          "delay": {
            "base": 1.6,
            "range": 5
          }
        },
        {
          "type": "shock",
          "delay": 1.6,
          "range": 20,
          "time": 2
        }
      ]
    }
  },
  {
    "skillId": 42,
    "label": L("dic_skill_42_label"), //龙息
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 6
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 3.6,
          "formular": {
            "c": 50
          }
        },
        {
          "type": "blink",
          "delay": 1.7,
          "time": 0.08
        },
        {
          "type": "playEffect",
          "effect": 10,
          "pos": "target",
          "delay": 3.6
        },
        {
          "type": "shock",
          "delay": 1.6,
          "range": 20,
          "time": 2
        },
        {
          "type": "playAction",
          "motion": 2,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 43,
    "label": L("dic_skill_43_label"), //法师复活
    "desc": L("dic_skill_43_desc"), //重生
    "config": {
      "basic": {
        "spellAction": 1,
        "targetEffect": 1,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBeDeathStrike"
        },
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "target"
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "heal",
          "self": true,
          "formular": {
            "tar": {
              "c": 150
            }
          }
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 44,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 18,
          "pos": "self"
        },
        {
          "type": "shock",
          "delay": 0.5,
          "range": 20,
          "time": 0.3
        }
      ],
      "targetSelection": {
        "pool": "blocks"
      },
      "availableCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        }
      ]
    }
  },
  {
    "skillId": 45,
    "label": L("dic_skill_45_label"), //狂暴
    "config": {
      "basic": {
        "spellEffect": 28
      },
      "triggerCondition": [
        {
          "type": "property",
          "property": "health",
          "to": 60
        },
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "myMutex",
          "mutex": "kuangbao"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "kuangbao",
          "count": 9999
        },
        {
          "type": "installSpell",
          "spell": 217
        }
      ]
    }
  },
  {
    "skillId": 46,
    "label": L("dic_skill_46_label"), //食人魔无敌buff
    "config": {
      "basic": {
        "spellEffect": 1,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 6
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 47,
    "label": L("dic_skill_47_label"), //食人魔重生
    "config": {
      "basic": {
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        },
        {
          "type": "delay",
          "delay": 1
        },
        {
          "type": "heal",
          "formular": {
            "src": {
              "speed": 10
            }
          }
        },
        {
          "type": "installSpell",
          "spell": 46
        }
      ]
    }
  },
  {
    "skillId": 48,
    "label": L("dic_skill_48_label"), //宝箱
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "dropItem",
          "dropList": [
            {
              "weight": 5,
              "item": 0
            },
            {
              "weight": 5,
              "item": 1
            },
            {
              "weight": 0,
              "item": 2
            },
            {
              "weight": 5,
              "item": 3
            },
            {
              "weight": 2,
              "item": 4
            },
            {
              "weight": 5,
              "item": 5
            },
            {
              "weight": 5,
              "item": 6
            },
            {
              "weight": 5,
              "item": 7
            },
            {
              "weight": 0,
              "item": 8
            },
            {
              "weight": 0,
              "item": 9
            }
          ]
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 49,
    "label": L("dic_skill_49_label"), //DropCard
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        },
        {
          "type": "chance",
          "chance": 0.08
        }
      ],
      "action": [
        {
          "type": "dropItem",
          "dropList": [
            {
              "weight": 5,
              "item": 0
            },
            {
              "weight": 5,
              "item": 1
            },
            {
              "weight": 0,
              "item": 2
            },
            {
              "weight": 5,
              "item": 3
            },
            {
              "weight": 2,
              "item": 4
            },
            {
              "weight": 5,
              "item": 5
            },
            {
              "weight": 5,
              "item": 6
            },
            {
              "weight": 5,
              "item": 7
            },
            {
              "weight": 0,
              "item": 8
            },
            {
              "weight": 0,
              "item": 9
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 23,
          "delay": 0.3,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 50,
    "label": L("dic_skill_50_label"), //测试数据
    "config": {
      "action": [],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        },
        {
          "type": "tick",
          "tickType": "Battle",
          "ticks": 2
        },
        {
          "type": "tick",
          "tickType": "Move",
          "ticks": 1
        }
      ]
    }
  },
  {
    "skillId": 51,
    "label": L("dic_skill_51_label"), //剑雨
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 5
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 52,
          "delay": {
            "base": 0,
            "range": 1
          }
        }
      ]
    }
  },
  {
    "skillId": 52,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 26,
          "pos": "self"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "formular": {
            "c": 35
          }
        },
        {
          "type": "playEffect",
          "effect": 24,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 53,
    "label": L("dic_skill_53_label"), //召唤小游侠
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 6
        },
        {
          "type": "visible"
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "createMonster",
          "objectCount": 1,
          "effect": 21,
          "randomPos": true,
          "monsterID": 13
        }
      ]
    }
  },
  {
    "skillId": 54,
    "label": L("dic_skill_54_label"), //分身
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 5
        },
        {
          "type": "visible"
        },
        {
          "type": "property",
          "property": "health",
          "to": 120
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "role-id",
            "roleID": 148
          }
        ]
      },
      "action": [
        {
          "type": "kill"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "createMonster",
          "objectCount": 3,
          "randomPos": true,
          "effect": 21,
          "monsterID": 148
        }
      ]
    }
  },
  {
    "skillId": 55,
    "label": L("dic_skill_55_label"), //boss战BGM
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEnterLevel"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "changeBGM",
          "music": "boss.mp3"
        }
      ]
    }
  },
  {
    "skillId": 56,
    "label": L("dic_skill_56_label"), //召唤小史莱姆
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 6
        },
        {
          "type": "visible"
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "playAction",
          "motion": 8,
          "pos": "self"
        },
        {
          "type": "createMonster",
          "objectCount": 4,
          "randomPos": true,
          "monsterID": 19
        },
        {
          "type": "setMyMutex",
          "mutex": "shilaimu",
          "effect": 21,
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 57,
    "label": L("dic_skill_57_label"), //吸收史莱姆
    "config": {
      "basic": {
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "myMutex",
          "mutex": "shilaimu"
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "role-id",
            "roleID": 19
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": 7,
          "pos": "self"
        },
        {
          "type": "heal",
          "self": true,
          "formular": {
            "tar": {
              "c": 10
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "shilaimu",
          "count": 9999
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 58,
    "label": L("dic_skill_58_label"), //召唤小哥布林
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 4,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "createMonster",
          "objectCount": 2,
          "effect": 21,
          "randomPos": true,
          "monsterID": 7
        }
      ]
    }
  },
  {
    "skillId": 59,
    "label": L("dic_skill_59_label"), //哥布林投手1
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "property",
          "property": "health",
          "from": 150
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "anchorPos": {
              "pool": "blocks",
              "filter": [
                {
                  "type": "shuffle"
                },
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 60,
          "delay": {
            "base": 0.3
          }
        }
      ]
    }
  },
  {
    "skillId": 60,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 26,
          "pos": "self"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "formular": {
            "c": 75
          }
        },
        {
          "type": "playEffect",
          "effect": 30,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 61,
    "label": L("dic_skill_61_label"), //哥布林投手2
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "property",
          "property": "health",
          "to": 150
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "anchorPos": {
              "pool": "blocks",
              "filter": [
                {
                  "type": "shuffle"
                },
                {
                  "type": "count",
                  "count": 3
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 60,
          "delay": {
            "base": 0.3
          }
        }
      ]
    }
  },
  {
    "skillId": 62,
    "label": L("dic_skill_62_label"), //召唤狼群
    "config": {
      "basic": {},
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 4
        },
        {
          "type": "visible"
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "createMonster",
          "objectCount": 2,
          "effect": 21,
          "randomPos": true,
          "monsterID": 69
        },
        {
          "type": "setMyMutex",
          "mutex": "langqun",
          "count": 2
        }
      ]
    }
  },
  {
    "skillId": 63,
    "label": L("dic_skill_63_label"), //吸收狼群
    "config": {
      "basic": {
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "myMutex",
          "mutex": "langqun"
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "role-id",
            "roleID": 69
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "self": true,
          "formular": {
            "tar": {
              "c": 100
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "langqun",
          "count": 9999
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 64,
    "label": L("dic_skill_64_label"), //狼王蓄力
    "slotId": 1,
    "config": {
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "count": 1
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "installAction": [
        {
          "type": "removeSpell",
          "spell": 65
        },
        {
          "type": "installSpell",
          "spell": 65
        }
      ],
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "xuli",
          "count": 1
        },
        {
          "type": "removeSpell",
          "spell": 65
        },
        {
          "type": "installSpell",
          "spell": 65
        }
      ]
    }
  },
  {
    "skillId": 65,
    "config": {
      "action": [
        {
          "type": "playEffect",
          "effect": 28,
          "pos": "self"
        },
        {
          "type": "setProperty",
          "modifications": {
            "critical": {
              "c": 5
            }
          }
        },
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "c": 15
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        },
        {
          "type": "visible"
        },
        {
          "type": "myMutex",
          "mutex": "xuli"
        },
        {
          "type": "alive"
        }
      ]
    }
  },
  {
    "skillId": 66,
    "label": L("dic_skill_66_label"), //流血伤害
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "tremble",
          "delay": 0.3,
          "range": 10,
          "time": 0.1,
          "act": "target"
        },
        {
          "type": "installSpell",
          "spell": 67
        },
        {
          "type": "installSpell",
          "spell": 68
        }
      ]
    }
  },
  {
    "skillId": 67,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": -0.2
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 3
        }
      ]
    }
  },
  {
    "skillId": 68,
    "config": {
      "action": [
        {
          "type": "damage",
          "damageType": "Bleed",
          "formular": {
            "src": {
              "c": 20
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "HealthDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 69,
    "label": L("dic_skill_69_label"), //剑气1
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 70,
          "delay": 0.3
        }
      ]
    }
  },
  {
    "skillId": 70,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 26,
          "pos": "self"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            "c": 150
          }
        },
        {
          "type": "playEffect",
          "effect": 25,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 71,
    "label": L("dic_skill_71_label"), //剑圣自愈
    "config": {
      "basic": {
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 5
        },
        {
          "type": "event",
          "event": "onTurnBegin"
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "self": true,
          "formular": {
            "c": 80
          }
        }
      ]
    }
  },
  {
    "skillId": 72,
    "label": L("dic_skill_72_label"), //剑圣无敌
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        },
        {
          "type": "event",
          "event": "onTurnBegin"
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 73
        },
        {
          "type": "playEffect",
          "effect": 28,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 73,
    "label": L("dic_skill_73_label"), //剑圣无敌buff
    "config": {
      "basic": {
        "spellEffect": 1,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 2
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "playEffect",
          "effect": 1,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 74,
    "label": L("dic_skill_74_label"), //npc激活
    "config": {
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "action": [
        {
          "type": "playSound",
          "sound": "NPC.mp3"
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 75,
    "label": L("dic_skill_75_label"), //游侠分身
    "config": {
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        }
      ],
      "action": [
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 76,
    "label": L("dic_skill_76_label"), //暴击特效
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage"
        }
      ],
      "action": [
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 77,
    "label": L("dic_skill_77_label"), //牧师补血+
    "icon": "skill-priest2.png",
    "desc": L("dic_skill_77_desc"), //当牧师对敌人造成伤害时，有一定几率能回复我方队友生命值，回复生命值与命中值相关。
    "slotId": 1,
    "config": {
      "basic": {
        "targetEffect": 3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 1
        }
      ],
      "action": [
        {
          "type": "heal",
          "formular": {
            "c": 3
          }
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "sort",
            "by": "health"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      }
    }
  },
  {
    "skillId": 78,
    "label": L("dic_skill_78_label"), //boss战1
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEnterLevel"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "delay",
          "delay": 0.3
        },
        {
          "type": "chainBlock",
          "source": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            13,
            14
          ],
          "target": 12
        },
        {
          "type": "kill"
        },
        {
          "type": "changeBGM"
        },
        {
          "type": "delay"
        },
        {
          "type": "playSound",
          "sound": "dragon.mp3"
        },
        {
          "type": "dialog",
          "dialogId": 43
        },
        {
          "type": "delay",
          "delay": 1
        },
        {
          "type": "shock",
          "delay": 0,
          "range": 20,
          "time": 0.9
        },
        {
          "type": "delay",
          "delay": 0.3
        },
        {
          "type": "shock",
          "delay": 0,
          "range": 20,
          "time": 0.2
        },
        {
          "type": "openBlock",
          "block": 0
        },
        {
          "type": "openBlock",
          "block": 1
        },
        {
          "type": "openBlock",
          "block": 2
        },
        {
          "type": "openBlock",
          "block": 3
        },
        {
          "type": "openBlock",
          "block": 4
        },
        {
          "type": "delay",
          "delay": 0.3
        },
        {
          "type": "shock",
          "delay": 0,
          "range": 20,
          "time": 0.2
        },
        {
          "type": "openBlock",
          "block": 5
        },
        {
          "type": "openBlock",
          "block": 6
        },
        {
          "type": "openBlock",
          "block": 7
        },
        {
          "type": "openBlock",
          "block": 8
        },
        {
          "type": "openBlock",
          "block": 9
        },
        {
          "type": "delay",
          "delay": 0.3
        },
        {
          "type": "shock",
          "delay": 0,
          "range": 20,
          "time": 0.2
        },
        {
          "type": "openBlock",
          "block": 10
        },
        {
          "type": "openBlock",
          "block": 11
        },
        {
          "type": "openBlock",
          "block": 12
        },
        {
          "type": "openBlock",
          "block": 13
        },
        {
          "type": "openBlock",
          "block": 14
        },
        {
          "type": "delay",
          "delay": 0.3
        },
        {
          "type": "shock",
          "delay": 0,
          "range": 20,
          "time": 0.2
        },
        {
          "type": "openBlock",
          "block": 15
        },
        {
          "type": "openBlock",
          "block": 19
        },
        {
          "type": "delay",
          "delay": 0.3
        },
        {
          "type": "shock",
          "delay": 0,
          "range": 20,
          "time": 0.2
        },
        {
          "type": "openBlock",
          "block": 20
        },
        {
          "type": "openBlock",
          "block": 21
        },
        {
          "type": "openBlock",
          "block": 22
        },
        {
          "type": "openBlock",
          "block": 23
        },
        {
          "type": "openBlock",
          "block": 24
        },
        {
          "type": "delay",
          "delay": 1.5
        },
        {
          "type": "shock",
          "delay": 0,
          "range": 20,
          "time": 0.2
        },
        {
          "type": "openBlock",
          "block": 25
        },
        {
          "type": "openBlock",
          "block": 26
        },
        {
          "type": "openBlock",
          "block": 27
        },
        {
          "type": "openBlock",
          "block": 28
        },
        {
          "type": "openBlock",
          "block": 29
        },
        {
          "type": "delay",
          "delay": 1
        },
        {
          "type": "playSound",
          "sound": "dragon.mp3"
        },
        {
          "type": "delay",
          "delay": 8
        },
        {
          "type": "createMonster",
          "count": 1,
          "monsterID": 166,
          "pos": 12
        },
        {
          "type": "shock",
          "delay": 0.8,
          "range": 10,
          "time": 0.3
        },
        {
          "type": "shock",
          "delay": 3,
          "range": 10,
          "time": 0.3
        },
        {
          "type": "shock",
          "delay": 4.7,
          "range": 10,
          "time": 0.3
        },
        {
          "type": "shock",
          "delay": 5.2,
          "range": 10,
          "time": 0.3
        },
        {
          "type": "changeBGM",
          "music": "boss.mp3"
        },
        {
          "type": "delay"
        },
        {
          "type": "dialog",
          "dialogId": 44
        }
      ]
    }
  },
  {
    "skillId": 79,
    "label": L("dic_skill_79_label"), //boss战2
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        },
        {
          "type": "delay",
          "delay": 2
        },
        {
          "type": "castSpell",
          "spell": 40
        },
        {
          "type": "delay",
          "delay": 3
        },
        {
          "type": "castSpell",
          "spell": 80
        },
        {
          "type": "dialog",
          "dialogId": 45
        },
        {
          "type": "delay",
          "delay": 2
        },
        {
          "type": "collect",
          "collectID": 161001
        },
        {
          "type": "delay",
          "delay": 0.3
        },
        {
          "type": "endDungeon",
          "result": 2
        }
      ]
    }
  },
  {
    "skillId": 80,
    "label": L("dic_skill_80_label"), //全屏落石+
    "config": {
      "basic": {
        "spellAction": 2
      },
      "targetSelection": {
        "pool": "blocks",
        "blocks": [
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29
        ],
        "filter": [
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 38
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 44,
          "delay": {
            "base": 1.6,
            "range": 5
          }
        },
        {
          "type": "shock",
          "delay": 1.6,
          "range": 20,
          "time": 8
        }
      ]
    }
  },
  {
    "skillId": 81,
    "label": L("dic_skill_81_label"), //启程
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEnterLevel"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "whiteScreen",
          "time": 0.1,
          "mode": 0
        },
        {
          "type": "kill"
        },
        {
          "type": "delay",
          "delay": 2
        },
        {
          "type": "dialog",
          "dialogId": 18
        },
        {
          "type": "delay",
          "delay": 1
        },
        {
          "type": "whiteScreen",
          "time": 1,
          "mode": 1
        },
        {
          "type": "delay",
          "delay": 4
        },
        {
          "type": "tutorial",
          "tutorialId": 0
        }
      ]
    }
  },
  {
    "skillId": 82,
    "label": L("dic_skill_82_label"), //宝箱
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "dropItem",
          "dropList": [
            {
              "weight": 5,
              "item": 7
            }
          ]
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 83,
    "label": L("dic_skill_83_label"), //扣除生命值
    "desc": L("dic_skill_83_desc"), //我方全体掉血
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "damage",
          "delay": 1,
          "formular": {
            "src": {
              "strong": 0.5
            }
          }
        },
        {
          "type": "playEffect",
          "delay": 1,
          "#effect": [
            10,
            34
          ]
        },
        {
          "type": "blink",
          "delay": 1,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 1,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 84,
    "label": L("dic_skill_84_label"), //全体生命值
    "desc": L("dic_skill_84_desc"), //全体回血
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "heal",
          "delay": 1.3,
          "formular": {
            "src": {
              "strong": 0.5
            },
            "c": 5
          }
        },
        {
          "type": "playEffect",
          "delay": 1.3,
          "effect": 19,
          "pos": "target"
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 85,
    "label": L("dic_skill_85_label"), //转换阵营
    "desc": L("dic_skill_85_desc"), //我方阵营
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEnterLevel"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "changeFaction",
          "name": "hero"
        }
      ]
    }
  },
  {
    "skillId": 86,
    "label": L("dic_skill_86_label"), //转换阵营
    "desc": L("dic_skill_86_desc"), //敌方阵营
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEnterLevel"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "changeFaction",
          "name": "monster"
        }
      ]
    }
  },
  {
    "skillId": 87,
    "label": L("dic_skill_87_label"), //全体加速
    "desc": L("dic_skill_87_desc"), //我方全体攻击加速
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 88,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 37,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 88,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "speed": {
              "src": {
                "speed": 3
              },
              "c": 20
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 89,
    "label": L("dic_skill_89_label"), //上升攻击力
    "desc": L("dic_skill_89_desc"), //我方全体攻击上升
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 90,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 13,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 90,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": 1
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 91,
    "label": L("dic_skill_91_label"), //降低攻击力
    "desc": L("dic_skill_91_desc"), //我方全体攻击降低
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "tremble",
          "delay": 0.3,
          "range": 10,
          "time": 0.1,
          "act": "target"
        },
        {
          "type": "installSpell",
          "spell": 92,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 38,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 92,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": -0.4
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 93,
    "label": L("dic_skill_93_label"), //中毒
    "desc": L("dic_skill_93_desc"), //我方全体持续掉血
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "tremble",
          "delay": 0.3,
          "range": 10,
          "time": 0.1,
          "act": "target"
        },
        {
          "type": "installSpell",
          "spell": 94
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 94,
    "config": {
      "basic": {
        "buffEffect": 36
      },
      "action": [
        {
          "type": "damage",
          "damageType": "poison",
          "formular": {
            "src": {
              "health": 0.1
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "HealthDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 95,
    "label": L("dic_skill_95_label"), //无敌
    "desc": L("dic_skill_95_desc"), //我方全体无敌
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 96,
          "delay": 0.3
        },
        {
          "type": "removeSpell",
          "spell": 98
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 96,
    "config": {
      "basic": {
        "buffEffect": 42
      },
      "action": [
        {
          "type": "ignoreHurt"
        },
        {
          "type": "playEffect",
          "delay": 0.3,
          "effect": 1,
          "pos": "self"
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "RoleBuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "targetMutex",
          "mutex": "lightOfMiracel"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 97,
    "label": L("dic_skill_97_label"), //攻击吸收
    "desc": L("dic_skill_97_desc"), //我方全体攻击吸收
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 98
        },
        {
          "type": "removeSpell",
          "spell": 96
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 98,
    "config": {
      "basic": {
        "buffEffect": 40
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "targetMutex",
          "mutex": "lightOfMiracel"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "RoleBuff",
      "action": [
        {
          "type": "ignoreHurt"
        },
        {
          "type": "heal",
          "delay": 0.3,
          "formular": {
            "environment": {
              "damage": 1
            }
          }
        },
        {
          "type": "playEffect",
          "effect": 19,
          "pos": "target",
          "delay": 0.3
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 99,
    "label": L("dic_skill_99_label"), //清除buff
    "desc": L("dic_skill_99_desc"), //清除我方所有buff
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "clearDebuff",
          "delay": 1.8
        },
        {
          "type": "clearBuff",
          "delay": 1.8
        },
        {
          "type": "playEffect",
          "effect": 41,
          "pos": "target",
          "delay": 1.8
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 100,
    "config": {
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "installAction": [
        {
          "type": "kill"
        }
      ],
      "availableCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 1
        }
      ]
    }
  },
  {
    "skillId": 101,
    "label": L("dic_skill_101_label"), //火元素
    "desc": L("dic_skill_101_desc"), //死后自爆
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onkill"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "formular": {
            "src": {
              "strong": 0.5
            }
          }
        },
        {
          "type": "playEffect"
        },
        {
          "type": "delay"
        }
      ]
    }
  },
  {
    "skillId": 102,
    "label": L("dic_skill_102_label"), //元素
    "desc": L("dic_skill_102_desc"), //死后降低命中
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "dead",
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 73,
          "pos": "target"
        },
        {
          "type": "installSpell",
          "spell": 103
        }
      ]
    }
  },
  {
    "skillId": 103,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": -0.1
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 104,
    "label": L("dic_skill_104_label"), //元素
    "desc": L("dic_skill_104_desc"), //死后全体攻击减速
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onKill"
        }
      ],
      "targetSelection": {
        "pool": "Enemy",
        "filter": [
          "alive",
          "visible"
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 105
        }
      ]
    }
  },
  {
    "skillId": 105,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "speed": {
              "src": {
                "speed": 3
              },
              "c": 20
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "DeBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 106,
    "label": L("dic_skill_106_label"), //盾兵
    "icon": "待定",
    "desc": L("dic_skill_106_desc"), //可以替其他怪物抵挡伤害（援护）。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 4,
        "spellEffect": 9,
        "targetEffect": 1,
        "spellDelay": 0,
        "targetDelay": 0
      },
      "targetSelection": {
        "pool": "Target",
        "filter": [
          "alive",
          "visible"
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBePhysicalRangeDamage"
        },
        {
          "type": "chance",
          "chance": 0.45
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": [
            {
              "environment": {
                "damage": 0.8
              }
            },
            {
              "environment": {
                "damage": 0.7
              }
            },
            {
              "environment": {
                "damage": 0.5
              }
            }
          ]
        },
        {
          "type": "setTargetMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "replaceTar"
        },
        {
          "type": "ignoreHurt"
        }
      ]
    }
  },
  {
    "skillId": 107,
    "label": L("dic_skill_107_label"), //回避
    "desc": L("dic_skill_107_desc"), //回避提高
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "count": 1
        },
        {
          "type": "visible"
        }
      ],
      "targetSelection": {
        "pool": "Self",
        "filter": [
          "alive",
          "visible"
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 108
        }
      ]
    }
  },
  {
    "skillId": 108,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "reactivity": 1
              },
              "c": 40
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 109,
    "label": L("dic_skill_109_label"), //降低攻击力
    "desc": L("dic_skill_109_desc"), //降低玩家攻击力
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "count": 1
        },
        {
          "type": "visible"
        }
      ],
      "targetSelection": {
        "pool": "Enemy",
        "filter": [
          "alive",
          "visible"
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 110
        },
        {
          "type": "delay"
        }
      ]
    }
  },
  {
    "skillId": 110,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": -0.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 111,
    "label": L("dic_skill_111_label"), //食人魔自身加速
    "desc": L("dic_skill_111_desc"), //攻击加速
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "count": 1
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "Self",
        "filter": [
          "alive",
          "visible"
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 112
        }
      ]
    }
  },
  {
    "skillId": 112,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "speed": {
              "src": {
                "speed": 3
              },
              "c": 20
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 113,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "speed": {
              "src": {
                "speed": 3
              },
              "c": 20
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 114,
    "label": L("dic_skill_114_label"), //剑雨教程
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 5
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 115,
          "delay": {
            "base": 0,
            "range": 1
          }
        }
      ]
    }
  },
  {
    "skillId": 115,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 26,
          "pos": "self"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "formular": {
            "c": 10
          }
        },
        {
          "type": "playEffect",
          "effect": 24,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 116,
    "label": L("dic_skill_116_label"), //召唤小游侠教程
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 6
        },
        {
          "type": "visible"
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "createMonster",
          "objectCount": 1,
          "effect": 21,
          "randomPos": true,
          "monsterID": 13
        }
      ]
    }
  },
  {
    "skillId": 117,
    "label": L("dic_skill_117_label"), //分身教程
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 5
        },
        {
          "type": "visible"
        },
        {
          "type": "property",
          "property": "health",
          "to": 300
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "role-id",
            "roleID": 148
          }
        ]
      },
      "action": [
        {
          "type": "kill"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "createMonster",
          "objectCount": 3,
          "randomPos": true,
          "effect": 21,
          "monsterID": 148
        }
      ]
    }
  },
  {
    "skillId": 118,
    "label": L("dic_skill_118_label"), //召唤小哥布林教程
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "createMonster",
          "objectCount": 1,
          "effect": 21,
          "randomPos": true,
          "monsterID": 7
        }
      ]
    }
  },
  {
    "skillId": 119,
    "label": L("dic_skill_119_label"), //哥布林投手1
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "property",
          "property": "health",
          "from": 150
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "anchorPos": {
              "pool": "blocks",
              "filter": [
                {
                  "type": "shuffle"
                },
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 120,
          "delay": {
            "base": 0.3
          }
        }
      ]
    }
  },
  {
    "skillId": 120,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 26,
          "pos": "self"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Physical",
          "isRange": true,
          "delay": 0.4,
          "formular": {
            "c": 10
          }
        },
        {
          "type": "playEffect",
          "effect": 30,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 121,
    "label": L("dic_skill_121_label"), //哥布林投手2
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "property",
          "property": "health",
          "to": 150
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "anchorPos": {
              "pool": "blocks",
              "filter": [
                {
                  "type": "shuffle"
                },
                {
                  "type": "count",
                  "count": 3
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 120,
          "delay": {
            "base": 0.3
          }
        }
      ]
    }
  },
  {
    "skillId": 122,
    "label": L("dic_skill_122_label"), //土豪哥布林现身
    "desc": L("dic_skill_122_desc"), //onshow
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 123
        }
      ]
    }
  },
  {
    "skillId": 123,
    "label": L("dic_skill_123_label"), //土豪哥布林逃跑2
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 10,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "cod": 1
        }
      ]
    }
  },
  {
    "skillId": 124,
    "label": L("dic_skill_124_label"), //普通传送
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 21,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 125,
    "label": L("dic_skill_125_label"), //赏金怪提示
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 43,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 126,
    "label": L("dic_skill_126_label"), //装备达人格挡
    "icon": "skill-warrior1.png",
    "desc": L("dic_skill_126_desc"), //用坚实的盾牌来格挡攻击，抵消伤害，格挡次数随等级增加。
    "slotId": 0,
    "config": {
      "basic": {
        "targetEffect": 1,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        },
        {
          "type": "event",
          "event": "onTurnBegin"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "installSpell",
          "spell": 127,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 127,
    "slotId": -1,
    "config": {
      "basic": {
        "buffEffect": 42,
        "spellAction": 1,
        "spellEffect": 1,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "#count": [
            1,
            2,
            3
          ]
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 128,
    "label": L("dic_skill_128_label"), //pk盾墙
    "icon": "skill-warrior1.png",
    "desc": L("dic_skill_128_desc"), //用坚实的盾牌来格挡攻击，抵消伤害，格挡次数随等级增加。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 45,
        "targetEffect": 1,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 129,
          "#level": [
            1,
            2
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 129,
    "slotId": -1,
    "config": {
      "basic": {
        "buffEffect": 42,
        "spellAction": 4,
        "spellEffect": 46,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "alive"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "#count": [
            1,
            2
          ]
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 130,
    "label": L("dic_skill_130_label"), //pk援护
    "icon": "skill-warrior2.png",
    "desc": L("dic_skill_130_desc"), //战士运用自身厚实的装备保护队友，为其承受伤害，技能等级越高，所受伤害越少。
    "slotId": 1,
    "config": {
      "basic": {
        "spellAction": 4,
        "spellEffect": 9,
        "targetEffect": 1,
        "spellDelay": 0,
        "targetDelay": 0
      },
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBePhysicalRangeDamage"
        },
        {
          "type": "chance",
          "chance": 0.5
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": [
            {
              "environment": {
                "damage": 0.9
              }
            },
            {
              "environment": {
                "damage": 0.8
              }
            }
          ]
        },
        {
          "type": "setTargetMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "replaceTar"
        },
        {
          "type": "ignoreHurt"
        }
      ]
    }
  },
  {
    "skillId": 131,
    "label": L("dic_skill_131_label"), //pk自愈
    "icon": "skill-warrior3.png",
    "desc": L("dic_skill_131_desc"), //战士在受到治疗时，能够获得额外的生命值回复，回复值与韧性值有关。
    "slotId": 2,
    "config": {
      "basic": {},
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 8,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "strong": 0.15
              },
              "c": 2
            },
            {
              "src": {
                "strong": 0.15
              },
              "c": 8
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 132,
    "label": L("dic_skill_132_label"), //闪电pk
    "icon": "skill-mage1.png",
    "desc": L("dic_skill_132_desc"), //召唤闪电，对一名敌人造成伤害，伤害值与法师攻击力相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "master"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "#formular": [
            {
              "src": {
                "attack": 0.8
              }
            },
            {
              "src": {
                "attack": 1
              }
            },
            {
              "src": {
                "attack": 1.2
              }
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 44,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 0,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "setMyMutex",
          "mutex": "master",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 133,
    "config": {
      "action": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "critical": {
                "c": 1
              }
            },
            {
              "critical": {
                "c": 2
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "Self"
      },
      "uninstallAction": [
        {
          "type": "resetProperty"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        }
      ]
    }
  },
  {
    "skillId": 134,
    "label": L("dic_skill_134_label"), //炎甲pk
    "icon": "skill-mage3.png",
    "desc": L("dic_skill_134_desc"), //法师使用一层火焰魔法保护自己，当受到攻击时，对敌人造成伤害，伤害值与攻击力有关。
    "slotId": 2,
    "config": {
      "basic": {
        "spellEffect": 32,
        "targetEffect": 10,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "#formular": [
            {
              "src": {
                "attack": 0.2
              },
              "c": 2
            },
            {
              "src": {
                "attack": 0.3
              },
              "c": 10
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      }
    }
  },
  {
    "skillId": 135,
    "label": L("dic_skill_135_label"), //治愈pk
    "icon": "skill-priest1.png",
    "desc": L("dic_skill_135_desc"), //对队伍中生命值最低的成员进行回复，回复值与命中值相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 47,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "minister"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.15
              },
              "c": 5
            },
            {
              "src": {
                "accuracy": 0.15
              },
              "c": 10
            },
            {
              "src": {
                "accuracy": 0.15
              },
              "c": 20
            }
          ]
        },
        {
          "type": "setMyMutex",
          "mutex": "minister",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 136,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": 0.5
                },
                "c": 5
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 0.5
                },
                "c": 15
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onBeginBattleTurn",
          "eventCount": 1
        }
      ]
    }
  },
  {
    "skillId": 137,
    "label": L("dic_skill_137_label"), //pk救赎
    "icon": "skill-priest3.png",
    "desc": L("dic_skill_137_desc"), //牧师成功击杀敌人时，能够有一定概率短时间提升全体成员的攻击力。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 1,
        "targetEffect": 13,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 8,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "installSpell",
          "spell": 136,
          "#level": [
            1,
            2
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      }
    }
  },
  {
    "skillId": 138,
    "label": L("dic_skill_138_label"), //奇迹之光pk
    "icon": "skill-priest4.png",
    "desc": L("dic_skill_138_desc"), //当我方成员受到致命一击时，牧师能够一定概率召唤奇迹之光，使其吸收此次伤害。
    "slotId": 3,
    "config": {
      "basic": {
        "spellAction": 1,
        "targetEffect": 33,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBeDeathStrike"
        },
        {
          "type": "event",
          "event": "onBeDeathStrike"
        },
        {
          "type": "alive"
        },
        {
          "type": "chance",
          "#chance": [
            0.25,
            0.4
          ]
        },
        {
          "type": "targetMutex",
          "mutex": "lightOfMiracel"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "heal",
          "formular": {
            "environment": {
              "damage": 1
            }
          }
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        },
        {
          "type": "setTargetMutex",
          "mutex": "lightOfMiracel",
          "count": 1
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 139,
    "label": L("dic_skill_139_label"), //元素爆发pk
    "icon": "skill-mage4.png",
    "desc": L("dic_skill_139_desc"), //法师每次攻击能够增加自身暴击值，直至造成暴击后清空。
    "slotId": 1,
    "config": {
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage",
          "count": 1
        }
      ],
      "installAction": [
        {
          "type": "removeSpell",
          "spell": 133
        },
        {
          "type": "installSpell",
          "spell": 133,
          "#level": [
            1,
            2
          ]
        }
      ],
      "action": [
        {
          "type": "removeSpell",
          "spell": 133
        },
        {
          "type": "installSpell",
          "spell": 133,
          "#level": [
            1,
            2
          ]
        }
      ]
    }
  },
  {
    "skillId": 140,
    "label": L("dic_skill_140_label"), //哥布林投手1
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "property",
          "property": "health",
          "from": 150
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "anchorPos": {
              "pool": "blocks",
              "filter": [
                {
                  "type": "shuffle"
                },
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 60,
          "delay": {
            "base": 0.3
          }
        }
      ]
    }
  },
  {
    "skillId": 141,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 26,
          "pos": "self"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "formular": {
            "c": 100
          }
        },
        {
          "type": "playEffect",
          "effect": 30,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 142,
    "label": L("dic_skill_142_label"), //哥布林投手2
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "property",
          "property": "health",
          "to": 150
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "anchorPos": {
              "pool": "blocks",
              "filter": [
                {
                  "type": "shuffle"
                },
                {
                  "type": "count",
                  "count": 3
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 60,
          "delay": {
            "base": 0.3
          }
        }
      ]
    }
  },
  {
    "skillId": 143,
    "label": L("dic_skill_143_label"), //吸收狼群
    "config": {
      "basic": {
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "myMutex",
          "mutex": "langqun"
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "role-id",
            "roleID": 69
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "self": true,
          "formular": {
            "tar": {
              "c": 140
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "langqun",
          "count": 9999
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 144,
    "label": L("dic_skill_144_label"), //狼王蓄力
    "slotId": 1,
    "config": {
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "count": 1
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "installAction": [
        {
          "type": "removeSpell",
          "spell": 145
        },
        {
          "type": "installSpell",
          "spell": 145
        }
      ],
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "xuli",
          "count": 1
        },
        {
          "type": "removeSpell",
          "spell": 145
        },
        {
          "type": "installSpell",
          "spell": 145
        }
      ]
    }
  },
  {
    "skillId": 145,
    "config": {
      "action": [
        {
          "type": "playEffect",
          "effect": 28,
          "pos": "self"
        },
        {
          "type": "setProperty",
          "modifications": {
            "critical": {
              "c": 15
            }
          }
        },
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "c": 25
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        },
        {
          "type": "visible"
        },
        {
          "type": "myMutex",
          "mutex": "xuli"
        },
        {
          "type": "alive"
        }
      ]
    }
  },
  {
    "skillId": 146,
    "label": L("dic_skill_146_label"), //流血伤害
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 147
        },
        {
          "type": "installSpell",
          "spell": 148
        }
      ]
    }
  },
  {
    "skillId": 147,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": -0.2
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 3
        }
      ]
    }
  },
  {
    "skillId": 148,
    "config": {
      "action": [
        {
          "type": "damage",
          "damageType": "Bleed",
          "formular": {
            "src": {
              "c": 30
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "HealthDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 149,
    "label": L("dic_skill_149_label"), //剑气1
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 150,
          "delay": 0.3
        }
      ]
    }
  },
  {
    "skillId": 150,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 26,
          "pos": "self"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            "c": 230
          }
        },
        {
          "type": "playEffect",
          "effect": 25,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 151,
    "label": L("dic_skill_151_label"), //剑圣自愈
    "config": {
      "basic": {
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 5
        },
        {
          "type": "event",
          "event": "onTurnBegin"
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "self": true,
          "formular": {
            "c": 180
          }
        }
      ]
    }
  },
  {
    "skillId": 152,
    "label": L("dic_skill_152_label"), //pk传送
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn"
        },
        {
          "type": "chance",
          "chance": 0.35
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 21,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 153,
    "label": L("dic_skill_153_label"), //boss掉落
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeKill"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "dropPrize",
          "showPrize": true,
          "effect": 49,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 154,
    "label": L("dic_skill_154_label"), //小兵掉落
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeKill"
        },
        {
          "type": "chance",
          "chance": 0.05
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "dropPrize",
          "showPrize": true,
          "effect": 49,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 155,
    "label": L("dic_skill_155_label"), //宝箱掉落
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "dropPrize",
          "showPrize": true,
          "effect": 49,
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 156,
    "label": L("dic_skill_156_label"), //pk宝箱
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "dropItem",
          "dropList": [
            {
              "weight": 5,
              "item": 0
            },
            {
              "weight": 5,
              "item": 1
            },
            {
              "weight": 0,
              "item": 2
            },
            {
              "weight": 5,
              "item": 3
            },
            {
              "weight": 0,
              "item": 4
            },
            {
              "weight": 5,
              "item": 5
            },
            {
              "weight": 5,
              "item": 6
            },
            {
              "weight": 5,
              "item": 7
            },
            {
              "weight": 0,
              "item": 8
            },
            {
              "weight": 0,
              "item": 9
            }
          ]
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 157,
    "label": L("dic_skill_157_label"), //盾兵盾墙
    "config": {
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "alive"
        },
        {
          "type": "visible"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 1,
          "pos": "target"
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0.8
            }
          }
        },
        {
          "type": "setTargetMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "replaceTar"
        },
        {
          "type": "ignoreHurt"
        }
      ]
    }
  },
  {
    "skillId": 158,
    "label": L("dic_skill_158_label"), //盾兵减伤
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 1,
          "act": "self"
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0.7
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 159,
    "label": L("dic_skill_159_label"), //盾兵召唤
    "config": {
      "basic": {
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        },
        {
          "type": "delay",
          "delay": 1
        },
        {
          "type": "heal",
          "formular": {
            "c": 300
          }
        },
        {
          "type": "createMonster",
          "objectCount": 2,
          "effect": 21,
          "randomPos": true,
          "monsterID": 214
        }
      ]
    }
  },
  {
    "skillId": 160,
    "label": L("dic_skill_160_label"), //远程攻击2
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "attack",
          "isRange": true
        },
        {
          "type": "playEffect",
          "effect": 10
        },
        {
          "type": "delay",
          "delay": 0.5
        },
        {
          "type": "castSpell",
          "spell": 214
        }
      ]
    }
  },
  {
    "skillId": 161,
    "label": L("dic_skill_161_label"), //每回合传送
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "playAction",
          "motion": 6,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 21,
          "pos": "self"
        },
        {
          "type": "playAction",
          "motion": 5,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 162,
    "config": {
      "action": [
        {
          "type": "removeSpell",
          "spell": 331
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "event",
          "event": "onTurnBegin",
          "eventCount": 1
        }
      ]
    }
  },
  {
    "skillId": 163,
    "label": L("dic_skill_163_label"), //吸血
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "ignoreAttack"
        },
        {
          "type": "heal",
          "formular": {
            "environment": {
              "damage": 1
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 164,
    "label": L("dic_skill_164_label"), //减速
    "config": {
      "basic": {
        "targetEffect": 17,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 166
        }
      ]
    }
  },
  {
    "skillId": 165,
    "label": L("dic_skill_165_label"), //中毒
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "#chance": [
            0.3,
            0.5
          ]
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 94,
          "#level": [
            1,
            2
          ]
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        }
      ]
    }
  },
  {
    "skillId": 166,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "speed": {
              "src": {
                "speed": -0.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 167,
    "label": L("dic_skill_167_label"), //蓄力暴击
    "slotId": 1,
    "config": {
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "count": 1
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "installAction": [
        {
          "type": "removeSpell",
          "spell": 168
        },
        {
          "type": "installSpell",
          "spell": 168
        }
      ],
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "xuli",
          "count": 1
        },
        {
          "type": "removeSpell",
          "spell": 168
        },
        {
          "type": "installSpell",
          "spell": 168
        }
      ]
    }
  },
  {
    "skillId": 168,
    "config": {
      "action": [
        {
          "type": "playEffect",
          "effect": 28,
          "pos": "self"
        },
        {
          "type": "setProperty",
          "modifications": {
            "critical": {
              "c": 15
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        },
        {
          "type": "visible"
        },
        {
          "type": "myMutex",
          "mutex": "xuli"
        },
        {
          "type": "alive"
        }
      ]
    }
  },
  {
    "skillId": 169,
    "label": L("dic_skill_169_label"), //蓄力速度
    "slotId": 1,
    "config": {
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "count": 1
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "installAction": [
        {
          "type": "removeSpell",
          "spell": 170
        },
        {
          "type": "installSpell",
          "spell": 170
        }
      ],
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "xuli",
          "count": 1
        },
        {
          "type": "removeSpell",
          "spell": 170
        },
        {
          "type": "installSpell",
          "spell": 170
        }
      ]
    }
  },
  {
    "skillId": 170,
    "config": {
      "action": [
        {
          "type": "playEffect",
          "effect": 28,
          "pos": "self"
        },
        {
          "type": "setProperty",
          "modifications": {
            "speed": {
              "c": 5
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        },
        {
          "type": "visible"
        },
        {
          "type": "myMutex",
          "mutex": "xuli"
        },
        {
          "type": "alive"
        }
      ]
    }
  },
  {
    "skillId": 171,
    "label": L("dic_skill_171_label"), //蓄力攻击
    "slotId": 1,
    "config": {
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "count": 1
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "installAction": [
        {
          "type": "removeSpell",
          "spell": 172
        },
        {
          "type": "installSpell",
          "spell": 172
        }
      ],
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "xuli",
          "count": 1
        },
        {
          "type": "removeSpell",
          "spell": 172
        },
        {
          "type": "installSpell",
          "spell": 172
        }
      ]
    }
  },
  {
    "skillId": 172,
    "config": {
      "action": [
        {
          "type": "playEffect",
          "effect": 28,
          "pos": "self"
        },
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "c": 100
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        },
        {
          "type": "visible"
        },
        {
          "type": "myMutex",
          "mutex": "xuli"
        },
        {
          "type": "alive"
        }
      ]
    }
  },
  {
    "skillId": 173,
    "label": L("dic_skill_173_label"), //加血减攻
    "config": {
      "basic": {
        "spellEffect": 28
      },
      "triggerCondition": [
        {
          "type": "property",
          "property": "health",
          "to": 2000
        },
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "myMutex",
          "mutex": "jiaxuejiangong"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "jiaxuejiangong",
          "count": 9999
        },
        {
          "type": "installSpell",
          "spell": 213
        }
      ]
    }
  },
  {
    "skillId": 174,
    "label": L("dic_skill_174_label"), //减血加攻
    "config": {
      "basic": {
        "spellEffect": 28
      },
      "triggerCondition": [
        {
          "type": "property",
          "property": "health",
          "to": 2000
        },
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "myMutex",
          "mutex": "jianxuejiagong"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "jianxuejiagong",
          "count": 9999
        },
        {
          "type": "installSpell",
          "spell": 215
        }
      ]
    }
  },
  {
    "skillId": 175,
    "label": L("dic_skill_175_label"), //加攻加血
    "config": {
      "basic": {
        "spellEffect": 28
      },
      "triggerCondition": [
        {
          "type": "property",
          "property": "health",
          "to": 2000
        },
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "myMutex",
          "mutex": "jiaxuejiagong"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "jiaxuejiagong",
          "count": 9999
        },
        {
          "type": "installSpell",
          "spell": 216
        }
      ]
    }
  },
  {
    "skillId": 176,
    "label": L("dic_skill_176_label"), //远程攻击
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "rangeAttack"
        }
      ]
    }
  },
  {
    "skillId": 177,
    "label": L("dic_skill_177_label"), //概率传送
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "chance",
          "chance": 0.6
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 21,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 178,
    "label": L("dic_skill_178_label"), //闪避反击
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onDodge"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "object",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "attack"
        }
      ]
    }
  },
  {
    "skillId": 179,
    "label": L("dic_skill_179_label"), //暴击特效
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 180,
    "label": L("dic_skill_180_label"), //二次攻击
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTarget"
        },
        {
          "type": "targetMutex",
          "mutex": "attack"
        },
        {
          "type": "chance",
          "chance": 0.8
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "setTargetMutex",
          "mutex": "attack",
          "count": 1
        },
        {
          "type": "attack"
        }
      ]
    }
  },
  {
    "skillId": 181,
    "label": L("dic_skill_181_label"), //二次攻击暴击加成
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onSecondaryAttack"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 182
        }
      ]
    }
  },
  {
    "skillId": 182,
    "config": {
      "action": [
        {
          "type": "playEffect",
          "effect": 28,
          "pos": "self"
        },
        {
          "type": "setProperty",
          "modifications": {
            "critical": {
              "c": 5
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 1
        }
      ]
    }
  },
  {
    "skillId": 183,
    "label": L("dic_skill_183_label"), //X回合加一次攻击力
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 5
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "installSpell",
          "spell": 265
        }
      ]
    }
  },
  {
    "skillId": 184,
    "label": L("dic_skill_184_label"), //传送2
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "alive"
        },
        {
          "type": "chance",
          "chance": 0.5
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "playAction",
          "motion": 6,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 21,
          "pos": "self"
        },
        {
          "type": "playAction",
          "motion": 5,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 185,
    "label": L("dic_skill_185_label"), //溅射
    "config": {
      "basic": {
        "targetEffect": 8,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "count",
            "count": 3
          }
        ]
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "damage",
          "damageType": "Physical",
          "isRange": true,
          "formular": {
            "src": {
              "attack": 1
            }
          }
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 186,
    "label": L("dic_skill_186_label"), //202-魔力漩涡
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "removeSpell",
          "spell": 203
        },
        {
          "type": "installSpell",
          "spell": 203,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 187,
    "label": L("dic_skill_187_label"), //死后复活一次
    "config": {
      "basic": {
        "targetEffect": 22
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "resurrect"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 188,
    "label": L("dic_skill_188_label"), //元素
    "desc": L("dic_skill_188_desc"), //死后全体加无敌
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "dead",
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 189,
          "delay": 0.3
        }
      ]
    }
  },
  {
    "skillId": 189,
    "config": {
      "basic": {
        "buffEffect": 42,
        "spellEffect": 1,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 190,
    "label": L("dic_skill_190_label"), //嗜血
    "config": {
      "basic": {
        "spellEffect": 28
      },
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "c": 6
            }
          }
        },
        {
          "type": "setProperty",
          "modifications": {
            "speed": {
              "src": {
                "speed": 3
              },
              "c": 20
            }
          }
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "buffType": "RoleBuff"
    }
  },
  {
    "skillId": 191,
    "label": L("dic_skill_191_label"), //援护2
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 9,
        "targetEffect": 1,
        "spellDelay": 0,
        "targetDelay": 0
      },
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBePhysicalRangeDamage"
        },
        {
          "type": "chance",
          "chance": 0.45
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "alive"
        },
        {
          "type": "visible"
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": [
            {
              "environment": {
                "damage": 0.8
              }
            }
          ]
        },
        {
          "type": "setTargetMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "replaceTar"
        },
        {
          "type": "ignoreHurt"
        }
      ]
    }
  },
  {
    "skillId": 192,
    "label": L("dic_skill_192_label"), //分裂
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        },
        {
          "type": "chance",
          "chance": 0.5
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "createMonster",
          "effect": 21,
          "randomPos": true,
          "#objectCount": [
            2,
            4,
            2,
            4,
            2,
            4,
            2,
            4
          ],
          "#monsterID": [
            19,
            19,
            51,
            51,
            83,
            83,
            115,
            115
          ],
          "#withKey": [
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true
          ]
        }
      ]
    }
  },
  {
    "skillId": 193,
    "label": L("dic_skill_193_label"), //弱变强
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 5
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 13,
          "pos": "self",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "createMonster",
          "objectCount": 1,
          "pos": "self",
          "monsterID": 31
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 194,
    "label": L("dic_skill_194_label"), //强变弱
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 5
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 13,
          "pos": "self",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "createMonster",
          "objectCount": 1,
          "pos": "self",
          "monsterID": 19
        },
        {
          "type": "kill"
        }
      ]
    }
  },
  {
    "skillId": 195,
    "activeSpell": true,
    "label": L("dic_skill_195_label"), //怒之力
    "icon": "skill-kzs1.png",
    "labelIcon": "kzssk1.png",
    "desc": L("dic_skill_195_desc"), //狂战士进入狂怒状态，降低命中1回合，提高攻击力2回合。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 66,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 196,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "installSpell",
          "spell": 197
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 196,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": 1
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 1.5
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 2.5
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 197,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": -0.95
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "DeBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 1
        }
      ]
    }
  },
  {
    "skillId": 198,
    "label": L("dic_skill_198_label"), //血之狂怒
    "icon": "skill-kzs5.png",
    "labelIcon": "kzssk5.png",
    "desc": L("dic_skill_198_desc"), //狂战士将累积受到的伤害在下一轮攻击中反馈给敌人。
    "slotId": 1,
    "config": {
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "event",
          "event": "onSpellDamage"
        },
        {
          "type": "event",
          "event": "onSpellRangeDamage"
        },
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "installAction": [
        {
          "type": "removeSpell",
          "spell": 269
        },
        {
          "type": "installSpell",
          "spell": 269,
          "#level": [
            1,
            2,
            3
          ]
        }
      ],
      "action": [
        {
          "type": "removeSpell",
          "spell": 269
        },
        {
          "type": "installSpell",
          "spell": 269,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 199,
    "activeSpell": true,
    "label": L("dic_skill_199_label"), //战争咆哮
    "icon": "skill-kzs2.png",
    "labelIcon": "kzssk2.png",
    "desc": L("dic_skill_199_desc"), //狂战士发出咆哮，大幅降低周围范围内敌人的命中率与暴击率。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 4,
        "spellDelay": 0,
        "targetDelay": 0
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 0,
            "startDistance": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 68,
          "act": "self"
        },
        {
          "type": "setTargetMutex",
          "mutex": "paoxiao",
          "count": 9999
        },
        {
          "type": "installSpell",
          "spell": 270,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 200,
    "label": L("dic_skill_200_label"), //复仇之力
    "desc": L("dic_skill_200_desc"), //怪物攻击队友并造成伤害时，狂战士有几率立即报复攻击该生物。
    "config": {
      "basic": {
        "buffEffect": 125,
        "spellAction": 4,
        "targetEffect": 126,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBePhysicalRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "revenge"
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "#formular": [
            {
              "src": {
                "attack": 0.5
              }
            },
            {
              "src": {
                "attack": 0.7
              }
            },
            {
              "src": {
                "attack": 0.9
              }
            }
          ]
        },
        {
          "type": "setTargetMutex",
          "mutex": "revenge",
          "count": 1
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 201,
    "activeSpell": true,
    "label": L("dic_skill_201_label"), //寒冰箭
    "icon": "skill-mds1.png",
    "labelIcon": "mdssk1.png",
    "desc": L("dic_skill_201_desc"), //魔导师释放寒冰箭对场上多个敌人造成伤害，伤害值与攻击力相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 4
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "#formular": [
            {
              "src": {
                "attack": 0.5
              }
            },
            {
              "src": {
                "attack": 0.6
              }
            },
            {
              "src": {
                "attack": 0.75
              }
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 65,
          "pos": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.5
        }
      ]
    }
  },
  {
    "skillId": 202,
    "label": L("dic_skill_202_label"), //魔力漩涡
    "icon": "skill-mds5.png",
    "labelIcon": "mdssk5.png",
    "desc": L("dic_skill_202_desc"), //场上敌人越多,魔导师的攻击力也随之增强。
    "slotId": 1,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onMonsterShow"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "installAction": [
        {
          "type": "installSpell",
          "spell": 186,
          "#level": [
            1,
            2,
            3
          ]
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 69,
          "act": "self"
        },
        {
          "type": "removeSpell",
          "spell": 203
        },
        {
          "type": "installSpell",
          "spell": 203,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 203,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
		    {
			  "attack": {
                func:function(env,source,target,cons) {
                  return env.visibleMonsterCount*source.attack*0.03
                }
              }
            },
            {
              "attack": {
                func:function(env,source,target,cons) {
                  return env.visibleMonsterCount*source.attack*0.05
                }
              }
            },
            {
              "attack": {
                func:function(env,source,target,cons) {
                  return env.visibleMonsterCount*source.attack*0.08
                }
              }
			}
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff"
    }
  },
  {
    "skillId": 204,
    "label": L("dic_skill_204_label"), //死亡诅咒
    "icon": "skill-mds6.png",
    "labelIcon": "mdssk6.png",
    "desc": L("dic_skill_204_desc"), //被魔导师攻击的目标，有几率会承受额外的伤害一回合。
    "slotId": 3,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTarget"
        },
        {
          "type": "chance",
          "#chance": [
            0.25,
            0.3,
            0.5
          ]
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 70,
          "pos": "target"
        },
        {
          "type": "installSpell",
          "spell": 205,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "delay"
        }
      ]
    }
  },
  {
    "skillId": 205,
    "config": {
      "basic": {
        "buffEffect": 36
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd",
          "eventCount": 1
        },
        {
          "type": "alive"
        },
        {
          "type": "visible"
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": [
            {
              "environment": {
                "damage": 1.2
              }
            },
            {
              "environment": {
                "damage": 1.3
              }
            },
            {
              "environment": {
                "damage": 1.35
              }
            }
          ]
        }
      ],
      "buffType": "DeBuff"
    }
  },
  {
    "skillId": 206,
    "label": L("dic_skill_206_label"), //元素崩塌
    "icon": "skill-mage6.png",
    "labelIcon": "magesk6.png",
    "desc": L("dic_skill_206_desc"), //当魔导师对敌人造成暴击时，能够提升暴击伤害值。
    "slotId": 3,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": [
            {
              "src": {
                "attack": 2.2
              }
            },
            {
              "src": {
                "attack": 2.4
              }
            },
            {
              "src": {
                "attack": 2.6
              }
            }
          ]
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 207,
    "activeSpell": true,
    "label": L("dic_skill_207_label"), //祈祷
    "icon": "skill-dzj1.png",
    "labelIcon": "dzjsk1.png",
    "desc": L("dic_skill_207_desc"), //大主教对队伍中全体成员的生命值进行回复，回复值与命中值相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 47,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.1
              }
            },
            {
              "src": {
                "accuracy": 0.15
              }
            },
            {
              "src": {
                "accuracy": 0.25
              }
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 208,
    "label": L("dic_skill_208_label"), //狂热
    "icon": "skill-dzj2.png",
    "desc": L("dic_skill_208_desc"), //当大主教击杀一个单位时,有一定几率对全体成员的速度与攻击提升。
    "slotId": 1,
    "config": {
      "basic": {
        "spellAction": 1,
        "targetEffect": 71,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onKill"
        },
        {
          "type": "chance",
          "#chance": [
            0.1,
            0.15,
            0.2
          ]
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "installSpell",
          "spell": 209,
          "#level": [
            1,
            2,
            3
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      }
    }
  },
  {
    "skillId": 209,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": 0.3
                }
              },
              "speed": {
                "src": {
                  "c": 10
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 0.4
                }
              },
              "speed": {
                "src": {
                  "c": 15
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 0.5
                }
              },
              "speed": {
                "src": {
                  "c": 25
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onBeginBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 210,
    "label": L("dic_skill_210_label"), //加护
    "icon": "skill-dzj5.png",
    "labelIcon": "dzjsk5.png",
    "desc": L("dic_skill_210_desc"), //发现怪物后，大主教有一定几率会对生命值最低的队友补血。
    "slotId": 1,
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 64,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onMonsterShow"
        },
        {
          "type": "myMutex",
          "mutex": "biyou"
        },
        {
          "type": "chance",
          "#chance": [
            0.2,
            0.2,
            0.2
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "sort",
            "by": "health"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "biyou",
          "count": 1
        },
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.2
              }
            },
            {
              "src": {
                "accuracy": 0.25
              }
            },
            {
              "src": {
                "accuracy": 0.35
              }
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 211,
    "label": L("dic_skill_211_label"), //放逐
    "icon": "skill-dzj6.png",
    "labelIcon": "dzjsk6.png",
    "desc": L("dic_skill_211_desc"), //当大主教受到攻击时，有一定几率会降低伤害来源的攻击力，持续一定回合。
    "slotId": 3,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "fangzhu"
        },
        {
          "type": "chance",
          "#chance": [
            0.15,
            0.15,
            0.25
          ]
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 77,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 67,
          "act": "target"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 212,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "setTargetMutex",
          "mutex": "fangzhu",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 212,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": -0.2
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": -0.3
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": -0.4
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "": "eventCount",
          "#eventCount": [
            2,
            3,
            3
          ]
        },
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "#eventCount": [
            2,
            3,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 213,
    "label": L("dic_skill_213_label"), //加血减攻II
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "c": -30
            }
          }
        },
        {
          "type": "heal",
          "delay": 1.3,
          "formular": {
            "c": 300
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ]
    }
  },
  {
    "skillId": 214,
    "label": L("dic_skill_214_label"), //远程攻击2二次攻击
    "config": {
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "attack",
          "isRange": true
        },
        {
          "type": "playEffect",
          "effect": 10
        }
      ]
    }
  },
  {
    "skillId": 215,
    "label": L("dic_skill_215_label"), //减血加攻II
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "c": 50
            }
          }
        },
        {
          "type": "damage",
          "delay": 1.3,
          "formular": {
            "c": 300
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ]
    }
  },
  {
    "skillId": 216,
    "label": L("dic_skill_216_label"), //加血加攻II
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "c": 30
            }
          }
        },
        {
          "type": "heal",
          "delay": 1.3,
          "formular": {
            "c": 300
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ]
    }
  },
  {
    "skillId": 217,
    "label": L("dic_skill_217_label"), //狂暴II
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "c": 6
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ]
    }
  },
  {
    "skillId": 218,
    "label": L("dic_skill_218_label"), //全屏敌人伤害
    "config": {
      "basic": {
        "spellEffect": 29,
        "spellDelay": 0.6,
        "targetDelay": 0.9
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            "src": {
              "attack": 0.3
            },
            "c": 15
          }
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 219,
    "label": L("dic_skill_219_label"), //随机敌人伤害
    "config": {
      "basic": {
        "spellEffect": 29,
        "spellDelay": 0.6,
        "targetDelay": 0.9
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            "src": {
              "attack": 0.3
            },
            "c": 15
          }
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 220,
    "label": L("dic_skill_220_label"), //我方全体伤害
    "config": {
      "basic": {
        "spellEffect": 29,
        "spellDelay": 0.6,
        "targetDelay": 0.9
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            "src": {
              "attack": 0.3
            },
            "c": 15
          }
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 221,
    "label": L("dic_skill_221_label"), //我方随机伤害
    "config": {
      "basic": {
        "spellEffect": 29,
        "spellDelay": 0.6,
        "targetDelay": 0.9
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "count",
            "count": 1
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            "src": {
              "attack": 0.3
            },
            "c": 15
          }
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 222,
    "label": L("dic_skill_222_label"), //我方单体攻击上升
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 223,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 13,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 223,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": 1
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 224,
    "label": L("dic_skill_224_label"), //我方全体攻击上升
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 223,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 13,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 225,
    "label": L("dic_skill_225_label"), //我方单体攻击下降
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 226,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 38,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 226,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": -0.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 227,
    "label": L("dic_skill_227_label"), //我方全体攻击下降
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 226,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 38,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 228,
    "label": L("dic_skill_228_label"), //额外奖励
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "dropPrize",
          "showPrize": true,
          "effect": 49,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 229,
    "label": L("dic_skill_229_label"), //大幅度削减攻击
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 230,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 38,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 230,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": -0.8
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 231,
    "label": L("dic_skill_231_label"), //大幅度削减生命值
    "config": {
      "basic": {
        "spellEffect": 29,
        "spellDelay": 0.6,
        "targetDelay": 0.9
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            "src": {
              "attack": 0.3
            },
            "c": 15
          }
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 232,
    "label": L("dic_skill_232_label"), //召唤怪物
    "config": {
      "basic": {
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        },
        {
          "type": "delay",
          "delay": 1
        },
        {
          "type": "heal",
          "formular": {
            "c": 300
          }
        },
        {
          "type": "createMonster",
          "objectCount": 2,
          "effect": 21,
          "randomPos": true,
          "monsterID": 214
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 233,
    "label": L("dic_skill_233_label"), //我方全体加无敌
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 234,
          "delay": 0.3
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 234,
    "config": {
      "basic": {
        "buffEffect": 42
      },
      "action": [
        {
          "type": "ignoreHurt"
        },
        {
          "type": "playEffect",
          "delay": 0.3,
          "effect": 1,
          "pos": "self"
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "RoleBuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "targetMutex",
          "mutex": "lightOfMiracel"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 235,
    "label": L("dic_skill_235_label"), //我方全体恢复生命值
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "heal",
          "delay": 1.3,
          "formular": {
            "src": {
              "strong": 0.5
            },
            "c": 5
          }
        },
        {
          "type": "playEffect",
          "delay": 1.3,
          "effect": 19,
          "pos": "target"
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 236,
    "label": L("dic_skill_236_label"), //我方全体中毒
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 237
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 237,
    "config": {
      "basic": {
        "buffEffect": 36
      },
      "action": [
        {
          "type": "damage",
          "damageType": "poison",
          "formular": {
            "src": {
              "health": 0.1
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "HealthDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 238,
    "label": L("dic_skill_238_label"), //我方全体回避率飙升
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 239
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 239,
    "config": {
      "basic": {
        "buffEffect": 36
      },
      "action": [
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "reactivity": 1
              }
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 240,
    "label": L("dic_skill_240_label"), //敌方全体致盲
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 239
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 241,
    "config": {
      "basic": {
        "buffEffect": 36
      },
      "action": [
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": 1
              }
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 242,
    "label": L("dic_skill_242_label"), //敌方全体传送
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        }
      ]
    }
  },
  {
    "skillId": 243,
    "label": L("dic_skill_243_label"), //单个闪电
    "desc": L("dic_skill_243_desc"), //召唤闪电，对一名敌人造成伤害，伤害值与使用者攻击力相关。
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 10
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "#formular": [
            {
              "src": {
                "attack": 1
              }
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 44,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 0,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "costCard",
          "card": 10
        }
      ]
    }
  },
  {
    "skillId": 244,
    "label": L("dic_skill_244_label"), //多个闪电
    "desc": L("dic_skill_244_desc"), //召唤闪电，对多名敌人造成伤害，伤害值与使用者攻击力相关。
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 11
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 3
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "#formular": [
            {
              "src": {
                "attack": 1
              }
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 44,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 0,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "costCard",
          "card": 11
        }
      ]
    }
  },
  {
    "skillId": 245,
    "label": L("dic_skill_245_label"), //固定范围攻击
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 12
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 246,
          "delay": {
            "base": 1.6,
            "range": 3
          }
        },
        {
          "type": "shock",
          "delay": 1.6,
          "range": 20,
          "time": 2
        },
        {
          "type": "costCard",
          "card": 12
        }
      ]
    }
  },
  {
    "skillId": 246,
    "config": {
      "installAction": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "formular": {
            "c": 150
          }
        },
        {
          "type": "playEffect",
          "effect": 18,
          "pos": "self"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        }
      ]
    }
  },
  {
    "skillId": 247,
    "label": L("dic_skill_247_label"), //随机范围攻击
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 13
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 1,
            "anchorPos": [
              21
            ]
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 246,
          "delay": {
            "base": 1.6,
            "range": 3
          }
        },
        {
          "type": "shock",
          "delay": 1.6,
          "range": 20,
          "time": 2
        },
        {
          "type": "costCard",
          "card": 13
        }
      ]
    }
  },
  {
    "skillId": 248,
    "label": L("dic_skill_248_label"), //全屏攻击
    "desc": L("dic_skill_248_desc"), //召唤闪电，对全屏敌人造成伤害，伤害值与使用者攻击力相关。
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "card",
          "id": 14
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "#formular": [
            {
              "src": {
                "attack": 1
              }
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 44,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 0,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "costCard",
          "card": 14
        }
      ]
    }
  },
  {
    "skillId": 249,
    "label": L("dic_skill_249_label"), //敌方全体攻击下降
    "config": {
      "triggerCondition": [
        {
          "type": "card",
          "id": 15
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 250,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 38,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "costCard",
          "card": 15
        }
      ]
    }
  },
  {
    "skillId": 250,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": -0.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 251,
    "label": L("dic_skill_251_label"), //敌方全体致盲
    "config": {
      "triggerCondition": [
        {
          "type": "card",
          "id": 16
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 239
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "costCard",
          "card": 16
        }
      ]
    }
  },
  {
    "skillId": 252,
    "label": L("dic_skill_252_label"), //我方全体加无敌
    "config": {
      "triggerCondition": [
        {
          "type": "card",
          "id": 17
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 234,
          "delay": 0.3
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "costCard",
          "card": 17
        }
      ]
    }
  },
  {
    "skillId": 253,
    "label": L("dic_skill_253_label"), //攻击吸收
    "desc": L("dic_skill_253_desc"), //我方全体攻击吸收
    "config": {
      "triggerCondition": [
        {
          "type": "card",
          "id": 18
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 98
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "costCard",
          "card": 18
        }
      ]
    }
  },
  {
    "skillId": 254,
    "label": L("dic_skill_254_label"), //获得金币
    "config": {
      "triggerCondition": [
        {
          "type": "card",
          "id": 19
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "dropGold",
          "count": 983,
          "showPrize": true,
          "effect": 49,
          "pos": "self"
        },
        {
          "type": "costCard",
          "card": 19
        }
      ]
    }
  },
  {
    "skillId": 255,
    "label": L("dic_skill_255_label"), //怪物伤害增加
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 223,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 13,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 256,
    "label": L("dic_skill_256_label"), //怪物伤害减弱
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 226,
          "delay": 1.5
        },
        {
          "type": "playEffect",
          "effect": 38,
          "pos": "target",
          "delay": 1.5
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 257,
    "label": L("dic_skill_257_label"), //怪物生命增加
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "heal",
          "delay": 1.3,
          "formular": {
            "src": {
              "strong": 0.5
            },
            "c": 5
          }
        },
        {
          "type": "playEffect",
          "delay": 1.3,
          "effect": 19,
          "pos": "target"
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 258,
    "label": L("dic_skill_258_label"), //怪物生命减弱
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            "c": 150
          }
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 259,
    "label": L("dic_skill_259_label"), //每轮都会掉血
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 260
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 260,
    "config": {
      "basic": {
        "buffEffect": 36
      },
      "action": [
        {
          "type": "damage",
          "damageType": "poison",
          "formular": {
            "src": {
              "health": 0.1
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "HealthDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 261,
    "label": L("dic_skill_261_label"), //每轮都会加血
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeActivate"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "not-me"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 262
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "kill",
          "self": true
        }
      ]
    }
  },
  {
    "skillId": 262,
    "config": {
      "basic": {
        "buffEffect": 36
      },
      "action": [
        {
          "type": "heal",
          "formular": {
            "src": {
              "health": 0.1
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "HealthDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 263,
    "label": L("dic_skill_263_label"), //每回合随机aoe，敌我均会受到伤害
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeBattleTurnEnd"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 1,
            "anchorPos": [
              14
            ]
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 264,
          "delay": {
            "base": 1.6,
            "range": 3
          }
        },
        {
          "type": "shock",
          "delay": 1.6,
          "range": 20,
          "time": 2
        }
      ]
    }
  },
  {
    "skillId": 264,
    "config": {
      "installAction": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "formular": {
            "c": 150
          }
        },
        {
          "type": "playEffect",
          "effect": 18,
          "pos": "self"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      }
    }
  },
  {
    "skillId": 265,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": 0.1
              }
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onBeginBattleTurn",
          "eventCount": 9999
        }
      ]
    }
  },
  {
    "skillId": 266,
    "label": L("dic_skill_266_label"), //暴击特效(狂战士)
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 60,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 267,
    "label": L("dic_skill_267_label"), //暴击特效(魔导师)
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 61,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 268,
    "label": L("dic_skill_268_label"), //暴击特效(主教)
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 63,
          "pos": "target"
        },
        {
          "type": "playEffect",
          "effect": 62,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 269,
    "label": L("dic_skill_269_label"), //198-血之狂怒
    "config": {
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "environment": {
                  "damage": 0.5
                }
              }
            },
            {
              "attack": {
                "environment": {
                  "damage": 0.8
                }
              }
            },
            {
              "attack": {
                "environment": {
                  "damage": 1.2
                }
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "Self"
      },
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        }
      ]
    }
  },
  {
    "skillId": 270,
    "label": L("dic_skill_270_label"), //199-咆哮
    "config": {
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "buffType": "RoleDebuff",
      "installAction": [
        {
          "type": "playEffect",
          "effect": 76,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "setProperty",
          "#modifications": [
            {
              "accuracy": {
                "c": -15
              }
            },
            {
              "accuracy": {
                "c": -25
              }
            },
            {
              "accuracy": {
                "c": -35
              }
            }
          ]
        },
        {
          "type": "setProperty",
          "#modifications": [
            {
              "critical": {
                "c": -15
              }
            },
            {
              "critical": {
                "c": -25
              }
            },
            {
              "critical": {
                "c": -35
              }
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 271,
    "label": L("dic_skill_271_label"), //连击（火）
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        },
        {
          "type": "chance",
          "chance": 0.8
        },
        {
          "type": "targetMutex",
          "mutex": "range"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "attack",
          "isRange": true
        },
        {
          "type": "playEffect",
          "effect": 10
        },
        {
          "type": "delay",
          "delay": 0.5
        },
        {
          "type": "castSpell",
          "spell": 214
        },
        {
          "type": "castSpell",
          "spell": 272
        }
      ]
    }
  },
  {
    "skillId": 272,
    "label": L("dic_skill_272_label"), //26远程攻击
    "config": {
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "setTargetMutex",
          "mutex": "range",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 273,
    "label": L("dic_skill_273_label"), //pk怒之力
    "icon": "skill-kzs1.png",
    "desc": L("dic_skill_273_desc"), //降低命中1回合，提高攻击力2回合。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 66,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 274,
          "#level": [
            1,
            2
          ]
        },
        {
          "type": "installSpell",
          "spell": 275
        }
      ]
    }
  },
  {
    "skillId": 274,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": 1
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 1.5
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 275,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": -0.95
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "DeBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 1
        }
      ]
    }
  },
  {
    "skillId": 276,
    "label": L("dic_skill_276_label"), //pk咆哮
    "icon": "skill-kzs3.png",
    "desc": L("dic_skill_276_desc"), //几率降低怪物命中。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 4,
        "spellDelay": 0,
        "targetDelay": 0
      },
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 8,
          "reset": true
        },
        {
          "type": "chance",
          "#chance": [
            0.2,
            0.2
          ]
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 68,
          "act": "self"
        },
        {
          "type": "installSpell",
          "spell": 277,
          "#level": [
            1,
            2
          ]
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 277,
    "config": {
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "installAction": [
        {
          "type": "playEffect",
          "effect": 76,
          "act": "self",
          "delay": 0.6
        },
        {
          "type": "setProperty",
          "#modifications": [
            {
              "accuracy": {
                "c": -15
              }
            },
            {
              "accuracy": {
                "c": -25
              }
            }
          ]
        }
      ],
      "buffType": "RoleDebuff",
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 278,
    "label": L("dic_skill_278_label"), //pk复仇之力
    "icon": "skill-kz3.png",
    "desc": L("dic_skill_278_desc"), //怪物攻击队友并造成伤害时，狂战士有几率立即报复攻击该生物。
    "slotId": 3,
    "config": {
      "basic": {
        "spellAction": 4,
        "targetEffect": 7,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTeammateBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onTeammateBePhysicalRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "revenge"
        },
        {
          "type": "chance",
          "#chance": [
            0.2,
            0.25
          ]
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "#formular": [
            {
              "src": {
                "attack": 0.5
              }
            },
            {
              "src": {
                "attack": 0.7
              }
            }
          ]
        },
        {
          "type": "setTargetMutex",
          "mutex": "revenge",
          "count": 1
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 279,
    "label": L("dic_skill_279_label"), //pk寒冰箭
    "icon": "skill-mds1.png",
    "desc": L("dic_skill_279_desc"), //对场上多个怪物造成伤害。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 4
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "#formular": [
            {
              "src": {
                "attack": 0.5
              }
            },
            {
              "src": {
                "attack": 0.6
              }
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 65,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.5
        }
      ]
    }
  },
  {
    "skillId": 280,
    "label": L("dic_skill_280_label"), //pk魔力漩涡
    "icon": "skill-mds2.png",
    "desc": L("dic_skill_280_desc"), //场上敌人越多,魔导师的攻击力也随之增强。
    "slotId": 1,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onMonsterShow"
        },
        {
          "type": "event",
          "event": "onShow"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "installAction": [
        {
          "type": "installSpell",
          "spell": 282,
          "#level": [
            1,
            2
          ]
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 69,
          "act": "target"
        },
        {
          "type": "removeSpell",
          "spell": 281
        },
        {
          "type": "installSpell",
          "spell": 281,
          "#level": [
            1,
            2
          ]
        }
      ]
    }
  },
  {
    "skillId": 281,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                func:function(env,source,target,cons) {
                  return env.visibleMonsterCount*source.attack*0.03
                }
              }
            },
            {
              "attack": {
                func:function(env,source,target,cons) {
                  return env.visibleMonsterCount*source.attack*0.05
                }
              }
            }
		  ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff"
    }
  },
  {
    "skillId": 282,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "removeSpell",
          "spell": 281
        },
        {
          "type": "installSpell",
          "spell": 281,
          "#level": [
            1,
            2
          ]
        }
      ]
    }
  },
  {
    "skillId": 283,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "originAttack": -0.03
                }
              }
            },
            {
              "attack": {
                "src": {
                  "originAttack": -0.05
                }
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "Self"
      },
      "availableCondition": [
        {
          "type": "event",
          "event": "onBeginBattleTurn",
          "eventCount": 9999
        }
      ],
      "buffType": "AttackBuff"
    }
  },
  {
    "skillId": 284,
    "label": L("dic_skill_284_label"), //pk元素崩塌
    "icon": "skill-mds4.png",
    "desc": L("dic_skill_284_desc"), //提升暴击伤害。
    "slotId": 3,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": [
            {
              "src": {
                "attack": 2.3
              }
            },
            {
              "src": {
                "attack": 2.7
              }
            }
          ]
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 285,
    "label": L("dic_skill_285_label"), //pk祈祷
    "icon": "skill-dzj1.png",
    "desc": L("dic_skill_285_desc"), //群体治疗。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 47,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.1
              }
            },
            {
              "src": {
                "accuracy": 0.15
              }
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 286,
    "label": L("dic_skill_286_label"), //pk狂热
    "icon": "skill-dzj2.png",
    "desc": L("dic_skill_286_desc"), //当主教击杀一个单位时,速度与攻击提升。
    "slotId": 1,
    "config": {
      "basic": {
        "spellAction": 1,
        "targetEffect": 71,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 8,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "installSpell",
          "spell": 287
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      }
    }
  },
  {
    "skillId": 287,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": 0.3
                }
              },
              "speed": {
                "src": {
                  "c": 10
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 0.4
                }
              },
              "speed": {
                "src": {
                  "c": 15
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onBeginBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 288,
    "label": L("dic_skill_288_label"), //pk放逐
    "icon": "skill-dzj4.png",
    "desc": L("dic_skill_288_desc"), //攻击牧师的敌人有几率减少攻击力 持续一定回合。
    "slotId": 3,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "fangzhu"
        },
        {
          "type": "chance",
          "chance": 0.15
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 77,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 67,
          "act": "target"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 212
        },
        {
          "type": "setTargetMutex",
          "mutex": "fangzhu",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 289,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": -0.2
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": -0.3
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "#eventCount": [
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 290,
    "label": L("dic_skill_290_label"), //混乱攻击
    "config": {
      "basic": {
        "targetEffect": 17,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 291
        }
      ]
    }
  },
  {
    "skillId": 291,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "buffType": "RoleDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 292,
    "label": L("dic_skill_292_label"), //概率传送2
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "chance",
          "chance": 0.6
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 21,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 293,
    "label": L("dic_skill_293_label"), //恐惧
    "desc": L("dic_skill_293_desc"), //攻击者陷入恐惧状态，大幅削减命中与闪避
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "chance",
          "chance": 0.6
        },
        {
          "type": "alive"
        },
        {
          "type": "targetMutex",
          "mutex": "fear"
        }
      ],
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "kj",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 81,
          "act": "target"
        },
        {
          "type": "installSpell",
          "spell": 294
        },
        {
          "type": "setTargetMutex",
          "mutex": "fear"
        }
      ]
    }
  },
  {
    "skillId": 294,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": -0.5
              }
            }
          }
        },
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "reactivity": -0.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 295,
    "label": L("dic_skill_295_label"), //传送3
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "alive"
        },
        {
          "type": "chance",
          "chance": 0.5
        },
        {
          "type": "visible"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 21,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 296,
    "label": L("dic_skill_296_label"), //毒箭
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalRangDamage"
        },
        {
          "type": "chance",
          "chance": 0.5
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 297
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        }
      ]
    }
  },
  {
    "skillId": 297,
    "config": {
      "basic": {
        "buffEffect": 36
      },
      "action": [
        {
          "type": "damage",
          "damageType": "poison",
          "formular": {
            "src": {
              "health": 0.1
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "HealthDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 298,
    "label": L("dic_skill_298_label"), //狂暴状态
    "desc": L("dic_skill_298_desc"), //大幅提升伤害与暴击，命中降低
    "config": {
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.2
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "playAction",
          "motion": "kb",
          "pos": "self"
        },
        {
          "type": "installSpell",
          "spell": 299
        }
      ]
    }
  },
  {
    "skillId": 299,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": 1
              }
            }
          }
        },
        {
          "type": "setProperty",
          "modifications": {
            "critical": {
              "src": {
                "critical": 1
              }
            }
          }
        },
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": -0.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 300,
    "label": L("dic_skill_300_label"), //大地一击
    "desc": L("dic_skill_300_desc"), //对全体造成伤害
    "config": {
      "basic": {
        "spellAction": "ddyj"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        },
        {
          "type": "visible"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "formular": {
            "src": {
              "attack": 1
            }
          },
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 301,
    "label": L("dic_skill_301_label"), //强力一击
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 302
        }
      ]
    }
  },
  {
    "skillId": 302,
    "config": {
      "basic": {
        "buffEffect": 78
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        }
      ],
      "buffType": "RoleDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 303,
    "label": L("dic_skill_303_label"), //自然之力
    "desc": L("dic_skill_303_desc"), //恢复生命值
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        },
        {
          "type": "visible"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "zrzl",
          "pos": "self"
        },
        {
          "type": "heal",
          "formular": {
            "src": {
              "accuracy": 0.5
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 304,
    "label": L("dic_skill_304_label"), //连弩连击
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        },
        {
          "type": "chance",
          "chance": 0.8
        },
        {
          "type": "targetMutex",
          "mutex": "range"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "rangeAttack",
          "hurtDelay": 0.6,
          "effDelay": 0.3,
          "effect": 50
        },
        {
          "type": "delay",
          "delay": 0.5
        },
        {
          "type": "castSpell",
          "spell": 305
        },
        {
          "type": "castSpell",
          "spell": 272
        }
      ]
    }
  },
  {
    "skillId": 305,
    "config": {
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "rangeAttack",
          "hurtDelay": 0.6,
          "effDelay": 0.3,
          "effect": 50
        }
      ]
    }
  },
  {
    "skillId": 306,
    "label": L("dic_skill_306_label"), //怪物炎甲
    "desc": L("dic_skill_306_desc"), //伤害反弹
    "slotId": 2,
    "config": {
      "basic": {
        "spellEffect": 32,
        "targetEffect": 10,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "formular": {
            "src": {
              "attack": 0.5
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 307,
    "label": L("dic_skill_307_label"), //燃烧伤害
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 308
        },
        {
          "type": "playEffect",
          "effect": 36,
          "pos": "target",
          "delay": 2
        }
      ]
    }
  },
  {
    "skillId": 308,
    "config": {
      "basic": {
        "buffEffect": 36
      },
      "action": [
        {
          "type": "damage",
          "damageType": "poison",
          "formular": {
            "src": {
              "health": 0.1
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "HealthDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 309,
    "label": L("dic_skill_309_label"), //三段攻势1
    "desc": L("dic_skill_309_desc"), //造成单体高伤害
    "config": {
      "basic": {
        "targetEffect": 7,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTarget"
        },
        {
          "type": "chance",
          "chance": 0.15
        }
      ],
      "targetSelection": {
        "pool": "target"
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "src": {
              "attack": 2.5
            }
          }
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 310,
    "label": L("dic_skill_310_label"), //三段攻势2
    "desc": L("dic_skill_310_desc"), //对全体造成伤害
    "config": {
      "basic": {
        "targetEffect": 7,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTarget"
        },
        {
          "type": "chance",
          "chance": 0.15
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "count",
            "count": 3
          }
        ]
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "damage",
          "damageType": "Physical",
          "isRange": true,
          "formular": {
            "src": {
              "attack": 1
            }
          }
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 311,
    "label": L("dic_skill_311_label"), //熔岩喷射
    "desc": L("dic_skill_311_desc"), //从地底召唤出熔岩，对全屏造成多段伤害
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        },
        {
          "type": "visible"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "formular": {
            "src": {
              "attack": 1
            }
          },
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8
        },
        {
          "type": "playEffect",
          "effect": 65,
          "pos": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 312,
    "label": L("dic_skill_312_label"), //恶魔爆发
    "desc": L("dic_skill_312_desc"), //召唤数个小火魔，n回合后，火魔进行全屏爆炸，伤害叠加。
    "config": {
      "basic": {
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        },
        {
          "type": "delay",
          "delay": 1
        },
        {
          "type": "heal",
          "formular": {
            "c": 300
          }
        },
        {
          "type": "createMonster",
          "objectCount": 3,
          "effect": 21,
          "randomPos": true,
          "monsterID": 214
        }
      ]
    }
  },
  {
    "skillId": 313,
    "label": L("dic_skill_313_label"), //火魔自爆
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 6
        },
        {
          "type": "visible"
        },
        {
          "type": "event",
          "event": "onTurnEnd"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "formular": {
            "src": {
              "strong": 0.5
            }
          }
        },
        {
          "type": "playEffect"
        },
        {
          "type": "delay"
        }
      ]
    }
  },
  {
    "skillId": 314,
    "label": L("dic_skill_314_label"), //腐蚀之刃
    "config": {
      "basic": {
        "targetEffect": 17,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "tremble",
          "delay": 0.3,
          "range": 10,
          "time": 0.1,
          "act": "target"
        },
        {
          "type": "installSpell",
          "spell": 315
        },
        {
          "type": "installSpell",
          "spell": 316
        }
      ]
    }
  },
  {
    "skillId": 315,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": -0.2
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 3
        }
      ]
    }
  },
  {
    "skillId": 316,
    "config": {
      "action": [
        {
          "type": "damage",
          "damageType": "Bleed",
          "formular": {
            "src": {
              "c": 20
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "HealthDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "event",
          "event": "onMoveTurnEnd"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ]
    }
  },
  {
    "skillId": 317,
    "label": L("dic_skill_317_label"), //堕落之力
    "desc": L("dic_skill_317_desc"), //反击时进行高速攻击，造成强力伤害
    "slotId": 2,
    "config": {
      "basic": {
        "spellEffect": 32,
        "targetEffect": 10,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "formular": {
            "src": {
              "attack": 1.5
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 318,
    "label": L("dic_skill_318_label"), //死亡凝视
    "desc": L("dic_skill_318_desc"), //降低敌方全体攻击力与命中
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        },
        {
          "type": "visible"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 319
        }
      ]
    }
  },
  {
    "skillId": 319,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": -0.5
              }
            }
          }
        },
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": -0.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 320,
    "label": L("dic_skill_320_label"), //消亡重锤
    "desc": L("dic_skill_320_desc"), //清除玩家全体buff
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        },
        {
          "type": "visible"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "clearBuff",
          "delay": 1.8
        },
        {
          "type": "playEffect",
          "effect": 41,
          "pos": "target",
          "delay": 1.8
        }
      ]
    }
  },
  {
    "skillId": 321,
    "label": L("dic_skill_321_label"), //宗师盾墙
    "config": {
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "targetMutex",
          "mutex": "zs"
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 322
        },
        {
          "type": "playAction",
          "motion": "1",
          "pos": "self"
        },
        {
          "type": "setMyMutex",
          "mutex": "zs",
          "count": 1
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 322,
    "slotId": -1,
    "config": {
      "basic": {
        "buffEffect": 42
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "alive"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 3
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        },
        {
          "type": "playAction",
          "motion": "gd",
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 323,
    "label": L("dic_skill_323_label"), //宗师闪电
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 5,
          "reset": true
        },
        {
          "type": "targetMutex",
          "mutex": "zs"
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "formular": {
            "src": {
              "attack": 1
            }
          }
        },
        {
          "type": "playAction",
          "motion": "1",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 44,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 0,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "setMyMutex",
          "mutex": "zs",
          "count": 1
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 324,
    "label": L("dic_skill_324_label"), //宗师炎甲
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.3
        }
      ],
      "action": [
        {
          "type": "playAction",
          "motion": "yj",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 10,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "formular": {
            "src": {
              "attack": 0.3
            },
            "c": 10
          }
        }
      ],
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      }
    }
  },
  {
    "skillId": 325,
    "label": L("dic_skill_325_label"), //宗师治愈
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 47,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 8,
          "reset": true
        },
        {
          "type": "targetMutex",
          "mutex": "zs"
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "formular": {
            "src": {
              "accuracy": 0.4
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "zs",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 326,
    "label": L("dic_skill_326_label"), //宗师救赎
    "config": {
      "basic": {
        "spellAction": 1,
        "targetEffect": 13,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 8,
          "reset": true
        },
        {
          "type": "targetMutex",
          "mutex": "zs"
        },
        {
          "type": "chance",
          "chance": 0.3
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 4,
          "act": "self"
        },
        {
          "type": "setMyMutex",
          "mutex": "zs",
          "count": 1
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "delay",
          "delay": 0.4
        },
        {
          "type": "installSpell",
          "spell": 327
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      }
    }
  },
  {
    "skillId": 327,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": [
            {
              "attack": {
                "src": {
                  "attack": 0.5
                },
                "c": 15
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onBeginBattleTurn",
          "eventCount": 1
        }
      ]
    }
  },
  {
    "skillId": 328,
    "label": L("dic_skill_328_label"), //BOSS传送
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeEndBattleTurn"
        },
        {
          "type": "chance",
          "chance": 0.45
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 20,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "randTeleport"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 21,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 329,
    "label": L("dic_skill_329_label"), //卡塔召唤
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        },
        {
          "type": "dialog",
          "dialogId": 74
        },
        {
          "type": "delay",
          "delay": 1
        },
        {
          "type": "heal",
          "formular": {
            "c": 300
          }
        },
        {
          "type": "createMonster",
          "objectCount": 1,
          "effect": 21,
          "randomPos": true,
          "monsterID": 247
        },
        {
          "type": "createMonster",
          "objectCount": 1,
          "effect": 21,
          "randomPos": true,
          "monsterID": 248
        },
        {
          "type": "createMonster",
          "objectCount": 1,
          "effect": 21,
          "randomPos": true,
          "monsterID": 249
        }
      ]
    }
  },
  {
    "skillId": 330,
    "label": L("dic_skill_330_label"), //守护卡塔
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnBegin"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "role-id",
            "roleID": 246
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 331
        },
        {
          "type": "installSpell",
          "spell": 162
        },
        {
          "type": "setTargetMutex",
          "mutex": "reinforce",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 331,
    "config": {
      "basic": {
        "buffEffect": 75,
        "spellEffect": 46,
        "spellDelay": 0.3
      },
      "action": [
        {
          "type": "ignoreHurt"
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "RoleBuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        }
      ]
    }
  },
  {
    "skillId": 332,
    "label": L("dic_skill_332_label"), //吸血鬼吸血
    "config": {
      "basic": {
        "targetEffect": 74
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.5
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "ignoreAttack"
        },
        {
          "type": "playAction",
          "motion": "xx",
          "pos": "self"
        },
        {
          "type": "heal",
          "formular": {
            "environment": {
              "damage": 1
            }
          },
          "target": {
            "pool": "self",
            "filter": [
              {
                "type": "alive"
              },
              {
                "type": "visible"
              }
            ]
          }
        }
      ]
    }
  },
  {
    "skillId": 333,
    "label": L("dic_skill_333_label"), //宗师被击倒对话
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBeDeathStrike"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "dialog",
          "dialogId": 71
        }
      ]
    }
  },
  {
    "skillId": 334,
    "label": L("dic_skill_334_label"), //卡塔登场
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onShow"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "dialog",
          "dialogId": 73
        }
      ]
    }
  },
  {
    "skillId": 335,
    "label": L("dic_skill_335_label"), //鳄鱼怒击
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onCriticalDamage"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "ignoreAttack"
        },
        {
          "type": "playAction",
          "motion": 1,
          "pos": "self"
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "src": {
              "attack": 2.5
            }
          }
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 336,
    "label": L("dic_skill_336_label"), //鳄鱼格挡
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0.8
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 337,
    "label": L("dic_skill_337_label"), //盾墙（队友）
    "icon": "skill-warrior1.png",
    "desc": L("dic_skill_337_desc"), //用坚实的盾牌来格挡攻击，抵消伤害，格挡次数随等级增加。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 45,
        "targetEffect": 1,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 10,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.5
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 338,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 338,
    "slotId": -1,
    "config": {
      "basic": {
        "buffEffect": 42,
        "spellAction": 4,
        "spellEffect": 46,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "alive"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "#count": [
            1,
            2,
            3
          ]
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        },
        {
          "type": "setMyMutex",
          "mutex": "reinforce",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 339,
    "label": L("dic_skill_339_label"), //闪电（队友）
    "icon": "skill-mage1.png",
    "desc": L("dic_skill_339_desc"), //召唤闪电，对一名敌人造成伤害，伤害值与法师攻击力相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 10,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.5
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "#formular": [
            {
              "src": {
                "attack": 0.8
              }
            },
            {
              "src": {
                "attack": 1
              }
            },
            {
              "src": {
                "attack": 1.2
              }
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 44,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 0,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 340,
    "label": L("dic_skill_340_label"), //治愈（队友）
    "icon": "skill-priest1.png",
    "desc": L("dic_skill_340_desc"), //对队伍中生命值最低的成员进行回复，回复值与命中值相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 47,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 10,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.5
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.15
              },
              "c": 5
            },
            {
              "src": {
                "accuracy": 0.15
              },
              "c": 10
            },
            {
              "src": {
                "accuracy": 0.15
              },
              "c": 20
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 341,
    "label": L("dic_skill_341_label"), //怒之力(队友)
    "icon": "skill-kzs1.png",
    "desc": L("dic_skill_341_desc"), //狂战士进入狂怒状态，降低命中1回合，提高攻击力2回合。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 66,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 10,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.5
        },
        {
          "type": "alive"
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 342,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "installSpell",
          "spell": 343
        }
      ]
    }
  },
  {
    "skillId": 342,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": 1
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 1.5
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": 2.5
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 343,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": -0.95
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "DeBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 1
        }
      ]
    }
  },
  {
    "skillId": 344,
    "label": L("dic_skill_344_label"), //寒冰箭(队友)
    "icon": "skill-mds1.png",
    "desc": L("dic_skill_344_desc"), //魔导师释放寒冰箭对场上多个敌人造成伤害，伤害值与攻击力相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 10,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.5
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "count": 4
          }
        ]
      },
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.8,
          "#formular": [
            {
              "src": {
                "attack": 0.5
              }
            },
            {
              "src": {
                "attack": 0.6
              }
            },
            {
              "src": {
                "attack": 0.75
              }
            }
          ]
        },
        {
          "type": "playEffect",
          "effect": 65,
          "act": "target",
          "delay": 0.6
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.5
        }
      ]
    }
  },
  {
    "skillId": 345,
    "label": L("dic_skill_345_label"), //祈祷(队友)
    "icon": "skill-dzj1.png",
    "desc": L("dic_skill_345_desc"), //大主教对队伍中全体成员的生命值进行回复，回复值与命中值相关。
    "slotId": 0,
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 47,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 10,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.5
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.1
              }
            },
            {
              "src": {
                "accuracy": 0.15
              }
            },
            {
              "src": {
                "accuracy": 0.25
              }
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 346,
    "label": L("dic_skill_346_label"), //巨石护体
    "config": {
      "triggerCondition": [
        {
          "type": "property",
          "property": "health",
          "to": 1500
        },
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "myMutex",
          "mutex": "hugeRock"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "playAction",
          "motion": "jsht",
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "setMyMutex",
          "mutex": "hugeRock",
          "count": 9999
        },
        {
          "type": "installSpell",
          "spell": 347
        }
      ]
    }
  },
  {
    "skillId": 347,
    "config": {
      "basic": {
        "buffEffect": 83,
        "spellEffect": 1,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 6
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 348,
    "label": L("dic_skill_348_label"), //震荡波
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 3,
            "length": 2,
            "startDistance": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            },
            "anchorDirPos": {
              "pool": "objects",
              "filter": [
                {
                  "type": "alive"
                },
                {
                  "type": "visible"
                },
                {
                  "type": "target-faction-with-flag",
                  "flag": "attackable"
                },
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 79,
          "pos": "target"
        },
        {
          "type": "delay"
        },
        {
          "type": "playAction",
          "motion": "zdb",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 80,
          "pos": "self"
        },
        {
          "type": "installSpell",
          "spell": 349
        }
      ]
    }
  },
  {
    "skillId": 349,
    "config": {
      "installAction": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "formular": {
            "c": 300
          }
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 350,
    "label": L("dic_skill_350_label"), //恶灵护体
    "config": {
      "basic": {
        "spellAction": "elht"
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "property",
          "property": "health",
          "to": 1500
        },
        {
          "type": "event",
          "event": "onBattleTurnEnd"
        },
        {
          "type": "myMutex",
          "mutex": "Ahriman"
        }
      ],
      "action": [
        {
          "type": "setMyMutex",
          "mutex": "Ahriman",
          "count": 9999
        },
        {
          "type": "installSpell",
          "spell": 351
        }
      ]
    }
  },
  {
    "skillId": 351,
    "config": {
      "basic": {
        "buffEffect": 82
      },
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "attack": {
              "src": {
                "attack": 1
              }
            }
          }
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 9999
        }
      ],
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 1
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "heal",
          "formular": {
            "c": 300
          }
        },
        {
          "type": "playEffect",
          "effect": 48,
          "pos": "self"
        }
      ]
    }
  },
  {
    "skillId": 352,
    "activeSpell": true,
    "label": L("dic_skill_352_label"), //加特林扫射
    "icon": "skill-ironsuit1.png",
    "desc": L("dic_skill_352_desc"), //由肩部的加特林机枪进行扫射，造成范围伤害。
    "slotId": 100,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "startDistance": 0,
            "anchorPos": {
              "pool": "select-block",
              "filter": [
                {
                  "type": "anchor",
                  "shape": 2,
                  "length": 1,
                  "startDistance": 1,
                  "anchorPos": {
                    "pool": "self",
                    "filter": [
                      {
                        "type": "count",
                        "count": 1
                      }
                    ]
                  }
                },
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "irongunfire",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 93,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 2.4,
          "range": 5,
          "time": 0.5
        },
        {
          "type": "shock",
          "delay": 2.9,
          "range": 5,
          "time": 0.5
        },
        {
          "type": "shock",
          "delay": 3.4,
          "range": 5,
          "time": 0.5
        },
        {
          "type": "shock",
          "delay": 3.9,
          "range": 5,
          "time": 0.5
        },
        {
          "type": "installSpell",
          "spell": 353,
          "delay": {
            "base": 2.4,
            "range": 1.5
          }
        }
      ]
    }
  },
  {
    "skillId": 353,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 94,
          "pos": "self"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.2,
          "formular": {
            func:function(env,source,target,cons) {
              return env.battleForce*0.05+100
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 354,
    "activeSpell": true,
    "label": L("dic_skill_354_label"), //脉冲光束炮
    "icon": "skill-ironsuit2.png",
    "desc": L("dic_skill_354_desc"), //由胸口射出高能光束炮，对指定位置敌人造成毁灭打击。
    "slotId": 101,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 25
        }
      ],
      "targetSelection": {
        "pool": "select-object",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 2,
            "startDistance": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "ironrayfire",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 95,
          "act": "self"
        },
        {
          "type": "shock",
          "delay": 1.86,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "playEffect",
          "effect": 96,
          "pos": "target",
          "delay": 0.2
        },
        {
          "type": "installSpell",
          "spell": 355,
          "delay": 3.3
        },
        {
          "type": "blink",
          "delay": 3.3,
          "time": 0.2
        },
        {
          "type": "shock",
          "delay": 3.3,
          "range": 5,
          "time": 0.5
        }
      ]
    }
  },
  {
    "skillId": 355,
    "config": {
      "installAction": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "formular": {
            func:function(env,source,target,cons) {
              return env.battleForce*0.06+400
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 356,
    "activeSpell": true,
    "label": L("dic_skill_356_label"), //战技
    "icon": "skill-warrior1.png",
    "labelIcon": "warriorsk1.png",
    "desc": L("dic_skill_356_desc"), //对目标实施多段攻击，攻击段数与等级挂钩。
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 84,
          "act": "self"
        },
        {
          "type": "playAction",
          "motion": 2,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 357,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 357,
    "slotId": -1,
    "config": {
      "basic": {
        "buffEffect": 86,
        "spellEffect": 85
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTarget"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": [
            {
              "src": {
                "attack": 1.5
              }
            },
            {
              "src": {
                "attack": 2
              }
            },
            {
              "src": {
                "attack": 2.5
              }
            }
          ]
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 358,
    "activeSpell": true,
    "label": L("dic_skill_358_label"), //击晕
    "icon": "skill-warrior2.png",
    "labelIcon": "warriorsk2.png",
    "desc": L("dic_skill_358_desc"), //对怪物进行攻击，攻击力不高但会使其晕厥。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 87,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 359,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 359,
    "slotId": -1,
    "config": {
      "basic": {
        "buffEffect": 89
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTarget"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 360,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 360,
    "config": {
      "basic": {
        "buffEffect": 88
      },
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "accuracy": {
              "src": {
                "accuracy": -2.0
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "#eventCount": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 361,
    "activeSpell": true,
    "label": L("dic_skill_361_label"), //回旋斩
    "icon": "skill-warrior3.png",
    "labelIcon": "warriorsk3.png",
    "desc": L("dic_skill_361_desc"), //对周围范围敌人造成伤害。
    "slotId": 4,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 15
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 0,
            "startDistance": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 134,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 90,
          "act": "self"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              "src": {
                "attack": 0.8
              }
            },
            {
              "src": {
                "attack": 1
              }
            },
            {
              "src": {
                "attack": 1.5
              }
            }
          ]
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 362,
    "config": {
      "installAction": [
        {
          "type": "playAction",
          "motion": "wounded",
          "pos": "self",
          "delay": 2.4
        },
        {
          "type": "playAction",
          "motion": "wounded",
          "pos": "self",
          "delay": 2.9
        },
        {
          "type": "playAction",
          "motion": "wounded",
          "pos": "self",
          "delay": 3.4
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 363,
    "activeSpell": true,
    "label": L("dic_skill_363_label"), //神圣护盾
    "icon": "skill-warrior4.png",
    "labelIcon": "warriorsk4.png",
    "desc": L("dic_skill_363_desc"), //对我方全体施加无敌护盾。
    "slotId": 5,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 30
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": 2,
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 91,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 364,
          "delay": 0.3,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 364,
    "config": {
      "basic": {
        "buffEffect": 92
      },
      "action": [
        {
          "type": "ignoreHurt"
        },
        {
          "type": "playEffect",
          "delay": 0.3,
          "effect": 1,
          "pos": "self"
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "c": 0
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "RoleBuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "targetMutex",
          "mutex": "reinforce"
        },
        {
          "type": "targetMutex",
          "mutex": "lightOfMiracel"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "#count": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 365,
    "activeSpell": true,
    "label": L("dic_skill_365_label"), //死亡龙卷
    "icon": "skill-mage3.png",
    "labelIcon": "magesk3.png",
    "desc": L("dic_skill_365_desc"), //对指定范围造成伤害。
    "slotId": 4,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 15
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "startDistance": 0,
            "anchorPos": {
              "pool": "select-block",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 135,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playAction",
          "motion": "2",
          "pos": "self"
        },
        {
          "type": "installSpell",
          "spell": 366,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 366,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 97,
          "pos": "self"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*0.7
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*0.85
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*1.1
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 367,
    "activeSpell": true,
    "label": L("dic_skill_367_label"), //陨石召唤
    "icon": "skill-mage4.png",
    "labelIcon": "magesk4.png",
    "desc": L("dic_skill_367_desc"), //召唤数波陨石对场上敌人进行伤害，位置随机。
    "slotId": 5,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 30
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 2,
            "startDistance": 0,
            "direction": 9,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "#count": [
              2,
              3,
              4
            ]
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 136,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 368,
          "delay": {
            "base": 0,
            "range": 1
          },
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "installSpell",
          "spell": 376,
          "#level": [
            1,
            2,
            3
          ],
          "target": {
            "pool": "self",
            "filter": [
              {
                "type": "alive"
              },
              {
                "type": "visible"
              }
            ]
          }
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.5
        },
        {
          "type": "delay"
        },
        {
          "type": "castSpell",
          "spell": 376,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "delay"
        },
        {
          "type": "castSpell",
          "spell": 376,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 368,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 98,
          "pos": "self"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*1.2
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*1.5
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*2
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 369,
    "activeSpell": true,
    "label": L("dic_skill_369_label"), //神圣一击
    "icon": "skill-priest2.png",
    "labelIcon": "priestsk2.png",
    "desc": L("dic_skill_369_desc"), //攻击时能够召唤出十字架造成额外伤害。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 99,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 370,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 370,
    "slotId": -1,
    "config": {
      "basic": {
        "buffEffect": 100
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTarget"
        }
      ],
      "targetSelection": {
        "pool": "target"
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "playEffect",
          "effect": 101,
          "pos": "target"
        },
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": [
            {
              "src": {
                "attack": 1.4
              }
            },
            {
              "src": {
                "attack": 1.7
              }
            },
            {
              "src": {
                "attack": 2
              }
            }
          ]
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 371,
    "activeSpell": true,
    "label": L("dic_skill_371_label"), //传道
    "icon": "skill-priest3.png",
    "labelIcon": "priestsk3.png",
    "desc": L("dic_skill_371_desc"), //降低所选范围内敌人攻击力。
    "slotId": 4,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 15
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 1,
            "startDistance": 0,
            "anchorPos": {
              "pool": "select-block",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 135,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playAction",
          "motion": "2",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 102,
          "pos": "playerChoice"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 372,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 372,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "#modifications": [
            {
              "attack": {
                "src": {
                  "attack": -0.1
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": -0.2
                }
              }
            },
            {
              "attack": {
                "src": {
                  "attack": -0.5
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 373,
    "activeSpell": true,
    "label": L("dic_skill_373_label"), //神圣突袭
    "icon": "skill-priest4.png",
    "labelIcon": "priestsk4.png",
    "desc": L("dic_skill_373_desc"), //召唤圣光随机出现于场上，击中我方可补血，击中地方造成伤害。
    "slotId": 5,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 25
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 2,
            "startDistance": 0,
            "direction": 9,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "#count": [
              3,
              4,
              5
            ]
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 135,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 374,
          "delay": {
            "base": 0,
            "range": 1
          },
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "installSpell",
          "spell": 375,
          "delay": {
            "base": 0,
            "range": 1
          },
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "playEffect",
          "effect": 103,
          "pos": "target"
        },
        {
          "type": "installSpell",
          "spell": 377,
          "#level": [
            1,
            2,
            3
          ],
          "target": {
            "pool": "self",
            "filter": [
              {
                "type": "alive"
              },
              {
                "type": "visible"
              }
            ]
          }
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.5
        },
        {
          "type": "delay"
        },
        {
          "type": "castSpell",
          "spell": 377,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 374,
    "config": {
      "installAction": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*0.8
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*1.2
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 375,
    "config": {
      "installAction": [
        {
          "type": "heal",
          "#formular": [
            {
              func:function(env,source,target,cons) {
                return env.battleForce/18.5*0.15+5
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce/18.5*0.2+10
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce/18.5*0.25+20
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "hero"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 376,
    "label": L("dic_skill_367_label"), //陨石召唤第二波
    "config": {
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 2,
            "startDistance": 0,
            "direction": 9,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "#count": [
              2,
              3,
              4
            ]
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 368,
          "delay": {
            "base": 0,
            "range": 1
          },
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.5
        }
      ]
    }
  },
  {
    "skillId": 377,
    "label": L("dic_skill_373_label"), //神圣突袭第二波
    "config": {
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 2,
            "startDistance": 0,
            "direction": 9,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "#count": [
              3,
              4,
              5
            ]
          }
        ]
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 374,
          "delay": {
            "base": 0,
            "range": 1
          },
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "installSpell",
          "spell": 375,
          "delay": {
            "base": 0,
            "range": 1
          },
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "playEffect",
          "effect": 103,
          "pos": "target"
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.5
        }
      ]
    }
  },
  {
    "skillId": 378,
    "activeSpell": true,
    "label": L("dic_skill_7_label"), //炎甲
    "icon": "skill-mage2.png",
    "labelIcon": "magesk2.png",
    "desc": L("dic_skill_7_desc"), //法师使用一层火焰魔法保护自己，当受到攻击时，对敌人造成伤害，伤害值与攻击力有关。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 104,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 379,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 379,
    "config": {
      "basic": {
        "buffEffect": 105,
        "spellEffect": 32,
        "targetEffect": 10,
        "spellDelay": 0.3,
        "targetDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "#count": [
              1,
              2,
              3
          ]
        }
      ],
      "action": [
        {
          "type": "damage",
          "damageType": "Spell",
          "#formular": [
            {
              "src": {
                "attack": 0.2
              },
              "c": 2
            },
            {
              "src": {
                "attack": 0.4
              },
              "c": 10
            },
            {
              "src": {
                "attack": 0.7
              },
              "c": 15
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "source",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      }
    }
  },
  {
    "skillId": 380,
    "label": L("dic_skill_356_label"), //pk战技
    "icon": "skill-warrior1.png",
    "desc": L("dic_skill_356_desc"), //对目标实施多段攻击，攻击段数与等级挂钩。
    "slotId": 0,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "soldier"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 84,
          "act": "self"
        },
        {
          "type": "playAction",
          "motion": 2,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 357,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "setMyMutex",
          "mutex": "soldier",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 381,
    "label": L("dic_skill_358_label"), //pk击晕
    "icon": "skill-warrior2.png",
    "desc": L("dic_skill_358_desc"), //对怪物进行攻击，攻击力不高但会使其晕厥。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 87,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "soldier"
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 359,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "setMyMutex",
          "mutex": "soldier",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 382,
    "label": L("dic_skill_361_label"), //pk回旋斩
    "icon": "skill-warrior3.png",
    "desc": L("dic_skill_361_desc"), //对周围范围敌人造成伤害。
    "slotId": 4,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "soldier"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 0,
            "startDistance": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 134,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 90,
          "act": "self"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              "src": {
                "attack": 0.8
              }
            },
            {
              "src": {
                "attack": 1
              }
            },
            {
              "src": {
                "attack": 1.5
              }
            }
          ]
        },
        {
          "type": "setMyMutex",
          "mutex": "soldier",
          "count": 1
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 383,
    "label": L("dic_skill_363_label"), //pk神圣护盾
    "icon": "skill-warrior4.png",
    "desc": L("dic_skill_363_desc"), //对我方全体施加无敌护盾。
    "slotId": 5,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 4,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "soldier"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": 2,
          "pos": "self"
        },
        {
          "type": "playEffect",
          "motion": 91,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 364,
          "delay": 0.3,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "setMyMutex",
          "mutex": "soldier",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 384,
    "label": L("dic_skill_7_label"), //pk炎甲
    "icon": "skill-mage2.png",
    "desc": L("dic_skill_7_desc"), //法师使用一层火焰魔法保护自己，当受到攻击时，对敌人造成伤害，伤害值与攻击力有关。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 104,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "self"
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "master"
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 379,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        },
        {
          "type": "setMyMutex",
          "mutex": "master",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 385,
    "label": L("dic_skill_365_label"), //pk死亡龙卷
    "icon": "skill-mage3.png",
    "desc": L("dic_skill_365_desc"), //对指定范围造成伤害。
    "slotId": 4,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "master"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "startDistance": 0,
            "anchorPos": {
              "pool": "objects",
              "filter": [
                {
                  "type": "alive"
                },
                {
                  "type": "visible"
                },
                {
                  "type": "target-faction-with-flag",
                  "flag": "attackable"
                },
                {
                  "type": "shuffle"
                },
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 135,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playAction",
          "motion": "2",
          "pos": "self"
        },
        {
          "type": "installSpell",
          "spell": 366,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "setMyMutex",
          "mutex": "master",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 386,
    "label": L("dic_skill_367_label"), //pk陨石召唤
    "icon": "skill-mage4.png",
    "desc": L("dic_skill_367_desc"), //召唤数波陨石对场上敌人进行伤害，位置随机。
    "slotId": 5,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 4,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "master"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 2,
            "startDistance": 0,
            "direction": 9,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "#count": [
              2,
              3,
              4
            ]
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 135,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 368,
          "delay": {
            "base": 0,
            "range": 1
          },
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "installSpell",
          "spell": 376,
          "#level": [
            1,
            2,
            3
          ],
          "target": {
            "pool": "self",
            "filter": [
              {
                "type": "alive"
              },
              {
                "type": "visible"
              }
            ]
          }
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.5
        },
        {
          "type": "delay"
        },
        {
          "type": "castSpell",
          "spell": 376,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "delay"
        },
        {
          "type": "castSpell",
          "spell": 376,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "setMyMutex",
          "mutex": "master",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 387,
    "label": L("dic_skill_369_label"), //pk神圣一击
    "icon": "skill-priest2.png",
    "desc": L("dic_skill_369_desc"), //攻击时能够召唤出十字架造成额外伤害。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 99,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "minister"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "installSpell",
          "spell": 370,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "setMyMutex",
          "mutex": "minister",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 388,
    "label": L("dic_skill_371_label"), //pk传道
    "icon": "skill-priest3.png",
    "desc": L("dic_skill_371_desc"), //降低所选范围内敌人攻击力。
    "slotId": 4,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "minister"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 1,
            "startDistance": 0,
            "anchorPos": {
              "pool": "select-block",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 135,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playAction",
          "motion": "2",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 102,
          "pos": "playerChoice"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 372,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "setMyMutex",
          "mutex": "minister",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 389,
    "label": L("dic_skill_373_label"), //pk神圣突袭
    "icon": "skill-priest4.png",
    "desc": L("dic_skill_373_desc"), //召唤圣光随机出现于场上，击中我方可补血，击中地方造成伤害。
    "slotId": 5,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 4,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        },
        {
          "type": "myMutex",
          "mutex": "minister"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 2,
            "startDistance": 0,
            "direction": 9,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "shuffle"
          },
          {
            "type": "count",
            "#count": [
              2,
              3,
              4
            ]
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 135,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 374,
          "delay": {
            "base": 0,
            "range": 1
          },
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "installSpell",
          "spell": 375,
          "delay": {
            "base": 0,
            "range": 1
          },
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "playEffect",
          "effect": 103,
          "pos": "target"
        },
        {
          "type": "installSpell",
          "spell": 377,
          "#level": [
            1,
            2,
            3
          ],
          "target": {
            "pool": "self",
            "filter": [
              {
                "type": "alive"
              },
              {
                "type": "visible"
              }
            ]
          }
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.5
        },
        {
          "type": "delay"
        },
        {
          "type": "castSpell",
          "spell": 377,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "delay"
        },
        {
          "type": "castSpell",
          "spell": 377,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "setMyMutex",
          "mutex": "minister",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 390,
    "activeSpell": true,
    "label": L("dic_skill_390_label"), //礼仪之光
    "icon": "skill-dzj2.png",
    "desc": L("dic_skill_390_desc"), //大幅度提升我方韧性、闪避和速度。
    "slotId": 100,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 20
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 106,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 391
        },
        {
          "type": "playEffect",
          "effect": 107,
          "pos": "target"
        }
      ]
    }
  },
  {
    "skillId": 391,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "strong": {
              "src": {
                "strong": 0.5
              }
            }
          }
        },
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "reactivity": 0.5
              }
            }
          }
        },
        {
          "type": "setProperty",
          "modifications": {
            "speed": {
              "src": {
                "speed": 0.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 392,
    "activeSpell": true,
    "label": L("dic_skill_390_label"), //喵喵
    "icon": "skill-dzj2.png",
    "desc": L("dic_skill_390_desc"), //大幅度提升我方闪避。
    "slotId": 100,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 20
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 108,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 393
        },
        {
          "type": "playEffect",
          "effect": 109,
          "pos": "target"
        }
      ]
    }
  },
  {
    "skillId": 393,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "reactivity": 1
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 394,
    "activeSpell": true,
    "label": L("dic_skill_390_label"), //和风
    "icon": "skill-dzj2.png",
    "desc": L("dic_skill_390_desc"), //大幅度提升我方暴击率。
    "slotId": 100,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 20
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 110,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 395
        },
        {
          "type": "playEffect",
          "effect": 111,
          "pos": "target"
        }
      ]
    }
  },
  {
    "skillId": 395,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "critical": 1
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 396,
    "label": L("dic_skill_135_label"), //护理
    "icon": "skill-priest1.png",
    "desc": L("dic_skill_135_desc"), //对自己进行回复，回复值与命中值相关。
    "slotId": 100,
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 47,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 10,
          "reset": true
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.2
              }
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 397,
    "activeSpell": true,
    "label": L("dic_skill_207_label"), //全体护理
    "icon": "skill-dzj1.png",
    "desc": L("dic_skill_207_desc"), //对队伍中全体成员的生命值进行回复，回复值与命中值相关。
    "slotId": 101,
    "config": {
      "basic": {
        "spellAction": 1,
        "spellEffect": 112,
        "targetEffect": 48,
        "spellDelay": 0.3,
        "targetDelay": 0.7
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 20
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "accuracy": 0.1
              }
            },
            {
              "src": {
                "accuracy": 0.15
              }
            },
            {
              "src": {
                "accuracy": 0.25
              }
            }
          ]
        }
      ]
    }
  },
  {
    "skillId": 398,
    "label": L("dic_skill_207_label"), //刺
    "icon": "skill-dzj1.png",
    "desc": L("dic_skill_207_desc"), //降低敌方韧性
    "slotId": 100,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 399
        },
        {
          "type": "playEffect",
          "effect": 113,
          "pos": "target"
        }
      ]
    }
  },
  {
    "skillId": 399,
    "config": {
      "action": [
        {
          "type": "setProperty",
          "modifications": {
            "strong": {
              "src": {
                "strong": -1
              }
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "RoleDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 400,
    "activeSpell": true,
    "label": L("dic_skill_356_label"), //致命一击
    "icon": "skill-warrior1.png",
    "desc": L("dic_skill_356_desc"), //对目标进行高伤害的攻击。
    "slotId": 101,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 20
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 114,
          "act": "self"
        },
        {
          "type": "playAction",
          "motion": 2,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 401,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 401,
    "slotId": -1,
    "config": {
      "basic": {
        "buffEffect": 115,
        "spellEffect": 116
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTarget"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "#formular": {
              "src": {
                "attack": 3
              }
            }
        },
        {
          "type": "blink",
          "delay": 0.3,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 402,
    "label": L("dic_skill_207_label"), //军
    "icon": "skill-dzj1.png",
    "desc": L("dic_skill_207_desc"), //降低敌方命中率
    "slotId": 100,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onPhysicalDamage"
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "alive"
        }
      ],
      "targetSelection": {
        "pool": "target",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "action": [
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 403
        },
        {
          "type": "playEffect",
          "effect": 73,
          "pos": "target"
        }
      ]
    }
  },
  {
    "skillId": 403,
    "config": {
      "action": [
        {
          "type": "setProperty",
          "modifications": {
            "strong": {
              "src": {
                "accuracy": -1
              }
            }
          }
        }
      ],
      "targetSelection": {
        "pool": "self",
        "filter": [
          {
            "type": "alive"
          }
        ]
      },
      "buffType": "RoleDebuff",
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn"
        }
      ],
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 404,
    "activeSpell": true,
    "label": L("dic_skill_390_label"), //士气提升
    "icon": "skill-dzj2.png",
    "desc": L("dic_skill_390_desc"), //提升全体攻击力。
    "slotId": 101,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 20
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 117,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 405
        },
        {
          "type": "playEffect",
          "effect": 13,
          "pos": "target"
        }
      ]
    }
  },
  {
    "skillId": 405,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "attack": 1.5
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "AttackBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 406,
    "label": L("dic_skill_207_label"), //铠甲格挡
    "icon": "skill-dzj1.png",
    "desc": L("dic_skill_207_desc"), //一定几率格挡伤害
    "slotId": 100,
    "config": {
      "basic": {
        "spellAction": 4,
        "spellEffect": 46,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "chance",
          "chance": 0.1
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 407,
    "activeSpell": true,
    "label": L("dic_skill_0_label"), //盾
    "icon": "skill-warrior1.png",
    "desc": L("dic_skill_0_desc"), //大幅降低所受伤害。
    "slotId": 101,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 118,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 20
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 408
        },
        {
          "type": "playEffect",
          "effect": 119,
          "act": "target"
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 408,
    "config": {
      "basic": {
        "buffEffect": 42,
        "spellAction": 4,
        "spellEffect": 46,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "#count": 3
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0.5
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 409,
    "label": L("dic_skill_207_label"), //忍者闪避
    "icon": "skill-dzj1.png",
    "desc": L("dic_skill_207_desc"), //一定几率回避伤害
    "slotId": 100,
    "config": {
      "basic": {
        "spellAction": 4,
        "spellEffect": 46,
        "spellDelay": 0.3
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        },
        {
          "type": "chance",
          "chance": 0.1
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "damage": 0
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 410,
    "activeSpell": true,
    "label": L("dic_skill_390_label"), //忍气
    "icon": "skill-dzj2.png",
    "desc": L("dic_skill_390_desc"), //一定回合提升暴击伤害。
    "slotId": 101,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 20
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 120,
          "pos": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 411
        },
        {
          "type": "playEffect",
          "effect": 111,
          "pos": "target"
        }
      ]
    }
  },
  {
    "skillId": 411,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications": {
            "reactivity": {
              "src": {
                "critical": 2
              }
            }
          }
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 412,
    "activeSpell": true,
    "label": L("dic_skill_390_label"), //妖精的守护
    "icon": "skill-dzj2.png",
    "desc": L("dic_skill_390_desc"), //每回合清除自身debuff。
    "slotId": 102,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEnterLevel"
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 121,
          "pos": "self"
        },
        {
          "type": "installSpell",
          "spell": 413
        }
      ]
    }
  },
  {
    "skillId": 413,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3,
          "reset": true
        },
        {
          "type": "visible"
        },
        {
          "type": "alive"
        }
      ]
    },
    "targetSelection": {
      "pool": "self"
    },
    "action": [
      {
        "type": "clearDebuff"
      }
    ]
  },
  {
    "skillId": 414,
    "label": L("dic_skill_414_label"), //战斗凯歌
    "icon": "skill-kzs6.png",
    "labelIcon": "kzssk6.png",
    "desc": L("dic_skill_414_desc"), //到新一层时，提升我方全体攻击力与暴击值一定回合。
    "slotId": 3,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onEnterLevel"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 122,
          "pos": "self"
        },
        {
          "type": "installSpell",
          "spell": 415,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 415,
    "config": {
      "installAction": [
        {
          "type": "setProperty",
          "modifications":[
            {
              "reactivity": {
                "src": {
                  "critical": 0.5
                }
              }
            },
            {
              "reactivity": {
                "src": {
                  "critical": 1
                }
              }
            },
            {
              "reactivity": {
                "src": {
                  "critical": 1.5
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "buffType": "RoleBuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 3
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 3
        }
      ]
    }
  },
  {
    "skillId": 416,
    "activeSpell": true,
    "label": L("dic_skill_416_label"), //战争践踏
    "icon": "skill-kzs3.png",
    "labelIcon": "kzssk3.png",
    "desc": L("dic_skill_416_desc"), //对周围敌人造成伤害，并降低其速度。
    "slotId": 4,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 15
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 0,
            "startDistance": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "2",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 137,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 123,
          "act": "self"
        },
        {
          "type": "installSpell",
          "spell": 417,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "installSpell",
          "spell": 418,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 417,
    "config": {
      "installAction": [
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*0.7
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*0.85
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*1.1
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 418,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 17,
          "act": "target"
        },
        {
          "type": "setProperty",
          "modifications":[
            {
              "reactivity": {
                "src": {
                  "speed": -0.5
                }
              }
            },
            {
              "reactivity": {
                "src": {
                  "speed": -1
                }
              }
            },
            {
              "reactivity": {
                "src": {
                  "speed": -1.5
                }
              }
            }
          ]
        }
      ],
      "uninstallAction": [
        {
          "type": "resetProperty"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "buffType": "RoleDebuff",
      "availableCondition": [
        {
          "type": "event",
          "event": "onEndBattleTurn",
          "eventCount": 2
        },
        {
          "type": "event",
          "event": "onBeEndBattleTurn",
          "eventCount": 2
        }
      ]
    }
  },
  {
    "skillId": 419,
    "activeSpell": true,
    "label": L("dic_skill_200_label"), //复仇之神
    "icon": "skill-kzs4.png",
    "labelIcon": "kzs4.png",
    "desc": L("dic_skill_200_desc"), //怪物攻击队友并造成伤害时，狂战士有几率立即报复攻击该生物。
    "slotId": 5,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 20
        }
      ],
      "targetSelection": {
        "pool": "self"
      },
      "action": [
        {
          "type": "playAction",
          "motion": "1",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 124,
          "act": "self"
        },
        {
          "type": "installSpell",
          "spell": 200,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 420,
    "activeSpell": true,
    "label": L("dic_skill_420_label"), //炎爆
    "icon": "skill-mds2.png",
    "labelIcon": "mdssk2.png",
    "desc": L("dic_skill_420_desc"), //魔导师将高度凝聚的火元素释放，对周围一圈进行魔法伤害。
    "slotId": 2,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 10
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 0,
            "startDistance": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 137,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 127,
          "act": "self"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              "src": {
                "attack": 0.8
              }
            },
            {
              "src": {
                "attack": 1
              }
            },
            {
              "src": {
                "attack": 1.5
              }
            }
          ]
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 421,
    "activeSpell": true,
    "label": L("dic_skill_421_label"), //闪电奥爆
    "icon": "skill-mds3.png",
    "labelIcon": "mdssk3.png",
    "desc": L("dic_skill_421_desc"), //魔导师释放闪电，对身前扇形区域进行攻击。
    "slotId": 4,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 15
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "anchor",
            "shape": 3,
            "length": 1,
            "startDistance": 0,
            "anchorPos": {
              "pool": "select-block",
              "filter": [
                {
                  "type": "anchor",
                  "shape": 2,
                  "length": 0,
                  "startDistance": 1,
                  "direction": 9,
                  "anchorPos": {
                    "pool": "self",
                    "filter": [
                      {
                        "type": "count",
                        "count": 1
                      }
                    ]
                  }
                },
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 136,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 138,
          "pos": "playerChoice"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              "src": {
                "attack": 0.8
              }
            },
            {
              "src": {
                "attack": 1
              }
            },
            {
              "src": {
                "attack": 1.5
              }
            }
          ]
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 422,
    "activeSpell": true,
    "label": L("dic_skill_422_label"), //终极闪光
    "icon": "skill-mds4.png",
    "labelIcon": "mdssk4.png",
    "desc": L("dic_skill_422_desc"), //集中魔法力量对一直线进行魔法伤害，攻击力随着击中敌人数量进行逐步衰减。
    "slotId": 5,
    "config": {
      "basic": {
        "spellAction": 1
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 15
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "anchor",
            "shape": 0,
            "length": 3,
            "startDistance": 0,
            "anchorPos": {
              "pool": "select-block",
              "filter": [
                {
                  "type": "anchor",
                  "shape": 2,
                  "length": 0,
                  "startDistance": 1,
                  "direction": 9,
                  "anchorPos": {
                    "pool": "self",
                    "filter": [
                      {
                        "type": "count",
                        "count": 1
                      }
                    ]
                  }
                },
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          }
        ]
      },
      "action": [
        {
          "type": "playEffect",
          "effect": 136,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "playEffect",
          "effect": 128,
          "pos": "playerChoice"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              "src": {
                "attack": 0.8
              }
            },
            {
              "src": {
                "attack": 1
              }
            },
            {
              "src": {
                "attack": 1.5
              }
            }
          ]
        },
        {
          "type": "blink",
          "delay": 0.6,
          "time": 0.08
        },
        {
          "type": "shock",
          "delay": 0.6,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 423,
    "activeSpell": true,
    "label": L("dic_skill_423_label"), //神圣力量
    "icon": "skill-dzj2.png",
    "labelIcon": "dzjsk2.png",
    "desc": L("dic_skill_423_desc"), //主教召唤圣十字对指定的十字范围造成伤害。
    "slotId": 2,
    "config": {
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 15
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "startDistance": 0,
            "anchorPos": {
              "pool": "select-block",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "2",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 135,
          "act": "self"
        },
        {
          "type": "delay"
        },
        {
          "type": "installSpell",
          "spell": 424,
          "#level": [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  {
    "skillId": 424,
    "config": {
      "installAction": [
        {
          "type": "playEffect",
          "effect": 129,
          "pos": "self"
        },
        {
          "type": "damage",
          "damageType": "Spell",
          "isRange": true,
          "delay": 0.4,
          "#formular": [
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*0.7
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*0.85
              }
            },
            {
              func:function(env,source,target,cons) {
                return env.battleForce*0.3/18.5*1.1
              }
            }
          ]
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "same-block"
          },
          {
            "type": "same-faction",
            "faction": "monster"
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          }
        ]
      },
      "availableCondition": [
        {
          "type": "effectCount",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 425,
    "activeSpell": true,
    "label": L("dic_skill_425_label"), //圣光庇佑
    "icon": "skill-dzj3.png",
    "labelIcon": "dzjsk3.png",
    "desc": L("dic_skill_425_desc"), //主教召唤圣光加持我方全体队员，降低我方全体所受伤害。
    "slotId": 4,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 130,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 15
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 426,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 426,
    "config": {
      "basic": {
        "buffEffect": 131
      },
      "triggerCondition": [
        {
          "type": "event",
          "event": "onBePhysicalDamage"
        },
        {
          "type": "event",
          "event": "onBePhysicalRangeDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellDamage"
        },
        {
          "type": "event",
          "event": "onBeSpellRangeDamage"
        }
      ],
      "availableCondition": [
        {
          "type": "effectCount",
          "#count": [
              1,
              2,
              3
          ]
        }
      ],
      "action": [
        {
          "type": "modifyVar",
          "x": "damage",
          "formular": {
            "environment": {
              "#damage":[
                  0.8,
                  0.7,
                  0.5
              ]
            }
          }
        }
      ]
    }
  },
  {
    "skillId": 427,
    "activeSpell": true,
    "label": L("dic_skill_427_label"), //辉光降临
    "icon": "skill-dzj4.png",
    "labelIcon": "dzjsk4.png",
    "desc": L("dic_skill_427_desc"), //主教通过辉光降临，让我放全体在一定回合均获得生命值恢复。
    "slotId": 5,
    "config": {
      "basic": {
        "spellAction": 2,
        "spellEffect": 132,
        "spellDelay": 0.3
      },
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "healable"
          }
        ]
      },
      "triggerCondition": [
        {
          "type": "countDown",
          "cd": 25
        }
      ],
      "action": [
        {
          "type": "installSpell",
          "spell": 428,
          "#level": [
            1,
            2,
            3
          ]
        },
        {
          "type": "shock",
          "delay": 0.3,
          "range": 5,
          "time": 0.2
        }
      ]
    }
  },
  {
    "skillId": 428,
    "config": {
      "basic": {
        "buffEffect": 133
      },
      "installAction": [
        {
          "type": "heal",
          "#formular": [
            {
              "src": {
                "strong": 0.1
              }
            },
            {
              "src": {
                "strong": 0.3
              }
            },
            {
              "src": {
                "strong": 0.5
              }
            }
          ]
        }
      ],
      "availableCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 3
        }
      ]
    }
  },
  {
    "skillId": 429,
    "label": L("dic_skill_352_label"), //加特林扫射
    "icon": "skill-ironsuit1.png",
    "desc": L("dic_skill_352_desc"), //由肩部的加特林机枪进行扫射，造成范围伤害。
    "slotId": 100,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 2,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "myMutex",
          "mutex": "soldier"
        },
        {
          "type": "myMutex",
          "mutex": "master"
        },
        {
          "type": "myMutex",
          "mutex": "minister"
        }
      ],
      "targetSelection": {
        "pool": "blocks",
        "filter": [
          {
            "type": "anchor",
            "shape": 1,
            "length": 1,
            "startDistance": 0,
            "anchorPos": {
              "pool": "objects",
              "filter": [
                {
                  "type": "anchor",
                  "shape": 2,
                  "length": 1,
                  "startDistance": 1,
                  "anchorPos": {
                    "pool": "self",
                    "filter": [
                      {
                        "type": "count",
                        "count": 1
                      }
                    ]
                  }
                },
                {
                  "type": "alive"
                },
                {
                  "type": "visible"
                },
                {
                  "type": "target-faction-with-flag",
                  "flag": "attackable"
                },
                {
                  "type": "shuffle"
                },
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "irongunfire",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 93,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 94,
          "pos": "target"
        },
        {
          "type": "installSpell",
          "spell": 353,
          "delay": 1.8
        },
        {
          "type": "setMyMutex",
          "mutex": "soldier",
          "count": 1
        },
        {
          "type": "setMyMutex",
          "mutex": "master",
          "count": 1
        },
        {
          "type": "setMyMutex",
          "mutex": "minister",
          "count": 1
        }
      ]
    }
  },
  {
    "skillId": 430,
    "label": L("dic_skill_354_label"), //脉冲光束炮
    "icon": "skill-ironsuit2.png",
    "desc": L("dic_skill_354_desc"), //由胸口射出高能光束炮，对指定位置敌人造成毁灭打击。
    "slotId": 101,
    "config": {
      "triggerCondition": [
        {
          "type": "event",
          "event": "onTurnEnd",
          "eventCount": 4,
          "reset": true
        },
        {
          "type": "chance",
          "chance": 0.1
        },
        {
          "type": "myMutex",
          "mutex": "soldier"
        },
        {
          "type": "myMutex",
          "mutex": "master"
        },
        {
          "type": "myMutex",
          "mutex": "minister"
        }
      ],
      "targetSelection": {
        "pool": "objects",
        "filter": [
          {
            "type": "anchor",
            "shape": 2,
            "length": 2,
            "startDistance": 1,
            "anchorPos": {
              "pool": "self",
              "filter": [
                {
                  "type": "count",
                  "count": 1
                }
              ]
            }
          },
          {
            "type": "alive"
          },
          {
            "type": "visible"
          },
          {
            "type": "target-faction-with-flag",
            "flag": "attackable"
          },
          {
            "type": "count",
            "count": 1
          }
        ]
      },
      "action": [
        {
          "type": "playAction",
          "motion": "ironrayfire",
          "pos": "self"
        },
        {
          "type": "playEffect",
          "effect": 95,
          "act": "self"
        },
        {
          "type": "playEffect",
          "effect": 96,
          "pos": "target"
        },
        {
          "type": "installSpell",
          "spell": 355,
          "delay": 0.6
        },
        {
          "type": "setMyMutex",
          "mutex": "soldier",
          "count": 1
        },
        {
          "type": "setMyMutex",
          "mutex": "master",
          "count": 1
        },
        {
          "type": "setMyMutex",
          "mutex": "minister",
          "count": 1
        }
      ]
    }
  }
]
