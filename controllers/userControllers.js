const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find()

            if (!users) {
                return res.status(404).json({ message: 'No users found in the database' });
            }
            res.json(users);
            console.log('Successfully retrieved all users.');
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    // Get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .populate('thoughts') 
                .populate('friends') 
                .select('-__v'); 
            
            if (!user) {
                return res.status(404).json({ message: 'No user with this ID' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    
    // Create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
            console.log('Successfully created this user');
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    // Update a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body }, 
                { runValidators: true, new: true }        
            );
            
            if (!user) {
                return res.status(404).json({ message: 'No user with this ID' });
            }
            res.json({ message: 'User successfully updated' });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    // Delete a user along with their thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
    
            if (!user) {
                return res.status(404).json({ message: 'No user with this ID' });
            }
    
            // Remove all thoughts associated with this user
            await Thought.deleteMany({ _d: { $in: user.thoughts } });
    
            res.json({ message: 'User and associated thoughts successfully deleted' });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendsId } },  
                { runValidators: true, new: true }
            );
    
            if (!user) {
                return res.status(404).json({ message: 'No user found with this ID' });
            }

            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },  
                { runValidators: true, new: true }
            );
    
            if (!user) {
                return res.status(404).json({ message: 'No user found with this ID' });
            }

           
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
};
