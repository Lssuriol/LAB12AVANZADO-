-- Script para creación manual de Base de Datos en MySQL (DBeaver / Mac)

CREATE DATABASE IF NOT EXISTS `SEMANA_12_DAWA` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `SEMANA_12_DAWA`;

CREATE TABLE IF NOT EXISTS `producto` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(191) NOT NULL,
  `precio` DOUBLE NOT NULL,
   An`stock` INT NOT NULL,
  `idCategoria` INT NOT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Datos de prueba iniciales opcionales
INSERT INTO `producto` (`nombre`, `precio`, `stock`, `idCategoria`) VALUES
('memoria ram', 30.00, 50, 1),
('mouse', 12.00, 100, 1),
('disco duro', 15.00, 100, 3),
('mouse inalambrico', 121.00, 111, 1),
('qq', 23.00, 222, 2);
