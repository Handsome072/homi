import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters?: (filters: FilterState) => void;
}

interface FilterState {
  priceMin: number;
  priceMax: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  propertyTypes: string[];
  amenities: string[];
}

const propertyTypes = [
  { id: 'apartment', label: 'Appartement' },
  { id: 'house', label: 'Maison' },
  { id: 'villa', label: 'Villa' },
  { id: 'loft', label: 'Loft' },
  { id: 'studio', label: 'Studio' },
];

const amenities = [
  { id: 'wifi', label: 'Wifi' },
  { id: 'kitchen', label: 'Cuisine' },
  { id: 'washer', label: 'Lave-linge' },
  { id: 'aircon', label: 'Climatisation' },
  { id: 'pool', label: 'Piscine' },
  { id: 'parking', label: 'Parking gratuit' },
];

export function FiltersModal({ isOpen, onClose, onApplyFilters }: FiltersModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState<FilterState>({
    priceMin: 0,
    priceMax: 2000,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    propertyTypes: [],
    amenities: [],
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleApply = () => {
    onApplyFilters?.(filters);
    onClose();
  };

  const handleClear = () => {
    setFilters({
      priceMin: 0,
      priceMax: 2000,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      propertyTypes: [],
      amenities: [],
    });
  };

  const togglePropertyType = (id: string) => {
    setFilters(prev => ({
      ...prev,
      propertyTypes: prev.propertyTypes.includes(id)
        ? prev.propertyTypes.filter(t => t !== id)
        : [...prev.propertyTypes, id]
    }));
  };

  const toggleAmenity = (id: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(id)
        ? prev.amenities.filter(a => a !== id)
        : [...prev.amenities, id]
    }));
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Overlay background */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl w-full max-w-3xl mx-4 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <h2 className="text-[16px]" style={{ fontWeight: 600, color: '#222222' }}>
            Filtres
          </h2>
          <div className="w-8" /> {/* Spacer for centering */}
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Price Range */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-[18px] mb-4" style={{ fontWeight: 600, color: '#222222' }}>
              Fourchette de prix
            </h3>
            <p className="text-[14px] mb-4" style={{ color: '#717171' }}>
              Prix par mois avant frais et taxes
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-[12px] mb-1 block" style={{ color: '#717171' }}>Minimum</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[14px]" style={{ color: '#717171' }}>€</span>
                  <input
                    type="number"
                    value={filters.priceMin}
                    onChange={(e) => setFilters(prev => ({ ...prev, priceMin: parseInt(e.target.value) || 0 }))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-[14px] focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
              <span className="text-gray-400 mt-6">—</span>
              <div className="flex-1">
                <label className="text-[12px] mb-1 block" style={{ color: '#717171' }}>Maximum</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[14px]" style={{ color: '#717171' }}>€</span>
                  <input
                    type="number"
                    value={filters.priceMax}
                    onChange={(e) => setFilters(prev => ({ ...prev, priceMax: parseInt(e.target.value) || 0 }))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-[14px] focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rooms and Beds */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-[18px] mb-6" style={{ fontWeight: 600, color: '#222222' }}>
              Chambres et lits
            </h3>
            {[
              { key: 'bedrooms' as const, label: 'Chambres' },
              { key: 'beds' as const, label: 'Lits' },
              { key: 'bathrooms' as const, label: 'Salles de bain' },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between mb-4">
                <span className="text-[16px]" style={{ color: '#222222' }}>{label}</span>
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      onClick={() => setFilters(prev => ({ ...prev, [key]: num }))}
                      className={`px-4 py-2 rounded-full text-[14px] border transition-colors ${
                        filters[key] === num
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                      }`}
                    >
                      {num === 0 ? 'Tous' : num === 8 ? '8+' : num}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Property Type */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-[18px] mb-6" style={{ fontWeight: 600, color: '#222222' }}>
              Type de logement
            </h3>
            <div className="flex flex-wrap gap-3">
              {propertyTypes.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => togglePropertyType(id)}
                  className={`px-4 py-3 rounded-full text-[14px] border transition-colors ${
                    filters.propertyTypes.includes(id)
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="text-[18px] mb-6" style={{ fontWeight: 600, color: '#222222' }}>
              Équipements
            </h3>
            <div className="flex flex-wrap gap-3">
              {amenities.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => toggleAmenity(id)}
                  className={`px-4 py-3 rounded-full text-[14px] border transition-colors ${
                    filters.amenities.includes(id)
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <button
            onClick={handleClear}
            className="text-[14px] underline hover:text-gray-600 transition-colors"
            style={{ fontWeight: 600, color: '#222222' }}
          >
            Tout effacer
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg text-[14px] hover:bg-gray-800 transition-colors"
            style={{ fontWeight: 600 }}
          >
            Afficher les logements
          </button>
        </div>
      </div>
    </div>
  );
}

