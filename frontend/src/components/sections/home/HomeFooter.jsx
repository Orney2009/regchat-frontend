const HomeFooter = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto py-12 px-8 gap-6">
        <p className="font-caption text-xs uppercase tracking-widest text-slate-500">
          © 2024 UrbanPlan Benin. Institutional Modernization Initiative.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-caption text-xs uppercase tracking-widest text-slate-500 hover:text-primary underline underline-offset-4 transition-opacity opacity-100 hover:opacity-80" href="#">
            Privacy Policy
          </a>
          <a className="font-caption text-xs uppercase tracking-widest text-slate-500 hover:text-primary underline underline-offset-4 transition-opacity opacity-100 hover:opacity-80" href="#">
            Regulatory Compliance
          </a>
          <a className="font-caption text-xs uppercase tracking-widest text-slate-500 hover:text-primary underline underline-offset-4 transition-opacity opacity-100 hover:opacity-80" href="#">
            Contact Support
          </a>
          <a className="font-caption text-xs uppercase tracking-widest text-slate-500 hover:text-primary underline underline-offset-4 transition-opacity opacity-100 hover:opacity-80" href="#">
            Government Portal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
