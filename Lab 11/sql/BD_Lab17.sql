CREATE TABLE `lab_bungoustraydogs`.`persona` (
  `idnew_table` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(128) NOT NULL,
  `Edad` INT NOT NULL,
  `Personaje` VARCHAR(45) NOT NULL,
  `Imagen` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idnew_table`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `lab_bungoustraydogs`.`usuario` (
  `IDUsuario` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`IDUsuario`))
ENGINE = InnoDB;
  
INSERT INTO `lab_bungoustraydogs`.`persona` (`Nombre`, `Edad`, `Personaje`, `Imagen`) VALUES ('Andreita', '20', 'Dazai Ozamu', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faminoapps.com%2Fc%2Fbungou_stray_dogs%2Fpage%2Fitem%2Fosamu-dazai%2FX0LZ_NKpiXI7rZdaXnW7n6DlaMgP3WXGg0v&psig=AOvVaw0aIC0_l1dVk1ZFSAr4VNOa&ust=1710305823354000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLi-2u737YQDFQAAAAAdAAAAABAD');
INSERT INTO `lab_bungoustraydogs`.`persona` (`Nombre`, `Edad`, `Personaje`, `Imagen`) VALUES ('Martha', '19', 'Gojo Satoru', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fdailygojo_&psig=AOvVaw1Lmc9UQSCQ96tDPNbIK275&ust=1710308223941000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCJ5OaA7oQDFQAAAAAdAAAAABAD');


