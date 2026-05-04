import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useChat } from "../../context/ChatContext";

const NavItem = ({ icon, label, active = false, onClick = () => {} }) => {
  

  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-sm
        transition-all duration-200 cursor-pointer
        ${
          active
            ? "bg-stone-200/50 dark:bg-stone-800 text-primary dark:text-emerald-400 border-r-4 border-primary hover:bg-stone-100 dark:hover:bg-stone-800/50"
            : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800/50"
        }
      `}
    >
      <span className="material-symbols-outlined" data-icon={icon}>
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
};

const SideNavBar = ({ activeLabel = null }) => {
  const navigate = useNavigate();
  const { resetConversation } = useChat();

  const handleNewConsultation = () => {
    resetConversation();
    navigate("/");
  };

  const navItems = [
    { icon: "history", label: "Historique", active: activeLabel === "Historique" },
    { icon: "folder_open", label: "Documents", active: activeLabel === "Documents" },
    { icon: "map", label: "Carte", active: activeLabel === "Carte" },
    { icon: "gavel", label: "Textes règlementaires", active: activeLabel === "Textes règlementaires", path: "/regulations" },
  ];

  const helpItems = [
    { icon: "help", label: "Help Center" },
  ];

  return (
    <aside className="bg-stone-50 dark:bg-stone-900 text-primary dark:text-emerald-400 font-sans text-xs uppercase font-semibold tracking-widest hidden md:flex flex-col h-screen w-70 border-r border-stone-200 dark:border-stone-800 py-6">
      {/* Header */}
      <div className="px-6 mb-10">
        <div className="flex items-center gap-3 mb-2">
          <img
            alt="Government Seal"
            className="w-8 h-8 rounded-sm object-cover"
            src="../../assets/logo.png"
          />
          <h1 className="text-lg font-black text-primary dark:text-emerald-400">
            RegChat
          </h1>
        </div>

      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item, idx) => (
          <NavItem
            key={idx}
            {...item}
            onClick={() => {
              if (item.path) {
                resetConversation();
                navigate(item.path);
              }
            }}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 mt-auto space-y-6">
        <Button
          variant="primary"
          icon="add"
          className="w-full"
          onClick={handleNewConsultation}
        >
          New Consultation
        </Button>

        <div className="pt-6 border-t border-stone-200 dark:border-stone-800 space-y-1">
          {helpItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-stone-100 dark:hover:bg-stone-800/50 transition-all cursor-pointer rounded-sm"
            >
              <span className="material-symbols-outlined" data-icon={item.icon}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideNavBar;
