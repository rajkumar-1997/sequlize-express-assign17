const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Product=sequelize.define('product',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNULL:false,
    primaryKey:true,


  },
  title:{
    type:Sequelize.STRING,
    allowNULL:false,

  },
  price:{
    type:Sequelize.DOUBLE,
    allowNULL:false,

  },
  
  imageUrl:{
    type:Sequelize.STRING,
    allowNULL:false,

  },
  description:{
    type:Sequelize.STRING,
    allowNULL:false,

  }

});

module.exports=Product;



