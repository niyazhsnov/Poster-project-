import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";


function AddPoster() {
  const posterName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  const imageUrl = useRef("");

  const navigate = useNavigate();

  const addPosterHandler = () => {
    var payload = {
      name: posterName.current.value,
      quantity: quantity.current.value? Number(quantity.current.value) : 0 ,
      price: price.current.value ? Number(price.current.value):0,
      imageUrl: imageUrl.current.value,
    };
    axios.post("http://localhost:3000/posters", payload).then(() => {
      navigate("/");
    });
  };
  return (
    <>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Add Poster</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <legend>Create Poster</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Poster Name</Form.Label>
          <Form.Control type="text" ref={posterName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label>Original Worth</Form.Label>
          <Form.Control type="number" ref={quantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Sale Price</Form.Label>
          <Form.Control type="number" ref={price} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control type="text" ref={imageUrl} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addPosterHandler}>
          Add
        </Button>
      </Form>
    </>
  );
}

export default AddPoster;
