import { getImagen } from '../src/base-pruebas/11-async-await'

describe('Pruebas en el fichero 11-async-await.js', () => { 

  test('getImagen debe de retornar el URL de la imagen ', async () => {

    const url = await getImagen();
    console.log(url);

    expect( typeof url ).toBe( 'string' );

  });
  
  // test('getImagen retorna un error si no tenemos api key ', async () => {

  //   const url = await getImagen();
  //   console.log(url);

  //   expect( url ).toBe( 'No se encontró la imagen' );

  // });

 });