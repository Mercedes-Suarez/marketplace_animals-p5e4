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
        const radioInput3 = screen.getByRole('radio', { name: /juguetes/i });
        const radioInput4 = screen.getByRole('radio', { name: /chuches/i });
        const radioInput5 = screen.getByRole('radio', { name: /camas/i });
        const radioInput6 = screen.getByRole('radio', { name: /correas/i });
        const button = screen.getByText(/añadir producto/i);


  
        expect(h1).toBeInTheDocument();
        expect(inputNombreProducto).toBeInTheDocument();
        expect(inputDescripcionProducto).toBeInTheDocument();
        expect(inputPrecio).toBeInTheDocument();
        expect(inputStock).toBeInTheDocument();
        expect(radioInput).toBeInTheDocument();
        expect(radioInput2).toBeInTheDocument();
        expect(radioInput3).toBeInTheDocument();
        expect(radioInput4).toBeInTheDocument();
        expect(radioInput5).toBeInTheDocument();
        expect(button).toBeInTheDocument();
      


    });

});