import { NavLink, Link } from "react-router";
const ListOption = ({ lista }) => {
  return (
    <nav className="ListOption">
      {lista.map((cat, i) => {
        return (
          <NavLink
            key={i}
            to={`/category/${cat}`}
            className={({ isActive }) => (isActive ? "active" : "list")}
          >
            {cat}
          </NavLink>
        );
      })}
      <Link to="item/${}" className="list ofert">
        Ofertas
      </Link>
    </nav>
  );
};
export default ListOption;
