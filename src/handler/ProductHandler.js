import ProductService from "../service/ProductService";

export const ProductHandler = {
  async getAllProducts() {
    let allProducts = await ProductService.getAllProducts();
    return allProducts;
  },

  async getProduct(id) {
    let product = await ProductService.getProduct(id);
    return product;
  },

  async submitProduct(newProduct) {
    return ProductService.submitProduct(newProduct).then((response) => {
      if (response.status === 201) {
        console.log(response.data);
      } else {
        throw new Error('Error al enviar el producto');
      }
    });
  },

  async searchProducts(searchTerm) {
    let allProducts = await ProductService.getAllProducts();

    let filteredProducts = allProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredProducts;
 },

 async getFilteredProducts(productCategory, productSubcategory) {
  let allProducts = await ProductService.getProducts();

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

