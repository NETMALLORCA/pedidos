module.exports = function (sequelize, DataTypes) {
    const Return = sequelize.define('Return',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        customerId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        saleId : {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        reference: {
          type: DataTypes.STRING,
          allowNull: false
        },
        reference : {
          type: DataTypes.STRING,
          allowNull: false
        },
        totalBasePrices: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        returnDate: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        returnTime: {
          type: DataTypes.TIME,
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
        tableName: 'Returns',
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
            name: 'return_customerId_fk',
            using: 'BTREE',
            fields: [
              { name: 'customerId' }
            ]
          },
          {
            name: 'return_saleId_fk',
            using: 'BTREE',
            fields: [
              { name: 'saleId' }
            ]
          }
        ]
      }
    )
  
    Return.associate = function (models) {
      Return.belongsTo(models.Sale, { as: 'sale', foreignKey: 'saleId' })

    }
  
    return Return
  }