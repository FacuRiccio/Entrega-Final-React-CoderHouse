import Card from "react-bootstrap/Card";
import { Link } from "react-router";
const Categorys = ({ prod }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <p className="card-text">{prod.description}</p>
        <Link to={`/Item/${prod.id}`} className="bo-load">
          Ver Mas
        </Link>
      </Card.Body>
    </Card>
  );
};
export default Categorys;
