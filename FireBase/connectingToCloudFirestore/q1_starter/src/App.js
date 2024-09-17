import "./styles.css";
import { db } from "./firebaseInit";

import { collection, addDoc } from "firebase/firestore";

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

export default function App() {
  return (
    <div className="App">
      <h1>Cloud Firestore Initialization</h1>
    </div>
  );
}
