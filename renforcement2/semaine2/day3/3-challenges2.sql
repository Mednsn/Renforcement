CREATE DATABASE plateforme_messanger;
USE  plateforme_messanger;

CREATE TABLE utilisateurs(
    id int AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(200),
    lastname VARCHAR(200),
    email VARCHAR(255) unique not null,
    password VARCHAR(255),
    date_inscription DATE
);

CREATE TABLE publications(
    id int AUTO_INCREMENT PRIMARY KEY,
    contenu TEXT,
    date_publication DATETIME,
    utilisateur_id int,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
);

CREATE TABLE commentaires(
    id int AUTO_INCREMENT PRIMARY KEY,
    contenu TEXT,
    date_commentaire DATETIME,
    utilisateur_id int,
    publication_id int,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (publication_id) REFERENCES publications(id)
);


CREATE TABLE likes (
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200),
    utilisateur_id int,
    date_liked DATETIME,
    publication_id int,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (publication_id) REFERENCES publications(id),
);

CREATE TABLE abonnements (
    id int AUTO_INCREMENT PRIMARY KEY,
    follower_id int,
    date_abonnement DATETIME,
    following_id int,
    FOREIGN KEY (follower_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (following_id) REFERENCES utilisateurs(id),

);


CREATE TABLE messages (
    id int AUTO_INCREMENT PRIMARY KEY,
    contenu TEXT,
    date_send DATETIME,
    destinateur_id int,
    destinataire_id int,
    FOREIGN KEY (destinateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (destinataire_id) REFERENCES utilisateurs(id)
);


CREATE TABLE hashtag (
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200),
    date_hashed DATETIME
);

CREATE TABLE publication_hashtag (
    publication_id int,
    hashtag_id int,
    PRIMARY KEY (publication_id, hashtag_id),
    FOREIGN KEY (publication_id) REFERENCES publications(id),
    FOREIGN KEY (hashtag_id) REFERENCES hashtag(id)
);