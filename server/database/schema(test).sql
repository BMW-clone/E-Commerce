-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bmw
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bmw
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bmw` DEFAULT CHARACTER SET utf8mb3 ;
USE `bmw` ;

-- -----------------------------------------------------
-- Table `bmw`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bmw`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  `profilepic` VARCHAR(300) NOT NULL,
  `role` ENUM('client', 'seller', 'admin') NOT NULL,
  `phoneNumber` VARCHAR(45) NOT NULL,
  `coverpic` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `bmw`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bmw`.`cart` (
  `idcart` INT NOT NULL AUTO_INCREMENT,
  `item` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL DEFAULT 0,
  `image` VARCHAR(300) NOT NULL,
  `total` INT NULL DEFAULT 0,
  PRIMARY KEY (`idcart`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `bmw`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bmw`.`client` (
  `idclient` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  `profilepic` VARCHAR(300) NOT NULL,
  `role` ENUM('client', 'seller', 'admin') NOT NULL,
  `phoneNumber` VARCHAR(45) NOT NULL,
  `cart_idcart` INT NOT NULL,
  `coverpic` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`idclient`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  INDEX `fk_client_cart1_idx` (`cart_idcart` ASC) VISIBLE,
  CONSTRAINT `fk_client_cart1`
    FOREIGN KEY (`cart_idcart`)
    REFERENCES `bmw`.`cart` (`idcart`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `bmw`.`liked`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bmw`.`liked` (
  `idliked` INT NOT NULL AUTO_INCREMENT,
  `item` VARCHAR(45) NULL DEFAULT NULL,
  `client_idclient` INT NOT NULL,
  PRIMARY KEY (`idliked`, `client_idclient`),
  INDEX `fk_liked_client1_idx` (`client_idclient` ASC) VISIBLE,
  CONSTRAINT `fk_liked_client1`
    FOREIGN KEY (`client_idclient`)
    REFERENCES `bmw`.`client` (`idclient`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `bmw`.`newcars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bmw`.`newcars` (
  `idcars` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(3) NOT NULL DEFAULT 'BMW',
  `price` INT NOT NULL,
  `category` ENUM('SUV', 'COUPE', 'SEDAN', 'CABRIOLET') NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `year` INT NOT NULL,
  `image` VARCHAR(300) NOT NULL,
  `mileage` VARCHAR(45) NOT NULL DEFAULT '0',
  `model` VARCHAR(45) NOT NULL,
  `transmition` ENUM('MANUAL', 'AUTOMATIC') NOT NULL,
  `hp` INT NOT NULL,
  `carburant` ENUM('ESSENCE', 'DIESEL') NOT NULL,
  `quantity` INT NULL DEFAULT '0',
  `rate` INT NULL DEFAULT '0',
  `cart_idcart` INT NULL DEFAULT NULL,
  `admin_idadmin1` INT NOT NULL,
  PRIMARY KEY (`idcars`),
  INDEX `fk_newcars_cart1_idx` (`cart_idcart` ASC) VISIBLE,
  INDEX `fk_newcars_admin1_idx` (`admin_idadmin1` ASC) VISIBLE,
  CONSTRAINT `fk_newcars_cart1`
    FOREIGN KEY (`cart_idcart`)
    REFERENCES `bmw`.`cart` (`idcart`),
  CONSTRAINT `fk_newcars_admin1`
    FOREIGN KEY (`admin_idadmin1`)
    REFERENCES `bmw`.`admin` (`idadmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `bmw`.`newcars_has_liked`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bmw`.`newcars_has_liked` (
  `newcars_idcars` INT NOT NULL,
  `liked_idliked` INT NOT NULL,
  `liked_client_idclient` INT NOT NULL,
  PRIMARY KEY (`newcars_idcars`, `liked_idliked`, `liked_client_idclient`),
  INDEX `fk_newcars_has_liked_liked1_idx` (`liked_idliked` ASC, `liked_client_idclient` ASC) VISIBLE,
  INDEX `fk_newcars_has_liked_newcars1_idx` (`newcars_idcars` ASC) VISIBLE,
  CONSTRAINT `fk_newcars_has_liked_liked1`
    FOREIGN KEY (`liked_idliked` , `liked_client_idclient`)
    REFERENCES `bmw`.`liked` (`idliked` , `client_idclient`),
  CONSTRAINT `fk_newcars_has_liked_newcars1`
    FOREIGN KEY (`newcars_idcars`)
    REFERENCES `bmw`.`newcars` (`idcars`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `bmw`.`seller`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bmw`.`seller` (
  `idseller` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  `profilepic` VARCHAR(300) NOT NULL,
  `role` ENUM('client', 'seller', 'admin') NOT NULL,
  `phoneNumber` VARCHAR(45) NOT NULL,
  `coverpic` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`idseller`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `bmw`.`usedcars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bmw`.`usedcars` (
  `idusedcars` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(3) NOT NULL DEFAULT 'BMW',
  `price` INT NOT NULL,
  `category` ENUM('SUV', 'COUPE', 'SEDAN', 'CABRIOLET') NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `year` INT NOT NULL,
  `image` VARCHAR(300) NOT NULL,
  `mileage` VARCHAR(45) NOT NULL DEFAULT '0',
  `model` VARCHAR(45) NOT NULL,
  `transmition` ENUM('MANUAL', 'AUTOMATIC') NOT NULL,
  `hp` INT NOT NULL,
  `carburant` ENUM('ESSENCE', 'DIESEL') NOT NULL,
  `rate` INT NULL DEFAULT NULL,
  `cart_idcart` INT NULL DEFAULT NULL,
  `seller_idseller` INT NOT NULL,
  `status` ENUM('pending', 'accepted', 'rejected') NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`idusedcars`),
  INDEX `fk_usedcars_cart1_idx` (`cart_idcart` ASC) VISIBLE,
  INDEX `fk_usedcars_seller1_idx` (`seller_idseller` ASC) VISIBLE,
  CONSTRAINT `fk_usedcars_cart1`
    FOREIGN KEY (`cart_idcart`)
    REFERENCES `bmw`.`cart` (`idcart`),
  CONSTRAINT `fk_usedcars_seller1`
    FOREIGN KEY (`seller_idseller`)
    REFERENCES `bmw`.`seller` (`idseller`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `bmw`.`usedcars_has_liked`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bmw`.`usedcars_has_liked` (
  `usedcars_idusedcars` INT NOT NULL,
  `liked_idliked` INT NOT NULL,
  `liked_client_idclient` INT NOT NULL,
  PRIMARY KEY (`usedcars_idusedcars`, `liked_idliked`, `liked_client_idclient`),
  INDEX `fk_usedcars_has_liked_liked1_idx` (`liked_idliked` ASC, `liked_client_idclient` ASC) VISIBLE,
  INDEX `fk_usedcars_has_liked_usedcars1_idx` (`usedcars_idusedcars` ASC) VISIBLE,
  CONSTRAINT `fk_usedcars_has_liked_liked1`
    FOREIGN KEY (`liked_idliked` , `liked_client_idclient`)
    REFERENCES `bmw`.`liked` (`idliked` , `client_idclient`),
  CONSTRAINT `fk_usedcars_has_liked_usedcars1`
    FOREIGN KEY (`usedcars_idusedcars`)
    REFERENCES `bmw`.`usedcars` (`idusedcars`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
