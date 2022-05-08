using BooksApp.Models;
using System.Text.Json;

namespace BooksApp.DataAccess
{
    public class VolumenAccess
    {
        static readonly string Url = "https://www.googleapis.com/books/v1/volumes?q=";
        static readonly string ApiKey = "AIzaSyA7aG25WobVtWe3OgQz-sl8W53zHpk1uqw";

        public async static Task<VolumenModel> Search(string query)
        {
            using (var client = new HttpClient())
            {
                var result = await client.GetAsync($"{Url}{query}&key={ApiKey}");

                if (result.IsSuccessStatusCode)
                {
                    JsonSerializerOptions serializerOptions = GetSerializerOptions();

                    var reponse = await result.Content.ReadAsStringAsync();
                    var model = JsonSerializer.Deserialize<VolumenModel>(reponse, serializerOptions);

                    return model;

                }
            }

            return null;

        }

        private static JsonSerializerOptions GetSerializerOptions()
        {
            return new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
        }
    }
}
