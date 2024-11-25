import React from "react";
import Contacto from "../../components/Contacto";
import Presentacion from "../../components/Presentacion";
import ProyectosRecientes from "../../components/ProyectosRecientes";


const Home = () => {
    return (
        <div className="container">
            <Presentacion />
            <ProyectosRecientes />
            <Contacto />
            <a href="/main">Iniciar</a>
        </div>
    );
}

export default Home;
