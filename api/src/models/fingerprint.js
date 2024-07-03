module.exports = function (sequelize, DataTypes) {
    const Fingerprint = sequelize.define('Fingerprint',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        customerId : {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'customers',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'NO ACTION'
        },
        fingerprint: {
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
        tableName: 'customers',
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
            name: 'fingerprints_customerId_fk',
            using: 'BTREE',
            fields: [
              { name: 'customerId' }
            ]
          }
        ]
      }
    )
  
    Fingerprint.associate = function (models) {
      Fingerprint.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
      Fingerprint.hasMany(models.Contact, { as: 'contacts', foreignKey: 'contactId' })
    }
  
    return Fingerprint
  }