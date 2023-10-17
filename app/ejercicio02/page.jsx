'use client'
import React, { useState } from 'react';


const Ejercicio02 = () => {
  const [mensaje, setMensaje] = useState('')
  const [inputValue, setInputValue] = useState(''); // Estado para capturar el valor del cuadro de entrada

  const analizar = () => {
    class Automata {
      static matriz = [
        [0,1,0],
        [0,1,0],
        [0,1,0],
        [0,0,0]
      ]; 
      constructor() {
      }

      inicio(p) {
        let i = 0;
        const c = p.split('');
        let estado = 0;
        let caracter = 0;

        while (i < c.length) {
          if (/[0]/.test(c[i])) caracter = 1;
          else if (/[1-9]/.test(c[i])) caracter = 0;
          else caracter = 2;

          estado = Automata.matriz[estado][caracter];
          if(/[^0-9]/.test(p))
          caracter = 2
          estado = Automata.matriz[estado][caracter];
  
          if (estado === 1) {
            setMensaje('Aceptado')
          }
          if (estado === 0) {
            setMensaje('No aceptado')
          }
          i++;
        }
      }
    }

    const obj = new Automata();
    obj.inicio(inputValue); // Pasar el valor del cuadro de entrada a la función de análisis
  };

  return (
    <div style={{padding: 100, fontFamily: 'Sawarabi_Mincho'}}>
      <h2 className='text-center p-1' style={{fontSize:'27px'}}>Automata que acepta solo cadenas de numeros que acaben en 0</h2>
      <div className='text-center p-5' style={{fontSize:'30px'}}>
        <input
          style={{backgroundColor:'rgba(255, 194, 209,1)'}}
          className='border-black'
          type='text'
          placeholder='Coloca una expresión'
          value={inputValue} // Captura el valor del cuadro de entrada
          onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado cuando cambia el cuadro de entrada
        />
      </div >
      <div className='text-center' style={{fontSize:'20px'}}>
        <button className=' w-40 rounded-sm, text-center' style={{backgroundColor: 'rgba(255, 194, 209,1)'}} onClick={analizar}>Analiza la entrada</button> {/* Llama a la función analizar al hacer clic */}
      </div>
      <div id='ver' className='text-center' style={{fontSize:'30px'}}>
        <p>{mensaje}</p>
      </div>
    </div>
  );
}

export default Ejercicio02;