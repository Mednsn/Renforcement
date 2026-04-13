<?php

class Distributeur
{
    private $produits = [];
    private $caisse = 0;

    public function afficherProduits()
    {
        foreach ($this->produits as $p) {
            echo $p['nom'] . " - " . $p['prix'] . "€ (stock: " . $p['stock'] . ")\n";
        }
    }

    public function acheter($nomProduit, $montantInsere)
    {
        foreach ($this->produits as &$p) {
            if ($p['nom'] === $nomProduit) {

                if ($p['stock'] <= 0) {
                    return "verifier le stock";
                }

                if ($montantInsere < $p['prix']) {
                    return $montantInsere; 
                }

                $p['stock']--;
                $this->caisse += $p['prix'];

                return $montantInsere - $p['prix'];
            }
        }

        return "Produit par trouvé";
    }

    public function remplir($nomProduit, $quantite)
    {
        foreach ($this->produits as &$p) {
            if ($p['nom'] === $nomProduit) {
                $p['stock'] += $quantite;
            }
        }
    }

    public function getCaisse()
    {
        return $this->caisse;
    }
}
