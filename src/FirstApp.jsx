import PropTypes from 'prop-types';


export const FirstApp = ({ title, subTitle }) => {

  

  return (
    <>
      <h1>{ title }</h1>
      <p> { subTitle } </p>
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
  title: 'Título por defecto',
}