<?php

class Cinema
{
    private $salles = [];

    public function ajouterSalle($nom, $nbPlaces)
    {
        $this->salles[$nom] = [
            "places" => $nbPlaces,
            "reservations" => []
        ];
    }

    public function reserver($nomSalle, $nomClient, $nbPlaces)
    {
        if (!isset($this->salles[$nomSalle])) {
            return "Salle n'exeste pas";
        }

        $salle = $this->salles[$nomSalle];

        $occupe = array_sum($salle['reservations']);
        $disponible = $salle['places'] - $occupe;

        if ($nbPlaces > $disponible) {
            return "pas de places";
        }

        $salle['reservations'][$nomClient] = $nbPlaces;

        return "reservation OK";
    }

    public function annulerReservation($nomSalle, $nomClient)
    {
        unset($this->salles[$nomSalle]['reservations'][$nomClient]);
    }

    public function affichierOccupation()
    {
        foreach ($this->salles as $nom => $salle) {
            $occupe = array_sum($salle['reservations']);
            $total = $salle['places'];
            $pourcentage = ($occupe / $total) * 100;

            echo "$nom : $occupe/$total ($pourcentage%)\n";
        }
    }

    public function getRevenuEstimes($prixBillet)
    {
        $totalPlaces = 0;

        foreach ($this->salles as $salle) {
            $totalPlaces += array_sum($salle['reservations']);
        }

        return $totalPlaces * $prixBillet;
    }
}

