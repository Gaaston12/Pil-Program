using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace MVCWebApi.Models
{
    public class GestorPersona
    {
        public int AgregarPersona(Persona persona)
        {
            string connection = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(connection))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "insertar_persona";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nombre", persona.Nombre));
                comm.Parameters.Add(new SqlParameter("@apellido", persona.Apellido));
                comm.Parameters.Add(new SqlParameter("@dni", persona.Dni));
                comm.Parameters.Add(new SqlParameter("@pass", persona.Pass));
                comm.Parameters.Add(new SqlParameter("@fecha_nac", persona.Fecha_nac));
                comm.Parameters.Add(new SqlParameter("email", persona.Email));
                return Convert.ToInt32(comm.ExecuteScalar());

            }
        }

        public Persona ObtenerPersona(int id)
        {
            Persona persona = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "obtener_persona";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader dr = comm.ExecuteReader();

                if (dr.Read())
                {
                    string nombre = dr.GetString(1).Trim();
                    string apellido = dr.GetString(2).Trim();
                    string domicilio = dr.GetString(3).Trim();
                    int id_localidad = dr.GetInt32(4);
                    int dni = dr.GetInt32(5);
                    string email = dr.GetString(6);
                    DateTime fecha_nac = dr.GetDateTime(7);
                    string pass = dr.GetString(8);

                    persona = new Persona(id, nombre, apellido, domicilio, id_localidad,dni,email,pass,fecha_nac);
                }

                dr.Close();
            }

            return persona;

        }

        public void Eliminar(int id)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("eliminar_persona", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", id));

                comm.ExecuteNonQuery();
            }

        }

        public Persona ObtenerPorId(int id)
        {
            Persona persona = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "obtener_persona";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader dr = comm.ExecuteReader();

                if (dr.Read())
                {
                    string nombre = dr.GetString(1).Trim();
                    string apellido = dr.GetString(2).Trim();
                    string domicilio = dr.GetString(3).Trim();
                    int id_localidad = dr.GetInt32(4);
                    int dni = dr.GetInt32(5);
                    string email = dr.GetString(6);
                    DateTime fecha_nac = dr.GetDateTime(7);
                    string pass = dr.GetString(8);

                    persona = new Persona(id, nombre, apellido, domicilio, id_localidad, dni, email, pass, fecha_nac);
                }

                dr.Close();
            }

            return persona;

        }

        public List<Persona> ObtenerPersonas()
        {
            List<Persona> lista = new List<Persona>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "obtener_personas";
                comm.CommandType = CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();
                    string apellido = dr.GetString(2).Trim();
                    string domicilio = dr.GetString(3).Trim();
                    int id_localidad = dr.GetInt32(4);
                    int dni = dr.GetInt32(5);
                    string email = dr.GetString(6);
                    DateTime fecha_nac = dr.GetDateTime(7);
                    string pass = dr.GetString(8);

                    Persona persona = new Persona(id, nombre, apellido, domicilio, id_localidad, dni, email, pass, fecha_nac);
                    lista.Add(persona);
                }

                dr.Close();
            }

            return lista;
        }
    }
}