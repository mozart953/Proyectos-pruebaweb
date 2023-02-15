package com.proyecto1.demo1.repositories;

import java.util.ArrayList;

import com.proyecto1.demo1.models.UsuarioModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuarioRepository extends CrudRepository <UsuarioModel, Long>{
    
    public abstract ArrayList<UsuarioModel> findByPrioridad(Integer prioridad);
}
