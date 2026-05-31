$(document).ready(function() {  //document attend que tout le html se charge  avant d'executer le code//
    $('.gallery').mauGallery({  //cela appelle plugin sur le div gallery du fichier html //
        columns: {              //va definir combien de collonne afficher selan la taille d'ecran//
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,         //agrandissement au clic//
        lightboxId: 'myAwesomeLightbox',
        showTags: true,        // active les boutons filtres (mariage,concert.....)//
        tagsPosition: 'top'    // place les filtres audessus de la galerie//
    });
});
