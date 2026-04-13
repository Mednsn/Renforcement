
 1. Sous-requête dans WHERE : 

SELECT *
FROM voyageurs
WHERE id IN (
    SELECT voyageur_id
    FROM billets
    GROUP BY voyageur_id
    HAVING SUM(prix) > (
        SELECT AVG(total)
        FROM (
            SELECT SUM(prix) AS total
            FROM billets
            GROUP BY voyageur_id
        ) x
    )
);

 2. Sous-requête dans SELECT :

SELECT 
    nom,
    (SELECT SUM(prix)
     FROM billets b
     WHERE b.voyageur_id = v.id) AS total_depense
FROM voyageurs v;

 3. JOIN sur 4 tables*
 
SELECT 
    v.nom,
    l.nom AS ligne,
    g1.nom AS gare_depart,
    g2.nom AS gare_arrivee,
    b.prix
FROM billets b
JOIN voyageurs v ON v.id = b.voyageur_id
JOIN lignes l ON l.id = b.ligne_id
JOIN gares g1 ON g1.id = b.gare_depart_id
JOIN gares g2 ON g2.id = b.gare_arrivee_id;

 4. Enregistrements sans correspondance
SELECT g.*
FROM gares g
LEFT JOIN arrets a ON g.id = a.gare_id
WHERE a.id IS NULL;


