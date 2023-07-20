module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Coworking', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:{
                    msg:"le nom ne peut pas etre vide"
                }
            },
            unique:{
                msg:"le nom est deja pris"
            }
        },

        price: DataTypes.JSON,
        
        superficy: DataTypes.INTEGER,
        capacity: DataTypes.INTEGER,
        address: DataTypes.JSON,
      
    });
}