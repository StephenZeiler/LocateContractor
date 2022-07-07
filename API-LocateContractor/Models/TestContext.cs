using System;
using Microsoft.EntityFrameworkCore;

namespace Test_API
{
    public class TestContext : DbContext
    {
        public TestContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Test> Test { get; set; }
    }
}