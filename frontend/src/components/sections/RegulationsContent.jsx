import { useEffect, useState } from "react";
import { getRegulations } from "../../utils/regulationsService";
import Pagination from "../ui/Pagination";

const RegulationsContent = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("loi");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    let mounted = true;
    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getRegulations();
        // Map backend fields to card fields
        const mapped = (data || []).map((r) => ({
          id: r.id || r.title,
          category: r.domain || "",
          title: r.title || "",
          description: r.description || "",
          doc_type: r.doc_type || "",
          icon: r.icon || "description",
          url: r.url || "#",
        }));
        if (!mounted) return;
        setItems(mapped);
        // apply default filter (loi)
        setFilteredItems(mapped.filter((m) => m.doc_type === "loi"));
      } catch (err) {
        if (!mounted) return;
        setError(err?.message || String(err));
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to page 1 when filter changes
    if (!filter) {
      setFilteredItems(items);
      return;
    }
    setFilteredItems(items.filter((i) => i.doc_type === filter));
  };

  return (
    <div className="max-w-[1200px] mx-auto w-full px-lg py-xl">
      <div className="mb-lg">
        <h2 className="font-h1 text-h1 text-primary mb-xs flex flex-start">Répertoire Réglementaire</h2>
        <div className="h-1 w-24 bg-secondary rounded-full"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-md max-w-2xl text-left">
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
        <button
          onClick={() => handleFilter("loi")}
          className={`pb-md border-b-2 uppercase tracking-widest whitespace-nowrap font-label-bold text-sm ${
            activeFilter === "loi"
              ? "border-primary text-primary"
              : "border-transparent text-outline hover:text-primary transition-colors"
          }`}
        >
          Lois
        </button>
        <button
          onClick={() => handleFilter("decret")}
          className={`pb-md border-b-2 uppercase tracking-widest whitespace-nowrap font-label-bold text-sm ${
            activeFilter === "decret"
              ? "border-primary text-primary"
              : "border-transparent text-outline hover:text-primary transition-colors"
          }`}
        >
          Décrets
        </button>
        <button
          onClick={() => handleFilter("arrete")}
          className={`pb-md border-b-2 uppercase tracking-widest whitespace-nowrap font-label-bold text-sm ${
            activeFilter === "arrete"
              ? "border-primary text-primary"
              : "border-transparent text-outline hover:text-primary transition-colors"
          }`}
        >
          Arrêtés
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {isLoading ? (
          <div className="col-span-full text-center py-md">Chargement...</div>
        ) : error ? (
          <div className="col-span-full text-center text-negative py-md">Erreur: {error}</div>
        ) : (() => {
          // Calculate pagination
          const startIndex = (currentPage - 1) * itemsPerPage;
          const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
          
          return (
            <> 
              {paginatedItems.map((card) => (
              <div
                key={card.id}
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
                  <button
                  onClick={() => window.open(card.url, "_blank")}
                  className="w-full bg-primary text-white py-sm font-label-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-colors">
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
            </>
          );
        })()}
      </div>

      {/* Pagination Controls */}
      {!isLoading && !error && filteredItems.length > 0 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={Math.ceil(filteredItems.length / itemsPerPage)} 
          onPageChange={setCurrentPage} 
        />
      )}

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
