const DateDivider = ({ date = "Wednesday, 24 May", icon = "architecture" }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-lg">
      <div className="h-px bg-outline-variant flex-1 opacity-50"></div>
      <div className="flex items-center gap-2 px-4 py-1">
        <span
          className="material-symbols-outlined text-xs text-primary"
          data-icon={icon}
        >
          {icon}
        </span>
        <span className="text-caption uppercase tracking-widest font-label-bold text-stone-500">
          {date}
        </span>
        <span
          className="material-symbols-outlined text-xs text-primary"
          data-icon={icon}
        >
          {icon}
        </span>
      </div>
      <div className="h-px bg-outline-variant flex-1 opacity-50"></div>
    </div>
  );
};

export default DateDivider;
