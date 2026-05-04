import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

const PageLayout = ({ children }) => {
  return (
    <div className="w-full bg-background text-on-background font-body-md min-h-screen flex light dark:bg-stone-900 dark:text-stone-100">
      {/* Sidebar Navigation */}
      <SideNavBar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden w-full">
        {/* Top Navigation */}
        <TopNavBar />

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
