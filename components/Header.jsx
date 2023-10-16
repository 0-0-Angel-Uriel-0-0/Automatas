import { Sawarabi_Mincho } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='p-20' style={{backgroundColor: 'rgba(255, 194, 209,1)'}}>
        <div>
        <h1 className='text-center' style={{fontFamily: 'Sawarabi_Mincho', fontSize:'35px', paddingBottom:10}}>
            Automatas finitos deterministas
        </h1>
        </div  >

        <nav>
            <ul className='flex justify-evenly' style={{fontFamily:'Sawarabi_Mincho', fontSize:'20px'}} >
                <li style={{backgroundColor: 'rgba(251, 111, 146,1)', borderRadius:5, padding:'5px 20px 5px 20px'}} >
                  <Link href={'/inicio'}>Inicio</Link>
                </li> 
                <li style={{backgroundColor: 'rgba(251, 111, 146,1)', borderRadius:5, padding:'5px 20px 5px 20px'}}>
                  <Link href={'/ejercicio01'}>Ejercicio 1 </Link>
                </li>
                <li style={{backgroundColor: 'rgba(251, 111, 146,1)', borderRadius:5, padding:'5px 20px 5px 20px'}}>
                  <Link href={'/ejercicio02'}>Ejercicio 2 </Link>
                </li>
                <li style={{backgroundColor: 'rgba(251, 111, 146,1)', borderRadius:5, padding:'5px 20px 5px 20px'}}>
                  <Link href={'/ejercicio03'}>Ejercicio 3 </Link>
                </li>
                <li style={{backgroundColor: 'rgba(251, 111, 146,1)', borderRadius:5, padding:'5px 20px 5px 20px'}}>
                  <Link href={'/ejercicio04'}>Ejercicio 4 </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
