const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model { }
// create fields/columns for Post model
Post.init(
  {

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize,
  }
);

module.exports = Post;
