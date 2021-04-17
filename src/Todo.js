import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex",marginBottom:10 }}>
      <ListItem>
        <ListItemText
          primary={todo}
          style={!inprogress ?{textDecorationLine: 'line-through'}:{ }}
        />
      </ListItem>

      <Button onClick={toggleInProgress} style={inprogress ?{backgroundColor:'#FCA5A5'}:{ backgroundColor:'#6EE7B7'}} >
        {!inprogress ? "Done🥷" : "Todo🧑‍💻"}
      </Button>
      <Button onClick={deleteTodo}>X</Button> 
    </div>
  );
}
