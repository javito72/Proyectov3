
package com.portfolio.cjl.Interface;

import com.portfolio.cjl.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //traer una lista de personas
    public List<Persona> getPersona();
    
    //guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto pero los buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
    
  
    
}
