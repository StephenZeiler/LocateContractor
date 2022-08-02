using System;

namespace Business
{

    public class Review
    {
        public string UserReview { get; set; }
        public string Name { get; set; }
        public string UserEmailId { get; set; }

        public Review(string userReview, string name, string userEmailId)
        {
            this.UserReview = userReview;
            this.Name = name;
            this.UserEmailId = userEmailId;
        }
    }
}