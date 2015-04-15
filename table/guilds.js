exports.data = {
    modifier: {
        "+gold": {
            describe: "土豪是怎么练成的",
            upgradeCost: [1, 2], //[build_cost, upgrade_to_1_cost,.. upgrade_to_n_cost]
            active: {
                cost: 3,
                stayOpen: {
                    time: {time: "time@Arguments"},
                    duration: {week: 1}
                }
            },
            target: ["hero"], //"npc","monster"
            modifyData: [{
                desc: "提高金钱掉落",
                type: "gold",
                value: [1.2, 1.2, 1.3], //[level_0_modify_data,..level_n_modify_data]
                event: "claimReward"
            }]
        },
        "+wxp": {
            describe: "土豪是怎么练成的",
            upgradeCost: [1, 2], //[build_cost, upgrade_to_1_cost,.. upgrade_to_n_cost]
            active: {
                cost: 3,
                stayOpen: {
                    time: {time: "time@Arguments"},
                    duration: {week: 1}
                }
            },
            target: ["hero"], //"npc","monster"
            modifyData: [{
                type: "wxp",
                value: [1.2, 1.2, 1.3], //[level_0_modify_data,..level_n_modify_data]
                event: "claimReward"
            }]

        },
        "+health": {
            describe: "土豪是怎么练成的",
            upgradeCost: [1, 2], //[build_cost, upgrade_to_1_cost,.. upgrade_to_n_cost]
            active: {
                cost: 3,
                stayOpen: {
                    time: {time: "time@Arguments"},
                    duration: {week: 1}
                }
            },
            target: ["hero"], //"npc","monster"
            modifyData: [{
                type: "health",
                value: [1.2, 1.2, 1.3], //[level_0_modify_data,..level_n_modify_data]
                event: "createObj"
            }]


        }


    },
    shop:[0, 1] //[level_0_shopId,..level_n_shopId]
} 

 
