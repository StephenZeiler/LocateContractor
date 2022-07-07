using System;

namespace Test_API
{
    public class Test
    {

        public int Id { get; set; }
        public string People { get; set; }

        public Test(int id, string people)
        {
            this.Id = id;
            this.People = people;
        }
    }
}

