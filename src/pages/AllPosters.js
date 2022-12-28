import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./AllPosters.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";

function AllPosters() {
  const [allPosters, setAllPosters] = useState([]);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/posters").then((response) => {
      setAllPosters(response.data);
    });
  }, []);

  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };

  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };

  const confirmDeleteHandler = () => {
    axios
      .delete(`http://localhost:3000/posters/${itemToDeleteId}`)
      .then((response) => {
        setAllPosters((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };

  return (
    <>
      <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
      <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button className="add_button"  onClick={() => navigate("/add")}>
            Add
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-2">
        {allPosters.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img
                variant="top"
                src={item.imageUrl}
                style={{ height: 550 }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Original worth - {item.quantity}</Card.Text>
                <Card.Text>Cell Price - {item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/update/${item.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() =>{openConfirmDeleteModalHandler(item.id)}}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default AllPosters;
