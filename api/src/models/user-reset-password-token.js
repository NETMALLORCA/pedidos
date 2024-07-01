module.exports = function (sequelize, DataTypes) {
    const UserResetPasswordToken = sequelize.define('UserResetPasswordToken',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        expitationDate: {
          type: DataTypes.DATE,
          allowNull: false
        },
        used: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        createdAt: {
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
        tableName: 'user_reset_password_tokens',
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
            name: 'user_reset_password_tokens_userId_fk',
            using: 'BTREE',
            fields: [
              { name: 'userId' }
            ]
          },
        ]
      }
    )
  
    UserResetPasswordToken.associate = function (models) {
      UserResetPasswordToken.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })

    }
  
    return UserResetPasswordToken
  }