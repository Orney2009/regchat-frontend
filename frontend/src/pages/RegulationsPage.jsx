import RegulationsLayout from "../components/layout/RegulationsLayout";
import RegulationsContent from "../components/sections/RegulationsContent";
import RegulationsMobileNav from "../components/shared/RegulationsMobileNav";

const RegulationsPage = () => {
  return (
    <>
      <RegulationsLayout>
        <RegulationsContent />
      </RegulationsLayout>
      <RegulationsMobileNav />
    </>
  );
};

export default RegulationsPage;
