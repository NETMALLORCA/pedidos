module.exports = function (sequelize, DataTypes) {
    const Price = sequelize.define('Price',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        reference : {
          type: DataTypes.STRING,
          allowNull: false
        },
        units: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        measurementUnit : {
          type: DataTypes.STRING,
          allowNull: false
        },
        measurement : {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        visible : {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
      }, {
        sequelize,
        tableName: 'prices',
        timestamps: true,
        paranoid: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
              { name: 'id' }
            ]
          },
          {
            name: 'prices_productId_fk',
            using: 'BTREE',
            fields: [
              { name: 'productId' }
            ]
          }
        ]
      }
    )
  
    Price.associate = function (models) {
      Price.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' })

    }
  
    return Price
  }