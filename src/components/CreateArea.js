import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

function CreateArea() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function submitNote(e) {
    fetch("http://localhost:5000/createpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/");
        } 
      })
      .catch((err) => console.log(err));

      e.preventDefault()
  }

  return (
    <>
      <Header />
      <form className="create-note" method="post">
        <input
          name="title"
          placeholder="add title"
          onChange={(e) => {
            // console.log(e.target.value);
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          name="body"
          placeholder="Take a note..."
          onChange={(e) => {
            // console.log(e.target.value);
            setBody(e.target.value);
          }}
          value={body}
        />
        <button onClick={submitNote} type="submit">
          +
        </button>
      </form>
      <Footer />
    </>
  );
}

export default CreateArea;
