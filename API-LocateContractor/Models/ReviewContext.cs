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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Review>().HasKey(x => x.UserEmailId);
            base.OnModelCreating(modelBuilder);
        }
    }
}