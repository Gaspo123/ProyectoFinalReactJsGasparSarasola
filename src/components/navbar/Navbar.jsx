import CartWidget from "../cartwidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link style={{ textDecoration: "none" }} to="/">
            Soul's
          </Link>
          <ul className="categories">
            <Link style={{ textDecoration: "none" }} to="/">
              Todas
            </Link>
            <Link style={{ textDecoration: "none" }} to="/category/urbanas">
              Urbanas
            </Link>
            <Link style={{ textDecoration: "none" }} to="/category/deportivas">
              Deportivas
            </Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
