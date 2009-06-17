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
# Date/time:                    2009-06-17 22:08:14
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
  `worksession` char(32) default NULL,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=484 DEFAULT CHARSET=utf8;



#
# Dumping data for table 'hours'
#

LOCK TABLES `hours` WRITE;
/*!40000 ALTER TABLE `hours` DISABLE KEYS;*/
REPLACE INTO `hours` (`id`, `user_id`, `key`, `status`, `worksession`, `created`, `modified`) VALUES
	('449',NULL,'7b7596c816d820445c93d488d69158b5','closed','47c95e6bcab097e66b38a1e65e77ca71','2009-06-04 14:03:39','2009-06-04 14:04:39'),
	('450',NULL,'7b7596c816d820445c93d488d69158b5','closed','47c95e6bcab097e66b38a1e65e77ca71','2009-06-04 14:04:39','2009-06-04 14:05:39'),
	('451',NULL,'7b7596c816d820445c93d488d69158b5','closed','47c95e6bcab097e66b38a1e65e77ca71','2009-06-04 14:05:39','2009-06-04 14:06:39'),
	('452',NULL,'7b7596c816d820445c93d488d69158b5','closed','47c95e6bcab097e66b38a1e65e77ca71','2009-06-04 14:06:39','2009-06-04 14:07:39'),
	('453',NULL,'7b7596c816d820445c93d488d69158b5','closed','47c95e6bcab097e66b38a1e65e77ca71','2009-06-04 14:07:39','2009-06-04 14:08:39'),
	('454',NULL,'7b7596c816d820445c93d488d69158b5','closed','47c95e6bcab097e66b38a1e65e77ca71','2009-06-04 14:08:39','2009-06-04 14:09:40'),
	('455',NULL,'7b7596c816d820445c93d488d69158b5','closed','47c95e6bcab097e66b38a1e65e77ca71','2009-06-04 14:09:40','2009-06-04 14:10:39'),
	('456',NULL,'7b7596c816d820445c93d488d69158b5','closed','47c95e6bcab097e66b38a1e65e77ca71','2009-06-04 14:10:39','2009-06-04 14:12:05'),
	('457',NULL,'7b7596c816d820445c93d488d69158b5','closed','47c95e6bcab097e66b38a1e65e77ca71','2009-06-04 14:12:05','2009-06-04 21:12:36'),
	('458',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:12:36','2009-06-04 21:14:10'),
	('459',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:14:10','2009-06-04 21:15:16'),
	('460',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:15:16','2009-06-04 21:17:14'),
	('461',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:17:14','2009-06-04 21:18:39'),
	('462',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:18:39','2009-06-04 21:19:45'),
	('463',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:19:45','2009-06-04 21:20:45'),
	('464',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:20:45','2009-06-04 21:21:45'),
	('465',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:21:45','2009-06-04 21:22:45'),
	('466',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:22:45','2009-06-04 21:23:45'),
	('467',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:23:45','2009-06-04 21:24:45'),
	('468',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:24:45','2009-06-04 21:25:45'),
	('469',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:25:45','2009-06-04 21:26:45'),
	('470',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:26:45','2009-06-04 21:27:45'),
	('471',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:27:45','2009-06-04 21:28:45'),
	('472',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:28:45','2009-06-04 21:29:45'),
	('473',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:29:45','2009-06-04 21:30:45'),
	('474',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:30:45','2009-06-04 21:31:45'),
	('475',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:31:45','2009-06-04 21:32:45'),
	('476',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:32:45','2009-06-04 21:33:52'),
	('477',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:33:52','2009-06-04 21:34:59'),
	('478',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:34:59','2009-06-04 21:35:59'),
	('479',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:35:59','2009-06-04 21:36:59'),
	('480',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:36:59','2009-06-04 21:38:55'),
	('481',NULL,'7b7596c816d820445c93d488d69158b5','closed','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:38:55','2009-06-04 21:39:50'),
	('482',NULL,'7b7596c816d820445c93d488d69158b5','open','d2ec6d432553cde1613c8d3e557ffc48','2009-06-04 21:39:50','2009-06-04 21:39:50'),
	('483',NULL,'afef6c617014be3edc25f30dff00018d','open',NULL,'2009-06-10 19:25:06','2009-06-10 19:25:06');
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

# No data found.



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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;



#
# Dumping data for table 'projects'
#

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS;*/
REPLACE INTO `projects` (`id`, `name`, `color`, `created`, `modified`) VALUES
	('2','first',NULL,'2009-05-19 17:43:51','2009-05-19 17:43:51'),
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;



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
