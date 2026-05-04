const Card = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default:
      "bg-white border border-stone-200 rounded-xl shadow-sm dark:bg-stone-950 dark:border-stone-800",
    elevated:
      "bg-white rounded-xl shadow-md dark:bg-stone-950 dark:shadow-stone-900",
    subtle:
      "bg-surface-container-low rounded-lg border border-outline-variant dark:bg-stone-900",
  };

  return (
    <div className={`${variants[variant]} ${className}`}>{children}</div>
  );
};

export default Card;
