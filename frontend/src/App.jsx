import { Navigate, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import RegulationsPage from "./pages/RegulationsPage";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <ChatProvider>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/regulations" element={<RegulationsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ChatProvider>
  );
}

export default App;
