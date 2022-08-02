using System;
using Microsoft.EntityFrameworkCore;

namespace Business
{
    public class ReviewContext : DbContext
    {
        public ReviewContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Review> Review { get; set; }

    }
}