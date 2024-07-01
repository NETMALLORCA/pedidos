module.exports = function (sequelize, DataTypes) {
    const CustomerActivationToken = sequelize.define('CustomerActivationToken',
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
        token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        expirationDate: {
          type: DataTypes.DATE,
          allowNull: false
        },
        used: {
          type: DataTypes.BOOLEAN,
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
        tableName: 'customer_activation_tokens',
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
            name: 'customer_activation_tokens_customerId_fk',
            using: 'BTREE',
            fields: [
              { name: 'customerId' }
            ]
          },

        ]
      }
    )
  
    CustomerActivationToken.associate = function (models) {
      CustomerActivationToken.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })

    }
  
    return CustomerActivationToken
  }