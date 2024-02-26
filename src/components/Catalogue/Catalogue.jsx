import React from 'react';
import './catalogue.css'
import Card from '../Card/Card';

function Catalogue() {

    return (
        <div>

            <section>
                <h2>nuestros productos</h2>
                <hr />
                <button>gato</button>
                <button>perro</button>
                <hr />
                <button>juguetes</button>
                <button>chuches</button>
                <button>camas</button>
                <button>correas</button>
            </section>

            <section>
               <Card/>
            </section>

        </div>

    );
}

export default Catalogue;