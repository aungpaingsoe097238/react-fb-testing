import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "../config/firebase";

const About = () => {
  const database = getDatabase(app);

  const docRef = set(ref(database, "users/" ), {
    username: "aps",
    email: "aps@gmail.com"
  });

  return (
    <div>
      <form>
        <label htmlFor="">UserName</label>
        <input type="text" />
        <br />
        <label htmlFor="">UserEmail</label>
        <input type="email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default About;
