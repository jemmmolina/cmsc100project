-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.18-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for gminus
DROP DATABASE IF EXISTS `gminus`;
CREATE DATABASE IF NOT EXISTS `gminus` /*!40100 DEFAULT CHARACTER SET ascii */;
USE `gminus`;


-- Dumping structure for table gminus.circle
DROP TABLE IF EXISTS `circle`;
CREATE TABLE IF NOT EXISTS `circle` (
  `circleId` int(11) NOT NULL AUTO_INCREMENT,
  `circleName` varchar(50) NOT NULL,
  PRIMARY KEY (`circleId`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- Dumping data for table gminus.circle: ~0 rows (approximately)
/*!40000 ALTER TABLE `circle` DISABLE KEYS */;
/*!40000 ALTER TABLE `circle` ENABLE KEYS */;


-- Dumping structure for table gminus.comment
DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `commentId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `commentContent` varchar(500) NOT NULL,
  PRIMARY KEY (`commentId`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- Dumping data for table gminus.comment: ~0 rows (approximately)
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;


-- Dumping structure for table gminus.commentlikers
DROP TABLE IF EXISTS `commentlikers`;
CREATE TABLE IF NOT EXISTS `commentlikers` (
  `commentId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- Dumping data for table gminus.commentlikers: ~0 rows (approximately)
/*!40000 ALTER TABLE `commentlikers` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentlikers` ENABLE KEYS */;


-- Dumping structure for table gminus.follower
DROP TABLE IF EXISTS `follower`;
CREATE TABLE IF NOT EXISTS `follower` (
  `userId` int(11) NOT NULL,
  `followerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- Dumping data for table gminus.follower: ~0 rows (approximately)
/*!40000 ALTER TABLE `follower` DISABLE KEYS */;
/*!40000 ALTER TABLE `follower` ENABLE KEYS */;


-- Dumping structure for table gminus.post
DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `postId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `postContent` varchar(500) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`postId`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- Dumping data for table gminus.post: ~0 rows (approximately)
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
/*!40000 ALTER TABLE `post` ENABLE KEYS */;


-- Dumping structure for table gminus.postlikers
DROP TABLE IF EXISTS `postlikers`;
CREATE TABLE IF NOT EXISTS `postlikers` (
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- Dumping data for table gminus.postlikers: ~0 rows (approximately)
/*!40000 ALTER TABLE `postlikers` DISABLE KEYS */;
/*!40000 ALTER TABLE `postlikers` ENABLE KEYS */;


-- Dumping structure for table gminus.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(128) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- Dumping data for table gminus.user: ~0 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

INSERT INTO user(email, password, name) VALUES("jhmolina@up.edu.ph", "justletmein", "Jem Molina"), ("cccassion1@up.edu.ph", "dalekorr", "Clauds Cassion"), ("kdlenon@up.edu.ph", "nishinoya", "Kris Lenon");
INSERT INTO circle(circleName) VALUES("Family"), ("Churchmates"), ("Elem Friends"), ("HS Friends"), ("College Friends");
INSERT INTO comment(userId, commentContent) VALUES(1, "yay"), (2, "huhu");
INSERT INTO commentlikers(commentId, userId) VALUES(1, 2), (2, 1);
INSERT INTO follower(userId, followerId) VALUES(1, 2), (2, 1);
INSERT INTO post(userId, postContent) VALUES(1, "hello"), (1, "hi"), (2, "huhu");
INSERT INTO postlikers(postId, userId) VALUES(1, 2), (2, 1);