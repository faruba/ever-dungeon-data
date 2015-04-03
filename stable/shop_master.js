exports.data = {
    type: 'fixed',
    currency: 'masterCoin',
    resetTime: {
        hour: 18, minute: 0
    },
    refreshBasicCost:{
        currency:'diamond',
        price:50
    },
    goods: [
        { id : 1, count: 1, price: 5, limit: {count: 5} },
        { id : 2, count: 1, price: 10, limit: {vip: 2} },
        { id : 3, count: 1, price: 20, limit: {vip: 5} },
        { id : 4, count: 1, price: 15, limit: {count: 1} },
        { id : 5, count: 1, price: 10 },
        { id : 6, count: 1, price: 20, limit: {vip: 5} }
    ]
};