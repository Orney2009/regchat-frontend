import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

const RegulationsLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-surface text-on-surface font-body-md">
      <SideNavBar activeLabel="Textes règlementaires" />
      <main className="flex-1 flex flex-col overflow-y-auto relative">
        <TopNavBar />
        {children}
      </main>
    </div>
  );
};

export default RegulationsLayout;
