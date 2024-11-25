import React, { useState, useEffect } from 'react';
import '../styles/ProyectosRecientes.css';

const ProyectosRecientes = () => {
  const proyectos = [
    { nombre: "NOMBRE PROYECTO", icono: "🪴" },
    { nombre: "NOMBRE PROYECTO", icono: "🌱" },
    { nombre: "NOMBRE PROYECTO", icono: "⭕" },
    { nombre: "NOMBRE PROYECTO", icono: "🌿" },
    { nombre: "NOMBRE PROYECTO", icono: "✴️" },
    { nombre: "NOMBRE PROYECTO", icono: "⛓️" },
  ];

  const frases = [
    "La tecnología es el arte de transformar ideas en realidad.",
    "La creatividad impulsa el futuro de la ingeniería.",
    "El software es una herramienta, pero la pasión es el motor.",
    "Imagina, crea y transforma el mundo digital.",
  ];

  const [fraseActual, setFraseActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFraseActual((prev) => (prev + 1) % frases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="proyectos-container">
      <aside className="sidebar">
        <h2>PROYECTOS RECIENTES</h2>
        <div className="ia-image">
          <img src="ruta_a_imagen_tiburon" alt="IA" />
          <p>(IA)</p>
        </div>
      </aside>

      <main className="proyectos-main">
        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="proyecto-card">
              <div className="proyecto-icon">{proyecto.icono}</div>
              <p>{proyecto.nombre}</p>
            </div>
          ))}
        </div>
      </main>

      <section className="frases-inspiradoras">
        <p className="frase">{frases[fraseActual]}</p>
      </section>
    </div>
  );
};

export default ProyectosRecientes;
