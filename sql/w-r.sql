# HeidiSQL Dump 
#
# --------------------------------------------------------
# Host:                         127.0.0.1
# Database:                     w-r
# Server version:               5.0.6-beta-nt
# Server OS:                    Win32
# Target compatibility:         HeidiSQL w/ MySQL Server 4.1
# Target max_allowed_packet:    1048576
# HeidiSQL version:             4.0
# Date/time:                    2009-05-19 10:15:16
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
  `user_id` int(11) unsigned NOT NULL,
  `start` datetime default NULL,
  `created` datetime default NULL,
  PRIMARY KEY  (`id`),
  KEY `id` (`id`)
) TYPE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'hours'
#

# No data found.



#
# Table structure for table 'intervals'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ `intervals` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `hour_id` int(11) unsigned NOT NULL,
  `project_id` int(11) unsigned default NULL,
  `period` int(11) unsigned NOT NULL,
  `type` char(1) NOT NULL default 'r',
  `created` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`)
) TYPE=InnoDB DEFAULT CHARSET=utf8;



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
  `user_id` int(11) unsigned NOT NULL,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`)
) TYPE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'projects'
#

# No data found.



#
# Table structure for table 'users'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ `users` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `username` varchar(64) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `password` varchar(64) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `email` varchar(100) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `uuid` varchar(50) NOT NULL default '',
  `active` tinyint(1) unsigned NOT NULL default '0',
  `created` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `uuid` (`uuid`)
) TYPE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'users'
#

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS;*/
REPLACE INTO `users` (`id`, `username`, `password`, `email`, `uuid`, `active`, `created`) VALUES
	('1','admin','c129b324aee662b04eccf68babba85851346dff9','admin@w-r.ru','4a06df7e237e2',0,'2009-05-10 18:06:54');
/*!40000 ALTER TABLE `users` ENABLE KEYS;*/
UNLOCK TABLES;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;*/
