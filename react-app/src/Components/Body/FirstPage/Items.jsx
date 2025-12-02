import { Link } from "react-router";
import Card from "react-bootstrap/Card";
const Item = ({ data }) => {
  return (
    <div key={data.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <p className="card-text">{data.description}</p>

          <Link to={`/Item/${data.id}`} className="bo-load">
            Ver Mas
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Item;
