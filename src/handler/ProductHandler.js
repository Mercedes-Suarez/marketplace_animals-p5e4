import axios from 'axios';

export const HandleSubmitProduct = (data) => {
        axios.post('http://localhost:3000/products', data)
            .then((response) => {
            console.log(response.data);
            })
            .catch((error) => {
            console.error('Error al guardar los datos:', error);
            });
    }

export default HandleSubmitProduct;