// const data = { users: [], }
// for (let i = 0; i <= 100; i++) {
//      data.users.push({
//          name: 'user' + i,
//          email: 'user' + i + '@gmail.com'
//      });
    
// }

// module.exports = () => {
//     return data
// }

const { phone } = require('faker');
const faker = require('faker')

const data = { 
    users: [], 
    posts: [],
}

for (let i = 0; i < 100; i++) {
     data.users.push({
         id: i + 1,
         name: faker.name.findName(),
         email: faker.internet.email()
     });
}

for (let i = 1; i <= 100; i++) {
    data.posts.push({
        id: i,
        time: faker.time.recent(),
        vehicle: faker.vehicle.type(),
        password: faker.internet.password(),
        phone: faker.phone.phoneNumber()
    });
}

module.exports = () => {
    return data
}