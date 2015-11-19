-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 17, 2015 at 11:00 PM
-- Server version: 5.6.12
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mastery-learning`
--
CREATE DATABASE IF NOT EXISTS `mastery-learning` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `mastery-learning`;

-- --------------------------------------------------------

--
-- Table structure for table `Competence`
--

CREATE TABLE IF NOT EXISTS `Competence` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `parent` int(10) unsigned DEFAULT NULL,
  `cid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  KEY `parent` (`parent`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `CompetenceToDomain`
--

CREATE TABLE IF NOT EXISTS `CompetenceToDomain` (
  `cid` int(10) unsigned NOT NULL DEFAULT '0',
  `did` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`cid`,`did`),
  KEY `did` (`did`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `CompetenceToEvaluation`
--

CREATE TABLE IF NOT EXISTS `CompetenceToEvaluation` (
  `cid` int(10) unsigned NOT NULL DEFAULT '0',
  `eid` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`cid`,`eid`),
  KEY `eid` (`eid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `CompetenceToInteraction`
--

CREATE TABLE IF NOT EXISTS `CompetenceToInteraction` (
  `cid` int(10) unsigned NOT NULL DEFAULT '0',
  `iid` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`cid`,`iid`),
  KEY `iid` (`iid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `CompetenceToResource`
--

CREATE TABLE IF NOT EXISTS `CompetenceToResource` (
  `cid` int(10) unsigned NOT NULL DEFAULT '0',
  `rid` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`cid`,`rid`),
  KEY `rid` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Course`
--

CREATE TABLE IF NOT EXISTS `Course` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `CourseToProfessor`
--

CREATE TABLE IF NOT EXISTS `CourseToProfessor` (
  `cid` int(10) unsigned NOT NULL DEFAULT '0',
  `pid` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`cid`,`pid`),
  KEY `pid` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `CourseToStudent`
--

CREATE TABLE IF NOT EXISTS `CourseToStudent` (
  `cid` int(10) unsigned NOT NULL DEFAULT '0',
  `sid` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`cid`,`sid`),
  KEY `sid` (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Domain`
--

CREATE TABLE IF NOT EXISTS `Domain` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `cid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Evaluation`
--

CREATE TABLE IF NOT EXISTS `Evaluation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `descrption` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `cid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Interaction`
--

CREATE TABLE IF NOT EXISTS `Interaction` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `cid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Professor`
--

CREATE TABLE IF NOT EXISTS `Professor` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Resource`
--

CREATE TABLE IF NOT EXISTS `Resource` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `descrption` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `cid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--

CREATE TABLE IF NOT EXISTS `Student` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Competence`
--
ALTER TABLE `Competence`
  ADD CONSTRAINT `competence_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `Course` (`id`),
  ADD CONSTRAINT `competence_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `Competence` (`id`);

--
-- Constraints for table `CompetenceToDomain`
--
ALTER TABLE `CompetenceToDomain`
  ADD CONSTRAINT `competencetodomain_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `Competence` (`id`),
  ADD CONSTRAINT `competencetodomain_ibfk_2` FOREIGN KEY (`did`) REFERENCES `Domain` (`id`);

--
-- Constraints for table `CompetenceToEvaluation`
--
ALTER TABLE `CompetenceToEvaluation`
  ADD CONSTRAINT `competencetoevaluation_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `Competence` (`id`),
  ADD CONSTRAINT `competencetoevaluation_ibfk_2` FOREIGN KEY (`eid`) REFERENCES `Evaluation` (`id`);

--
-- Constraints for table `CompetenceToInteraction`
--
ALTER TABLE `CompetenceToInteraction`
  ADD CONSTRAINT `competencetointeraction_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `Competence` (`id`),
  ADD CONSTRAINT `competencetointeraction_ibfk_2` FOREIGN KEY (`iid`) REFERENCES `Interaction` (`id`);

--
-- Constraints for table `CompetenceToResource`
--
ALTER TABLE `CompetenceToResource`
  ADD CONSTRAINT `competencetoresource_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `Competence` (`id`),
  ADD CONSTRAINT `competencetoresource_ibfk_2` FOREIGN KEY (`rid`) REFERENCES `Resource` (`id`);

--
-- Constraints for table `CourseToProfessor`
--
ALTER TABLE `CourseToProfessor`
  ADD CONSTRAINT `coursetoprofessor_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `Course` (`id`),
  ADD CONSTRAINT `coursetoprofessor_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `Professor` (`id`);

--
-- Constraints for table `CourseToStudent`
--
ALTER TABLE `CourseToStudent`
  ADD CONSTRAINT `coursetostudent_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `Course` (`id`),
  ADD CONSTRAINT `coursetostudent_ibfk_2` FOREIGN KEY (`sid`) REFERENCES `Student` (`id`);

--
-- Constraints for table `Domain`
--
ALTER TABLE `Domain`
  ADD CONSTRAINT `domain_ibfk_6` FOREIGN KEY (`cid`) REFERENCES `Course` (`id`);

--
-- Constraints for table `Evaluation`
--
ALTER TABLE `Evaluation`
  ADD CONSTRAINT `evaluation_ibfk_5` FOREIGN KEY (`cid`) REFERENCES `Course` (`id`);

--
-- Constraints for table `Interaction`
--
ALTER TABLE `Interaction`
  ADD CONSTRAINT `interaction_ibfk_4` FOREIGN KEY (`cid`) REFERENCES `Course` (`id`);

--
-- Constraints for table `Resource`
--
ALTER TABLE `Resource`
  ADD CONSTRAINT `resource_ibfk_3` FOREIGN KEY (`cid`) REFERENCES `Course` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
