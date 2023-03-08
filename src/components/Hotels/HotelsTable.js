import * as React from "react";
import HotelTableItem from "./HotelTableItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HotelsTable() {
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
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default HotelsTable;
