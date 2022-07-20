import PropTypes from 'prop-types';


export const FirstApp = ({ name, title, subTitle }) => {

  

  return (
    <>
      <h1 data-testid='test-title'>{ title }</h1>
      <p> { subTitle } </p>
      <p> { subTitle } </p>
      <p> { name } </p>
    </>
  );
}


FirstApp.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Maxim Nakonechnyy',
  subTitle: 'Soy un subtítulo',
  // title: 'Título por defecto',
}