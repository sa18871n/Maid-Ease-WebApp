const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    database: 'maid_ease',
    username: 'root',
    password: 'Thankyou@1415',
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to the MySQL server.');
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
    });

module.exports = sequelize;
