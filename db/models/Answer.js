
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Answer cannot be empty',
        },
        len: {
          args: [2, Infinity],
          msg: 'Answer must be at least 2 characters',
        },
      },
    },
    vote: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Answer.belongsTo(models.Question, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false,
          },
        });
      },
    },
  });

  return Answer;
};
