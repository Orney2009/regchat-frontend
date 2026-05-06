// import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import ChatArea from "../components/sections/ChatArea";
import ChatInput from "../components/ui/ChatInput";
import { sendChatMessage } from "../utils/chatService";
import { useChat } from "../context/ChatContext";

const ChatPage = () => {
  const { messages, setMessages, conversationId, setConversationId, isLoading, setIsLoading } = useChat();
  // local state kept in ChatContext
  const handleSendMessage = async (message) => {
    // Add user message immediately
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: "You",
      },
    ]);

    setIsLoading(true);

    try {
      const response = await sendChatMessage(message, conversationId);

      // Update conversation ID if returned
      if (response.conversation_id) {
        setConversationId(response.conversation_id);
      }

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: response.answer,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          sender: "Urban Assistant",
          sources: response.sources,
          confidence: response.confidence,
          isMarkdown: true,
        },
      ]);
    } catch (err) {
      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: `Error: ${err.message}`,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          sender: "Urban Assistant",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAttachFile = () => {
    console.log("Attach file clicked");
    // Handle file attachment logic here
  };

  return (
    <PageLayout>
      <ChatArea messages={messages} isLoading={isLoading} />
      <ChatInput
        onSendMessage={handleSendMessage}
        onAttachFile={handleAttachFile}
        disabled={isLoading}
      />
    </PageLayout>
  );
};

export default ChatPage;
