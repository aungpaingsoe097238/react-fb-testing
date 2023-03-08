import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import app from "../config/firebase";

const Home = () => {
  const db = getFirestore(app);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, city, "LA"), {
      name: name
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <label htmlFor="">State</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type="submit">Add To FireStore</button>
      </form>
    </div>
  );
};

export default Home;
