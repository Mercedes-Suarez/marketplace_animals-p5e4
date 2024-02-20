import UserService from "../service/userService";

export const UserHandler = {

    HandleSubmitUser(data) {
        axios.post('http://localhost:3001/users', data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error al guardar los datos:', error);
          });
    },

    loadUsers(){
        return UserService.getUsers();
    }
}

export default UserHandler;