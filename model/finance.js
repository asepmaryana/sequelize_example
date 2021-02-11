module.exports = (sequelize, Sequelize) => {
    return sequelize.define('finance', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tanggal: {
            type: Sequelize.DATEONLY,
            uniqueKey: true
        },
        act_revenue: Sequelize.INTEGER,
        act_ebitda: Sequelize.INTEGER,
        act_asset: Sequelize.INTEGER
    });
}