import { useState } from "react"
import {NavLink} from "react-router-dom"
import style from "./navbar.module.css"


function Navbar () {
    // Funciones 
    // Cambio de estado para cambio de idioma
    const [español, setEspañol] = useState(true)
    // Función para cambio de idioma
    function selectIdioma() {
      if (español) {
        setEspañol(false)
        return "ingles"
      }
      else {
        setEspañol(true)
        return "español"
      }
    }
    // Objeto retornado para información renderizada
    function traduccion () {
        const valor = español
        let datos = {}
        if (valor) {
            datos.boton = "Inglés"
            datos.uno = "Sobre mi",
            datos.dos = "Mi Recorrido",
            datos.tres = "Habilidades"
        }
        else {
            datos.boton = "Español"
            datos.uno = "About me",
            datos.dos = "My Way",
            datos.tres = "Skills"
        }
        return datos
    }
    // Objeto renderizado con la función evaluada
    const render = traduccion()




    // Renderizado
    return (
        <div className={style.barra}>
            {/* Botones de barra de navegación */}
            <NavLink to="/">
                <button className={style.botonav}>{render.uno}</button>
            </NavLink>
            <NavLink to ="/recorrido">
                <button className={style.botonav}>{render.dos}</button>
            </NavLink>
            <NavLink to ="/skills">
                <button className={style.botonav}>{render.tres}</button>
            </NavLink>
            {/* Boton de idioma*/}
            {
                español ? 
                (<button onClick={()=> selectIdioma()} className={style.idiomain}> English </button>):(<button onClick={()=> selectIdioma()} className={style.idiomaes}> Español </button>)
            }
        </div>
    )

}

export default Navbar