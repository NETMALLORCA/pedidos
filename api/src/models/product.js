module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('Product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      productCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reference: {
        type: DataTypes.STRING,
        allowNull: false
      },
      units: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      measurementUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      measurement: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      visible: {
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
      }
    }, {
      sequelize,
      tableName: 'products',
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
          name: 'products_productCategoryId_fk',
          using: 'BTREE',
          fields: [
            { name: 'productCategoryId' }
          ]
        }
      ]
    }
  )

  Product.associate = function (models) {
    Product.belongsTo(models.ProductCategory, { as: 'productCategory', foreignKey: 'productCategoryId' })
    Product.hasMany(models.Price, { as: 'prices', foreignKey: 'productId' })
  }

  return Product
}
