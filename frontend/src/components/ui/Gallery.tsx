import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import type { Photo } from "../../types/roverPhoto";

interface GalleryProps {
  photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <div>
      <LightGallery
        onInit={() => {
          console.log("light gallery initialised");
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {photos.map((photo) => (
          <a href={photo.img_src} className="gallery-item">
            <img
              alt={`${photo.rover.name} ${photo.camera.name} sol ${photo.sol}`}
              src={photo.img_src}
              className="image-responsive object-cover w-full h-full rounded-lg hover:scale-102 duration-500"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
