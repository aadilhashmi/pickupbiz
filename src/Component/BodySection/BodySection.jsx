import React from "react";
import imglogo1 from "../../Component/bg.jpg";
import { Form, Button, Col } from "react-bootstrap";
export const BodySection=()=> {
    return (
      <div>
        <marquee behavior="alternate" scrollamount="10%">
          <h1 className="head">Pickupbizz</h1>
        </marquee>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <img src="./images/photo.jpg"></img>
        <br />
        <br />
        <h4> Students Application form </h4>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>First Name</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Middile Name</Form.Label>

              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>lastName</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Gender</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Age</Form.Label>

              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Cast</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Weight</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Permenant Address</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>mobile no.</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>education</Form.Label>
              <Form.Control/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>additional skills</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Accepts all terms and Condition"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae est
          maiores expedita laboriosam inventore alias impedit repellendus
          debitis ipsum? Officia quaerat modi adipisci obcaecati voluptatum
          consequatur porro officiis omnis?
        </p>
        <img src={imglogo1} alt="hiiiii"></img>
      </div>
    );
};