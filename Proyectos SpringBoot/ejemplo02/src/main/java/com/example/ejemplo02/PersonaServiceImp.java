package com.example.ejemplo02;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PersonaServiceImp implements PersonaService{
    @Autowired
    private PersonaRepositorio repositorio;

    @Override
    @Transactional(readOnly = true)
    public List<Persona> listar() {

        return repositorio.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Persona> listarId(int id) {

        return repositorio.findById(id);
    }

    @Override
    @Transactional
    public Persona add(Persona p) {

        return repositorio.save(p);
    }

    @Override
    @Transactional
    public Persona edit(Persona p) {

        return repositorio.save(p);
    }

    @Override
    @Transactional
    public void delete(int id) {
        /*Optional<Persona> p=  repositorio.findById(id);
        if(p!=null){
            repositorio.delete(p);
        }
        return p;*/
       /*Persona p= (Persona) repositorio.findById(id);
        if(p!=null){
            repositorio.delete(p);
        }
        return p;*/
        repositorio.deleteById(id);
    }
}
