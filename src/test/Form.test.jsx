import React from 'react';
import { render, screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Form from '../components/Form/Form.jsx';

describe("<Form/>",()=>{

    test("Renderizar el componente", ()=>{
        render(<Form/>);

        const h1 = screen.getByText(/añade un nuevo producto/i);
        const inputNombreProducto = screen.getByPlaceholderText(/Nombre del producto/i);
        const inputDescripcionProducto = screen.getByPlaceholderText(/Descripción del producto/i);
        const inputPrecio = screen.getByPlaceholderText(/Precio/i);
        const inputStock = screen.getByPlaceholderText(/Stock/i);
        const radioInput = screen.getByRole('radio', { name: /gato/i });
        const radioInput2 = screen.getByRole('radio', { name: /perro/i });

  
        expect(h1).toBeInTheDocument();
        expect(inputNombreProducto).toBeInTheDocument();
        expect(inputDescripcionProducto).toBeInTheDocument();
        expect(inputPrecio).toBeInTheDocument();
        expect(inputStock).toBeInTheDocument();
        expect(radioInput).toBeInTheDocument();
        expect(radioInput2).toBeInTheDocument();
        




    });

});