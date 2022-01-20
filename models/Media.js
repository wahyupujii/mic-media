// the documentation: 
// https://sequelize.org/v6/manual/model-basics.html

module.exports = (sequelize , DataTypes) => {
    const Media = sequelize.define('Media' , {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
    } , {
        tableName: 'media',
    });
    return Media;
}