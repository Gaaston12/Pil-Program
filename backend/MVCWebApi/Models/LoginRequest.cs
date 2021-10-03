using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCWebApi.Models
{
    public class LoginRequest
    {
        private string usuario;
        private string password;
        private string token;

        public string UserName { get => usuario; set => usuario = value; }
        public string Password { get => password; set => password = value; }
        public string Token { get => token; set => token = value; }
    }
}
