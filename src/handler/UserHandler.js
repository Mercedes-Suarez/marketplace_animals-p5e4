import UserService from "../service/userService";

export const UserHandler = {
    async getUsers() {
        let allUsers = await UserService.getUsers();
        return allUsers;
    }
}

export default UserHandler;