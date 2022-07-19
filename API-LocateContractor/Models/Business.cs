using System;

namespace Business
{

    public class Business
    {

        public string UserEmailId { get; set; }
        public string BusinessName { get; set; }
        public string Specialty { get; set; }
        public string HoursOperation { get; set; }
        public string EmailContact { get; set; }
        public string PhoneContact { get; set; }
        public string Services { get; set; }
        public string About { get; set; }
        public Business(string userEmailId, string businessName, string specialty, string hoursOperation, string emailContact, string services, string about)
        {
            this.UserEmailId = userEmailId;
            this.BusinessName = businessName;
            this.Specialty = specialty;
            this.HoursOperation = hoursOperation;
            this.EmailContact = emailContact;
            this.Services = services;
            this.About = about;
        }
    }
}