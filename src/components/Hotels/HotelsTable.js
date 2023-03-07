
import * as React from "react";
import HotelTableItem from "./HotelTableItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function HotelsTable() {
  const [hotels, getHotels] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODE4MjU2MywiZXhwIjoxNjc4MTg2MTYzfQ.m9zScknLu77LTM7gGae7lmz1uwCwRMLlA_CbQ0DfeIs",
    };
    fetch("http://localhost:5000/api/admin/hotel", { headers })
      .then((response) => response.json())
      .then((data) => getHotels(data)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel._id}>
                  <th scope="row"></th>
                  <td>{hotel.name}</td>
                  <Link to={`/${hotel._id}`}>
                    {" "}
                    <td>{hotel.address}</td>{" "}
                  </Link>
                  <td>{hotel.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
   
  )
}

export default HotelsTable;
