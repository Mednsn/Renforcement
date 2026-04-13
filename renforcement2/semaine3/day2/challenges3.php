<?php
class Bibliotheque
{
    private $livres = [];
    private $emprunts = [];

    public function __construct()
    {
        $this->livres = [
            ["titre" => "PHP Basics", "auteur" => "John", "disponible" => true],
            ["titre" => "OOP Master", "auteur" => "Smith", "disponible" => true],
            ["titre" => "Laravel Guide", "auteur" => "Taylor", "disponible" => true],
        ];
    }

    public function emprunter($titre, $emprunteur)
    {
        foreach ($this->livres as &$l) {
            if ($l['titre'] === $titre && $l['disponible']) {

                $l['disponible'] = false;

                $this->emprunts[] = [
                    "livre" => $titre,
                    "emprunteur" => $emprunteur,
                    "date_emprunt" => date('Y-m-d'),
                    "date_retour_prevue" => date('Y-m-d', strtotime('+14 days')),
                    "date_retour_effectif" => null,
                    "amende" => 0
                ];

                return "Emprunt OK";
            }
        }

        return "Livre indisponible";
    }

    public function getAmende($emprunteur)
    {
        $total = 0;

        foreach ($this->emprunts as $e) {
            if ($e['emprunteur'] === $emprunteur) {
                $total += $e['amende'];
            }
        }

        return $total;
    }

    public function getStatistiques()
    {
        $disponibles = 0;
        $totalAmendes = 0;

        foreach ($this->livres as $l) {
            if ($l['disponible']) {
                $disponibles++;
            }
        }

        foreach ($this->emprunts as $e) {
            $totalAmendes += $e['amende'];
        }

        return [
            "livres_disponibles" => $disponibles,
            "total_emprunts" => count($this->emprunts),
            "total_amendes" => $totalAmendes
        ];
    }
}



