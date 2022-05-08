namespace BooksApp.Models
{
    public class VolumeInfoModel
    {
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string Publisher { get; set; }
        public string PublishedDate { get; set; }
        public double AverageRating { get; set; }
        public int RatingsCount { get; set; }
        public string Language { get; set; }
        public string MaturityRating { get; set; }
        public string PreviewLink { get; set; }
        public int PageCount { get; set; }
        public string Description { get; set; }
        public IEnumerable<string> Authors { get; set; }
        public IEnumerable<string> Categories { get; set; }
        public ImageLinkModel ImageLinks { get; set; }
        public IEnumerable<IndustryIdentifierModel> IndustryIdentifiers { get; set; }
    }
}