const { User, BlogPost, Comment } = require('../models');

User.hasMany(BlogPost, {
    foreignKey: 'userId',
});

BlogPost.belongsTo(User, {
    foreignKey: 'userId',
});

User.hasMany(Comment, {
    foreignKey: 'userId',
});
Comment.belongsTo(User, {
    foreignKey: 'userId',
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogPostId',
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPostId',
});


module.exports = { User, BlogPost, Comment };
