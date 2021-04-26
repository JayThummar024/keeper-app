import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
// import { useHistory } from "react-router";

function Note(props) {
  // const history = useHistory();

  // function handleClick(id) {
  //   fetch(`http://localhost:5000/delete/$(id)`, {
  //     method: "delete",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .catch((err) => {
  //       if (err) {
  //         console.log(err);
  //       } else history.push("/");
  //     });
  // }
 function handleClick(){
   props.onDelete(props.id)
 }


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
