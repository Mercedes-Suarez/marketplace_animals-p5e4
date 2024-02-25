import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

 export const UserService = {
    async getUsers() {
        try {
            let response = await apiClient.get("/users");
            let allUsers = response.data;
            return allUsers;
        } catch (error) {
            console.log("Error al obtener los usuarios:", error);
        }
        
    }
}

export default UserService;