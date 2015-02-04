exports.data = {
    "Auth_API_Server": "192.168.128.11",

    DB_Config: {
        "SEAsia": {
            "Account": { "IP": "192.168.128.9", "PORT": 6380 },
            "Role": { "IP": "192.168.128.10", "PORT": 6380 },
            "Publisher": { "IP": "192.168.128.9", "PORT": 6380 },
            "Subscriber": { "IP": "192.168.128.9", "PORT": 6380 }
        },
        "SEAsiaTest": {
            "Account": { "IP": "192.168.128.9", "PORT": 6380 },
            "Role": { "IP": "192.168.128.9", "PORT": 6381 },
            "Publisher": { "IP": "192.168.128.9", "PORT": 6380 },
            "Subscriber": { "IP": "192.168.128.9", "PORT": 6380 }
        }
    },

    Server_Config: {
        "Develop.9": {
            ID: 1,
            Name: "Test",
            DB: "SEAsiaTest",
            DB_Prefix: "Test"
        },
        "Develop.10": {
            ID: 0,
            Name: "Develop",
            DB: "SEAsia",
            DB_Prefix: "Develop"
        },
		"Develop.11": {
            ID: 2,
            Name: "Develop",
            DB: "SEAsia",
            DB_Prefix: "Develop"
        }
 
    },

    IP_Config : {
        "192.168.128.9": [ { Server: "Develop.9", Port: 7756 } ],
        "192.168.128.10": [ { Server: "Develop.10", Port: 7756 } ],
        "192.168.128.11": [ { Server: "Develop.11", Port: 7756 } ],
    },
	Gate_Config:{
		"192.168.128.10": [
           // {"ip": "192.168.128.9", "port": 7756},
           {"ip": "192.168.128.10", "port": 7756},
           // {"ip": "192.168.128.11", "port": 7756}
		],
        "192.168.128.9": [
           {"ip": "192.168.128.9", "port": 7756},
           // {"ip": "192.168.128.10", "port": 7756},
           // {"ip": "192.168.128.11", "port": 7756}
        ]
	}

}
