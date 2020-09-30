import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';


afterEach(cleanup);

describe('ContactForm  component', () => {
    // baseline test
    it('renders', () => {
      render(<ContactForm 
       
      />);
    }) 

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } =  render(<ContactForm 
         
        />);      
            // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });
     
      })

      describe('h1 to contact me', () => {
        it('inserts text', () => {
          // Arrange
          const { getByTestId } = render(<ContactForm />);
          // Assert
          expect(getByTestId('h1')).toHaveTextContent('Contact me');
          expect(getByTestId('Submit')).toHaveTextContent('Submit');
        })
    })