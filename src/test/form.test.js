import React from 'react';
import { render, screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import form from '../components/Form/Form';
import { i } from 'vite/dist/node/types.d-jgA8ss1A';

describe("form/>", () => {
    test("renderizar el componente", () => {
        render(<form/>)

       const labelNombreProducto= screen.getByLabelText();(/Name:/i);
        const inputName= screen.getByrol('textbox',{name:/Name:/i});
        const inputemail= screen.getByrol('textbox',{name:/Name:/i});
        const inputName= screen.getByrol('textbox',{name:/Name:/i});

    });
});