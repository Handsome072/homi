import { Heart, Share, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Slider from 'react-slick';
import type { Settings as SlickSettings } from 'react-slick';

interface ImageGalleryProps {
  images: string[];
  showFavoriteButton?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  useFadeSlider?: boolean; // Enable fade animation slider mode
}

export function ImageGallery({
  images,
  showFavoriteButton = true,
  isFavorite = false,
  onFavoriteToggle,
  useFadeSlider = false
}: ImageGalleryProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowAllPhotos(true);
  };

  const closeGallery = () => {
    setShowAllPhotos(false);
  };

  const goToNextImage = useCallback(() => {
    if (useFadeSlider && sliderRef.current) {
      sliderRef.current.slickNext();
    } else {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length, useFadeSlider]);

  const goToPreviousImage = useCallback(() => {
    if (useFadeSlider && sliderRef.current) {
      sliderRef.current.slickPrev();
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length, useFadeSlider]);

  // Keyboard navigation
  useEffect(() => {
    if (!showAllPhotos) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousImage();
      } else if (e.key === 'Escape') {
        closeGallery();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAllPhotos, goToNextImage, goToPreviousImage]);

  // Touch/swipe gesture handlers (for non-slider mode)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (useFadeSlider) return; // Let slider handle touch
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (useFadeSlider) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (useFadeSlider) return;
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swiped left - go to next
        goToNextImage();
      } else {
        // Swiped right - go to previous
        goToPreviousImage();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // React Slick settings for fade animation with scroll/swipe support
  const sliderSettings: SlickSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    adaptiveHeight: false,
    initialSlide: currentImageIndex,
    beforeChange: (_current: number, next: number) => setCurrentImageIndex(next),
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 5, // Lower threshold for more responsive swipe detection
    touchMove: true,
    draggable: true, // Enable mouse drag for desktop scroll-like interaction
    useCSS: true,
    useTransform: true,
    waitForAnimate: false, // Allow rapid transitions during scroll
    accessibility: true,
    lazyLoad: 'progressive' as const,
  };

  // Sync slider with thumbnail selection
  useEffect(() => {
    if (useFadeSlider && sliderRef.current && showAllPhotos) {
      sliderRef.current.slickGoTo(currentImageIndex, false);
    }
  }, [currentImageIndex, useFadeSlider, showAllPhotos]);

  return (
    <>
      {/* Photo Gallery Carousel Modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-[100] bg-black">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent z-20 px-6 py-4 flex items-center justify-between">
            <button
              onClick={closeGallery}
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="text-white font-semibold text-base">
              {currentImageIndex + 1} / {images.length}
            </div>

            <div className="flex items-center gap-4">
              {/* Partager Button */}
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-white">
                <Share className="w-4 h-4" />
                <span className="text-sm underline hidden sm:inline" style={{ fontWeight: 600 }}>Partager</span>
              </button>
              {/* Enregistrer Button */}
              {showFavoriteButton && (
                <button
                  onClick={onFavoriteToggle}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#1E3A5F] text-[#1E3A5F]' : ''}`} />
                  <span className="text-sm underline hidden sm:inline" style={{ fontWeight: 600 }}>Enregistrer</span>
                </button>
              )}
            </div>
          </div>

          {/* Carousel Content */}
          <div
            className="h-full flex items-center justify-center px-4 sm:px-16"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Previous Button */}
            <button
              onClick={goToPreviousImage}
              className="absolute left-2 sm:left-6 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </button>

            {/* Main Image - Fade Slider or Static */}
            {useFadeSlider ? (
              <div className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] mx-auto">
                <Slider ref={sliderRef} {...sliderSettings}>
                  {images.map((image, index) => (
                    <div key={index} className="outline-none">
                      <div className="flex items-center justify-center h-[80vh]">
                        <img
                          src={image}
                          alt={`Photo ${index + 1}`}
                          className="max-w-full max-h-[80vh] object-contain rounded-lg select-none"
                          draggable={false}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="max-w-full max-h-full flex items-center justify-center">
                <img
                  src={images[currentImageIndex]}
                  alt={`Photo ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg select-none"
                  draggable={false}
                />
              </div>
            )}

            {/* Next Button */}
            <button
              onClick={goToNextImage}
              className="absolute right-2 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent z-20 px-6 py-4">
            <div className="flex justify-center gap-2 overflow-x-auto max-w-full pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-white scale-110'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniature ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
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

