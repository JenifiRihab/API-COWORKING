module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username{
            type:DataTypes.STRING,
            uniqye:{
                msg:'le nom est deja pris'
            },
            allowNull: false,
            validate:{
                notNull:{
                    msg: `il faut un nom d'utilasteur`
                },
                notEmpty:{
                    msg:`le nom d'utilisateur est incorrect`
                },
            }
      
        },

        password : çç{
            type:DataTypes.STRING,
        },
        roleId: {
            type:DataTypes.INTEGER,
            Reference:{
            model: roleDataModel,
            key:'id'
            }
    }
})
}