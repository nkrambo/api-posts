
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title cannot be empty',
        },
        len: {
          args: [2, Infinity],
          msg: 'Title must be at least 2 characters',
        },
      },
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Body cannot be empty',
        },
        len: {
          args: [2, Infinity],
          msg: 'Body must be at least 2 characters',
        },
      },
    },
  }, {
    classMethods: {
      associate: (models) => {
        Question.hasMany(models.Answer);
      },
    },
  });

  return Question;
};
