import SideNavBar from "./SideNavBar";

const RegulationsLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-surface text-on-surface font-body-md">
      <SideNavBar activeLabel="Textes règlementaires" />
      <main className="flex-1 flex flex-col overflow-y-auto relative">
        {children}
      </main>
    </div>
  );
};

export default RegulationsLayout;
