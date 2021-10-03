using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using MVCWebApi.Models;

namespace MVCWebApi.Controllers
{
    [Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PersonaController : ApiController
    {
        // GET: api/Persona
        public IEnumerable<Persona> Get()   
        {
            GestorPersona gPersona = new GestorPersona();
            return gPersona.ObtenerPersonas();
        }

        // GET: api/Persona/5
        public Persona Get(int id)
        {
            GestorPersona gestorPersona = new GestorPersona();
            return gestorPersona.ObtenerPersona(id);
        }

        // POST: api/Persona
        public Persona Post([FromBody]Persona value)
        {
            GestorPersona gPersona = new GestorPersona();
            value.Id= gPersona.AgregarPersona(value);
            return value;
        }

        // PUT: api/Persona/5
        public void Put(int id, [FromBody]Persona value)
        {
        }

        // DELETE: api/Persona/5
        public void Delete(int id)
        {
            GestorPersona gPersona = new GestorPersona();
            gPersona.Eliminar(id);
        }
    }
}
