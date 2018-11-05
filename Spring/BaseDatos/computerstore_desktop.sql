-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: computerstore
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `desktop`
--

DROP TABLE IF EXISTS `desktop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `desktop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(45) DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `core` int(11) DEFAULT NULL,
  `procesador` varchar(45) DEFAULT NULL,
  `speed` varchar(45) DEFAULT NULL,
  `ram` varchar(45) DEFAULT NULL,
  `graphic_card_mode` varchar(100) DEFAULT NULL,
  `lector` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `desktop`
--

LOCK TABLES `desktop` WRITE;
/*!40000 ALTER TABLE `desktop` DISABLE KEYS */;
INSERT INTO `desktop` VALUES (1,'Lenovo','Lenovo Ideacentre 510S-08IKL','449€',2,'Intel Core i3','3.9 GHz','8GB','Intel HD Graphics 630','Slim DVD Rambo'),(2,'Hp','Hp 260-a102ns','297€',2,' AMD E2-7110','1.8 GHz','4GB','AMD Radeon R2','Grabadora de DVD SuperMulti '),(3,'Msi','PC gaming - MSI Trident 3 8RB-020XEU','799€',6,' Intel Core i5','4 GHz','8GB','Nvidia GeForce GTX 1050Ti',NULL);
/*!40000 ALTER TABLE `desktop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-21 21:51:09
