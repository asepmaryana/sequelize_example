module.exports = (sequelize, Sequelize) => {
    return sequelize.define('tag', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING
    });
}
