import User from "./../models/user.model";
import CustomError from "./../utils/custom-error";

class UserService {
    async create(data) {
        return await new User(data).save();
    }

    async getAll() {
        return await User.find({}, { password: 0, __v: 0 });
    }

    async getOne(userId) {
        const user = await User.findOne({ _id: userId }, { password: 0, __v: 0 });
        if (!user) throw new CustomError("User does not exist");

        return user;
    }

    async getOneByEmail(email) {
        const user = await User.findOne({ email }, { password: 0, __v: 0 });
        if (!user) throw new CustomError("User does not exist", 404);

        return user;
    }

    async registerForEvent(userId, eventId) {
        const user = await this.getOne(userId);
 
        user.events.push(eventId);
        await user.save();

        return user;
    }

    async update(userId, data) {
        const user = await User.findByIdAndUpdate({ _id: userId }, { $set: data }, { new: true });

        if (!user) throw new CustomError("User dosen't exist", 404);

        return user;
    }

    async delete(userId) {
        const user = await User.findOne({ _id: userId });
        user.remove();
        return user;
    }
}

export default new UserService();
