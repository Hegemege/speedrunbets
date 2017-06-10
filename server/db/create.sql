/*
    Note: you need to have a mysql server running, check /config/index.js for connection details

    Basically you need to have a user "srb-dev" with password "srb-dev" on your local mysql server.

    Run this script when you have created the server and user.
*/

/* Remove the comments underneath to purge the previous dev DB before re-creating the DB. */
/* DROP DATABASE SpeedrunBets; */
CREATE DATABASE SpeedrunBets;

/* Tables and stuff will be added later */

USE SpeedrunBets;

CREATE TABLE `Game` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `Description` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`Id`)
);

INSERT INTO `Game` (`Name`, `Description`)
VALUES 
    ("Jedi Academy", "Better than Outcast"),
    ("Jedi Outcast", "Worse than Outcast")
;