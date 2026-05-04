const regulationCards = [
  {
    category: "Loi de Base",
    icon: "description",
    title: "Code de l'Urbanisme - Loi n° 2013-01",
    description:
      "Cadre législatif fondamental définissant les règles d'utilisation du sol, la planification urbaine et les régimes d'autorisation.",
  },
  {
    category: "Construction",
    icon: "architecture",
    title: "Code de la Construction et de l'Habitation",
    description:
      "Normes techniques de sécurité, d'accessibilité et de performance énergétique pour les bâtiments résidentiels et publics.",
  },
  {
    category: "Aménagement",
    icon: "landscape",
    title: "Loi n° 2018-10 sur l'Aménagement du Territoire",
    description:
      "Définition des orientations stratégiques pour le développement équilibré des régions et la protection des espaces naturels.",
  },
  {
    category: "Foncier",
    icon: "home_work",
    title: "Code Foncier et Domanial - Loi 2013-01",
    description:
      "Dispositions relatives à la propriété foncière, à la gestion du domaine de l'État et aux procédures d'immatriculation.",
  },
  {
    category: "Décret Public",
    icon: "gavel",
    title: "Décret sur les Établissements Classés",
    description:
      "Réglementation spécifique aux industries et activités pouvant présenter des dangers ou inconvénients pour le voisinage.",
  },
];

const RegulationsContent = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-lg py-xl">
      <div className="mb-lg">
        <h2 className="font-h1 text-h1 text-primary mb-xs">Répertoire Réglementaire</h2>
        <div className="h-1 w-24 bg-secondary rounded-full"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-md max-w-2xl">
          Accédez à l'ensemble des textes juridiques régissant l'urbanisme, l'aménagement du territoire et la construction en République du Bénin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg mb-xl">
        <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-lg flex flex-col justify-center relative overflow-hidden">
          <div className="beninese-pattern absolute inset-0 pointer-events-none"></div>
          <label className="font-label-bold text-caption uppercase text-secondary mb-sm block">Recherche Juridique</label>
          <div className="relative group">
            <span
              className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary-container"
              data-icon="search"
            >
              search
            </span>
            <input
              className="w-full bg-white border border-outline-variant pl-xl pr-md py-md font-body-md focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container outline-none transition-all"
              placeholder="Rechercher par article, mot-clé ou numéro de décret..."
              type="text"
            />
          </div>
          <div className="mt-md flex flex-wrap gap-xs">
            <span className="px-sm py-1 bg-surface-container-high rounded-full text-caption font-label-bold text-on-surface-variant cursor-pointer hover:bg-secondary-container/30">
              Zonage Cotonou
            </span>
            <span className="px-sm py-1 bg-surface-container-high rounded-full text-caption font-label-bold text-on-surface-variant cursor-pointer hover:bg-secondary-container/30">
              Loi 2013-01
            </span>
            <span className="px-sm py-1 bg-surface-container-high rounded-full text-caption font-label-bold text-on-surface-variant cursor-pointer hover:bg-secondary-container/30">
              Permis de construire
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 bg-primary-container text-on-primary p-lg border-l-4 border-secondary flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-sm">
              <span className="material-symbols-outlined text-secondary" data-icon="star" data-weight="fill">
                star
              </span>
              <span className="text-xs font-label-bold uppercase tracking-widest text-on-primary-container">
                Mise à jour majeure
              </span>
            </div>
            <h3 className="font-h3 text-h3 leading-tight mb-sm">Décret N° 2021-393</h3>
            <p className="text-on-primary-container text-caption">
              Réglementation des servitudes d'utilité publique et des zones de protection.
            </p>
          </div>
          <button className="mt-lg flex items-center justify-between w-full py-md px-md bg-white/10 hover:bg-white/20 border border-white/20 transition-colors">
            <span className="font-label-bold text-xs uppercase tracking-widest">Consulter le texte</span>
            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      <div className="flex border-b border-outline-variant mb-lg space-x-xl overflow-x-auto">
        <button className="pb-md border-b-2 border-primary font-label-bold text-sm text-primary uppercase tracking-widest whitespace-nowrap">
          Codes Nationaux
        </button>
        <button className="pb-md border-b-2 border-transparent font-label-bold text-sm text-outline hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap">
          Décrets
        </button>
        <button className="pb-md border-b-2 border-transparent font-label-bold text-sm text-outline hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap">
          Réglementations Locales
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {regulationCards.map((card) => (
          <div
            key={card.title}
            className="bg-surface-container-lowest border border-outline-variant hover:border-primary-container transition-all hover:shadow-lg group flex flex-col"
          >
            <div className="h-1 bg-secondary w-1/4 group-hover:w-full transition-all duration-300"></div>
            <div className="p-lg flex-1">
              <div className="flex justify-between items-start mb-md">
                <span className="text-[10px] font-label-bold text-secondary uppercase tracking-tighter">{card.category}</span>
                <span className="material-symbols-outlined text-outline text-md" data-icon={card.icon}>
                  {card.icon}
                </span>
              </div>
              <h4 className="font-h3 text-body-lg text-primary mb-sm">{card.title}</h4>
              <p className="text-on-surface-variant font-body-md text-sm mb-lg line-clamp-3">{card.description}</p>
            </div>
            <div className="p-lg pt-0">
              <button className="w-full bg-primary text-white py-sm font-label-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-colors">
                Consulter
              </button>
            </div>
          </div>
        ))}

        <div className="bg-secondary-container/10 border-2 border-dashed border-secondary/30 p-lg flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-md shadow-sm">
            <span className="material-symbols-outlined text-secondary" data-icon="cloud_download">
              cloud_download
            </span>
          </div>
          <h4 className="font-h3 text-body-md text-on-secondary-container mb-xs">Bibliothèque Complète</h4>
          <p className="text-caption text-on-secondary-container mb-lg">
            Téléchargez l'intégralité du répertoire juridique en format compressé.
          </p>
          <button className="text-secondary font-label-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:underline">
            Tout télécharger (PDF)
            <span className="material-symbols-outlined text-sm" data-icon="chevron_right">
              chevron_right
            </span>
          </button>
        </div>
      </div>

      <div className="my-xl flex items-center">
        <div className="flex-1 h-px bg-outline-variant"></div>
        <div className="px-md flex items-center gap-md">
          <span className="material-symbols-outlined text-secondary text-lg" data-icon="filter_vintage">
            filter_vintage
          </span>
        </div>
        <div className="flex-1 h-px bg-outline-variant"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl opacity-80 mb-xl">
        <div className="flex gap-md">
          <span className="material-symbols-outlined text-primary" data-icon="verified_user">
            verified_user
          </span>
          <div>
            <h5 className="font-label-bold text-sm text-primary uppercase mb-xs">Authenticité Garantie</h5>
            <p className="text-caption leading-relaxed">
              Tous les documents présentés sur cette plateforme sont conformes aux publications du Journal Officiel de la République du Bénin.
            </p>
          </div>
        </div>
        <div className="flex gap-md">
          <span className="material-symbols-outlined text-primary" data-icon="update">
            update
          </span>
          <div>
            <h5 className="font-label-bold text-sm text-primary uppercase mb-xs">Dernière Mise à Jour</h5>
            <p className="text-caption leading-relaxed">
              La base de données réglementaire a été actualisée pour la dernière fois le 12 Mai 2024 avec les nouveaux décrets d'application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationsContent;
