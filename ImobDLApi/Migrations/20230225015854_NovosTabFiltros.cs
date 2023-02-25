using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ImobDLApi.Migrations
{
    public partial class NovosTabFiltros : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cidade",
                table: "Imoveis");

            migrationBuilder.DropColumn(
                name: "EApartamento",
                table: "Imoveis");

            migrationBuilder.DropColumn(
                name: "ECondominio",
                table: "Imoveis");

            migrationBuilder.AddColumn<int>(
                name: "CidadeId",
                table: "Imoveis",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TipoId",
                table: "Imoveis",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Cidades",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CidadeNome = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cidades", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tipos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TipoDescricao = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tipos", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Imoveis_CidadeId",
                table: "Imoveis",
                column: "CidadeId");

            migrationBuilder.CreateIndex(
                name: "IX_Imoveis_TipoId",
                table: "Imoveis",
                column: "TipoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Imoveis_Cidades_CidadeId",
                table: "Imoveis",
                column: "CidadeId",
                principalTable: "Cidades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Imoveis_Tipos_TipoId",
                table: "Imoveis",
                column: "TipoId",
                principalTable: "Tipos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Imoveis_Cidades_CidadeId",
                table: "Imoveis");

            migrationBuilder.DropForeignKey(
                name: "FK_Imoveis_Tipos_TipoId",
                table: "Imoveis");

            migrationBuilder.DropTable(
                name: "Cidades");

            migrationBuilder.DropTable(
                name: "Tipos");

            migrationBuilder.DropIndex(
                name: "IX_Imoveis_CidadeId",
                table: "Imoveis");

            migrationBuilder.DropIndex(
                name: "IX_Imoveis_TipoId",
                table: "Imoveis");

            migrationBuilder.DropColumn(
                name: "CidadeId",
                table: "Imoveis");

            migrationBuilder.DropColumn(
                name: "TipoId",
                table: "Imoveis");

            migrationBuilder.AddColumn<string>(
                name: "Cidade",
                table: "Imoveis",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "EApartamento",
                table: "Imoveis",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "ECondominio",
                table: "Imoveis",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
