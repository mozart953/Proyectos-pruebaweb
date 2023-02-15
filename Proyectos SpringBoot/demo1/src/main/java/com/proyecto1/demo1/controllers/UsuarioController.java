package com.proyecto1.demo1.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.proyecto1.demo1.models.UsuarioModel;
import com.proyecto1.demo1.services.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController 
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    UsuarioService usuarioService;

    @GetMapping()
    public ArrayList<UsuarioModel> obtenerUsuarios(){
        return usuarioService.obtenerUsuario();
    }

    @PostMapping()
    public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario){
        return this.usuarioService.guardarUsuario(usuario);
    
    }

    @GetMapping (path = "/{id}")
    public Optional<UsuarioModel> obtenerUsuarioPorId(@PathVariable("id") Long id){
        return this.usuarioService.ObtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<UsuarioModel> obtenerUsuarioPorPrioridad(@RequestParam("prioridad") Integer prioridad){
        return this.usuarioService.obtenerPorPrioridad(prioridad);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id")  Long id){
        boolean ok = this.usuarioService.eliminarUsuario(id);
        if(ok){
                return "Se elimino el usuario con id: " + id;
        }else{
            return "No se elimino el usuario con id: " + id;
        }

    }

}
