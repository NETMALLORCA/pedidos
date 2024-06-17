module.exports = function (sequelize, DataTypes) {
    const Company = sequelize.define('Company',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        commercialName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        commercialAddress: {
          type: DataTypes.STRING,
          allowNull: false
        },
        fiscalAddress: {
          type: DataTypes.STRING,
          allowNull: false
        },
        fiscalName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        vatNumber: {
          type: DataTypes.STRING,
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
        tableName: 'companies',
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
          }
        ]
      }
    )
  
    Company.associate = function (models) {
     
    }
  
    return Company
  }