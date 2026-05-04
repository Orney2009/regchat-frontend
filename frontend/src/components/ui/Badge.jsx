const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default:
      "bg-tertiary-fixed text-on-tertiary-fixed hover:bg-secondary-container transition-colors",
    primary: "bg-primary-fixed text-on-primary-fixed hover:bg-primary/10",
    secondary:
      "bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-container/20",
    success: "bg-green-100 text-green-900 hover:bg-green-200",
    warning: "bg-orange-100 text-orange-900 hover:bg-orange-200",
  };

  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        rounded-full
        text-caption
        font-label-bold
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
