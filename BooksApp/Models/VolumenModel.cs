namespace BooksApp.Models
{
    public class VolumenModel
    {
        public IEnumerable<BookModel> Items { get; set; }
        public int TotalItems { get; set; }
    }
}
