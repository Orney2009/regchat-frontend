import Badge from "./Badge";

const ChatMessage = ({
  role = "ai",
  content = "",
  timestamp = "09:12 AM",
  sender = "Urban Assistant",
  quickReplies = [],
  topBorderAccent = false,
  children = null,
}) => {
  const isUser = role === "user";

  return (
    <div className={isUser ? "flex w-full flex-col items-end gap-2" : "flex w-full flex-col items-start gap-2"}>
      <div
        className={`
          ${isUser
            ? "bg-primary text-on-primary rounded-xl rounded-tr-none shadow-md"
            : "bg-white border border-stone-200 rounded-xl rounded-tl-none shadow-sm dark:bg-stone-950 dark:border-stone-800"
          }
          p-lg
          max-w-[65%]
          text-left
        `}
      >
        {topBorderAccent && (
          <div className="border-t-4 border-secondary mb-4"></div>
        )}

        {children ? (
          <div className="text-left">{children}</div>
        ) : (
          <p className={`font-body-md text-left ${isUser ? "text-on-primary" : "text-on-surface"}`}>
            {content}
          </p>
        )}

        {!isUser && quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-md text-left">
            {quickReplies.map((reply, idx) => (
              <Badge key={idx} variant="default">
                {reply}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <span className="text-caption text-stone-400 px-2">
        {sender} • {timestamp}
      </span>
    </div>
  );
};

export default ChatMessage;