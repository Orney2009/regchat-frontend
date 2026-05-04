// import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ChatMessage from "../ui/ChatMessage";
import DateDivider from "../ui/DateDivider";

const ChatArea = ({ messages = [], isLoading = false }) => {
  return (
    <div className="flex-1 overflow-y-auto px-gutter py-xl w-full benin-pattern dark:bg-stone-900">
      <div className="space-y-lg">
        {messages.length === 0 ? (
          <>
            {/* Initial welcome state */}
            <DateDivider date={new Date().toLocaleDateString()} icon="architecture" />
            <ChatMessage
              role="ai"
              sender="Urban Assistant"
              timestamp={new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              content="Welcome to the Urban AI Console. I am your assistant for Beninese urban planning regulations. How can I assist you with the National Building Code or zoning inquiries in Cotonou and Porto-Novo today?"
              quickReplies={["Zoning Laws", "Permits", "Land Mapping"]}
            />
          </>
        ) : (
          messages.map((msg, idx) => (
            <ChatMessage
              key={idx}
              role={msg.role}
              sender={msg.sender}
              timestamp={msg.timestamp}
              topBorderAccent={msg.role === "ai" && msg.sources}
            >
              {msg.isMarkdown && msg.role === "ai" ? (
                <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-2 prose-li:my-1 prose-strong:font-bold prose-em:italic">
                  <ReactMarkdown>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              ) : msg.isError ? (
                <p className="text-red-500">{msg.content}</p>
              ) : (
                <p className="font-body-md">{msg.content}</p>
              )}
            </ChatMessage>
          ))
        )}
        {isLoading && (
          <div className="flex items-center gap-2">
            <div className="animate-pulse flex gap-1">
              <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
              <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
              <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
            </div>
            <span className="text-stone-500 text-sm">Urban Assistant is typing...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatArea;
