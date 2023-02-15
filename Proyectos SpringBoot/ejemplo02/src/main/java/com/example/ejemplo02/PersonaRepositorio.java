package com.example.ejemplo02;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepositorio extends JpaRepository<Persona, Integer> {
    /*List<Persona>findAll();
    List <Persona> findById(Integer id);
    Persona save(Persona p);
    void delete(Persona p);
    long count();*/
}
