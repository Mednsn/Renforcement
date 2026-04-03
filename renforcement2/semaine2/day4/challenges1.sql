SELECT l.titre, e.nom AS editeur, g.nom AS genre
FROM livres l
JOIN editeurs e ON l.editeur_id = e.id
JOIN genres g ON l.genre_id = g.id;


SELECT e.nom, COUNT(l.id) AS nb_livre
FROM editeurs e
LEFT JOIN livres l ON l.editeur_id = e.id
GROUP BY e.nom
ORDER BY nb_livres DESC;


SELECT g.nom, SUM(l.prix * v.quantite) AS chiffre_affaires
FROM ventes v
JOIN livres l ON v.livre_id = l.id
JOIN genres g ON l.genre_id = g.id
GROUP BY g.nom;

SELECT e.nom
FROM editeurs e
LEFT JOIN livres l ON l.editeur_id = e.id
LEFT JOIN ventes v ON v.livre_id = l.id
WHERE v.id IS NULL;

SELECT g.nom, l.titre, SUM(v.quantite) AS total_vendu
FROM ventes v
JOIN livres l ON v.livre_id = l.id
JOIN genres g ON l.genre_id = g.id
GROUP BY g.nom, l.id
HAVING SUM(v.quantite) = (
  SELECT MAX(total)
  FROM (
    SELECT SUM(v2.quantite) AS total
    FROM ventes v2
    JOIN livres l2 ON v2.livre_id = l2.id
    WHERE l2.genre_id = l.genre_id
    GROUP BY l2.id
  ) t
);

SELECT v.client
FROM ventes v
JOIN livres l ON v.livre_id = l.id
GROUP BY v.client
HAVING COUNT(DISTINCT l.genre_id) > 3;

SELECT l.titre, l.prix
FROM livres l
WHERE l.annee_publication > 2020
AND l.prix > (
  SELECT AVG(l2.prix)
  FROM livres l2
  WHERE l2.genre_id = l.genre_id
);