<?php

function debug($variable) {
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}


function redirection($url) {
    header("Location: $url");
    exit;
}

function affichage($fichier, $variablesVue = []) {
    /** 
     La fonction "extract" va créer autant de variables qu'il y a d'indices
     dans l'array qui est passé en paramètre. Ces variables auront les noms
     des indices de l'array et comme valeurs, les valeurs correspondantes.
     ex : 
        $personne = [ "nom" => "Mentor", "prenom" => "Gérard" ];
        extract($personne);
    L'exécution de la fonction "extract" revient à faire :
        $nom = $personne["nom"];
        $prenom = $personne["prenom"];
    */
    extract($variablesVue); 
    include "vues/header.html.php";
    include "vues/$fichier";
    include "vues/footer.html.php";    
}

function lien($controleur, $methode = "liste", $id = null ) {
    return "?controleur=$controleur&methode=$methode" . ($id ? "&id=$id" : "");
}