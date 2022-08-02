import Spline from "@splinetool/react-spline";
import './App.css'

import Logo from "./assets/logo.svg";
import linkedin from './assets/linkedin-square-logo-24.png'
import github from './assets/github-logo-24.png'

export default function App() {
  return (
    <div className="wrapper">
      <Spline
        className="spline"
        scene="https://prod.spline.design/k99HVzraHEeIFQii/scene.splinecode"
      />
      <div className="social">
        <div />
      </div>
      <div className="content">
        <ul className="menu">
          <li>
            <img src={Logo} alt="title" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button>Começar Agora</button>
          </li>
        </ul>
        <h1>Cada clique, um sentimento.</h1>
        <p>
          Chame os seus amigos e venha viver essa experiência épica
        </p>
      </div>
    </div>
  );
}
;
