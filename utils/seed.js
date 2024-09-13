const connection = require('../config/connection');
const { User, Thought } = require('../models');

// Load JSON seed data
const users = require('./users.json');
const thoughts = require('./thoughts.json');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
    console.log('Connected to the database');

    try {
        // Clear existing collections
        let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
        if (userCheck.length) {
            await connection.db.dropCollection('users');
        }

        let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
        if (thoughtCheck.length) {
            await connection.db.dropCollection('thoughts');
        }

        // Insert seed data
        await User.insertMany(users);
        await Thought.insertMany(thoughts);

        console.info('Seeding complete! 🌱');
    } catch (err) {
        console.error('Error during seeding:', err);
    } finally {
        process.exit(0);
    }
});
