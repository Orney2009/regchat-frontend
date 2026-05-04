const RegulationsMobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-full px-6 py-3 flex items-center gap-8 z-50 border border-stone-200">
      <button className="material-symbols-outlined text-stone-400" data-icon="home">
        home
      </button>
      <button className="material-symbols-outlined text-stone-400" data-icon="history">
        history
      </button>
      <button className="material-symbols-outlined text-primary bg-primary-container/10 p-2 rounded-full" data-icon="gavel">
        gavel
      </button>
      <button className="material-symbols-outlined text-stone-400" data-icon="map">
        map
      </button>
      <button className="material-symbols-outlined text-stone-400" data-icon="person">
        person
      </button>
    </nav>
  );
};

export default RegulationsMobileNav;
