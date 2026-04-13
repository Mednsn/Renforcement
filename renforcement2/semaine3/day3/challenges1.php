<?php

abstract class Transport {
    
    public function __construct(
        protected string $nom,
        protected float $vitesse_max,
        protected int $capacite_passagers,
        protected float $consommation
    ) {}

    public function tempsTrajet($distance) {
        return $distance / $this->vitesse_max;
    }

    abstract public function calculerCoutTrajet($distance, $passagers);
}

class Voiture extends Transport {

    public function calculerCoutTrajet($distance, $p) {
        return ($distance/100)*7*1.8;
    }
}

class Train extends Transport {
    public function calculerCoutTrajet($distance, $p) {
        return (($distance/100)*30*0.15)/$p;
    }
}

class Avion extends Transport {
    public function calculerCoutTrajet($distance, $p) {
        return (($distance/100)*250*2.5)/$p;
    }
}
