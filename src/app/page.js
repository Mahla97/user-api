"use client";
import { useState, useEffect } from "react";
import Card from "./components/card";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <h1>User List</h1>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <Card user={user} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
