using System;

namespace Business
{

    public class Review
    {
        public int Id { get; set; }
        public string UserReview { get; set; }
        public string Name { get; set; }
        public string UserEmailId { get; set; }
        public double Rating { get; set; }
        public string BusinessEmail { get; set; }

        public Review(int id, string userReview, string name, string userEmailId, double rating, string businessEmail)
        {
            this.Id = id;
            this.UserReview = userReview;
            this.Name = name;
            this.UserEmailId = userEmailId;
            this.Rating = rating;
            this.BusinessEmail = businessEmail;

        }
    }
}