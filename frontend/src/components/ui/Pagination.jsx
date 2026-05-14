const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  // Generate page numbers with ellipsis for large page counts
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first 3, ellipsis, last 3, with current page always visible
      pages.push(1, 2, 3);

      if (currentPage > 5) {
        pages.push("...");
      }

      if (currentPage > 4 && currentPage < totalPages - 2) {
        pages.push(currentPage);
      }

      if (currentPage < totalPages - 4) {
        pages.push("...");
      }

      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }

    // Remove duplicates
    return Array.from(new Set(pages)).sort((a, b) => {
      if (a === "..." || b === "...") return a === "..." ? 1 : -1;
      return a - b;
    });
  };

  const pageNumbers = getPageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePageClick = (page) => {
    if (page !== "..." && page !== currentPage) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center gap-md py-xl">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-md py-sm border border-outline-variant rounded-sm font-label-bold text-sm uppercase tracking-widest transition-all ${
          currentPage === 1
            ? "text-outline-variant bg-surface-container-high cursor-not-allowed opacity-50"
            : "text-primary border-primary hover:bg-primary-container/20"
        }`}
      >
        <span className="material-symbols-outlined text-base" data-icon="chevron_left">
          chevron_left
        </span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-xs">
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            disabled={page === "..."}
            className={`w-10 h-10 rounded-sm font-label-bold text-sm uppercase transition-all ${
              page === "..."
                ? "cursor-default text-outline-variant"
                : page === currentPage
                  ? "bg-primary text-white border border-primary font-label-bold"
                  : "border border-outline-variant text-on-surface hover:border-primary hover:text-primary"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-md py-sm border border-outline-variant rounded-sm font-label-bold text-sm uppercase tracking-widest transition-all ${
          currentPage === totalPages
            ? "text-outline-variant bg-surface-container-high cursor-not-allowed opacity-50"
            : "text-primary border-primary hover:bg-primary-container/20"
        }`}
      >
        <span className="material-symbols-outlined text-base" data-icon="chevron_right">
          chevron_right
        </span>
      </button>

      {/* Page Info */}
      <span className="text-caption text-on-surface-variant ml-md font-body-md">
        Page {currentPage} sur {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
