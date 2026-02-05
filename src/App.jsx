const data = {
  name: "Edryan André López Larios",
  role: "Desarrollador Full Stack",
  location: "Guatemala, Guatemala",
  email: "ealopezla@gmail.com",  
  phone: "+502 3041-5189",
  summary:
    "Desarrollador Full Stack con experiencia en el diseño y desarrollo de soluciones end-to-end: interfaces, lógica de negocio, integración con base de datos y servicios. Enfoque en calidad, buenas prácticas y entrega de resultados. Objetivo: seguir especializándome en desarrollo de software y, a mediano plazo, cursar una maestría para fortalecer mi perfil técnico y aportar en proyectos de alto impacto.",

  experience: [
    {
      title: "Desarrollador Middle",
      company: "Das Global",
      place: "Guatemala, Guatemala",
      period: "2024 — Presente",
      bullets: [
        "Desarrollo y mantenimiento de aplicaciones web.",
        "Implementación de servicios: APIs REST y servicios SOAP.",
        "Gestión y optimización de bases de datos; uso de cache (Redis).",
        "Participación en diseño de arquitectura y solución de problemas para rendimiento/estabilidad."
      ],
    },
    {
      title: "Desarrollador",
      company: "Canella",
      place: "Guatemala, Guatemala",
      period: "2023 — 2024",
      bullets: [
        "Diseño, desarrollo y mantenimiento de aplicaciones web con C#, HTML, CSS, SQL y JavaScript.",
        "Colaboración con diseño UI para interfaces atractivas y funcionales.",
        "Pruebas unitarias para asegurar calidad y exploración de nuevas tecnologías."
      ],
    },
    {
      title: "Técnico de laboratorio",
      company: "Universidad del Valle de Guatemala",
      place: "Guatemala, Guatemala",
      period: "2022 — 2023",
      bullets: [
        "Soporte a usuarios de laboratorios de realidad virtual y procesos.",
        "Mantenimiento de hardware/software y apoyo a actividades con Ingeniería Industrial.",
        "Mejoras y nuevas aplicaciones para potenciar el uso de laboratorios y equipo."
      ],
    },
  ],

  education: [
    {
      title: "Ingeniería en informática y sistemas (último año)",
      org: "Universidad Rafael Landívar",
      place: "Guatemala, Guatemala",
      year: "2026",
    },
    {
      title: "Bachiller en ciencias y letras con orientación en computación",
      org: "Colegio Mixto Monte Carmelo",
      place: "Guatemala, Guatemala",
      year: "2019",
    },
  ],

  courses: [
    "3D Models for Virtual Reality — University of London (2023)",
    "Introduction to Virtual Reality — University of London (2023)",
    "Augmented Reality (AR) apps with Unity & Vuforia — University of London (2023)",
    "Profesional Ágil Entrenador — SCRUMERS (2023)",
    "Scrum Team Member — SCRUMINC (2023)",
    "GIT — Next U (2021)",
    "Gestión de sistemas operativos Windows y Linux — Next U (2021)",
    "Soporte de tecnologías de la información — Next U (2021)",
    "Seguridad de los sistemas IT — Next U (2021)",
    "Habilidades para el estudio virtual — Next U (2021)",
  ],

  skills: [
    "Desarrollo Full Stack",
    "ASP.NET / C#",
    "APIs REST",
    "Servicios SOAP",
    "Bases de datos SQL",
    "JavaScript",
    "HTML5 / CSS3",
    "Arquitecturas y diseño de soluciones",
    "Caching con Redis",
    "Pruebas unitarias",
    "GIT",
    "Windows y Linux",
    "Ágil / SCRUM",
  ],
};

function BulletList({ items }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
      {items.map((b, i) => (
        <li key={i} style={{ marginBottom: 6, lineHeight: 1.5 }}>
          {b}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const mailto = `mailto:${data.email}`;
  const phoneHref = `tel:${data.phone.replace(/\s/g, "")}`;

  return (
    <div className="container">
      <header className="nav">
        <div className="brand">
          <div className="avatar" />
          <div>
            <h1>{data.name}</h1>
            <p>{data.role}</p>
          </div>
        </div>        
      </header>

      <section className="hero">
        <div className="card">
          <span className="kicker">Disponible para proyectos · {data.location}</span>
          <h2 className="title">{data.name}</h2>
          <p className="subtitle">{data.summary}</p>

          <div className="btnrow" id="contacto">
            <a className="btn primary" href={mailto}>ealopezla@gmail.com</a>
            <a className="btn" href={phoneHref}>+502 3041- 5189</a>            
            <a className="btn" href="https://www.linkedin.com/in/edryan-lópez-856b1a307?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>          
        </div>

        <div className="card" id="habilidades">
          <h2 style={{ marginTop: 0 }}>Habilidades</h2>
          <div className="chips">
            {data.skills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="sobre-mi">
        <div className="card">
          <h2>Sobre mí</h2>
          <p className="subtitle" style={{ marginTop: 0 }}>
            Soy desarrollador Full Stack con experiencia en el desarrollo de soluciones web, además de proyectos en Realidad Virtual (VR) y Realidad Aumentada (AR). Me caracterizo por ser disciplinado, constante y orientado a resultados, cualidades que también aplico en el deporte: practico fútbol sala y participo como jugador semiprofesional en la Liga de Ascenso de Guatemala.
Mis objetivos profesionales son seguir creciendo en el área de desarrollo de software, especializarme en tecnologías inmersivas (VR/AR) y, a mediano plazo, cursar una maestría en el extranjero para ampliar mi formación y oportunidades.
          </p>
        </div>
      </section>

      <section className="section" id="experiencia">
        <h2>Experiencia</h2>
        <div className="grid">
          {data.experience.map((job) => (
            <div className="card col-6" key={job.company + job.period}>
              <div className="item">
                <div className="top">
                  <h3>{job.title} · {job.company}</h3>
                  <p className="meta">{job.period}</p>
                </div>
                <p className="meta">{job.place}</p>
                <BulletList items={job.bullets} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="educacion">
        <h2>Educación</h2>
        <div className="grid">
          {data.education.map((ed) => (
            <div className="card col-6" key={ed.title}>
              <div className="item">
                <div className="top">
                  <h3>{ed.title}</h3>
                  <p className="meta">{ed.year}</p>
                </div>
                <p className="meta">{ed.org} · {ed.place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="cursos">
        <h2>Cursos y certificaciones</h2>
        <div className="card">
          <div className="grid">
            {data.courses.map((c) => (
              <div className="col-6" key={c} style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                • {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {data.name} · Hecho con React + Vite · Publicado en GitHub Pages
      </footer>
    </div>
  );
}
