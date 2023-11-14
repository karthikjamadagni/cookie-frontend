import "./App.css";
import axios from "axios";
// import Cookies from 'universal-cookie';

// const cookies = new Cookies(null, { path: '/' });

const App = () => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: "https://cookie-server-backend.onrender.com/",
  });

  const handleLogin = () => {
    let x = document.getElementById("username").value;
    let y = document.getElementById("password").value;

    try {
     instance.post('/login', {x, y})
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="login-box-container">
          <div className="login-box-heading">
            Login Here
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button type="submit" onClick={handleLogin}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
