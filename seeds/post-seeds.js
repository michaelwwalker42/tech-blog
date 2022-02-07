const { Post } = require('../models');

const postdata = [
  {
    title: 'These pretzels',
    post_content: 'These pretzels are making me thirsty.',
    user_id: 1
  },
  {
    title: 'Flying to the moon',
    post_content: "I'm trying to fly to the moon using two magnets and will power.",
    user_id: 2
  }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
