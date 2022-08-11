using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_LocateContractor.Migrations
{
    public partial class BusinessReviews : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Business",
                columns: table => new
                {
                    UserEmailId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    BusinessName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Specialty = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmailContact = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneContact = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Services = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    About = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Monday = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tuesday = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Wednesday = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Thursday = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Friday = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Saturday = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Sunday = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Business", x => x.UserEmailId);
                });

            migrationBuilder.CreateTable(
                name: "Review",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserReview = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserEmailId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<double>(type: "float", nullable: false),
                    BusinessEmail = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Review", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Business");

            migrationBuilder.DropTable(
                name: "Review");
        }
    }
}
