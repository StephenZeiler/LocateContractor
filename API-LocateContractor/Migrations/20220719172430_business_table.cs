using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_LocateContractor.Migrations
{
    public partial class business_table : Migration
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
                    HoursOperation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmailContact = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneContact = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Services = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    About = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Business", x => x.UserEmailId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Business");
        }
    }
}
