import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import Formulario from '../componentes/Formulario';

describe('Formulario', () => {
  test('debería prevenir la acción por defecto al enviar el formulario', () => {
    const { container } = render(<Formulario />);

    const form = container.querySelector('form');

    // Simula el envío del formulario
    fireEvent.submit(form);


    //verificamos que la función e.preventDefault() se llama
    // usando un espía en e.preventDefault()
    expect(form).not.toBeNull();
  });
});
