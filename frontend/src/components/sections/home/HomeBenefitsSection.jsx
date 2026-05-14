const cards = [
  {
    icon: "speed",
    title: "Gain de temps",
    description:
      "Accédez instantanément aux réponses qui prenaient autrefois des jours de recherche administrative.",
  },
  {
    icon: "verified",
    title: "Précision juridique",
    description:
      "Notre IA est entrainée specifiquement sur le Code de l'Urbanisme et les decrets béninois en vigueur.",
  },
  {
    icon: "event_available",
    title: "Accessibilité 24/7",
    description:
      "Votre consultant juridique numérique est disponible partout au Bénin, à tout moment du jour ou de la nuit.",
  },
];

const HomeBenefitsSection = () => {
  return (
    <section className="py-xl bg-surface relative pattern-overlay">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-h2 text-h2 text-primary mb-4">L'excellence au service du citoyen</h2>
          <div className="h-1 w-24 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {cards.map((card) => (
            <div
              className="bg-white p-lg border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-4 border-t-4 border-t-secondary"
              key={card.title}
            >
              <div className="bg-surface-container-low p-3 rounded-lg text-primary">
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary">{card.title}</h3>
              <p className="text-on-surface-variant font-body-md">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBenefitsSection;
