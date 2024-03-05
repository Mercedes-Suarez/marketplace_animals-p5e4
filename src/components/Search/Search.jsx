import { useState, useEffect } from 'react';
import ProductService from '../../service/ProductService';
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showResults, setShowResults] = useState(false); // Nuevo estado para controlar la visibilidad de los resultados
   
    useEffect(() => {
       const fetchProducts = async () => {
         const allProducts = await ProductService.getProducts();
         setFilteredProducts(allProducts);
       };
   
       fetchProducts();
    }, []);
   
    useEffect(() => {
       const filterProducts = async () => {
         const allProducts = await ProductService.getProducts();
         const filtered = allProducts.filter(product =>
           product.productName.toLowerCase().includes(searchTerm.toLowerCase())
         );
         setFilteredProducts(filtered);
         setShowResults(true); // Mostrar resultados solo si hay un término de búsqueda
       };
   
       if (searchTerm) {
         filterProducts();
       } else {
         setShowResults(false); // No mostrar resultados si no hay término de búsqueda
       }
    }, [searchTerm]);
   
    const handleSearch = (event) => {
       setSearchTerm(event.target.value);
    };
   
    return (
       <div>
         <input
           type="text"
           placeholder="Buscar producto..."
           value={searchTerm}
           onChange={handleSearch}
         />
         {showResults && ( // Renderiza el listado solo si showResults es true
           <ul>
             {filteredProducts.map((product) => (
               <li key={product.id}>{product.productName}</li>
             ))}
           </ul>
         )}
       </div>
    );
   };

export default Search;
