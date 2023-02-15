package com.proyecto1.demo1.services;

import java.util.ArrayList;
import java.util.Optional;

import com.proyecto1.demo1.models.UsuarioModel;
import com.proyecto1.demo1.repositories.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public ArrayList<UsuarioModel> obtenerUsuario(){
        return (ArrayList<UsuarioModel>)usuarioRepository.findAll();
    }

    public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuarioRepository.save(usuario);
    }

    public Optional<UsuarioModel> ObtenerPorId(Long id){
        return usuarioRepository.findById(id);
    }

    public ArrayList<UsuarioModel> obtenerPorPrioridad(Integer prioridad){
        return usuarioRepository.findByPrioridad(prioridad);
    }

    public boolean eliminarUsuario(Long id){
        try {
            usuarioRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;
        }

    }

   /* public ArrayList<UsuarioModel> ObtenerPorPrioridad(Integer prioridad) {
        return null;
    }*/
}

