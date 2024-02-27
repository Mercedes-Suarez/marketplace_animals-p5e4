import './catalogue.css'
import Card from '../Card/Card';


function Catalogue() {

    return (
        <div className="catalogue-body">

            <section>
            <img className="header-catalogue" src="/public/images/HeaderCatalogue.png" alt="HeaderCatalogueView" />
            </section>

            <section className='filters-container'> 
                <h2 id="filters-title" >nuestros productos</h2>
                <hr className="filters-lines"/>

                <div className='categories-buttons-container'>
                <button className="categories-buttons">perro</button>
                <button className="categories-buttons">gato</button>
                </div>

                <hr className="filters-lines"/>

                <div className='subcategories-buttons-container'>
                <button  className="subcategories-buttons">juguetes</button>
                <button  className="subcategories-buttons">chuches</button>
                <button  className="subcategories-buttons">correas</button>
                <button  className="subcategories-buttons">camas</button>
                </div>
            </section>

            <section>
               <Card/>
            </section>

        </div>

    );
}

export default Catalogue;