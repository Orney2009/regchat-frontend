import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
    <section className="relative min-h-[921px] flex items-center pt-xl">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Vue aerienne de Cotonou avec infrastructures modernes"
          className="w-full h-full object-cover brightness-[0.4]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDatk0cyMkXSqyoypH9T0qZiQMQyQaWGhaCzF__OFC9D9pQDwKMleNWaPNQc0cK4SdxzBvEGehQ0-ZnFffQCCs5spWDjAtgBua_cDffXqVafZZt_JeRMlpqN5Hy4SYl9WJMHyND68R8F88keG-MaP-tJPIL_6UnpKj8e6f0O0LnZbXuUZceT7gZci0l3jmT4kCBfAtIIX1CZnnWufbYKj_lTNKaWVzfXsFsfeJJKO7rXFdEW1-6qFp-75YxjXSFZSd_xXXCS-enqCY"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-fixed text-caption font-label-bold mb-md uppercase tracking-widest">
            Innovation Institutionnelle
          </span>

          <h1 className="font-h1 text-h1 text-white mb-lg leading-tight">
            L'urbanisme au Benin, simplifié par l'IA.
          </h1>

          <p className="font-body-lg text-body-lg text-slate-200 mb-xl max-w-lg">
            Naviguez à travers les règlementations foncières, les permis de construire et les lois d'urbanisme béninoises avec une précision assistée par intelligence artificielle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="bg-primary text-white px-8 py-4 rounded-lg font-label-bold hover:bg-primary-container transition-colors shadow-lg flex items-center justify-center gap-2"
              to="/chat"
            >
              S'inscrire
            </Link>
            <Link
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-label-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              to="/chat"
            >
              Lancer une discussion anonyme
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
