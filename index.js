<>
  {/* Index.html*/}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="Portfolio de Raquel Martínez,diseñadora ux ui "
  />
  <meta name="author" content="Raquel Martínez" />
  <title>Raquel Martínez - Diseñadora Ux Ui | Web Portfolio</title>
  <link rel="icon" href="../assets/logoicono/favicon.ico" type="image/x-icon" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;800&display=swap"
  />
  <link rel="stylesheet" href="portfolio.css" />
  <div className="main-container">
    <nav className="main-navigation">
      <div className="menu" id="barra-menu">
        <div className="logo" data-scroll-to="logo">
          <a href="#">
            <img src="../portfolioWeb/assets/user.png" />
          </a>
        </div>
        <ul>
          <li>
            <a className="#" href="">
              Proyectos
            </a>
          </li>
          <li>
            <a href="./assets/CV RAQUEL MARTÍNEZ UX UI PRODUCT DESIGNER.pdf">
              CV
            </a>
          </li>
          <li>
            <a href="#">
              <img className="barrita-menu" src="./assets/filter.svg" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <main className="frameContainer">
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-img" aria-hidden="true">
            <img className="about-img" src="./assets/aboutme.svg" />
          </div>
          <div className="about-wrapper">
            <p className="section-title">¡Hola! Soy Raquel </p>
            <br />
            <div className="servicios">
              <br />
              <ul>
                <p className="subtitulo">
                  Las habilidades que puedo ofrecer son...
                </p>
                <li>
                  <p className="">
                    <span className="subtitulo">
                      Proactividad y resiliencia,
                    </span>{" "}
                    para afrontar nuevos retos con cada proyecto.
                  </p>
                </li>
                <li>
                  <p className="">
                    <span className="subtitulo">
                      Sensibilidad y respeto, con cada idea y esencia del
                      producto/servicio
                    </span>{" "}
                    que se quiera prestar.
                  </p>
                </li>
                <li>
                  <p className="">
                    <span className="subtitulo">
                      Ganas de aprender, crecer y mejorar cada día,
                    </span>{" "}
                    tanto profesional como personalmente.
                  </p>
                </li>
                <li>
                  <p className="">
                    <span className="subtitulo">Pasión por el diseño</span> y
                    mejora del producto/servicio a conseguir.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/*<p class="about-text subtitulo">
        Mi logo es una rosa roja , porque creo que representa bastante como soy, sensible (por fuera) y,  fuerte (por dentro).
      Apasionada por conectar con la gente a través del arte, siempre intentando buscar con resiliencia y positividad.</p>!*/}
          <div className="proyectazos">
            <br />
            <br />
            <br />
            <div className="projects" data-scroll-to="projects">
              <br />
            </div>
            <section id="project" className="project-section">
              <div className="project-box">
                <p className="project-title"> CabañitApp </p>
                <div className="project-img" aria-hidden="true">
                  <img className="project-img" src="./assets/iphone16.svg" />
                  <a href="./LandingCabañitApp/index.html">
                    <div className="project-link">
                      <p>¡Mira este proyecto!</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section id="project2" className="project-section">
              <div className="project-box">
                <p className="project-title"> Test A / B </p>
                <div className="project-img" aria-hidden="true">
                  <img className="project-img" src="./assets/macbook.svg" />
                  <a href="./projectii/index.html">
                    <div className="project-link">
                      <p>¡Mira este proyecto!</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section id="project2" className="project-section">
              <div className="project-box">
                <p className="project-title">Mi Universo Virtual</p>
                <div className="project-img" aria-hidden="true">
                  <img className="project-img" src="./assets/Realme 10.png" />
                  <a href="#">
                    <div className="project-link">
                      <p>¡Mira este proyecto!</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <p>© Raquel Martínez </p>
    </footer>
  </div>
</>
