import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";

describe("Pruebas en el fichero 08-imp-exp", () => {
	test("getHeroeById debe de retornar un héroe por ID", () => {
		const id = 1;
		const hero = getHeroeById(id);

		console.log(hero);

		expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
	});

	test("getHeroeById debe de retornar undefined si no existe ID", () => {
		const id = 100;
		const hero = getHeroeById(id);

		console.log(hero);
		//toBeFalsy === null/undefinded/false | Se puede probar por undefined o null si no se quiere el false
		expect(hero).toBeFalsy();
	});

	test("getHeroesByOwner debe de retornar los héroes de DC", () => {

		// DEBE DE RETORNAR UN ARREGLO CON LOS HEROES DE DC
		// Length === 3
		// toEqual al arreglo filtrado
		const owner = "DC";

    const dcHeroes = getHeroesByOwner(owner);

    expect( dcHeroes.length ).toBe(3);
    expect( dcHeroes ).toEqual( heroes.filter( h => h.owner === owner ) );
	});
	
  test("getHeroesByOwner debe de retornar los héroes de Marvel", () => {
		// Debe de retornar un arreglo con los héroes de Marvel
		// Length === 2
    const owner2 = 'Marvel';

    
    const marvelHeroes = getHeroesByOwner(owner2);

    expect( marvelHeroes.length ).toBe( 2 );
    expect( marvelHeroes ).toEqual( heroes.filter( h => h.owner === owner2 ) );
	});
});
