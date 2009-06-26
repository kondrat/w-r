# HeidiSQL Dump 
#
# --------------------------------------------------------
# Host:                         127.0.0.1
# Database:                     w-r
# Server version:               5.0.6-beta-nt
# Server OS:                    Win32
# Target compatibility:         HeidiSQL w/ MySQL Server 5.0
# Target max_allowed_packet:    1048576
# HeidiSQL version:             4.0
# Date/time:                    2009-06-22 00:34:37
# --------------------------------------------------------

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;*/


#
# Database structure for database 'w-r'
#

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `w-r` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `w-r`;


#
# Table structure for table 'hours'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ `hours` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `user_id` int(11) unsigned default NULL,
  `key` varchar(32) default NULL,
  `status` enum('open','closed') default 'open',
  `worksession` text,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'hours'
#

LOCK TABLES `hours` WRITE;
/*!40000 ALTER TABLE `hours` DISABLE KEYS;*/
REPLACE INTO `hours` (`id`, `user_id`, `key`, `status`, `worksession`, `created`, `modified`) VALUES
	('1',NULL,NULL,'open','[[[9,"rest","rest_1"],[1,"work","project_1"]]]','2009-06-21 23:39:28','2009-06-21 23:39:28'),
	('2',NULL,NULL,'open','[[[9,"rest","rest_1"],[10,"work","project_1"],[1,"rest","rest_1"]]]','2009-06-21 23:40:19','2009-06-21 23:40:19'),
	('3',NULL,NULL,'open','[[[9,"rest","rest_1"],[10,"work","project_1"],[11,"rest","rest_1"]]]','2009-06-21 23:40:28','2009-06-21 23:40:28'),
	('4',NULL,NULL,'open','[[[1,"rest","rest_1"],[9,"rest","rest_1"]]]','2009-06-22 00:10:13','2009-06-22 00:10:13');
/*!40000 ALTER TABLE `hours` ENABLE KEYS;*/
UNLOCK TABLES;


#
# Table structure for table 'intervals'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ `intervals` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `hour_id` int(11) unsigned NOT NULL,
  `project_id` int(11) unsigned default NULL,
  `interval` int(11) unsigned NOT NULL,
  `type` varchar(10) NOT NULL default 'rest',
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'intervals'
#

LOCK TABLES `intervals` WRITE;
/*!40000 ALTER TABLE `intervals` DISABLE KEYS;*/
REPLACE INTO `intervals` (`id`, `hour_id`, `project_id`, `interval`, `type`, `created`, `modified`) VALUES
	('1','484',NULL,'2','work','2009-06-18 01:00:40','2009-06-18 02:15:27');
/*!40000 ALTER TABLE `intervals` ENABLE KEYS;*/
UNLOCK TABLES;


#
# Table structure for table 'projects'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ `projects` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `name` varchar(256) default NULL,
  `color` varchar(50) default NULL,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'projects'
#

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS;*/
REPLACE INTO `projects` (`id`, `name`, `color`, `created`, `modified`) VALUES
	('2','first',NULL,'2009-04-19 17:43:51','2009-05-19 17:43:51'),
	('3','third',NULL,'2009-05-19 17:49:41','2009-05-19 17:49:41'),
	('4','forth',NULL,'2009-05-19 17:52:25','2009-05-19 17:52:25'),
	('5','fifth',NULL,'2009-05-19 18:16:07','2009-05-19 18:16:07'),
	('6','shestoy',NULL,'2009-05-19 18:33:51','2009-05-19 18:33:51'),
	('7','seventh',NULL,'2009-05-19 18:34:28','2009-05-19 18:34:28'),
	('8','newt',NULL,'2009-06-02 19:39:19','2009-06-02 19:39:19'),
	('9','forTime',NULL,'2009-06-17 21:54:31','2009-06-17 21:54:31');
/*!40000 ALTER TABLE `projects` ENABLE KEYS;*/
UNLOCK TABLES;


#
# Table structure for table 'projects_users'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ `projects_users` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `project_id` int(11) unsigned NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `type` enum('O','C') default 'O',
  `perm` int(10) unsigned default NULL,
  `created` datetime default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



#
# Dumping data for table 'projects_users'
#

LOCK TABLES `projects_users` WRITE;
/*!40000 ALTER TABLE `projects_users` DISABLE KEYS;*/
REPLACE INTO `projects_users` (`id`, `project_id`, `user_id`, `type`, `perm`, `created`) VALUES
	('1','3','2','O',NULL,NULL),
	('2','4','2','O',NULL,NULL),
	('3','6','2','O',NULL,NULL),
	('4','7','1','O',NULL,NULL),
	('5','7','2','O',NULL,NULL);
/*!40000 ALTER TABLE `projects_users` ENABLE KEYS;*/
UNLOCK TABLES;


#
# Table structure for table 'users'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ `users` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `username` varchar(64) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `password` varchar(64) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `timezone` int(3) unsigned default NULL,
  `email` varchar(100) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `uuid` varchar(50) NOT NULL default '',
  `active` tinyint(1) unsigned NOT NULL default '0',
  `created` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `uuid` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'users'
#

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS;*/
REPLACE INTO `users` (`id`, `username`, `password`, `timezone`, `email`, `uuid`, `active`, `created`) VALUES
	('1','admin','c129b324aee662b04eccf68babba85851346dff9',NULL,'admin@w-r.ru','4a06df7e237e2',0,'2009-05-10 18:06:54'),
	('2','work1','c129b324aee662b04eccf68babba85851346dff9',NULL,'work1@mm.ru','4a12b4ab9dc81',0,'2009-05-19 17:31:23'),
	('3','work2','c129b324aee662b04eccf68babba85851346dff9',NULL,'work2@mm.ru','4a1528e104bc9',0,'2009-05-21 14:11:45');
/*!40000 ALTER TABLE `users` ENABLE KEYS;*/
UNLOCK TABLES;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;*/
