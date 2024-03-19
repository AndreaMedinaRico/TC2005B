CREATE TABLE `lab_bungoustraydogs`.`rolprivilegio` (
  `IDRol` INT NOT NULL,
  `IDPrivilegio` INT NOT NULL,
  PRIMARY KEY (`IDRol`, `IDPrivilegio`),
  INDEX `IDPrivilegio_idx` (`IDPrivilegio` ASC) VISIBLE,
  CONSTRAINT `IDRol`
    FOREIGN KEY (`IDRol`)
    REFERENCES `lab_bungoustraydogs`.`rol` (`IDRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IDPrivilegio`
    FOREIGN KEY (`IDPrivilegio`)
    REFERENCES `lab_bungoustraydogs`.`privilegio` (`IDPrivilegio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `lab_bungoustraydogs`.`usuariorol` (
  `IDUsuario` INT NOT NULL,
  `IDRol` INT NOT NULL,
  PRIMARY KEY (`IDUsuario`, `IDRol`),
  CONSTRAINT `FK_Usuario_ID`
    FOREIGN KEY (`IDUsuario`)
    REFERENCES `lab_bungoustraydogs`.`usuario` (`IDUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Rol_ID`
    FOREIGN KEY (`IDRol`)
    REFERENCES `lab_bungoustraydogs`.`rol` (`IDRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Insertar datos
-- Roles

INSERT INTO `rol` (`IDRol`, `descripcion`) VALUES
(1, 'Admin'),
(2, 'Comun');

UPDATE `lab_bungoustraydogs`.`rol` SET `IDRol` = '11' WHERE (`IDRol` = '1');
UPDATE `lab_bungoustraydogs`.`rol` SET `IDRol` = '22' WHERE (`IDRol` = '2');

INSERT INTO `lab_bungoustraydogs`.`privilegio` (`IDPrivilegio`, `Accion`) VALUES 
('01', 'subir_info_personal');

INSERT INTO `lab_bungoustraydogs`.`rolprivilegio` (`IDRol`, `IDPrivilegio`) VALUES 
('11', '01');

INSERT INTO `lab_bungoustraydogs`.`usuariorol` (`IDUsuario`, `IDRol`) VALUES ('1', '11');
INSERT INTO `lab_bungoustraydogs`.`privilegio` (`IDPrivilegio`, `Accion`) VALUES ('2', 'ver_personajes');
INSERT INTO `lab_bungoustraydogs`.`rolprivilegio` (`IDRol`, `IDPrivilegio`) VALUES ('11', '2');

ALTER TABLE `lab_bungoustraydogs`.`rolprivilegio` 
DROP FOREIGN KEY `IDPrivilegio`,
DROP FOREIGN KEY `IDRol`;
ALTER TABLE `lab_bungoustraydogs`.`rolprivilegio` 
ADD CONSTRAINT `IDPrivilegio_FK`
  FOREIGN KEY (`IDPrivilegio`)
  REFERENCES `lab_bungoustraydogs`.`privilegio` (`IDPrivilegio`),
ADD CONSTRAINT `IDRol_FK2`
  FOREIGN KEY (`IDRol`)
  REFERENCES `lab_bungoustraydogs`.`rol` (`IDRol`);
