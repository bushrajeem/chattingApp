import ChatLayout from "./components/ChatLayout";
import ChatSidebar from "./components/ChatSidebar";

function Chat() {
  return (
    <ChatLayout>
      <ChatSidebar />
      <div className="flex-1 p-4">conversation</div>
    </ChatLayout>
  );
}

export default Chat;
