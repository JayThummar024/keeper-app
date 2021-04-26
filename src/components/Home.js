import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setNotes(result.notes);
      });
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(result=>{
        const newNotes = notes.filter(item=>{
          return item._id !== result._id
        })
        setNotes(newNotes)
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        } ;
      });
  }

  return (
    <div>
      <Header />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            body={noteItem.body}
            onDelete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Home;
