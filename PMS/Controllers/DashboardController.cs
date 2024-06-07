using Microsoft.AspNetCore.Mvc;
using PMS.Models;
using System.Diagnostics;

namespace PMS.Controllers
{
    public class DashboardController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }

    }
}
