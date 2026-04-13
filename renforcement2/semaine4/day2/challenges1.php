<?php

interface Livraison {
    public function calculerCout(array $articles, float $totalCommande = 0, bool $horsEurope = false): float;
    public function estimerDelai(): string;
}


class LivraisonStandard implements Livraison {

    public function calculerCout(array $articles, float $totalCommande = 0, bool $horsEurope = false): float {
        return ($totalCommande > 50) ? 0 : 5;
    }

    public function estimerDelai(): string {
        return "5 - 7 jours";
    }
}


class LivraisonExpress implements Livraison {

    public function calculerCout(array $articles, float $totalCommande = 0, bool $horsEurope = false): float {
        $poids = array_sum(array_map(fn($a) => $a['poids'], $articles));
        return ($poids * 2) + 10;
    }

    public function estimerDelai(): string {
        return "1 - 2 jours";
    }
}

class PointRelais implements Livraison {

    public function calculerCout(array $articles, float $totalCommande = 0, bool $horsEurope = false): float {
        $poids = array_sum(array_map(fn($a) => $a['poids'], $articles));
        $cout = 3;

        if ($poids > 5) {
            $cout += 1;
        }

        return $cout;
    }

    public function estimerDelai(): string {
        return "3 - 5 jours";
    }
}

class LivraisonInternationale implements Livraison {

    public function calculerCout(array $articles, float $totalCommande = 0, bool $horsEurope = false): float {
        $poids = array_sum(array_map(fn($a) => $a['poids'], $articles));

        $cout = 15 + ($poids * 3);

        if ($horsEurope) {
            $cout += 20;
        }

        return $cout;
    }

    public function estimerDelai(): string {
        return "10 - 15 jours";
    }
}


class Commande {
    private array $articles = [];
    private Livraison $livraison;

    public function __construct(Livraison $livraison) {
        $this->livraison = $livraison;
    }

    public function ajouterArticle(string $nom, float $prix, float $poids) {
        $this->articles[] = [
            'nom' => $nom,
            'prix' => $prix,
            'poids' => $poids
        ];
    }

    public function totalArticles(): float {
        return array_sum(array_map(fn($a) => $a['prix'], $this->articles));
    }

    public function calculerTotal(bool $horsEurope = false): float {
        $totalArticles = $this->totalArticles();
        $fraisLivraison = $this->livraison->calculerCout($this->articles, $totalArticles, $horsEurope);

        return $totalArticles + $fraisLivraison;
    }

    public function afficher(): void {
        echo "Total articles: " . $this->totalArticles() . "€\n";
        echo "Délai: " . $this->livraison->estimerDelai() . "\n";
    }
}
