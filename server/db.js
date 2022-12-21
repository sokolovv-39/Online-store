import Sequelize from "sequelize";

export const db = new Sequelize("brandshopdb", "root", "12345678", {
    dialect: "mysql",
    host: "localhost",
    operatorsAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        acquire: 30000,
        idle: 10000
    }
});

export const User = db.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export const Product = db.define("products", {
    id_product: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    product_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sizes: {
        type: Sequelize.STRING,
        allowNull: false
    },
    style: {
        type: Sequelize.STRING,
        allowNull: false
    },
    popularity: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    news: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export const Purchase = db.define("purchases", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    size: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.belongsToMany(Product, { through: Purchase });
Product.belongsToMany(User, { through: Purchase });
