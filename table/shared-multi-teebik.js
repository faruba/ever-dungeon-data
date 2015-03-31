/**
 * User: hammer
 * Date: 13-9-13
 * Time: 下午3:24
 */
/*** TABLE NAMES ***/
TABLE_ROLE = "roles";
TABLE_ITEM = "items";
TABLE_STAGE = "stages";
TABLE_EFFECT = "effects";
TABLE_CARD = "cards";
TABLE_SKILL = "skills";
TABLE_VERSION = "version";
TABLE_LEVEL = "levels";
TABLE_DUNGEON = "dungeons";
TABLE_UPGRADE = "upgrade";
TABLE_ENHANCE = "enhance";
TABLE_QUEST = "quests";
TABLE_STORE = "store";
TABLE_CONFIG = "config";
TABLE_DROP = "drop";
TABLE_DIALOGUE = "dialogue";
TABLE_CAMPAIGN = "campaigns";
TABLE_VIP = "vip";
TABLE_TRIGGER = "triggers";
TABLE_BROADCAST = "broadcast";
TABLE_TUTORIAL = "tutorialList";
TABLE_TUTORIAL_CONFIG = "tutorialConfig";
TABLE_BAN = "bans";
TABLE_LEADBOARD = "leadboard";
TABLE_FACTION = "faction";
TABLE_COSTS = "costs";
TABLE_COST = "costs";
TABLE_DP = "dailyPrize";
TABLE_ARENA = "arena";
TABLE_LOCALIZE = "localize";
TABLE_PRELOAD = "preload";
TABLE_IAPLIST = "iaplist";
TABLE_SERVERLIST = "serverlist";
TABLE_PKREWARD = "pkReward";
TABLE_FRAGMENT = "fragment";
TABLE_BOUNTY = "bounty";
TABLE_IAP = "iaplist";
TABLE_UNIT = "units";
TABLE_SHOP_MASTER = "shop_master";

/*** GAME CONSTANTS ***/
ItemId_RevivePotion = 540;

/*** RPC COMMANDS ***/
RET_OK = 0;
RET_NotEnoughGold = 1;
RET_NotEnoughDiamond = 2;
RET_NotEnoughEnergy = 3;
RET_RoleClassNotMatch = 4;
RET_RoleLevelNotMatch = 5;
RET_PlayerNotExisit = 6;
RET_ItemNotExist = 7;
RET_InventoryFull = 8;
RET_InsufficientEquipXp = 9;
RET_NoEquip = 10;
RET_NoEnhanceStone = 11;
RET_EquipCantUpgrade = 12;
RET_Unknown = 13;
RET_PlayerInfoError = 13;
RET_NotEnoughItem = 14;
RET_TooMuchChat = 15;
RET_ServerError = 16;
RET_FriendListFull = 17;
RET_OtherFriendListFull = 18;
RET_ExceedMaxEnhanceLevel = 19;
RET_SyncError = 20;
RET_EnhanceFailed = 21;
RET_DungeonNotExist = 22;
RET_StageIsLocked = 23;
RET_AppVersionNotMatch = 24;
RET_ResourceVersionNotMatch = 25;
RET_AccountHaveNoHero = 26;
RET_WrongAccountID = 27;
RET_InvalidName = 28;
RET_PlayerNotExists = 29;
RET_NameTaken = 30;
RET_NoKey = 31;
RET_CantInvite = 32;
RET_Issue33 = 33;
RET_LoginFailed = 34;
RET_HireFriendFailed = 35;
RET_RequireMercenaryFailed = 36;
RET_Issue37 = 37;
RET_Issue38 = 38;
RET_VipLevelIsLow = 39;
RET_SoldOut = 40;
RET_Issue41 = 41;
RET_LoginByAnotherDevice = 42;
RET_NewVersionArrived = 43;
RET_SessionOutOfDate = 44;
RET_NeedTeammate = 45;
RET_NeedReceipt = 46;
RET_InsufficientIngredient = 47;
RET_InvalidPaymentInfo = 48;
RET_SweepPowerNotEnough = 49;
RET_NotEnoughTimes = 50;
RET_CantReceivePkAward = 51;
RET_RewardAlreadyReceived = 52;
RET_QuestNotExists = 53;
RET_QuestNotAccepted = 54;
RET_QuestNotCompleted = 55;
RET_QuestCompleted = 56;
RET_UseItemFailed = 57;
RET_TargetNotExists = 58;
RET_EquipedItemCannotBeSold = 59;
RET_ItemSoldFailed = 60;
RET_ClaimCostFailed = 61;
RET_FriendNotExists = 62;
RET_GetLeaderboardInfoFailed = 63;
RET_ShopVersionNotMatch = 64;
RET_NoParameter = 65;
RET_SameMessageExist = 66;
RET_ReviveLimit = 67;
RET_EnergyLimit = 68;
RET_RedeemFailed = 69;
RET_NothingTodo = 70;
RET_NotEnough = 71;
RET_ClassNotUnlock = 72;
RET_GetInfoFailed = 73;
RET_PurchaseFailed = 74;

ErrorMsgs = [
    "操作成功",//0
    "金幣數量不足",
    "寶石數量不足",
    "精力值不足",
    "角色職業不符合要求",
    "角色等級不符合要求",//5
    "玩家不存在",
    "道具不存在",
    "背包已滿",
    "裝備熟練度不足",
    "缺少裝備",//10
    "缺少強化寶石",
    "裝備無法再次升級",
    "玩家數據有誤",
    "道具數量不足",
    "聊天信息發送過於頻繁，請稍等片刻",//15
    "服務器狀態異常，請稍後再試",
    "你的好友列表已經滿了",
    "對方的好友列表已經滿了",
    "這個屬性不能再強化了",
    "與服務器數據同步出錯，請重新登陸",//20
    "強化失敗",
    "副本不存在",
    "關卡尚未解鎖",
    "程序版本不匹配",
    "資源版本不匹配",//25
    "需要創建角色",
    "錯誤的登錄信息",
    "不允許的名字",
    "角色不存在",
    "名字已被佔用",//30
    "沒有匹配的鑰匙",
    "無法添加對方為好友",
    "錯誤:33",
    "登錄失敗",
    "雇傭隊友失敗",//35
    "獲取隊友列表失敗",
    "錯誤:37",
    "錯誤:38",
    "VIP等級不足",
    "物品已經售完",//40
    "錯誤:41",
    "從另外一個設備登錄",
    "有新版本更新，請重新登錄",
    "與服務器斷開連接",
    "Need Teammate",//45
    "缺少配方",
    "缺少材料",
    "付費信息錯誤，請聯繫工作人員",
    "戰鬥力不足",
    "挑戰次數以用盡",//50
    "無法領取PK獎勵",
    "獎勵已領取",
    "任務不存在",
    "任務未領取",
    //"任務未完成\n可能是由於數據未同步，請嘗試點\n擊設置界面中的清空數據緩存按鈕",//55
    "任務未完成\n即將進行數據同步",//55
    "任務已完成",
    "使用物品失敗",
    "目標不存在",
    "已裝備的道具無法出售",
    "道具出售失敗",//60
    "獲取材料失敗",
    "好友不存在",
    "獲取排名信息失敗",
    "商店版本不匹配",
    "參數不正確",
    "請求已發送",
    "復活次數已用盡",
    "購買體力次數已用盡",
    "兌換失敗",
    "RET_NothingTodo",//70
    "RET_NotEnough",
    "RET_ClassNotUnlock",
    "信息获取失败",
    "购买失败"
];

/*** ITEM CATEGORY ***/
ITEM_USE = 0;//使用（無）
ITEM_EQUIPMENT = 1;//裝備 (綠）
ITEM_GEM = 2;//寶石（紫）
ITEM_RECIPE = 3;//配方（藍）
ITEM_USELESS = 4;//無用的（灰）

/*** Subcategory of ITEM_EQUIPMENT ***/
EquipSlot_MainHand = 0;//主手装备
EquipSlot_SecondHand = 1;//副手装备
EquipSlot_Chest = 2;//胸甲装备
EquipSlot_Finger = 3;//戒指装备
EquipSlot_Legs = 4;//腿甲装备
EquipSlot_Neck = 5;//护符装备或帽子
EquipSlot_Face = 6;//脸
EquipSlot_Eye = 7;//眼睛
EquipSlot_Brow = 8;//眉毛
EquipSlot_Hair = 9;//头发

/*** Subcategory of ITEM_EQUIPMENT ***/
EquipSlot_StoreMainHand = 10;//主手
EquipSlot_StoreSecondHand = 11;//副手
EquipSlot_StoreSuit = 12;//套装
EquipSlot_StoreHead = 13;//头盔
EquipSlot_StoreHair = 14;//发型
EquipSlot_StoreGear = 15;//头饰
EquipSlot_StoreBack = 16;//背部
EquipSlot_StoreHallows = 17;//圣器
EquipSlot_StoreGlasses = 18;//眼镜
EquipSlot_StoreArms = 19;//护臂
EquipSlot_StoreLegs = 20;//腿甲

/*** 裝備類型 ***/
ITEMSTATUS_NONE = 0;
ITEMSTATUS_EQUIPED = 1;

/*** Subcategory of ITEM_USE ***/
ItemUse_ItemPack = 0;
ItemUse_Function = 1;
ItemUse_TreasureChest = 2;

/*** Subcategory of ENHANCE ***/
ENHANCE_SEVEN = 0;
ENHANCE_FIVE = 1;
ENHANCE_THREE = 2;
ENHANCE_ATTACK = 3;
ENHANCE_HEALTH = 4;
ENHANCE_SPEED = 5;
ENHANCE_CRITICAL = 6;
ENHANCE_STRONG = 7;
ENHANCE_ACCURACY = 8;
ENHANCE_REACTIVITY = 9;
ENHANCE_VOID = 10;
ENHANCE_COUNT = 11;

/*** Enhance Result ***/
RES_ATTACK = 0;
RES_HEALTH = 1;
RES_SPEED = 2;
RES_CRITICAL = 3;
RES_STRONG = 4;
RES_ACCURACY = 5;
RES_REACTIVITY = 6;
RES_LEECH = 7;
RES_REFLECT = 8;
RES_COUNTER = 9;
RES_STUN = 10;
RES_CRIDMG = 11;
RES_GOLD = 12;
RES_WXP = 13;
RES_EXP = 14;

Sweep_Vip_Level = 3;

LOGIN_ACCOUNT_TYPE_TG = 0;
LOGIN_ACCOUNT_TYPE_AD = 1;
LOGIN_ACCOUNT_TYPE_PP =  2;
LOGIN_ACCOUNT_TYPE_91 =  3;
LOGIN_ACCOUNT_TYPE_KY =  4;
LOGIN_ACCOUNT_TYPE_GAMECENTER =  5;

Max_tutorialStage = 3;

MonthCardID = 8;

/*** Quest Status ***/
QUESTSTATUS_ONGOING = 0;
QUESTSTATUS_COMPLETE = 1;

/*** Bounty Status ***/
BOUNTYSTATUS_ONGOING = 0;
BOUNTYSTATUS_COMPLETE = 1;

/*** Prize Type ***/
PRIZETYPE_ITEM = 0;
PRIZETYPE_GOLD = 1;
PRIZETYPE_DIAMOND = 2;
PRIZETYPE_EXP = 3;
PRIZETYPE_WXP = 4;
PRIZETYPE_FUNCTION = 5;

/*** FUNCTION-Prize Type ***/
FPT_DUOMUDAILLY = 0;

/*** Message Type ***/
MESSAGETYPE_PLAYER = 0;
MESSAGETYPE_SYSTEM = 1;
MESSAGETYPE_BROADCAST = 2;
MESSAGETYPE_WHISPER = 3;

MESSAGE_REWARD_TYPE_OFFLINE = 0;
MESSAGE_REWARD_TYPE_SYSTEM = 1;

/*** Broadcast Type ***/
BROADCAST_TREASURE_CHEST = 0;
BROADCAST_INFINITE_LEVEL = 1;
BROADCAST_ENHANCE = 2;
BROADCAST_ITEM_LEVEL = 3;
BROADCAST_PLAYER_LEVEL = 4;
BROADCAST_CRAFT = 5;

/*** FEATURES ***/
FEATURE_ENERGY_RECOVER = 0;
FEATURE_INVENTORY_STROAGE = 1;
FEATURE_FRIEND_STROAGE = 2;
FEATURE_FRIEND_GOLD = 3;
FEATURE_PK_COOLDOWN = 4;
FEATURE_PK_COUNT = 5;

/*** NOTIOFICATION OP ID ***/
NTFOP_ACCEPT = 1;
NTFOP_DECLINE = 0;

Global_Card_Drop_Config = {
  "cardRate":0.2,
  "cards": [
    { "weight": 2, "type": 0 },
    { "weight": 2, "type": 1 }, 
    //{ "weight": 2, "type": 2 },
    { "weight": 2, "type": 3 },
    { "weight": 1, "type": 4 },
    { "weight": 2, "type": 5 },
    { "weight": 2, "type": 6 },
    { "weight": 2, "type": 7 },
    { "weight": 2, "type": 8 }
  ]
};

EquipSlotDesc = [
        "主武器",//0
        "副武器",
        "胸甲",
        "戒指",
        "腿甲",
        "飾品",//5
        "臉部",
        "眼部",
        "眉毛",
        "頭髮",
        "主手裝飾",//10
        "副手裝飾",
        "外套",
        "頭盔",
        "髮型",
        "頭飾",//15
        "翅膀",
        "聖器",
        "眼鏡",
        "護臂",
        "腿甲"
    ];

ServerPropertyTable ={
        health: "生命",
        speed: "速度",
        attack: "攻擊",
        critical: "暴擊",
        strong: "韌性",
        accuracy: "命中",
        reactivity: "反應"
    };

Rate_Gold_Diamond = 5/1;

CONFIG_FOR_BIN = {
    teebikGuestLogin: false,
    transformEnabled: false,
    treasureLottery: true
};

DEF_CHANNEL = "Teebik";

