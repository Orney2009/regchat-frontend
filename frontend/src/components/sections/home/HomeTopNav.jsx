import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

const homeLinks = [
  {
    label: "Accueil",
    to: "/",
  },
  {
    label: "Discuter avec RegChat",
    to: "/chat",
  },
  {
    label: "Tarification",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];



const HomeTopNav = () => {
  const { pathname } = useLocation();
  const isLandingPage = pathname === "/";
  const navigate = useNavigate();

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-black tracking-tighter text-primary cursor-pointer flex" onClick={()=>{navigate("/")}}>
          <img
            alt="Government Seal"
            className="w-8 h-8 rounded-sm object-cover"
            src={logo}
          />
          <h1 className="text-lg font-black text-primary dark:text-emerald-400 px-3">
            RegChat
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-body-md text-sm tracking-wide">
          {homeLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                className={
                  isLandingPage && link.label === "Accueil"
                    ? "text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity duration-200"
                    : "text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
                }
                to={link.to}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
                href={link.href}
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link className="hidden lg:block text-primary font-body-md text-sm tracking-wide active:scale-95 transition-transform" to="/chat">
            Se connecter
          </Link>
          <Link className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-bold active:scale-95 transition-transform shadow-sm" to="/signup">
            S'inscrire
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HomeTopNav;
