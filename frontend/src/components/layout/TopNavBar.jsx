const TopNavBar = ({ onNotifications = () => {}, onSettings = () => {} }) => {
  return (
    <header className="bg-white dark:bg-stone-950 text-primary dark:text-emerald-400 font-sans text-sm font-medium tracking-wide flex justify-between items-center w-full px-6 py-3 h-16 border-b border-stone-200 dark:border-stone-800 z-10">
      {/* Logo/Title */}
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-primary dark:text-emerald-400 tracking-tighter uppercase">
          UrbanPlan Benin
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Search Bar - Hidden on mobile */}
        <div className="hidden lg:flex items-center bg-surface-container-low dark:bg-stone-900 px-4 py-1.5 rounded-full border border-outline-variant dark:border-stone-700">
          <span
            className="material-symbols-outlined text-stone-400 mr-2"
            data-icon="search"
          >
            search
          </span>
          <input
            type="text"
            placeholder="Search regulations..."
            className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body-md text-on-surface placeholder-stone-400 dark:text-on-surface dark:placeholder-stone-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onNotifications}
            className="material-symbols-outlined text-stone-500 hover:text-primary transition-colors dark:hover:text-emerald-400"
            data-icon="notifications"
            aria-label="Notifications"
          >
            notifications
          </button>

          <button
            onClick={onSettings}
            className="material-symbols-outlined text-stone-500 hover:text-primary transition-colors dark:hover:text-emerald-400"
            data-icon="settings"
            aria-label="Settings"
          >
            settings
          </button>

          <img
            alt="Official Profile Avatar"
            className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFx54AqbrW1pd6k-Q4T7mbxDMG4uoe9LWx2BsAn0t8qR84CyA4G6VizAM3r9TOiI8BLE7Q9aqzlbm6rSe-zIAgl7R0txqbTFe80tb4gfq60gRDFMIYwQSSIdACUM7BvOXZ4Vt4sNFJvkwo7VSZw9KkBRmm2Y587suLEL8gvmZOveNsDRbcccFqYHAm8DeqziTnNs3-2rSl0jJYNcixDuFxMG1W036cCHqhtfjntYH5He2huyEUhsRLeW2vNsMsWH5Jb4mS87mKd2k"
          />
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
