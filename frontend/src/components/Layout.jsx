import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav >
        <ul className="navs">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/shoppingCart">Shopping Cart</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/coupons">Coupons</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;