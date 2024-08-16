import { Navbar as FlowbiteNavbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import LICORERIA from "../assets/logo/LICORERIA.png";

function Navbar() {
  return (
    <FlowbiteNavbar fluid rounded className="bg-white">
      {/* Contenedor flex para logo y buscador */}
      <div className="flex items-center w-full">
        <FlowbiteNavbar.Brand as={Link} to="/" className="flex items-center">
          {/* Logo */}
          <img src={LICORERIA} className="mr-3 h-20" alt="LA LICORERIA Logo" />
        </FlowbiteNavbar.Brand>

        {/* Buscador */}
        <div className="relative flex items-center w-full md:w-1/2">
          <input
            type="text"
            className="w-full p-2 pl-4 text-gray-700 rounded-md md:rounded-lg"
            placeholder="Buscar productos..."
          />
        </div>
      </div>

      <FlowbiteNavbar.Toggle />

      <div className="flex justify-center items-center w-full">
        <FlowbiteNavbar.Collapse>
          <FlowbiteNavbar.Link as={Link} to="/" active>
            Inicio
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link as={Link} to="/about">
            Nosotros
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link as={Link} to="/services">
            Contacto
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link as={Link} to="/contact">
            Compras
          </FlowbiteNavbar.Link>
        </FlowbiteNavbar.Collapse>
      </div>
    </FlowbiteNavbar>
  );
}

export default Navbar;
