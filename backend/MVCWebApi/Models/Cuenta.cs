using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCWebApi.Models
{
    public class Cuenta
    {
        private int id;
        private string cvu;
        private double saldo;
        private int id_persona;
        private bool estado;
        private List<Movimiento> movimientos = new List<Movimiento>();

        public Cuenta(int id, string cvu, double saldo, int id_persona, bool estado)
        {
            Id = id;
            Cvu = cvu;
            Saldo = saldo;
            Id_persona = id_persona;
            Estado = estado;
        }

        public int Id { get => id; set => id = value; }
        public string Cvu { get => cvu; set => cvu = value; }
        public double Saldo { get => saldo; set => saldo = value; }
        public int Id_persona { get => id_persona; set => id_persona = value; }
        public bool Estado { get => estado; set => estado = value; }
        public List<Movimiento> Movimientos { get => movimientos; set => movimientos = value; }
    }

    public class Movimiento
    {
        private int id;
        private DateTime fechaHora;
        private double monto;
        private string cvuDestino;
        private string cvuOrigen;
        private int idCuenta;
        private string tipoMovimiento;

        public Movimiento( DateTime fechaHora, double monto, string cvuDestino, string cvyOrigen, int idCuenta, string tipoMovimiento)
        {
          
            FechaHora = fechaHora;
            Monto = monto;
            CvuDestino = cvuDestino;
            cvuOrigen = cvyOrigen;
            IdCuenta = idCuenta;
            TipoMovimiento = tipoMovimiento;
        }

        public int Id { get => id; set => id = value; }
        public DateTime FechaHora { get => fechaHora; set => fechaHora = value; }
        public double Monto { get => monto; set => monto = value; }
        public string CvuDestino { get => cvuDestino; set => cvuDestino = value; }
        public string CvyOrigen { get => cvuOrigen; set => cvuOrigen = value; }
        public int IdCuenta { get => idCuenta; set => idCuenta = value; }
        public string TipoMovimiento { get => tipoMovimiento; set => tipoMovimiento = value; }
    }
}