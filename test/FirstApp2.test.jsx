import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
	const title = "Hola, soy Yusuke Urameshi";
	const subTitle = "Soy un subtítulo";

	test("debe de hacer match con el snapshot", () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test('Debe de mostrar el mensaje "Hola, soy Yusuke Urameshi"', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
	});

	test("Debe de mostrar el título en un h1", () => {
		render(<FirstApp title={title} />);
		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
	});
  
  test('debe de mostrar el subtítulo pasado por props', () => {
    render(
      <FirstApp 
        title={title} 
        subTitle={ subTitle }
      />
    );
    expect( screen.getAllByText(subTitle).length ).toBe( 2 );
  });

});
