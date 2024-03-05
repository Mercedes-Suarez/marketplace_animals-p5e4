import { useState } from 'react';
import './catalogue.css';
import Card from '../Card/Card';

function Catalogue() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    const handleCategoryClick = (category) => {
        // Si la categoría seleccionada es la misma que la categoría clicada, la deseleccionamos
        if (selectedCategory === category) {
            setSelectedCategory(''); // Deseleccionamos la categoría
        } else {
            setSelectedCategory(category); // Seleccionamos la nueva categoría
        }
        // Reset subcategory when category changes
        setSelectedSubcategory('');
    };

    const handleSubcategoryClick = (subcategory) => {
        if (selectedSubcategory === subcategory) {
            // Si la subcategoría seleccionada es la misma que la subcategoría clicada, la deseleccionamos
            setSelectedSubcategory('');
        } else {
            // Si la subcategoría no está seleccionada, la seleccionamos
            setSelectedSubcategory(subcategory);
        }
    };


    return (
        <div className="catalogue-main-container">
            {/* Imagen del header */}
            <section>
                <img className="header-catalogue" src="/public/images/HeaderCatalogue.png" alt="HeaderCatalogueView" />
            </section>

            <div className="catalogue-body">
                {/* Secciones de filtros */}
                <section className='filters-container'>
                    {/* Título de los filtros con clases originales */}
                    <h2 id="filters-title" className="filters-title">nuestros productos</h2>

                    {/* Botones de categorías */}
                    <div className='categories-buttons-container'>
                        <button className={`categories-buttons ${selectedCategory === 'gato' ? 'selected' : ''}`} onClick={() => handleCategoryClick('gato')}>gato</button>
                        <button className={`categories-buttons ${selectedCategory === 'perro' ? 'selected' : ''}`} onClick={() => handleCategoryClick('perro')}>perro</button>
                    </div>

                    {/* Líneas de separación */}
                    <hr className="filters-lines" />

                    {/* Botones de subcategorías */}
                    <div className='subcategories-buttons-container'>
                        <button className={`subcategories-buttons ${selectedSubcategory === 'juguetes' ? 'selected' : ''}`} onClick={() => handleSubcategoryClick('juguetes')}>juguetes</button>
                        <button className={`subcategories-buttons ${selectedSubcategory === 'chuches' ? 'selected' : ''}`} onClick={() => handleSubcategoryClick('chuches')}>chuches</button>
                        <button className={`subcategories-buttons ${selectedSubcategory === 'correas' ? 'selected' : ''}`} onClick={() => handleSubcategoryClick('correas')}>correas</button>
                        <button className={`subcategories-buttons ${selectedSubcategory === 'camas' ? 'selected' : ''}`} onClick={() => handleSubcategoryClick('camas')}>camas</button>
                    </div>
                </section>

                {/* Pasar los filtros al componente Card */}
                <section>
                    <Card selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} />
                </section>
            </div>
        </div>
    );
}

export default Catalogue;
