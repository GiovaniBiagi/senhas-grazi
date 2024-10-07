import { useEffect, useState } from "react";
import { db } from "./services/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

function App() {
  const [count, setCount] = useState(0);

  const getCurrentTicketNumber = async () => {
    const querySnapshot = await getDocs(collection(db, "senhas"));
    querySnapshot.forEach((doc) => {
      setCount(doc.data().current);
    });
  };

  const incrementOnDatabase = async () => {
    const docRef = doc(db, "senhas", "vdPG4WZLplALLv9EMnmx");
    await updateDoc(docRef, {
      current: count + 1,
    });
  };

  useEffect(() => {
    getCurrentTicketNumber();
  }, []);

  const handleIncrement = async () => {
    setCount((prev) => prev + 1);
    await incrementOnDatabase();
  };

  const handleDecrement = () => {
    if (count === 0) {
      return;
    }

    setCount((prev) => prev - 1);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <input
        type="text"
        value={count}
        onChange={(event) => {
          if (event.target.value === "") {
            setCount(0);
          } else {
            setCount(parseInt(event.target.value));
          }
        }}
        style={{
          width: "14rem",
          fontSize: "6rem",
          border: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <button
          type="button"
          onClick={handleIncrement}
          style={{
            padding: "1rem",
            fontSize: "2rem",
            borderRadius: "0.5rem",
            backgroundColor: "dodgerblue",
            color: "white",
          }}
        >
          Increment
        </button>

        <button
          type="button"
          onClick={handleDecrement}
          style={{
            padding: "1rem",
            fontSize: "2rem",
            borderRadius: "0.5rem",
            backgroundColor: "dodgerblue",
            color: "white",
          }}
        >
          Decrement
        </button>
      </div>
    </form>
  );
}

export default App;
