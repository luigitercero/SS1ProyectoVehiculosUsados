#  Created with Kata Kuntur - Data Modeller
#  Version: 2.5.4
#  Web Site: http://katakuntur.jeanmazuelos.com/
#  If you find a bug, please report it at:
#  http://pm.jeanmazuelos.com/katakuntur/issues/new

#  Database Management System: MySQL/MariaDB
#  Diagram: SS1Cars
#  Author: luigitercero
#  Date and time: 01/11/2018 14:14:39

# GENERATING TABLES
CREATE TABLE `Carro` (
	`Carro` INTEGER NOT NULL,
	`Linea` CHAR(20) NOT NULL,
	`Modelo` CHAR(20) NOT NULL,
	`Descripcion` CHAR(100) NOT NULL,
	`Marca` CHAR(20) NOT NULL,
	PRIMARY KEY(`Carro`)
) ENGINE=INNODB;
CREATE TABLE `VentaCarro` (
	`Carro_Carro` INTEGER NOT NULL,
	KEY(`Carro_Carro`),
	`Venta_Venta` INTEGER NOT NULL,
	KEY(`Venta_Venta`)
) ENGINE=INNODB;
CREATE TABLE `Venta` (
	`Venta` INTEGER NOT NULL,
	`Ciente_Cliente` INTEGER NOT NULL,
	KEY(`Ciente_Cliente`),
	PRIMARY KEY(`Venta`)
) ENGINE=INNODB;
CREATE TABLE `Ciente` (
	`Cliente` INTEGER NOT NULL,
	`Nombre` CHAR(50) NOT NULL,
	PRIMARY KEY(`Cliente`)
) ENGINE=INNODB;

# GENERATING RELATIONSHIPS
ALTER TABLE `VentaCarro` ADD CONSTRAINT `ventacarro_carro_carro_carro` FOREIGN KEY (`Carro_Carro`) REFERENCES `Carro`(`Carro`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `VentaCarro` ADD CONSTRAINT `ventacarro_venta_venta_venta` FOREIGN KEY (`Venta_Venta`) REFERENCES `Venta`(`Venta`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Venta` ADD CONSTRAINT `venta_ciente_ciente_cliente` FOREIGN KEY (`Ciente_Cliente`) REFERENCES `Ciente`(`Cliente`) ON DELETE NO ACTION ON UPDATE CASCADE;