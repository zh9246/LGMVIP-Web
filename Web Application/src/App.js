import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonRes = await response.json();
    setUsers(jsonRes.data);
    // console.log(users);
  };

  return (
    <div>
      <div className="header">
        <h1>Users Card 💳 Web Application</h1>
        <button onClick={getUsers}>Get Users</button>
      </div>
      <div className="users">
        <h1>Users</h1>
        {users?.map(({ id, email, first_name, last_name, avatar }) => (
          <div className="user-card">
            <img alt="Avatar" key={id} src={avatar} />
            <h3 key={id}>
              <em>
                {first_name} {last_name}
              </em>
            </h3>
            <h3 key={id}>
              <em>{email}</em>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
