import { useState, useRef, useEffect } from "react"
import {NavLink, useLocation, Link } from "react-router-dom"
import style from "./navbar.module.css"

function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation()
    const menuRef = useRef(null);
    useEffect(() => {
      function handleDocumentClick(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
      document.addEventListener('click', handleDocumentClick);
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);

    const toggleMenu = () => {
        event.stopPropagation(); // Evita que el evento se propague al documento
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={style.divNavbar}>
            <div className={style.divImagen}>
                <NavLink to="/">
                <img className={style.imagenNav} src="https://res.cloudinary.com/dbnevwek2/image/upload/v1697654435/jsochoaco/White_on_Transparent_osg4a5.png" alt="LogoBlancoJSOCHOACO" />
                </NavLink>
            </div>
            <div className={style.divOpciones}>
                <Link to="/">
                <button className={location.pathname === "/" ? style.onNavBar : style.offNavBar}>Incio</button>
                </Link>
                <Link to="/nosotros">
                <button className={location.pathname === "/proyectos" ? style.onNavBar : style.offNavBar}>{idioma === "ES" ? Proyectos : Projects}</button>
                </Link>
                <Link to = "/servicios" >
                <button className={location.pathname === "/servicios" ? style.onNavBar : style.offNavBar}>Servicios</button>
                </Link>
                {/* <Link>
                <button className={location.pathname === "/trayectoria" ? style.onNavBar : style.offNavBar}>Trayectoria</button>
                </Link> */}
                <Link to = "/contacto">
                <button className={location.pathname === "/contacto" ? style.onNavBar : style.offNavBar}>Contacto</button>
                </Link>
            </div>
            <div className={style.divIconMenu}>
                <button className={style.offNavBar} onClick={toggleMenu}>
                    <img className={style.iconMenu} src="https://api.iconify.design/ic:baseline-menu.svg?color=%2300acca" alt="IconMenu" />
                </button>
            </div>
            {isMenuOpen && (
            <div ref={menuRef} className={style.divMenu}>
                <div className={style.listMenu}>
                    <NavLink to="/">
                        <button className={location.pathname === "/" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)}>Incio</button>
                    </NavLink>
                    <NavLink to="/nosotros">
                        <button className={location.pathname === "/nosotros" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)}>Nosotros</button>
                    </NavLink>
                    <NavLink to="/servicios"> 
                        <button className={location.pathname === "/servicios" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)}>Servicios</button>
                    </NavLink>
                    {/* <NavLink to="/trayectoria"> 
                        <button className={location.pathname === "/trayectoria" ? style.onNavBar : style.offNavBar}>Trayectoria</button>
                    </NavLink> */}
                    <NavLink to="/contacto"> 
                        <button className={location.pathname === "/contacto" ? style.onNavBar : style.offNavBar} onClick={()=> setIsMenuOpen(false)} >Contacto</button>
                    </NavLink>
                </div>
            </div>)}
        </div>
    )
}

export default Navbar