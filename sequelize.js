require('dotenv').config();
const Sequelize = require('sequelize');
const UserModel = require('./model/user');
const BlogModel = require('./model/blog');
const TagModel = require('./model/tag');
const FinanceModel = require('./model/finance');

const sequelize = new Sequelize(process.env.DB_Name, process.env.DB_userName, process.env.DB_Password, {
    dialect: 'mssql',
    host: process.env.DB_Host,
    logging: false,
    dialectOptions: {
        // Observe the need for this nested `options` field for MSSQL
        options: {
            // Your tedious options here
            useUTC: false,
            dateFirst: 1,
            validateBulkLoadParameters: false,
        }
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = UserModel(sequelize, Sequelize);
const BlogTag = sequelize.define('blog_tag', {});
const Blog = BlogModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const Finance = FinanceModel(sequelize, Sequelize);

Blog.belongsToMany(Tag, { through: BlogTag, unique: false});
Tag.belongsToMany(Blog, { through: BlogTag, unique: false});
Blog.belongsTo(User);
/*
sequelize.sync({ force: true}).then(() => {
    console.log('Database and tables created !')
});
*/
module.exports = {User, Blog, Tag, Finance, sequelize};
