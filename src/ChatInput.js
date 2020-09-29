import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatInput.css";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";

function ChatInput({ channelName, channelId }) {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      console.log(channelId);
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
