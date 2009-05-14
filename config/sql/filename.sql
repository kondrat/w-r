#App sql generated on: 2009-05-13 17:05:33 : 1242221793

DROP TABLE IF EXISTS `intervals`;
DROP TABLE IF EXISTS `users`;


CREATE TABLE `intervals` (
	`id` int(11) NOT NULL AUTO_INCREMENT,	PRIMARY KEY  (`id`),
	UNIQUE KEY id (`id`),
	KEY id_2 (`id`));

CREATE TABLE `users` (
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`username` varchar(64) NOT NULL,
	`password` varchar(64) NOT NULL,
	`email` varchar(100) NOT NULL,
	`uuid` varchar(50) NOT NULL,
	`active` tinyint(1) DEFAULT 0 NOT NULL,
	`created` datetime DEFAULT NULL,	PRIMARY KEY  (`id`),
	UNIQUE KEY username (`username`),
	UNIQUE KEY uuid (`uuid`));

