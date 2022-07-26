using System;
using Microsoft.EntityFrameworkCore;

namespace Business
{
    public class BusinessContext : DbContext
    {
        public BusinessContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Business> Business { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Business>().HasKey(x => x.UserEmailId);
            base.OnModelCreating(modelBuilder);
        }
    }
}