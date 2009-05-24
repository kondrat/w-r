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
# Date/time:                    2009-05-25 00:41:24
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
  `start` datetime default NULL,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  KEY `id` (`id`)
) TYPE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'hours'
#

LOCK TABLES `hours` WRITE;
/*!40000 ALTER TABLE `hours` DISABLE KEYS;*/
REPLACE INTO `hours` (`id`, `user_id`, `key`, `status`, `start`, `created`, `modified`) VALUES
	('181',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:18:52',NULL),
	('182',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:19:52',NULL),
	('183',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:20:52',NULL),
	('184',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:21:52',NULL),
	('185',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:22:52',NULL),
	('186',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:23:52',NULL),
	('187',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:24:52',NULL),
	('188',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:25:52',NULL),
	('189',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:26:52',NULL),
	('190',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:27:52',NULL),
	('191',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:28:52',NULL),
	('192',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:29:52',NULL),
	('193',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:30:05',NULL),
	('194',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:30:52',NULL),
	('195',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:31:05',NULL),
	('196',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:31:52',NULL),
	('197',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:32:05',NULL),
	('198',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:32:52',NULL),
	('199',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:33:05',NULL),
	('200',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:33:52',NULL),
	('201',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:34:05',NULL),
	('202',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:34:52',NULL),
	('203',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:35:05',NULL),
	('204',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:35:52',NULL),
	('205',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:36:05',NULL),
	('206',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:36:52',NULL),
	('207',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:37:05',NULL),
	('208',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:37:52',NULL),
	('209',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:38:05',NULL),
	('210',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 00:38:19',NULL),
	('211',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:38:51',NULL),
	('212',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:39:04',NULL),
	('213',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 00:39:08',NULL),
	('214',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:39:52',NULL),
	('215',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:40:05',NULL),
	('216',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 00:40:08',NULL),
	('217',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:40:51',NULL),
	('218',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:41:04',NULL),
	('219',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:41:51',NULL),
	('220',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:42:04',NULL),
	('221',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:42:51',NULL),
	('222',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:43:04',NULL),
	('223',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:43:51',NULL),
	('224',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:44:04',NULL),
	('225',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:44:51',NULL),
	('226',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:45:04',NULL),
	('227',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:45:51',NULL),
	('228',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:46:04',NULL),
	('229',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:46:51',NULL),
	('230',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:47:04',NULL),
	('231',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 00:47:51',NULL),
	('232',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:48:04',NULL),
	('233',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:49:04',NULL),
	('234',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:50:04',NULL),
	('235',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:51:04',NULL),
	('236',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:52:05',NULL),
	('237',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:53:04',NULL),
	('238',NULL,'63582da2e6c595734b4904e4341fca00','closed',NULL,'2009-05-24 00:54:04',NULL),
	('240','2',NULL,'open',NULL,'2009-05-24 00:59:04',NULL),
	('241',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 01:40:24',NULL),
	('242',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 01:48:55',NULL),
	('243',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 11:41:25',NULL),
	('244',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 12:41:28',NULL),
	('245',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','closed',NULL,'2009-05-24 13:05:55',NULL),
	('246',NULL,'77534e87db8b214986558a0fe0f24a0a','open',NULL,'2009-05-24 14:12:14',NULL),
	('247','3',NULL,'open',NULL,'2009-05-24 14:12:53',NULL),
	('248',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 14:34:45',NULL),
	('249',NULL,'7dd70a448dbc9ce7e7b79d76edb43c4f','open',NULL,'2009-05-24 15:01:41',NULL),
	('250',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 15:37:35',NULL),
	('251',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 16:37:34',NULL),
	('252',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 17:37:34',NULL),
	('253',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','closed',NULL,'2009-05-24 18:37:34',NULL),
	('254',NULL,'cdba02d3b088f87d2e5ba4ae2d25e7b8','open',NULL,'2009-05-24 19:37:34',NULL),
	('257',NULL,'63582da2e6c595734b4904e4341fca00','open',NULL,'2009-05-24 23:38:23','2009-05-24 23:38:23');
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
) TYPE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'intervals'
#

LOCK TABLES `intervals` WRITE;
/*!40000 ALTER TABLE `intervals` DISABLE KEYS;*/
REPLACE INTO `intervals` (`id`, `hour_id`, `project_id`, `interval`, `type`, `created`, `modified`) VALUES
	('225','181',NULL,'60','rest','2009-05-24 00:18:52','2009-05-24 00:19:41'),
	('226','182',NULL,'55','rest','2009-05-24 00:19:52','2009-05-24 00:20:41'),
	('227','182',NULL,'5','work','2009-05-24 00:20:12','2009-05-24 00:20:12'),
	('228','183',NULL,'60','rest','2009-05-24 00:20:52','2009-05-24 00:21:41'),
	('229','184',NULL,'41','rest','2009-05-24 00:21:52','2009-05-24 00:22:32'),
	('230','184',NULL,'19','work','2009-05-24 00:22:32','2009-05-24 00:22:41'),
	('231','185',NULL,'26','work','2009-05-24 00:22:52','2009-05-24 00:23:12'),
	('232','185',NULL,'34','rest','2009-05-24 00:23:12','2009-05-24 00:23:41'),
	('233','186',NULL,'25','work','2009-05-24 00:23:52','2009-05-24 00:24:12'),
	('234','186',NULL,'35','rest','2009-05-24 00:23:52','2009-05-24 00:24:41'),
	('235','187',NULL,'60','rest','2009-05-24 00:24:52','2009-05-24 00:25:41'),
	('236','188',NULL,'16','rest','2009-05-24 00:25:52','2009-05-24 00:26:01'),
	('237','188',NULL,'44','work','2009-05-24 00:26:01','2009-05-24 00:26:41'),
	('238','189',NULL,'26','work','2009-05-24 00:26:52','2009-05-24 00:27:12'),
	('239','189',NULL,'34','rest','2009-05-24 00:27:12','2009-05-24 00:27:41'),
	('240','190',NULL,'42','rest','2009-05-24 00:27:52','2009-05-24 00:28:32'),
	('241','190',NULL,'18','work','2009-05-24 00:28:32','2009-05-24 00:28:41'),
	('242','191',NULL,'53','work','2009-05-24 00:28:52','2009-05-24 00:29:41'),
	('243','191',NULL,'7','rest','2009-05-24 00:29:12','2009-05-24 00:29:32'),
	('244','192',NULL,'60','work','2009-05-24 00:29:52','2009-05-24 00:30:41'),
	('245','193',NULL,'10','rest','2009-05-24 00:30:05','2009-05-24 00:30:05'),
	('246','193',NULL,'50','work','2009-05-24 00:30:14','2009-05-24 00:30:54'),
	('247','194',NULL,'49','work','2009-05-24 00:30:52','2009-05-24 00:31:31'),
	('248','195',NULL,'23','work','2009-05-24 00:31:05','2009-05-24 00:31:24'),
	('249','195',NULL,'37','rest','2009-05-24 00:31:24','2009-05-24 00:31:54'),
	('250','194',NULL,'11','rest','2009-05-24 00:31:31','2009-05-24 00:31:41'),
	('251','196',NULL,'60','rest','2009-05-24 00:31:52','2009-05-24 00:32:41'),
	('252','197',NULL,'59','work','2009-05-24 00:32:05','2009-05-24 00:32:54'),
	('253','197',NULL,'1','rest','2009-05-24 00:32:05','2009-05-24 00:32:05'),
	('254','198',NULL,'60','rest','2009-05-24 00:32:52','2009-05-24 00:33:41'),
	('255','199',NULL,'60','work','2009-05-24 00:33:05','2009-05-24 00:33:54'),
	('256','200',NULL,'60','rest','2009-05-24 00:33:52','2009-05-24 00:34:41'),
	('257','201',NULL,'60','work','2009-05-24 00:34:05','2009-05-24 00:34:54'),
	('258','202',NULL,'30','rest','2009-05-24 00:34:52','2009-05-24 00:35:11'),
	('259','203',NULL,'60','work','2009-05-24 00:35:05','2009-05-24 00:35:54'),
	('260','202',NULL,'30','work','2009-05-24 00:35:22','2009-05-24 00:35:41'),
	('261','204',NULL,'49','work','2009-05-24 00:35:52','2009-05-24 00:36:31'),
	('262','205',NULL,'60','work','2009-05-24 00:36:05','2009-05-24 00:36:54'),
	('263','204',NULL,'11','rest','2009-05-24 00:36:31','2009-05-24 00:36:41'),
	('264','206',NULL,'60','rest','2009-05-24 00:36:52','2009-05-24 00:37:41'),
	('265','207',NULL,'60','work','2009-05-24 00:37:05','2009-05-24 00:37:54'),
	('266','208',NULL,'60','rest','2009-05-24 00:37:52','2009-05-24 00:38:41'),
	('267','209',NULL,'60','work','2009-05-24 00:38:06','2009-05-24 00:38:54'),
	('268','210',NULL,'50','rest','2009-05-24 00:38:19','2009-05-24 00:38:58'),
	('269','211',NULL,'60','rest','2009-05-24 00:38:51','2009-05-24 00:39:41'),
	('270','212',NULL,'60','work','2009-05-24 00:39:04','2009-05-24 00:39:54'),
	('271','213',NULL,'47','rest','2009-05-24 00:39:08','2009-05-24 00:39:48'),
	('272','213',NULL,'13','work','2009-05-24 00:39:48','2009-05-24 00:39:58'),
	('273','214',NULL,'60','rest','2009-05-24 00:39:52','2009-05-24 00:40:42'),
	('274','215',NULL,'60','work','2009-05-24 00:40:05','2009-05-24 00:40:55'),
	('275','216',NULL,'2710','work','2009-05-24 00:40:08','2009-05-24 01:40:13'),
	('276','216',NULL,'850','rest','2009-05-24 00:40:23','2009-05-24 01:39:53'),
	('277','217',NULL,'60','rest','2009-05-24 00:40:51','2009-05-24 00:41:42'),
	('278','218',NULL,'60','work','2009-05-24 00:41:04','2009-05-24 00:41:55'),
	('279','219',NULL,'60','rest','2009-05-24 00:41:51','2009-05-24 00:42:42'),
	('280','220',NULL,'60','work','2009-05-24 00:42:04','2009-05-24 00:42:55'),
	('281','221',NULL,'60','rest','2009-05-24 00:42:51','2009-05-24 00:43:42'),
	('282','222',NULL,'60','work','2009-05-24 00:43:04','2009-05-24 00:43:55'),
	('283','223',NULL,'60','rest','2009-05-24 00:43:51','2009-05-24 00:44:42'),
	('284','224',NULL,'60','work','2009-05-24 00:44:04','2009-05-24 00:44:54'),
	('285','225',NULL,'60','rest','2009-05-24 00:44:51','2009-05-24 00:45:42'),
	('286','226',NULL,'50','work','2009-05-24 00:45:04','2009-05-24 00:45:55'),
	('287','1000',NULL,'618','work','2009-05-24 00:45:15','2009-05-24 23:36:15'),
	('288','227',NULL,'60','rest','2009-05-24 00:45:51','2009-05-24 00:46:42'),
	('289','228',NULL,'60','work','2009-05-24 00:46:04','2009-05-24 00:46:55'),
	('290','229',NULL,'45','rest','2009-05-24 00:46:51','2009-05-24 00:47:31'),
	('291','230',NULL,'60','work','2009-05-24 00:47:04','2009-05-24 00:47:55'),
	('292','229',NULL,'15','work','2009-05-24 00:47:31','2009-05-24 00:47:42'),
	('293','231',NULL,'2560','work','2009-05-24 00:47:51','2009-05-24 01:48:45'),
	('294','232',NULL,'60','work','2009-05-24 00:48:04','2009-05-24 00:48:55'),
	('295','231',NULL,'890','rest','2009-05-24 00:48:56','2009-05-24 01:47:25'),
	('296','233',NULL,'60','work','2009-05-24 00:49:04','2009-05-24 00:49:56'),
	('297','234',NULL,'60','work','2009-05-24 00:50:04','2009-05-24 00:50:57'),
	('298','235',NULL,'60','work','2009-05-24 00:51:04','2009-05-24 00:51:55'),
	('299','236',NULL,'50','work','2009-05-24 00:52:05','2009-05-24 00:52:56'),
	('300','237',NULL,'60','work','2009-05-24 00:53:04','2009-05-24 00:53:56'),
	('301','238',NULL,'40','work','2009-05-24 00:54:04','2009-05-24 00:54:55'),
	('302','239',NULL,'30','work','2009-05-24 00:55:04','2009-05-24 23:36:33'),
	('303','1000',NULL,'7980','rest','2009-05-24 00:56:05','2009-05-24 23:46:54'),
	('304','240',NULL,'1810','work','2009-05-24 00:59:04','2009-05-24 01:56:24'),
	('305','240',NULL,'1780','rest','2009-05-24 01:00:04','2009-05-24 23:47:03'),
	('306','241',NULL,'3466','work','2009-05-24 01:40:24','2009-05-24 11:41:16'),
	('307','242',NULL,'1204','work','2009-05-24 01:48:55','2009-05-24 12:06:09'),
	('308','242',NULL,'4916','rest','2009-05-24 10:40:49','2009-05-24 13:05:47'),
	('309','241',NULL,'764','rest','2009-05-24 10:41:26','2009-05-24 10:54:05'),
	('310','243',NULL,'1505','work','2009-05-24 11:41:25','2009-05-24 12:06:46'),
	('311','243',NULL,'1825','rest','2009-05-24 12:06:46','2009-05-24 12:41:18'),
	('312','244',NULL,'8258','rest','2009-05-24 12:41:28','2009-05-24 14:34:36'),
	('313','244',NULL,'5422','work','2009-05-24 12:54:07','2009-05-24 14:06:05'),
	('314','245',NULL,'8517','work','2009-05-24 13:05:55','2009-05-24 15:01:31'),
	('315','245',NULL,'5443','rest','2009-05-24 13:05:55','2009-05-24 14:01:41'),
	('316','246',NULL,'10','rest','2009-05-24 14:12:14','2009-05-24 14:12:14'),
	('317','247',NULL,'675','work','2009-05-24 14:12:53','2009-05-24 14:23:23'),
	('318','247',NULL,'6995','rest','2009-05-24 14:12:53','2009-05-24 15:17:30'),
	('319','248',NULL,'719','rest','2009-05-24 14:34:45','2009-05-24 15:37:24'),
	('320','248',NULL,'3011','work','2009-05-24 14:37:34','2009-05-24 15:28:05'),
	('321','249',NULL,'1546','work','2009-05-24 15:01:41','2009-05-24 23:35:35'),
	('322','249',NULL,'3014','rest','2009-05-24 15:12:42','2009-05-24 23:41:34'),
	('323','250',NULL,'1800','rest','2009-05-24 15:37:35','2009-05-24 16:35:44'),
	('324','250',NULL,'1800','work','2009-05-24 15:38:54','2009-05-24 16:37:24'),
	('325','251',NULL,'3600','work','2009-05-24 16:37:34','2009-05-24 17:37:24'),
	('326','252',NULL,'3600','work','2009-05-24 17:37:34','2009-05-24 18:37:24'),
	('327','253',NULL,'3600','work','2009-05-24 18:37:34','2009-05-24 19:37:24'),
	('328','254',NULL,'526','work','2009-05-24 19:37:34','2009-05-24 19:46:14'),
	('329','254',NULL,'2774','rest','2009-05-24 19:46:14','2009-05-24 22:23:55'),
	('330','255',NULL,'90','work','2009-05-24 23:36:43','2009-05-24 23:38:13'),
	('331','256',NULL,'10','work','2009-05-24 23:37:12','2009-05-24 23:37:12'),
	('332','257',NULL,'16','work','2009-05-24 23:38:23','2009-05-24 23:38:33'),
	('333','257',NULL,'3404','rest','2009-05-24 23:38:33','2009-05-25 00:38:33');
/*!40000 ALTER TABLE `intervals` ENABLE KEYS;*/
UNLOCK TABLES;


#
# Table structure for table 'projects'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ `projects` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `name` varchar(256) default NULL,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`)
) TYPE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'projects'
#

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS;*/
REPLACE INTO `projects` (`id`, `name`, `created`, `modified`) VALUES
	('2','first','2009-05-19 17:43:51','2009-05-19 17:43:51'),
	('3','third','2009-05-19 17:49:41','2009-05-19 17:49:41'),
	('4','forth','2009-05-19 17:52:25','2009-05-19 17:52:25'),
	('5','fifth','2009-05-19 18:16:07','2009-05-19 18:16:07'),
	('6','shestoy','2009-05-19 18:33:51','2009-05-19 18:33:51'),
	('7','seventh','2009-05-19 18:34:28','2009-05-19 18:34:28');
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
) TYPE=InnoDB DEFAULT CHARSET=latin1;



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
) TYPE=InnoDB DEFAULT CHARSET=utf8;



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
