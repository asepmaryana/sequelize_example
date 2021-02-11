module.exports = (sequelize, Sequelize) => {
    return sequelize.define('blog', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: Sequelize.STRING
    });
}
