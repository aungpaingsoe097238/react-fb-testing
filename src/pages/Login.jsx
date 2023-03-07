import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";

const auth = getAuth(app);

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, "aps@gmail.com", "password")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        logError(errorMessage);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" />
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
