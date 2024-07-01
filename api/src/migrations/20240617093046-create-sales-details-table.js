'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      saleId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sales',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      priceId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      productName : {
        type: Sequelize.STRING,
        allowNull: false
      },
      basePrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })

    await queryInterface.addIndex('sales_details', ['saleId'], {
      name: 'sales_details_salesId_index'
    }) 
  
    await queryInterface.addIndex('sales_details', ['productId'], {
      name: 'sales_details_productId_index'
    }) 

    await queryInterface.addIndex('sales_details', ['priceId'], {
      name: 'sales_details_priceId_index'
    }) 


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales_details')
  }
}