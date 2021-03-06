const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        contents: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        contents: 'Donec posuere metus vitae ipsum.',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        contents: 'Nunc purus.',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        user_id: 4
    },
    {
        title: 'Pellentesque eget nunc.',
        contents: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        user_id: 7
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        contents: 'Pellentesque eget nunc.',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        contents: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        contents: 'In hac habitasse platea dictumst.',
        user_id: 1
    },
    {
        title: 'Duis ac nibh.',
        contents: 'Curabitur at ipsum ac tellus semper interdum.',
        user_id: 9
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        contents: 'Duis ac nibh.',
        user_id: 5
    },
    {
        title: 'In hac habitasse platea dictumst.',
        contents: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        user_id: 3
    },
    {
        title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        contents: 'In hac habitasse platea dictumst.',
        user_id: 10
    },
    {
        title: 'Donec dapibus.',
        contents: 'Nulla tellus.',
        user_id:8
    },
    {
        title: 'Nulla tellus.',
        contents: 'Donec dapibus.',
        user_id: 3
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        contents: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        user_id: 3
    },
    {
        title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        contents: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        contents: 'Etiam justo.',
        user_id: 6
    },
    {
        title: 'Etiam justo.',
        contents: 'In hac habitasse platea dictumst.',
        user_id: 4
    },
    {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        contents: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        user_id: 6
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        contents: 'Nulla ut erat id mauris vulputate elementum.',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;