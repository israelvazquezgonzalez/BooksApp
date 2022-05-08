namespace BooksApp.Models
{
    public class BookModel
    {
        public string Id { get; set; }
        public VolumeInfoModel VolumeInfo { get; set; }
        public string SelfLink { get; set; }
    }
}