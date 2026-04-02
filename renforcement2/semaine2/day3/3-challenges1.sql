CREATE database gestion_cours_enligne;
USE gestion_cours_enligne;

create table users (
    id int PRIMARY KEY AUTO_INCRIMENT ,
    firstname VARCHAR(200),
    lastname VARCHAR(200),
    email VARCHAR(255) unique not null,
    password VARCHAR(255),
)ENGINE= INNODB ;

create table apprenants(
    niveau VARCHAR(255),
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(id)
)ENGINE=INNODB;

create table formateurs(
    specialite VARCHAR(200),
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(id)
)ENGINE = INNODB;

create table modules(
    id int PRIMARY KEY AUTO_INCRIMENT,
    titre VARCHAR(200),
    order int,
)ENGINE = INNODB;

create table leçons(
    id int PRIMARY KEY AUTO_INCRIMENT,
    titre VARCHAR(200),
    contenu VARCHAR(200),
    duree int,
    module_id int,
    FOREIGN KEY (module_id) REFERENCES modules(id)
)ENGINE = INNODB;

create table categories(
        id int PRIMARY KEY AUTO_INCRIMENT,
        name VARCHAR(200),
        description text
)ENGINE=INNODB;


create table cours(
    id int PRIMARY KEY AUTO_INCRIMENT,
    titre VARCHAR(200),
    description text,
    prix float,
    duree int,
    formateur_id int,
    FOREIGN KEY (formateur_id) REFERENCES formateurs(id),
    module_id int,
    FOREIGN KEY (module_id) REFERENCES modules(id),
     categorie_id int,
    FOREIGN KEY (categorie_id) REFERENCES categories(id)
)ENGINE = INNODB;

create table inscrptions(
    id int PRIMARY KEY AUTO_INCRIMENT,
    date_inscreption TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    progression float,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(id),
    cour_id int,
    FOREIGN KEY (cour_id) REFERENCES cours(id)
)ENGINE=INNODB;

create table avis(
    id int PRIMARY KEY AUTO_INCRIMENT,
    note int,
    commentaire VARCHAR(200),
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(id),
    cour_id int,
    FOREIGN KEY (cour_id) REFERENCES cours(id)
)ENGINE=INNODB;


