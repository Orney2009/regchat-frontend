// import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import ChatArea from "../components/sections/ChatArea";
import ChatInput from "../components/ui/ChatInput";
import Badge from "../components/ui/Badge";
import { useAuth } from "../context/AuthContext";
import { sendChatMessage } from "../utils/chatService";
import { useChat } from "../context/ChatContext";

const ChatPage = () => {
  const { isAuthenticated } = useAuth();
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
      <div className="flex h-full flex-col">
        {!isAuthenticated && (
          <div className="border-b border-amber-200 bg-amber-50 px-gutter py-3 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-50">
            <div className="mx-auto flex w-full max-w-[800px] flex-wrap items-center gap-3">
              <Badge variant="warning" className="bg-amber-200 text-amber-950 hover:bg-amber-200 dark:bg-amber-300 dark:text-amber-950">
                Mode invité
              </Badge>
              <p className="font-body-md text-sm leading-6">
                Votre historique reste local à cet appareil et n&apos;est pas persisté côté backend.
              </p>
            </div>
          </div>
        )}

        <ChatArea messages={messages} isLoading={isLoading} />
        <ChatInput
          onSendMessage={handleSendMessage}
          onAttachFile={handleAttachFile}
          disabled={isLoading}
        />
      </div>
    </PageLayout>
  );
};

export default ChatPage;
