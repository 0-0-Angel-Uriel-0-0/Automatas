'use client'
import React, { useState } from 'react';

const mensaje = document.createElement('p')

mensaje.id="mensaje"
const Ejercicio03 = () => {
  const [inputValue, setInputValue] = useState(''); // Estado para capturar el valor del cuadro de entrada

  const analizar = () => {
    class Automata {
      static matriz = [
        [1,2,5],
        [1,3,5],
        [4,2,5],
        [1,3,5],
        [4,2,5],
        [5,5,5]
        //6x3
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
              
            if (estado === 1||estado ===2) {
              console.log("es 1 o 2");
              mensaje.textContent= "Aceptacion"
              const ver = document.getElementById('ver')
              if(ver){
                ver.appendChild(mensaje)
              }
              
              console.log(p);
            }
            if (estado === 0||estado===3||estado===4||estado===5) {
              console.log("es 0,3,4 o 5");
              mensaje.textContent= "No aceptacion"
              const ver = document.getElementById('ver')
              if(ver){
                ver.appendChild(mensaje)
              }
            }
            
            i++;
          }
        }
        else{
          console.log("Caracter no permitido");
          mensaje.textContent= "Cadena no permitida"
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
      <h2 className='text-center p-1' style={{fontSize:'27px'}}>Automata que acepta solo cadenas de la letra a o b que empiecen y acaben con el mismo caracter</h2>
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
      <div id='ver' className='text-center' style={{fontSize:'30px'}}></div>
    </div>
  );
}

export default Ejercicio03;