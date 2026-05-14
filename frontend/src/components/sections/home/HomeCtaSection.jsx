import { Link } from "react-router-dom";

const HomeCtaSection = () => {
  return (
    <section className="py-xl">
      <div className="container mx-auto px-8 max-w-5xl">
        <div className="bg-primary-container rounded-[24px] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-20"></div>
          <div className="relative z-10">
            <h2 className="font-h2 text-h2 text-white mb-6">Prêt(e) à régulariser vos projets ?</h2>
            <p className="text-primary-fixed-dim text-body-lg mb-lg max-w-2xl mx-auto">
              Rejoignez des milliers de béninois qui utilisent déjà RegChat pour sécuriser leurs investissements immobiliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="bg-white text-primary px-8 py-4 rounded-lg font-label-bold hover:bg-slate-100 transition-transform active:scale-95 shadow-lg"
                to="/chat"
              >
                Commencer maintenant
              </Link>
              <a className="border border-white/30 text-white px-8 py-4 rounded-lg font-label-bold hover:bg-white/10 transition-colors" href="#">
                Contacter un expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCtaSection;
