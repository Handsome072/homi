import { Heart, Share, ChevronLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface ImageGalleryProps {
  images: string[];
  showFavoriteButton?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

export function ImageGallery({ 
  images, 
  showFavoriteButton = true,
  isFavorite = false,
  onFavoriteToggle 
}: ImageGalleryProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowAllPhotos(true);
  };

  // Scroll to selected image when gallery opens
  useEffect(() => {
    if (showAllPhotos && imageRefs.current[currentImageIndex]) {
      setTimeout(() => {
        imageRefs.current[currentImageIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100);
    }
  }, [showAllPhotos, currentImageIndex]);

  // Helper function to render an image in the modal gallery
  const renderModalImage = (index: number, isFullWidth: boolean) => {
    if (index >= images.length) return null;
    return (
      <div 
        ref={(el) => (imageRefs.current[index] = el)} 
        className="relative group overflow-hidden cursor-pointer"
      >
        <img 
          src={images[index]} 
          alt={`Photo ${index + 1}`} 
          className={isFullWidth ? "w-full h-auto" : "w-full h-full object-cover"} 
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
    );
  };

  return (
    <>
      {/* Photo Gallery Modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-[100] bg-white">
          {/* Header */}
          <div className="sticky top-0 bg-white z-10 px-6 py-4 flex items-center justify-between border-b border-gray-200">
            <button
              onClick={() => setShowAllPhotos(false)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4">
              {/* Partager Button */}
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Share className="w-4 h-4" />
                <span className="text-sm underline" style={{ fontWeight: 600 }}>Partager</span>
              </button>
              {/* Enregistrer Button */}
              {showFavoriteButton && (
                <button 
                  onClick={onFavoriteToggle}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#5EC6D8] text-[#5EC6D8]' : ''}`} />
                  <span className="text-sm underline" style={{ fontWeight: 600 }}>Enregistrer</span>
                </button>
              )}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="h-[calc(100vh-73px)] overflow-y-auto bg-white">
            <div className="max-w-[630px] mx-auto px-6 py-8">
              <div className="space-y-2">
                {/* Image 1 - Full width */}
                {renderModalImage(0, true)}

                {/* Images 2 & 3 - Side by side */}
                {images.length > 1 && (
                  <div className="grid grid-cols-2 gap-2 h-[280px]">
                    {renderModalImage(1, false)}
                    {renderModalImage(2, false)}
                  </div>
                )}

                {/* Image 4 - Full width */}
                {renderModalImage(3, true)}

                {/* Images 5 & 6 - Side by side */}
                {images.length > 4 && (
                  <div className="grid grid-cols-2 gap-2 h-[280px]">
                    {renderModalImage(4, false)}
                    {renderModalImage(5, false)}
                  </div>
                )}

                {/* Image 7 - Full width */}
                {renderModalImage(6, true)}

                {/* Images 8 & 9 - Side by side */}
                {images.length > 7 && (
                  <div className="grid grid-cols-2 gap-2 h-[280px]">
                    {renderModalImage(7, false)}
                    {renderModalImage(8, false)}
                  </div>
                )}

                {/* Image 10 - Full width */}
                {images.length > 9 && renderModalImage(9, true)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden h-[300px] md:h-[400px] relative">
        {/* Large image */}
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
          <img
            src={images[0]}
            alt="Property main"
            className="w-full h-full object-cover cursor-pointer transition-all"
            onClick={() => openGallery(0)}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
        </div>

        {/* Small images */}
        {images.slice(1, 5).map((img, index) => (
          <div key={index} className="hidden md:block relative group overflow-hidden">
            <img
              src={img}
              alt={`Property ${index + 2}`}
              className="w-full h-full object-cover cursor-pointer transition-all"
              onClick={() => openGallery(index + 1)}
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
          </div>
        ))}

        {/* Show all photos button */}
        <button
          onClick={() => openGallery(0)}
          className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg border border-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2"
          style={{ fontWeight: 600, fontSize: '14px' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 3h4v4H3V3zm6 0h4v4H9V3zM3 9h4v4H3V9zm6 0h4v4H9V9z" />
          </svg>
          Afficher toutes les photos
        </button>
      </div>
    </>
  );
}

