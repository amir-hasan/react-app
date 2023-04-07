import logo from "./imges/quasar.c1efa391b5dcd1e54a33.png";
import "./App.css";
import d from "./imges/2023-02-28 (2).png";
import g from "./imges/download.jpg";
import t from "./imges/download (1).png";
import p from "./imges/download (2).png";
import o from "./imges/download.png";
import h from "./imges/instagram.webp";
import f from "./imges/facebook.png";
import i from "./imges/youtube.jpg";
import c from "./imges/discord.png";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark fixed-top" id="s">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {" "}
            <img src={logo} className="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                <img src={logo} className="logo" />
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link" href="#SERVICES">
                    SERVICES
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#WHY QUASAR1">
                    WHY QUASAR
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#HOW WE WORK">
                    HOW WE WORK
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search"></form>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <div className="h3">
          <pre>
            <h1>
              <pre>
                <b>P O W E R Y O U R I D E A S !</b>
              </pre>
            </h1>

            <p className="p">
              <pre>
                You heve great ideas. That makes you great. We can take you from
                ideas to profitability. That makes us great.
              </pre>
            </p>

            <p>
              <pre>let's make IT great!</pre>
            </p>
          </pre>
        </div>
        <img src={d} className="d" />
      </div>
      <div id="SERVICES"></div>
      <p className="v">
        <pre>
          {" "}
          <b>S E R V I C E S </b>
        </pre>
      </p>
      <p className="w">
        <pre>
          As a reliable nearshoring partner, we can build or enhance your team
          with qualified consultants. We are able to implement complex IT
          projects with the latest technologies by using agile methodology.
        </pre>
      </p>
      <div>
        <img src={p} className="n" />
        <p className="q">
          <pre>
            M I G R A T I O N
            <p />
            O F L E G A C Y
            <p />F I R M W A R E
          </pre>
        </p>

        <img src={t} className="l" />
        <p className="a">
          <pre>
            E M B E D D E D
            <p />S O F T W A R E
          </pre>
        </p>
        <img src={o} className="m" />
        <p className="c">
          <pre>A U T O M O T I V E </pre>
        </p>
        <img src={g} className="g" />

      </div>
      <div className="lk" id="WHY QUASAR1">

        <p className="ds">
          <pre>W H Y Q U A S A R</pre>
        </p>
        <p className="iu">Highly Qualified Software Experts</p>
        <p className="er">
          <pre>
            Our network reaches towards software experts in different fields,
            they have a{" "}
          </pre>
        </p>
        <p className="re">longstanding experience in international projects.</p>
        <img src={h} className="cn" id="WHY QUASAR" />

        <p className="op">
          <pre>W H Y Q U A S A R</pre>
        </p>
        <p className="vf">Pushing Embedded Systems to the </p>
        <p className="fv">Limits</p>
        <p className="oi">
          Connected with Universities and Research Institutes we are part of the
          change in
        </p>
        <p className="fd">
          the world. We are focused on the fields of Artificial Intelligence and
          Cloud,
        </p>
        <p className="as">
          Scalable Architectures, IOT, and we are bringing the latest
          technologies in
        </p>
        <p className="cv">modern devices.</p>
        <img src={f} className="sw" />

        <p className="vp">
          <pre>W H Y Q U A S A R</pre>
        </p>
        <p className="sa">Driving Future of Automotive</p>
        <p className="mj">
          With our headquarters located in Cluj, our teams can work together,
          closer with your
        </p>
        <p className="cd">teams, to ensure faster delivery.</p>
        <p className="pl">
          At the same time, you save time and money and can focus on your core
          business. In close
        </p>
        <p className="dp">
          cooperation with your teams, we make sure that the result meets your
          requirements and
        </p>
        <p className="ce">wishes.</p>
        <img src={i} className="sf" />

        <p className="op" >
          <pre>W H Y Q U A S A R</pre>
        </p>
        <p className="vf">Fast ramp-up</p>
        <p className="oi">
          We have the ability to grow your team by onboarding new colleagues.
          Our process
        </p>
        <p className="fd">
          of selection ensures you get the right team members in the shortest
          possible
        </p>
        <p className="as">time.</p>
        <img src={c} className="cx" />
      </div>
      <div className="dv" id="HOW WE WORK">
        <p className="sh"><pre>H O W  W E  WK</pre></p>
        <p className="dk">Nearshoring with Quasar</p>
        <div className="tw"></div>
        <div className="hj"><div className="desc-left">We develop qualitative software specifically tailored to your needs and goals, from web-based applications to mobile apps and AI systems.<br/><br/>Advantages: more flexibility, efficiency and reliability through custom software.</div><div class="desc-right">Quasar custom software development is streamlined, efficient and customer focused. Most  importantly, it is tailored to your objectives.<br/><br/>This is ensured through sound requirements management and staff augmentation.</div></div>
      </div>
      

      <footer className="fs">
        
        <img src={logo} className="logo"/>
        <a className="rg" href="#">up</a>
        <p className="wd">
        Quasar Development SRL
        </p>
        <p className="wd">Str. Carierei 5B</p>
        <p className="wd">Chisinau, Moldova</p>
        <p className="wd">Tel: +37368425367</p>
        <p className="wd">contact@quasardevelopment.com</p>
      </footer>
    </div>
  );
}

export default App;
