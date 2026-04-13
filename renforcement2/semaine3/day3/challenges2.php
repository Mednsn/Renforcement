<?php

abstract class Employe {

    public function __construct( protected string $nom,protected string $prenom,protected int $annee) {}

    public function anciennete() {
        return date('Y') - $this->annee;
    }

    abstract public function calculerSalaire();
}

class Developpeur extends Employe { 

    public function calculerSalaire() {
        
        $bonus = $this->anciennete()*500;
        $prime = $this->anciennete()>5 ? 0.1*3000 : 0;
        return 3000 + $bonus + $prime;
    }
}

class Commercial extends Employe {
    public function __construct($n,$p,$a, private $ca) {
        parent::__construct($n,$p,$a);
    }

    public function calculerSalaire() {
        return 2000 + 0.1*$this->ca;
    }
}

class Manager extends Employe {
    public function __construct($n,$p,$a, private $team) {
        parent::__construct($n,$p,$a);
    }

    public function calculerSalaire() {
        $bonus = 200*$this->team;
        if ($this->team > 10) $bonus *= 1.15;
        return 4000 + $bonus;
    }
}
