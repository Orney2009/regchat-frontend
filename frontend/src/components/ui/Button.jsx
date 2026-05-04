const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  disabled = false,
  icon = null,
}) => {
  const variants = {
    primary:
      "bg-primary text-on-primary hover:opacity-90 transition-opacity shadow-sm",
    secondary:
      "border border-secondary text-secondary hover:bg-secondary/10 transition-colors",
    ghost: "text-stone-600 hover:text-primary transition-colors",
    icon: "text-stone-400 hover:text-primary transition-colors",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        px-4 py-3 rounded-lg
        font-label-bold text-label-bold
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
