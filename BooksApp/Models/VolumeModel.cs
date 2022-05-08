namespace BooksApp.Models
{
    public class VolumeModel
    {
        public IEnumerable<BookModel> Items { get; set; }
        public int TotalItems { get; set; }
    }
}
