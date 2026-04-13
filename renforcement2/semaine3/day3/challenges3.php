<?php

abstract class Article {

    public function __construct( protected string $ref, protected string $des,protected float $ht) {}

    abstract public function calculerPrixTTC();
}

class Produit extends Article {
    public function calculerPrixTTC() {
        return $this->ht * 1.2;
    }
}

class Service extends Article {
    public function calculerPrixTTC() {
        return $this->ht * 1.1;
    }
}

class ProduitAlimentaire extends Article {
    public function calculerPrixTTC() {
        return $this->ht * 1.055;
    }
}

class Facture {
    private array $lignes = [];

    public function ajouterLigne($article, $qte) {
        $this->lignes[] = [$article, $qte];
    }

    public function calculerTotalHT() {
        $t = 0;
        foreach ($this->lignes as $l)
            $t += $l[0]->ht * $l[1];
        return $t;
    }

    public function calculerTotalTTC() {
        $t = 0;
        foreach ($this->lignes as $l)
            $t += $l[0]->calculerPrixTTC() * $l[1];
        return $t;
    }
}


?>