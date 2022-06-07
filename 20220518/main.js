let pageData = {
    members: [{
        name: 'Susan',
        gender: 'Female'
    }, {
        name: 'Peter',
        gender: 'Male'
    }, {
        name: 'Bill',
        gender: 'Unknown'
    }],
    productClasses:[ {
        name: 'Coach',
        price: 125000,
        seatsAvailable: 20,
        earlyBird: true
    }, {
            name: 'Business',
            price: 275000,
            seatsAvailable: 6,
            earlyBird: true
        }, {
            name: 'First',
            price: 430000,
            seatsAvailable: 2,
            earlyBird: false
        }
    ]
    };
Vue.createApp({
    data() {
        return pageData;
    }
}).mount("#app");