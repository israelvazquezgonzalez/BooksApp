using BooksApp.DataAccess;
using BooksApp.Models;
using LinqKit;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace BooksApp.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

    }
}