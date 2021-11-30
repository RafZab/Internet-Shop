package pl.internet_shop.service;

import pl.internet_shop.entity.Gallery;

import java.util.List;

public interface GalleryService {
    List<Gallery> fetchAllGalleries();

    Gallery fetchGalleryByProductId(Long aProductId);

    Gallery saveGalleryByproductId(Gallery aGallery, Long aProductId);

    void deleteGalleryByProductId(Long aGalleryId);

    Gallery updateGalleryByProductId(Long aGalleryId, Gallery aGallery);
}
