SELECT c.id, m.nom AS medecin, p.nom AS patient, c.diagnostic
FROM consultations c
JOIN medecins m ON c.medecin_id = m.id
JOIN patients p ON c.patient_id = p.id;



SELECT m.nom, COUNT(c.id) AS nb_consultations
FROM medecins m
JOIN consultations c ON c.medecin_id = m.id
WHERE MONTH(c.date_consultation) = MONTH(CURRENT_DATE())
AND YEAR(c.date_consultation) = YEAR(CURRENT_DATE())
GROUP BY m.nom;



SELECT p.nom, SUM(c.cout) AS total_depense
FROM patients p
LEFT JOIN consultations c ON c.patient_id = p.id
GROUP BY p.nom;


SELECT p.nom
FROM patients p
LEFT JOIN consultations c ON c.patient_id = p.id
WHERE c.id IS NULL;

SELECT m.nom, COUNT(DISTINCT c.patient_id) AS nb_patients
FROM medecins m
JOIN consultations c ON c.medecin_id = m.id
GROUP BY m.nom
ORDER BY nb_patients DESC
LIMIT 1;


SELECT p.nom AS patient, m.nom AS medecin, pr.medicament, pr.posologie
FROM prescriptions pr
JOIN consultations c ON pr.consultation_id = c.id
JOIN patients p ON c.patient_id = p.id
JOIN medecins m ON c.medecin_id = m.id
WHERE p.id = 1; 



SELECT m.specialite, COUNT(c.id) AS nb_consultations
FROM medecins m
JOIN consultations c ON c.medecin_id = m.id
GROUP BY m.specialite
ORDER BY nb_consultations DESC
LIMIT 1;