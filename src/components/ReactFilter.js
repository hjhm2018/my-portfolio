import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function ReactFilter() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value.trim().toLowerCase());
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response
          .json()
          .then((data) => {
            console.log(data);
            setUsers(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid mb-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Filter By Name App</title>
        <meta name="description" content="Filter By Name App Page" />
      </Helmet>
      <h1 className="text-center p-3 bg-secondary mt-2 rounded text-light col-md-12 col-sm-12">
        Users List from JSON Placeholder API
      </h1>

      <input
        name="name"
        className="mb-2 text-center rounded d-block mx-auto"
        type="search"
        placeholder="Filter by name"
        autoComplete="off"
        onChange={onChange}
      />

      <div className="row">
        <div className="mx-auto text-center col-md-4 col-sm-12">
          {users.filter((person) => person.name.toLowerCase().includes(name))
            .length >= 1 &&
            users
              .filter((person) => person.name.toLowerCase().includes(name))
              .map((user, index) => (
                <div
                  className="border p-3 rounded bg-dark text-light"
                  key={index}
                >
                  <p>
                    <span className="font-weight-bold">Name: </span> {user.name}
                  </p>
                  <p>
                    <span className="font-weight-bold">Email: </span>{" "}
                    {user.email}
                  </p>
                  <p>
                    <span className="font-weight-bold">Phone: </span>{" "}
                    {user.phone}
                  </p>
                  <p>
                    <span className="font-weight-bold">Website: </span>{" "}
                    {user.website}
                  </p>
                  <p>
                    <span className="font-weight-bold">Company: </span>{" "}
                    {user.company.name}
                  </p>
                </div>
              ))}
          {users.filter((person) => person.name.toLowerCase().includes(name))
            .length < 1 && (
            <div className="bg-dark text-white py-3 rounded font-weight-bold">
              No results
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReactFilter;
