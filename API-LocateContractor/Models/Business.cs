using System;

namespace Business
{

    public class Business
    {

        public string UserEmailId { get; set; }
        public string BusinessName { get; set; }
        public string Specialty { get; set; }
        public string EmailContact { get; set; }
        public string PhoneContact { get; set; }
        public string Services { get; set; }
        public string About { get; set; }
        public string Monday { get; set; }
        public string Tuesday { get; set; }
        public string Wednesday { get; set; }
        public string Thursday { get; set; }
        public string Friday { get; set; }
        public string Saturday { get; set; }
        public string Sunday { get; set; }
        public Business(string userEmailId, string businessName, string specialty,
        string emailContact, string services, string about, string monday, string tuesday,
        string wednesday, string thursday, string friday, string saturday, string sunday)
        {
            this.UserEmailId = userEmailId;
            this.BusinessName = businessName;
            this.Specialty = specialty;
            this.EmailContact = emailContact;
            this.Services = services;
            this.About = about;
            this.Monday = monday;
            this.Tuesday = tuesday;
            this.Wednesday = wednesday;
            this.Thursday = thursday;
            this.Friday = friday;
            this.Saturday = saturday;
            this.Sunday = sunday;
        }
    }
}