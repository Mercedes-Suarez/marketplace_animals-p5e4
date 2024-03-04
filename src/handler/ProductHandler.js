import ProductService from "../service/ProductService";

export const ProductHandler = {
  async getProducts() {
    let allProducts = await ProductService.getProducts();
    return allProducts;
  },

  async getProduct(id) {
    let product = await ProductService.getProduct(id);
    return product;
  },

  async submitProduct(newProduct) {
    return ProductService.submitProduct(newProduct).then((response) => {
      // Manejar la respuesta de forma específica al componente
      if (response.status === 201) {
        console.log(response.data);
      } else {
        // Error al crear el producto
        // Mostrar mensaje de error al usuario
        throw new Error('Error al enviar el producto');
      }
    });
  },

 // Funcion de filtrado
 async getFilteredProducts(productCategory, productSubcategory) {
  let allProducts = await ProductService.getProducts();

  // Aplicar filtros si se proporcionan
  if (productCategory) {
      allProducts = allProducts.filter(product => product.productCategory === productCategory);
  }
  if (productSubcategory) {
      allProducts = allProducts.filter(product => product.productSubcategory === productSubcategory);
  }

  return allProducts;
},


}

export default ProductHandler;

