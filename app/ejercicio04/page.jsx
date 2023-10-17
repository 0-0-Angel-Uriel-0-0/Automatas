'use client'
import React, { useState } from 'react';


const Ejercicio04 = () => {
  const [mensaje, setMensaje] = useState('')
  const [inputValue, setInputValue] = useState(''); // Estado para capturar el valor del cuadro de entrada

  const analizar = () => {
    class Automata {
      static matriz = [
        [1,0,5],
        [2,0,5],
        [2,3,5],
        [1,4,5],
        [4,4,5],
        [5,5,5]
        //5x3
      ]; 
      constructor() {
      }

      inicio(p) {
        let i = 0;
        const c = p.split('');
        let estado = 0;
        let caracter = 0;

        if(/a|b/.test(c[i])){
          while (i < c.length) {
            if (/a/.test(c[i])) caracter = 0;
            else if (/b/.test(c[i])) caracter = 1;
            else caracter = 2;
  
            estado = Automata.matriz[estado][caracter];
            
            if(/[^ab]/.test(c[i])){
              caracter = 2
              estado = Automata.matriz[estado][caracter];
            }
              
            if (estado === 4) {
              setMensaje('Aceptado')
            }
            if (estado === 0||estado===1||estado ===2||estado === 3) {
              setMensaje('No aceptado')
            }
            if(estado === 5){
              setMensaje('Caracter no valido')
            }
            
            i++;
          }
        }
        else{
          setMensaje('Caracter no valido')
        }

      }
    }

    const obj = new Automata();
    obj.inicio(inputValue); // Pasar el valor del cuadro de entrada a la función de análisis
  };

  return (
    <div style={{padding: 100, fontFamily: 'Sawarabi_Mincho'}}>
      <h2 className='text-center p-1' style={{fontSize:'27px'}}>Automata que acepta cadenas de caracteres a o b, que contengan la combinacion aabb</h2>
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

export default Ejercicio04;