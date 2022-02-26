/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Rate, Col, Row } from "antd";

const { Meta } = Card;

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);

  return (
    <div className="cards-wrapper">
      <Row gutter={16}>
        {restaurants.map((restaurant) => {
          return (
            <Col key={restaurant.id}>
              <Link to={`/details/${restaurant.id}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={`Photo of ${restaurant.name}`}
                      src={restaurant.photoUrl}
                    />
                  }
                >
                  <Meta title={restaurant.name} />
                  <Rate disabled defaultValue={restaurant.rating} />
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
