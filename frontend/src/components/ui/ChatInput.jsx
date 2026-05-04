import { useState } from "react";
import Button from "./Button";

const ChatInput = ({ 
  onSendMessage = () => {}, 
  onAttachFile = () => {},
  disabled = false 
}) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !disabled) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-gutter bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm border-t border-stone-200 dark:border-stone-800">
      <div className="chat-container mx-auto">
        {/* Input Area */}
        <div className="relative flex items-center gap-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-2 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
          <Button
            variant="icon"
            onClick={onAttachFile}
            icon="attach_file"
            className="!p-0"
            aria-label="Attach file"
            disabled={disabled}
          />

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Inquire about urban regulations, permits, or land codes..."
            className="flex-1 bg-transparent border-none focus:ring-0 font-body-md text-on-surface py-3 placeholder-stone-400 dark:text-on-surface disabled:opacity-50"
            disabled={disabled}
          />

          <Button
            variant="primary"
            onClick={handleSend}
            icon="send"
            className="!p-2 !rounded-lg shadow-[0_2px_4px_rgba(1,45,29,0.15)]"
            aria-label="Send message"
            disabled={disabled}
          />
        </div>

        {/* Disclaimer */}
        <p className="text-center text-caption text-stone-400 mt-md">
          Urban AI can provide official regulatory text but does not replace legal counsel.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;
