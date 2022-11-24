class Elements {

    get product() {

        return '.x-product-card-description__product-name';
    }

    get brand() {

        return '.x-product-card-description__brand-name';
    }

    get element() {

        return '.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb.x-product-card__pic.x-product-card__pic-catalog';
    }


    get discountLabel() {

        return '._1HVtliqmrPb2bIG6xwIDiB._3gKF8JbPdGWYvoO_otXiIk.brm-300gk_uJHcVn8DNeN';
    }


    get addToFavourites() {
        return '[aria-label="Добавить в избранное"]'
    }

    get addedToFavourites() {
        return '.icon.icon_heart-catalog-added.icon_direction-down.icon_32.Kt8S1_tj7F0otbYDAT3vh._1IMizFixvGz_89jYlG_Lzq'
    }

    get removeFromFavourites() {
        return '[aria-label="Убрать из избранного"]'
    }


    get readMore() {
         return '._3TygiMyZt-E0XovSovSUgv a' 
        }

        get oldPrice() {
            return '.x-product-card-description__price-old' 
           }

           get leftButton() {
            return '.Gl23jlPzT7tX_0dxVXnJk._3IoLcA7FgIFeTrn0M6tOaH>svg' 
           }
           get rightButton() {
            return '.Gl23jlPzT7tX_0dxVXnJk._1aS93cNiall4P80CuspPBE>svg' 
           }

           get priceNew() {
            return '.x-product-card-description__price-new' 
           }
}

module.exports = new Elements();