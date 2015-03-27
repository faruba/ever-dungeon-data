exports.data = {
    type: 'fixed',
    currency: 'masterCoin',
    resetTime: {
        hour: 18, minute: 0
    },
    goods: [
        { id : 1, count: 1, price: 20, limit: {count: 5} },
        { id : 2, count: 1, price: 10, limit: {vip: 2} },
        { id : 3, count: 1, price: 20, limit: {vip: 5} }
    ]
};