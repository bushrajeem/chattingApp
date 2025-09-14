import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function ChatwindowLayout() {
  const [profile, setProfile] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [message, setMessage] = useState([{ text: " " }]);

  useEffect(() => {
    async function fetchusers() {
      const querysnapshot = await getDocs(collection(db, "GoogleAuth"));
      const users = querysnapshot.docs.map((doc) => doc.data());
      setProfile(users);
    }
    fetchusers();
  }, []);

  const handleSend = () => {
    setMessage([...message, { text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <header className="bg-gray-100 border-b p-3 font-semibold flex items-center justify-between">
        <span>
          {profile.length > 0 && profile.uid === localStorage.uid
            ? `${profile[0].name} (You)`
            : "name"}
        </span>
        <span className="text-sm text-gray-500">Online</span>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
        {message.map((msg, i) => (
          <div key={i}>{msg.text}</div>
        ))}
      </div>

      <footer className="border-t p-3 flex gap-2 items-center">
        <Textarea
          placeholder="Type your message..."
          className="resize-none h-12 "
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button onClick={handleSend} className="h-12">
          Send
        </Button>
      </footer>
    </div>
  );
}

export default ChatwindowLayout;
