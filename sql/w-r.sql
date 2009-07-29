# HeidiSQL Dump 
#
# --------------------------------------------------------
# Host:                         127.0.0.1
# Database:                     w-r
# Server version:               5.0.67-community-nt
# Server OS:                    Win32
# Target compatibility:         HeidiSQL w/ MySQL Server 5.0
# Target max_allowed_packet:    1048576
# HeidiSQL version:             4.0
# Date/time:                    2009-07-29 21:39:50
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;



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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;



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
  `pos` int(11) unsigned default '0',
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;



#
# Dumping data for table 'projects'
#

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS;*/
REPLACE INTO `projects` (`id`, `name`, `color`, `pos`, `created`, `modified`) VALUES
	('2','first',NULL,NULL,'2009-04-19 17:43:51','2009-05-19 17:43:51'),
	('3','third54','teal','0','2009-05-19 17:49:41','2009-07-29 15:13:22'),
	('4','forth23','black','0','2009-05-19 17:52:25','2009-07-29 16:26:30'),
	('5','fifth',NULL,NULL,'2009-05-19 18:16:07','2009-05-19 18:16:07'),
	('7','seventh42','#FF5EFF','0','2009-05-19 18:34:28','2009-07-29 15:15:31'),
	('8','newt',NULL,NULL,'2009-06-02 19:39:19','2009-06-02 19:39:19'),
	('9','forTime',NULL,NULL,'2009-06-17 21:54:31','2009-06-17 21:54:31'),
	('10','asdgf2',NULL,NULL,'2009-06-29 13:51:19','2009-06-29 13:52:35'),
	('12','sdf333',NULL,NULL,'2009-06-29 14:29:34','2009-06-29 14:29:34'),
	('13','sdg',NULL,NULL,'2009-06-29 14:34:20','2009-06-29 14:34:20'),
	('14','sdfe33',NULL,NULL,'2009-06-29 14:36:21','2009-06-29 14:36:21'),
	('16','user3',NULL,NULL,'2009-06-29 15:24:56','2009-06-29 15:24:56'),
	('17','user31',NULL,NULL,'2009-06-29 15:25:19','2009-06-29 15:25:19'),
	('18','user32',NULL,NULL,'2009-06-29 15:25:26','2009-06-29 15:25:26'),
	('19','secOne31','green','0','2009-06-29 20:15:39','2009-07-29 15:13:29'),
	('20','brandNew','navy','0','2009-07-29 14:59:50','2009-07-29 17:05:54');
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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;



#
# Dumping data for table 'projects_users'
#

LOCK TABLES `projects_users` WRITE;
/*!40000 ALTER TABLE `projects_users` DISABLE KEYS;*/
REPLACE INTO `projects_users` (`id`, `project_id`, `user_id`, `type`, `perm`, `created`) VALUES
	('7','14','3','O',NULL,NULL),
	('9','16','3','O',NULL,NULL),
	('10','17','3','O',NULL,NULL),
	('11','18','3','O',NULL,NULL),
	('35','3','2','O',NULL,NULL),
	('36','19','2','O',NULL,NULL),
	('37','7','2','O',NULL,NULL),
	('43','4','2','O',NULL,NULL),
	('45','20','2','O',NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;



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
