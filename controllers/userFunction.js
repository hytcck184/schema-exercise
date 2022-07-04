import res from "express/lib/response";
import User from "../model/user.js"

export const getUserData = async (req, res, next) => {
    const userId = req.params.id;
    let foundUser; 
    
    try {
       foundUser = await User.findById(userId);
    } catch {
        const err = new Error("Couldn't query database. Please try again");
        err.statusCode = 500;
        return next(err);
    }
    // If a user was found with the same id as the :id parameter...
    if (foundUser) {
        const userData = {
            firstName: foundUser.firstName,
            albums: foundUser.albums
        }
        res.json(userData);
    } else {
        const err = new Error("User could not be found");
        err.statusCode = 404;
        next(err);
    }
}

export const addUser = async (req, res, next) => {
    const body = req.body;

    const newUser = new User(body)
    
    await newUser.save((err, car) => {
        if(err) {
            return res.status(400).json({
                success: false,
                message: err.message
            })
        } else {
            return res.status(200).json({
                success: true,
                data: data
            })
        }
    })
}
