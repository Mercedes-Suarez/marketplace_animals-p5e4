import { useState } from 'react';
import './catalogue.css';
import Card from '../Card/Card';

function Catalogue() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(''); 
        } else {
            setSelectedCategory(category); 
        }

        setSelectedSubcategory('');
    };

    const handleSubcategoryClick = (subcategory) => {
        if (selectedSubcategory === subcategory) {
       
            setSelectedSubcategory('');
        } else {
         
            setSelectedSubcategory(subcategory);
        }
    };


    return (
        <div className="catalogue-main-container">
            
            <section>
                <img className="header-catalogue" src="/public/images/HeaderCatalogue.png" alt="HeaderCatalogueView" />
            </section>

            <div className="catalogue-body">
               
                <section className='filters-container'>
                  
                    <h2 id="filters-title" className="filters-title">nuestros productos</h2>

                   
                    <div className='categories-buttons-container'>
                        <button className={`categories-buttons ${selectedCategory === 'gato' ? 'selected' : ''}`} onClick={() => handleCategoryClick('gato')}>gato</button>
                        <button className={`categories-buttons ${selectedCategory === 'perro' ? 'selected' : ''}`} onClick={() => handleCategoryClick('perro')}>perro</button>
                    </div>

                   
                    <hr className="filters-lines" />

                    
                    <div className='subcategories-buttons-container'>
                        <button className={`subcategories-buttons ${selectedSubcategory === 'juguetes' ? 'selected' : ''}`} onClick={() => handleSubcategoryClick('juguetes')}>juguetes</button>
                        <button className={`subcategories-buttons ${selectedSubcategory === 'chuches' ? 'selected' : ''}`} onClick={() => handleSubcategoryClick('chuches')}>chuches</button>
                        <button className={`subcategories-buttons ${selectedSubcategory === 'correas' ? 'selected' : ''}`} onClick={() => handleSubcategoryClick('correas')}>correas</button>
                        <button className={`subcategories-buttons ${selectedSubcategory === 'camas' ? 'selected' : ''}`} onClick={() => handleSubcategoryClick('camas')}>camas</button>
                    </div>
                </section>

               
                <section>
                    <Card selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} />
                </section>
            </div>
        </div>
    );
}

export default Catalogue;
