using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCWebApi.Models
{
    public class Persona
    {
        private int id;
        private string nombre;
        private string apellido;
        private string domicilio;
        private int idLocalidad;
        private int dni;
        private string email;
        private string pass;
        private DateTime fecha_nac;

        public Persona()
        {

        }

        public Persona(int id, string nombre, string apellido, string domicilio, int idLocalidad, int dni, string email, string pass, DateTime fecha_nac)
        {
            Id = id;
            Nombre = nombre;
            Apellido = apellido;
            Domicilio = domicilio;
            IdLocalidad = idLocalidad;
            Dni = dni;
            Email = email;
            Pass = pass;
            Fecha_nac = fecha_nac;
        }

        public int Id { get => id; set => id = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public string Domicilio { get => domicilio; set => domicilio = value; }
        public int IdLocalidad { get => idLocalidad; set => idLocalidad = value; }
        public int Dni { get => dni; set => dni = value; }
        public string Email { get => email; set => email = value; }
        public string Pass { get => pass; set => pass = value; }
        public DateTime Fecha_nac { get => fecha_nac; set => fecha_nac = value; }
    }
}