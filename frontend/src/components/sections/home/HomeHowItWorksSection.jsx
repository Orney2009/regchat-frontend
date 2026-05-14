const steps = [
  {
    id: 1,
    title: "Posez votre question",
    description:
      "Interrogez la plateforme en langage naturel, sans avoir besoin de maitriser le jargon juridique complexe.",
  },
  {
    id: 2,
    title: "L'IA analyse les sources",
    description:
      "Le moteur identifie les decrets, lois et règlements municipaux pertinents pour votre situation spécifique.",
  },
  {
    id: 3,
    title: "Réponse avec références",
    description:
      "Recevez une synthèse claire accompagnée des articles de loi précis pour appuyer vos démarches.",
  },
];

const HomeHowItWorksSection = () => {
  return (
    <section className="py-xl bg-white overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <img
              alt="Espace de travail moderne"
              className="rounded-2xl shadow-2xl relative z-10 w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWm1H9oSs0sYZ8KFeIuYnr68yMNKpgjlwZszv6SoOBmnORJiVVlTH6wYU0kjVI1h1BVQDqd_nMY551Crcczx4hLjhTW1iEUV2x6TX-73R4nTN_WNljQfy4SD21oEHmLDjS2YNQ-jsibE03BEsd4Tfwjwo8uhAMLiTxPOCbVajuALf0lj72YUpa3zHfL7QFsTUYsMte6FDaX4J40ygkFVUWbeartN6397inEcfCeA_ujPOGHCMmn7sXEHQ2hVsG3iGw9iDClH6089Q"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-white font-label-bold text-lg">+150 Decrets Analysés</p>
              <p className="text-primary-fixed-dim text-caption uppercase tracking-wider">Mise à jour hebdomadaire</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="font-h2 text-h2 text-primary mb-xl">Comment ça fonctionne ?</h2>
            <div className="space-y-10">
              {steps.map((step) => (
                <div className="flex gap-6 group" key={step.id}>
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container flex items-center justify-center rounded-full text-primary font-bold border border-outline-variant group-hover:bg-primary group-hover:text-white transition-colors">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="font-h3 text-lg text-primary mb-2">{step.title}</h4>
                    <p className="text-on-surface-variant font-body-md">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorksSection;
