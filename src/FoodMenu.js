import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {
  let items; 
  let link;
  if (snacks) {
    items = snacks;
    link = "Snacks";
  } else {
    items = drinks;
    link = "Drinks";
  }

  return (
    <div className="col-md-4">
      <Card>
        <CardBody> 
          <CardTitle className="font-weight-bold">{link}</CardTitle>
          <CardText>
            View our selection of {link.toLowerCase()}.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <ListGroupItem key={item.id}>
                <Link to={`/${link.toLowerCase()}/${item.id}`}>{item.name}</Link>
              </ListGroupItem>
            ))}
          </ListGroup> 
        </CardBody>
      </Card>
    </div>
  );
}

export default FoodMenu;