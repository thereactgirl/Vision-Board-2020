import React from 'react';
import { Card } from 'react-bootstrap';

const Photo = ({ id }) => {
  return (
    <Card className="photo">
      <Card.Img
        variant="top"
        // src={`http://localhost:3300/photos/${id}`}
        src='http://localhost:3300/photos/5f23bea9f8f458e394a98c76'
        alt="Photo"
      />
    </Card>
  );
};

export default Photo;
