module.exports = function (sequelize, DataTypes) {
    const CustomerCredential = sequelize.define('CustomerCredential',
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
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastPasswordChange: {
          type: DataTypes.DATE,
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
        tableName: 'customer_credentials',
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
            name: 'customer_credentials_customerId_fk',
            using: 'BTREE',
            fields: [
              { name: 'customerId' }
            ]
          },
        ]
      }
    )
  
    CustomerCredential.associate = function (models) {
      CustomerCredential.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })

    }
  
    return CustomerCredential
  }