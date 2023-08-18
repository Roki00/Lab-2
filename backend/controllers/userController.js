import asyncHandler from '../middleware/asyncHandler.js'
import User from "../models/userModel.js"


// @decs Auth user & get token
// @Route POST/api/users/login
//@access Public

const authUser = asyncHandler(async (req, res ) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});     //ketu testojme a po pershtaten email apo a exist


    if(user && (await user.matchPassword(password))){  //matchPassword eshte funks qe e kemi kriju per me i compare passat
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    }else{
        res.status(401);
        throw new Error('Invalid Email or password');
    }
});



// @decs Register user
// @Route POST/api/users/
//@access Public

const registerUser = asyncHandler(async (req, res ) => {
    res.send('register user');
});


// @decs Logout user clear cookie
// @Route POST/api/users/logout
//@access Private

const logoutUser = asyncHandler(async (req, res ) => {
    res.send('logout user');
});


// @decs Get user profile
// @Route GET/api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res ) => {
    res.send('get user profile');
});

// @decs Update user profile
// @Route PUT/api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res ) => {
    res.send('update user profile');
});


// @decs Get users
// @Route GET/api/users/
//@access Private/Admin

const getUsers = asyncHandler(async (req, res ) => {
    res.send('get users');
});


// @decs Get user by ID
// @Route GET/api/users/:id
//@access Private/Admin

const getUserByID = asyncHandler(async (req, res ) => {
    res.send('get user by ID');
});

// @decs Delete user
// @Route DELETE/api/users/:id
//@access Private/Admin

const deleteUser = asyncHandler(async (req, res ) => {
    res.send('delete user');
});


// @decs Update user
// @Route PUT/api/users/:id
//@access Private/Admin

const updateUser = asyncHandler(async (req, res ) => {
    res.send('update user');
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
};