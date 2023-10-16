'use client'
import React, { useState } from 'react';

const mensaje = document.createElement('p')

mensaje.id="mensaje"
const Ejercicio01 = () => {
  const [inputValue, setInputValue] = useState(''); // Estado para capturar el valor del cuadro de entrada

  const analizar = () => {
    class Automata {
      static matriz = [
        [1, 0, 0],
        [1, 1, 0]
      ]; 
      constructor() {
      }

      inicio(p) {
        let i = 0;
        const c = p.split('');
        let estado = 0;
        let caracter = 0;

        while (i < c.length) {
          if (/[a-zA-Z]/.test(c[i])) caracter = 0;
          else if (/[0-9]/.test(c[i])) caracter = 1;
          else caracter = 2;

          estado = Automata.matriz[estado][caracter];
          i++;
        }

        if (estado === 1) {
          console.log("es uno");
          mensaje.textContent= "aceptado"
          const ver = document.getElementById('ver')
          if(ver){
            ver.appendChild(mensaje)
          }
          
          console.log(p);
        }
        if (estado === 0) {
          console.log("es 0");
          mensaje.textContent= "no aceptado"
          const ver = document.getElementById('ver')
          if(ver){
            ver.appendChild(mensaje)
          }
        }
      }
    }

    const obj = new Automata();
    obj.inicio(inputValue); // Pasar el valor del cuadro de entrada a la función de análisis
  };

  return (
    <div style={{padding: 100, fontFamily: 'Sawarabi_Mincho'}}>
      <h2 className='text-center ' style={{fontSize:'27px'}}>Automata que acepta solo cadenas de texto</h2>
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
        <button className=' w-40 rounded-sm, text-center' style={{backgroundColor: 'rgba(255, 194, 209,1)'}}  onClick={analizar}>Analiza la entrada</button> 
      </div>
      <div id='ver' className='text-center' style={{fontSize:'30px'}}></div>
    </div>
  );
}

export default Ejercicio01;