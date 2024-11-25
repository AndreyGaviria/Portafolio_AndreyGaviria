import React from 'react';
import '../styles/Presentacion.css';

const Presentacion = () => {
  return (
    <div className="presentacion-container">
      {/* Sección de encabezado con navegación */}
      <header className="presentacion-header">
        <h1>Bienvenido a Mi Portafolio</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Sección de perfil centrada */}
      <section className="profile-section">
        <div className="profile-card">
          <div className="profile-image">
            <img src="ruta_a_la_imagen" alt="Paisaje" />
          </div>
          <div className="profile-info">
            <h2>Andrey Gaviria</h2>
            <p className="role-description">Estudiante de Tecnología en Desarrollo de Software</p>
            <p>Apasionado por el océano y la tecnología. Actualmente, en proceso de formación para ser un experto desarrollador de software, con énfasis en soluciones innovadoras para el futuro digital.</p>
          </div>
        </div>

        {/* Sección de logo dentro de la presentación */}
        <div className="logo">
          <img src="ruta_al_logo" alt="Logo" />
          <p>Mi Marca</p>
        </div>
      </section>

      {/* Sección de habilidades mejorada */}
      <section className="skills-section">
        <h2>Mis Habilidades</h2>
        <div className="skills-list">
          <div className="skill-item">
            <span className="skill-icon">⚙️</span>
            <p>React</p>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🔧</span>
            <p>Node.js</p>
          </div>
          <div className="skill-item">
            <span className="skill-icon">📦</span>
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🌐</span>
            <p>HTML & CSS</p>
          </div>
          <div className="skill-item">
            <span className="skill-icon">💻</span>
            <p>Bases de Datos</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentacion;
