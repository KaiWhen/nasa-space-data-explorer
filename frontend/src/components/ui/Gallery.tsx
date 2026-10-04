import React, { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import type { Photo } from "../../types/roverPhoto";

interface GalleryProps {
  photos: Photo[];
}

const MIN_SIDE = 256;

const loadIfLargeEnough = (photo: Photo): Promise<Photo | null> =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () =>
      resolve(
        Math.min(img.naturalWidth, img.naturalHeight) >= MIN_SIDE
          ? photo
          : null,
      );
    img.onerror = () => resolve(null);
    img.src = photo.img_src;
  });

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [visiblePhotos, setVisiblePhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(() => photos.length > 0);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      photos.filter((photo) => photo.img_src).map(loadIfLargeEnough),
    ).then((results) => {
      if (cancelled) return;
      setVisiblePhotos(results.filter((p): p is Photo => p !== null));
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [photos]);

  if (loading) {
    return <p className="text-center text-gray-400">Loading photos…</p>;
  }

  if (visiblePhotos.length === 0) {
    return <p className="text-center text-gray-400">No photos found.</p>;
  }

  return (
    <div>
      <LightGallery
        onInit={() => {
          console.log("light gallery initialised");
        }}
        speed={500}
        plugins={[lgZoom]}
        elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {visiblePhotos.map((photo) => (
          <a
            key={`${photo.id}-${photo.camera.name}-${photo.sol}`}
            href={photo.img_src}
            className="gallery-item block overflow-hidden rounded-lg"
          >
            <img
              alt={`${photo.rover.name} ${photo.camera.name} sol ${photo.sol}`}
              src={photo.img_src}
              className="image-responsive object-cover w-full h-52 rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
