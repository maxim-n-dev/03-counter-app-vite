import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );


  const  handleAdd = () => { 
    setCounter( prev => prev + 1 );
  };
  const  handleSubtract = () => { 
    setCounter( prev => prev - 1 );
  };
  const  handleReset = () => { 
    setCounter( prev => value );
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>
        +1
      </button>
      <button onClick={ handleSubtract }>
        -1
      </button>
      <button onClick={ handleReset }>
        Reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}