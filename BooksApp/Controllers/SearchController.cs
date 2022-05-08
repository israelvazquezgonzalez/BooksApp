using BooksApp.DataAccess;
using BooksApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace BooksApp.Controllers
{
    public class SearchController : Controller
    {

        public IActionResult Search(string query)
        {
            VolumeModel model = new();

            if (!string.IsNullOrEmpty(query))
            {
                model = VolumeAccess.SearchVolume(query).Result;
            }

            return View("/Views/Search/SearchResults.cshtml", model);
        }
    }
}
