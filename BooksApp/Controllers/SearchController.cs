using BooksApp.DataAccess;
using BooksApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace BooksApp.Controllers
{
    public class SearchController : Controller
    {

        public IActionResult Search(string query)
        {
            VolumenModel model = new();

            if (string.IsNullOrEmpty(query))
            {
                model = VolumenAccess.Search(query).Result;
            }

            return View("/Views/Search/SearchResults.cshtml", model);
        }
    }
}
