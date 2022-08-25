import React from "react";

export default function Form() {
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  const [error, setErrors] = React.useState({});

  function handleOnChange(e) {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
    setErrors(validate(newData));
  }
  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username.."
          onChange={handleOnChange}
          className={error.username ? "danger" : ""}
          value={data.username}
        ></input>
        {error.username && <span className="danger">{error.username}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password..."
          onChange={handleOnChange}
          className={error.password ? "danger" : ""}
          value={data.password}
        ></input>
        {error.password && <span className="danger">{error.password}</span>}
      </div>
      <input type="submit"></input>
    </form>
  );
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}
