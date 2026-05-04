import Button from "./Button";

const FileCard = ({
  filename = "Zone_Littorale_Fidjrosse.pdf",
  label = "Regulatory Map",
  size = "2.4 MB",
  onDownload = () => {},
  icon = "description",
}) => {
  return (
    <div className="bg-surface-container-low rounded-lg p-md flex items-center gap-4 border border-outline-variant dark:bg-stone-900">
      <span className="material-symbols-outlined text-primary text-3xl" data-icon={icon}>
        {icon}
      </span>
      <div className="flex-1">
        <p className="font-label-bold text-sm text-on-surface">{filename}</p>
        <p className="text-caption text-stone-500">{label} • {size}</p>
      </div>
      <Button
        variant="icon"
        onClick={onDownload}
        icon="download"
        className="!p-0"
        aria-label={`Download ${filename}`}
      />
    </div>
  );
};

export default FileCard;
