
 1. Gares desservies par TGV Paris-Lyon
SELECT 
    g.nom AS gare,
    a.heure_passage
FROM lignes l
JOIN arrets a ON l.id = a.ligne_id
JOIN gares g ON g.id = a.gare_id
WHERE l.nom = 'TGV Paris-Lyon'
ORDER BY a.ordre;

 2. Nombre de lignes par gare
SELECT 
    g.nom,
    COUNT(DISTINCT a.ligne_id) AS nb_lignes
FROM gares g
JOIN arrets a ON g.id = a.gare_id
GROUP BY g.id
ORDER BY nb_lignes DESC;

 2.A :  gare la plus connectée
SELECT 
    g.nom,
    COUNT(DISTINCT a.ligne_id) AS nb_lignes
FROM gares g
JOIN arrets a ON g.id = a.gare_id
GROUP BY g.id
ORDER BY nb_lignes DESC
LIMIT 1;

 3. Chiffre d affaires par ligne

SELECT 
    l.nom,
    SUM(b.prix) AS ca_total
FROM lignes l
JOIN billets b ON l.id = b.ligne_id
GROUP BY l.id;

 4. Gares non desservies par TGV

SELECT g.*
FROM gares g
WHERE g.id NOT IN (
    SELECT a.gare_id
    FROM arrets a
    JOIN lignes l ON l.id = a.ligne_id
    WHERE l.type = 'TGV'
);

 5. Voyageur le plus dépensier ce mois

SELECT 
    v.nom,
    SUM(b.prix) AS total_depense
FROM voyageurs v
JOIN billets b ON v.id = b.voyageur_id
WHERE MONTH(b.date_voyage) = MONTH(CURDATE())
GROUP BY v.id
ORDER BY total_depense DESC
LIMIT 1;

 6. Trajet le plus frequent

SELECT 
    gare_depart_id,
    gare_arrivee_id,
    COUNT(*) AS nb_trajets
FROM billets
GROUP BY gare_depart_id, gare_arrivee_id
ORDER BY nb_trajets DESC
LIMIT 1;

 7. Revenu moyen par voyageur par région

