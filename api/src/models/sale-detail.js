module.exports = function (sequelize, DataTypes) {
    const SaleDetail = sequelize.define('SaleDetail',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        saleId : {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        priceId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        productName : {
          type: DataTypes.STRING,
          allowNull: false
        },
        basePrice: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        quantily: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }, {
        sequelize,
        tableName: 'sale_details',
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
            name: 'sale_details_saleId_fk',
            using: 'BTREE',
            fields: [
              { name: 'saleId' }
            ]
          },
          {
            name: 'sale_details_productId_fk',
            using: 'BTREE',
            fields: [
              { name: 'productId' }
            ]
          },
          {
            name: 'sale_details_priceId_fk',
            using: 'BTREE',
            fields: [
              { name: 'priceId' }
            ]
          }
        ]
      }
    )
  
    SaleDetail.associate = function (models) {
      SaleDetail.belongsTo(models.Sale, { as: 'sale', foreignKey: 'saleId' })
      SaleDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' })
    }
  
    return SaleDetail
  }