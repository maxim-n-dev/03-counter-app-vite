import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => { 

  // test('Debe de hacer match con el snapshot', () => {

  //   const title = 'Hola, soy Yusuke Urameshi';

  //   const { container } = render( <FirstApp title={ title } /> );

  //   expect( container ).toMatchSnapshot();

  // });

  test('Debe de mostrar el título en un h1', () => {

    const title = 'Hola, soy Yusuke Urameshi';
    const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

    expect( getByText(title) ).toBeTruthy();

    expect( getByTestId('test-title').innerHTML ).toBe(title);

    // const h1 = container.querySelector('h1');
    // expect( h1.innerHTML ).toContain( title );
  });

  test('Should show the title passed by props', () => {
    const title = 'Hola, soy Yusuke Urameshi';
    const subtitle = 'Soy un subtítulo';
    const { getAllByText } = render( 
      <FirstApp 
        title={ title } 
        subtitle='Soy un subtítulo'
      /> 
    );

    expect( getAllByText(subtitle).length ).toBe(2);
  });

 });