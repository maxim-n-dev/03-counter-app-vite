import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";

describe('Pruebas en el fichero 09-promesas', () => { 
  
  test('Debe de retornar un héroe', ( done ) => {
    const id = 1;
    
    getHeroeByIdAsync( id )
      .then(hero => {
        
        expect( hero ).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });
        
        done();
        
      });

  });
  
  test('Debe de obtener un error si heroe no existe', ( done ) => {
    
    const id = 100;
    getHeroeByIdAsync( id )
      // .then(hero => {
      //   expect( hero ).toBeFalsy();
      //   done();
      // })
      .catch( error => {

        expect( error ).toBe(`No se pudo encontrar el héroe con el id ${ id }`)
        
        done();
      });

  });

 });