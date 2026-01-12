import { X, Home, Building2, Castle, Warehouse, LayoutGrid, Wifi, UtensilsCrossed, WashingMachine, Snowflake, Waves, Car, Minus, Plus, Check } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

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
  { id: 'apartment', label: 'Appartement', icon: Building2 },
  { id: 'house', label: 'Maison', icon: Home },
  { id: 'villa', label: 'Villa', icon: Castle },
  { id: 'loft', label: 'Loft', icon: Warehouse },
  { id: 'studio', label: 'Studio', icon: LayoutGrid },
];

const amenities = [
  { id: 'wifi', label: 'Wifi', icon: Wifi },
  { id: 'kitchen', label: 'Cuisine', icon: UtensilsCrossed },
  { id: 'washer', label: 'Lave-linge', icon: WashingMachine },
  { id: 'aircon', label: 'Climatisation', icon: Snowflake },
  { id: 'pool', label: 'Piscine', icon: Waves },
  { id: 'parking', label: 'Parking gratuit', icon: Car },
];

// Price range constants
const MIN_PRICE = 0;
const MAX_PRICE = 2000;
const PRICE_STEP = 50;

export function FiltersModal({ isOpen, onClose, onApplyFilters }: FiltersModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceMin: MIN_PRICE,
    priceMax: MAX_PRICE,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    propertyTypes: [],
    amenities: [],
  });

  // Handle opening/closing animations
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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

  const handleApply = useCallback(() => {
    onApplyFilters?.(filters);
    onClose();
  }, [filters, onApplyFilters, onClose]);

  const handleClear = useCallback(() => {
    setFilters({
      priceMin: MIN_PRICE,
      priceMax: MAX_PRICE,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      propertyTypes: [],
      amenities: [],
    });
  }, []);

  const togglePropertyType = useCallback((id: string) => {
    setFilters(prev => ({
      ...prev,
      propertyTypes: prev.propertyTypes.includes(id)
        ? prev.propertyTypes.filter(t => t !== id)
        : [...prev.propertyTypes, id]
    }));
  }, []);

  const toggleAmenity = useCallback((id: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(id)
        ? prev.amenities.filter(a => a !== id)
        : [...prev.amenities, id]
    }));
  }, []);

  const updateRoomCount = useCallback((key: 'bedrooms' | 'beds' | 'bathrooms', delta: number) => {
    setFilters(prev => ({
      ...prev,
      [key]: Math.max(0, Math.min(8, prev[key] + delta))
    }));
  }, []);

  // Calculate active filter count for the button
  const activeFilterCount =
    (filters.priceMin > MIN_PRICE || filters.priceMax < MAX_PRICE ? 1 : 0) +
    (filters.bedrooms > 0 ? 1 : 0) +
    (filters.beds > 0 ? 1 : 0) +
    (filters.bathrooms > 0 ? 1 : 0) +
    filters.propertyTypes.length +
    filters.amenities.length;

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="filters-modal-title"
    >
      {/* Overlay background with blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl transform transition-all duration-300 ${
          isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <h2 id="filters-modal-title" className="text-lg font-semibold text-gray-900">
            Filtres
          </h2>
          <div className="w-9" aria-hidden="true" /> {/* Spacer for centering */}
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {/* Price Range Section */}
          <section className="mb-10" aria-labelledby="price-section">
            <div className="flex items-center justify-between mb-2">
              <h3 id="price-section" className="text-xl font-semibold text-gray-900">
                Fourchette de prix
              </h3>
              {(filters.priceMin > MIN_PRICE || filters.priceMax < MAX_PRICE) && (
                <span className="text-xs font-medium text-[#5EC6D8] bg-[#5EC6D8]/10 px-2 py-1 rounded-full">
                  Filtre actif
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Prix par nuit avant frais et taxes
            </p>

            {/* Price Range Visual Bar */}
            <div className="relative mb-8">
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="absolute h-2 bg-gradient-to-r from-[#4FA7C9] to-[#5EC6D8] rounded-full transition-all duration-200"
                  style={{
                    left: `${(filters.priceMin / MAX_PRICE) * 100}%`,
                    right: `${100 - (filters.priceMax / MAX_PRICE) * 100}%`
                  }}
                />
              </div>
              {/* Price markers */}
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">€{MIN_PRICE}</span>
                <span className="text-xs text-gray-400">€{MAX_PRICE}+</span>
              </div>
            </div>

            {/* Price Inputs */}
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs font-medium text-gray-500 mb-2 block uppercase tracking-wide">
                  Minimum
                </label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400 group-focus-within:text-[#5EC6D8] transition-colors">€</span>
                  <input
                    type="number"
                    value={filters.priceMin}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceMin: Math.min(parseInt(e.target.value) || 0, prev.priceMax - PRICE_STEP)
                    }))}
                    min={MIN_PRICE}
                    max={filters.priceMax - PRICE_STEP}
                    step={PRICE_STEP}
                    className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:border-[#5EC6D8] focus:ring-4 focus:ring-[#5EC6D8]/10 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center w-8 mt-6">
                <div className="w-4 h-0.5 bg-gray-300 rounded-full" />
              </div>
              <div className="flex-1">
                <label className="text-xs font-medium text-gray-500 mb-2 block uppercase tracking-wide">
                  Maximum
                </label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400 group-focus-within:text-[#5EC6D8] transition-colors">€</span>
                  <input
                    type="number"
                    value={filters.priceMax}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceMax: Math.max(parseInt(e.target.value) || MAX_PRICE, prev.priceMin + PRICE_STEP)
                    }))}
                    min={filters.priceMin + PRICE_STEP}
                    max={MAX_PRICE}
                    step={PRICE_STEP}
                    className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:border-[#5EC6D8] focus:ring-4 focus:ring-[#5EC6D8]/10 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10" />

          {/* Rooms and Beds Section */}
          <section className="mb-10" aria-labelledby="rooms-section">
            <div className="flex items-center justify-between mb-2">
              <h3 id="rooms-section" className="text-xl font-semibold text-gray-900">
                Chambres et lits
              </h3>
              {(filters.bedrooms > 0 || filters.beds > 0 || filters.bathrooms > 0) && (
                <span className="text-xs font-medium text-[#5EC6D8] bg-[#5EC6D8]/10 px-2 py-1 rounded-full">
                  {filters.bedrooms + filters.beds + filters.bathrooms > 1 ? 'Filtres actifs' : 'Filtre actif'}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Choisissez le nombre minimum de pièces
            </p>
            <div className="space-y-5">
              {[
                { key: 'bedrooms' as const, label: 'Chambres', sublabel: 'Espaces de couchage' },
                { key: 'beds' as const, label: 'Lits', sublabel: 'Nombre de lits disponibles' },
                { key: 'bathrooms' as const, label: 'Salles de bain', sublabel: 'Salles de bain privées' },
              ].map(({ key, label, sublabel }) => (
                <div
                  key={key}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-200 ${
                    filters[key] > 0 ? 'bg-[#5EC6D8]/5 border-2 border-[#5EC6D8]/20' : 'bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <div className="flex-1">
                    <span className="text-base font-medium text-gray-900">{label}</span>
                    <p className="text-xs text-gray-500 mt-0.5">{sublabel}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateRoomCount(key, -1)}
                      disabled={filters[key] === 0}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-200 ${
                        filters[key] === 0
                          ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                          : 'border-gray-300 text-gray-600 hover:border-[#5EC6D8] hover:text-[#5EC6D8] hover:bg-[#5EC6D8]/5 active:scale-95'
                      }`}
                      aria-label={`Diminuer ${label}`}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-lg font-semibold text-gray-900">
                      {filters[key] === 0 ? '—' : filters[key] === 8 ? '8+' : filters[key]}
                    </span>
                    <button
                      onClick={() => updateRoomCount(key, 1)}
                      disabled={filters[key] >= 8}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-200 ${
                        filters[key] >= 8
                          ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                          : 'border-gray-300 text-gray-600 hover:border-[#5EC6D8] hover:text-[#5EC6D8] hover:bg-[#5EC6D8]/5 active:scale-95'
                      }`}
                      aria-label={`Augmenter ${label}`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10" />

          {/* Property Type Section */}
          <section className="mb-10" aria-labelledby="property-type-section">
            <div className="flex items-center justify-between mb-2">
              <h3 id="property-type-section" className="text-xl font-semibold text-gray-900">
                Type de logement
              </h3>
              {filters.propertyTypes.length > 0 && (
                <span className="text-xs font-medium text-[#5EC6D8] bg-[#5EC6D8]/10 px-2 py-1 rounded-full">
                  {filters.propertyTypes.length} sélectionné{filters.propertyTypes.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Sélectionnez un ou plusieurs types
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {propertyTypes.map(({ id, label, icon: Icon }) => {
                const isSelected = filters.propertyTypes.includes(id);
                return (
                  <button
                    key={id}
                    onClick={() => togglePropertyType(id)}
                    className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                      isSelected
                        ? 'border-[#5EC6D8] bg-[#5EC6D8]/5 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-[#5EC6D8] rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <Icon className={`w-7 h-7 transition-colors ${isSelected ? 'text-[#5EC6D8]' : 'text-gray-500'}`} />
                    <span className={`text-sm font-medium transition-colors ${isSelected ? 'text-[#5EC6D8]' : 'text-gray-700'}`}>
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10" />

          {/* Amenities Section */}
          <section className="mb-6" aria-labelledby="amenities-section">
            <div className="flex items-center justify-between mb-2">
              <h3 id="amenities-section" className="text-xl font-semibold text-gray-900">
                Équipements
              </h3>
              {filters.amenities.length > 0 && (
                <span className="text-xs font-medium text-[#5EC6D8] bg-[#5EC6D8]/10 px-2 py-1 rounded-full">
                  {filters.amenities.length} sélectionné{filters.amenities.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Équipements essentiels et confort
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {amenities.map(({ id, label, icon: Icon }) => {
                const isSelected = filters.amenities.includes(id);
                return (
                  <button
                    key={id}
                    onClick={() => toggleAmenity(id)}
                    className={`relative flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                      isSelected
                        ? 'border-[#5EC6D8] bg-[#5EC6D8]/5 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#5EC6D8]/20' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-5 h-5 transition-colors ${isSelected ? 'text-[#5EC6D8]' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-sm font-medium transition-colors ${isSelected ? 'text-[#5EC6D8]' : 'text-gray-700'}`}>
                      {label}
                    </span>
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-[#5EC6D8] rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-5 border-t border-gray-100 bg-gray-50/50">
          <button
            onClick={handleClear}
            disabled={activeFilterCount === 0}
            className={`text-sm font-semibold underline underline-offset-2 transition-all duration-200 ${
              activeFilterCount === 0
                ? 'text-gray-300 cursor-not-allowed no-underline'
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Tout effacer {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
          <button
            onClick={handleApply}
            className="px-8 py-3.5 text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #4FA7C9 0%, #5EC6D8 100%)'
            }}
          >
            Afficher les logements
          </button>
        </div>
      </div>
    </div>
  );
}

