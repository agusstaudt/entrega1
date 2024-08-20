import { CardWidget } from "./cardWidget";
import './navBar.css';

export const NavBar = () => {
  return (
    <>
      <div className="navBarTop text-center position-relative d-flex justify-content-center align-items-center">
        <h1 className="m-0 me-2"><i class="bi bi-shop"></i></h1>
        <p className="m-0"><i class="bi bi-truck"></i> </p>
        <p className="p-1 m-0">La mejor tecnología para tu hogar</p>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-sm">
          <a href="/" className="navbar-brand position-relative me-0">
            <p className="title mb-0">Electrodomésticos Premier</p>
            <p className="sub-title mb-0">Tecnología para el hogar</p>
            <span class="position-absolute translate-middle badge">
              <i class="bi bi-shop"></i>
            </span>
          </a>
          <form class="d-flex col-5" role="search">
            <input class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar" />
          </form>
          <CardWidget/>
        </div>
      </nav>
      <div className="navBarLinks">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="/">Heladeras</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Hornos eléctricos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Lavarropas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Televisores</a>
          </li>
        </ul>
      </div>
    </>
  )
}