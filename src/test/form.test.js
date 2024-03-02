import React from 'react';
import { render, screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Form from '../components/Form/Form';
// import { i } from 'vite/dist/node/types.d-jgA8ss1A';
import debug from "debug";

describe("<Form/>", () => {
    test("renderizar el componente", () => {
        render(<Form/>)

    //   const labelProductName= screen.getByLabelText();(/productName/i);
        const inputProductName= screen.getByRole('textbox',{name:/productName/i});
        // const labelProductDescription= screen.getByLabelText(/productDescription/i);
        const inputProductDescription= screen.getByRole('textbox',{name:/productDescription/i});
        const button= screen.getByRole('button',{name:/submit/i});

        expect(inputProductName).toBeInTheDocument();
        expect(inputProductDescription).toBeInTheDocument();
        expect(button).toBeInTheDocument();

    });
});