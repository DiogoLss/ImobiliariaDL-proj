// using System;
// using Microsoft.EntityFrameworkCore.Migrations;

// #nullable disable

// namespace ImobDLApi.Migrations
// {
//     public partial class PhotoMigration : Migration
//     {
//         protected override void Up(MigrationBuilder migrationBuilder)
//         {
//             // migrationBuilder.DropColumn(
//             //     name: "Cidade",
//             //     table: "Imoveis");

//             // migrationBuilder.DropColumn(
//             //     name: "EApartamento",
//             //     table: "Imoveis");

//             // migrationBuilder.RenameColumn(
//             //     name: "ECondominio",
//             //     table: "Imoveis",
//             //     newName: "EVenda");

//             // migrationBuilder.AddColumn<int>(
//             //     name: "TipoId",
//             //     table: "Imoveis",
//             //     type: "int",
//             //     nullable: false,
//             //     defaultValue: 0);

//             migrationBuilder.AddColumn<int>(
//                 name: "CidadeId",
//                 table: "Bairros",
//                 type: "int",
//                 nullable: false,
//                 defaultValue: 0);

//             migrationBuilder.CreateTable(
//                 name: "Cidades",
//                 columns: table => new
//                 {
//                     Id = table.Column<int>(type: "int", nullable: false)
//                         .Annotation("SqlServer:Identity", "1, 1"),
//                     CidadeNome = table.Column<string>(type: "nvarchar(max)", nullable: true)
//                 },
//                 constraints: table =>
//                 {
//                     table.PrimaryKey("PK_Cidades", x => x.Id);
//                 });

//             migrationBuilder.CreateTable(
//                 name: "Images",
//                 columns: table => new
//                 {
//                     Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
//                     Url = table.Column<string>(type: "nvarchar(max)", nullable: true),
//                     IsMain = table.Column<bool>(type: "bit", nullable: false),
//                     ImovelId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
//                 },
//                 constraints: table =>
//                 {
//                     table.PrimaryKey("PK_Images", x => x.Id);
//                     table.ForeignKey(
//                         name: "FK_Images_Imoveis_ImovelId",
//                         column: x => x.ImovelId,
//                         principalTable: "Imoveis",
//                         principalColumn: "Id",
//                         onDelete: ReferentialAction.Cascade);
//                 });

//             // migrationBuilder.CreateTable(
//             //     name: "Tipos",
//             //     columns: table => new
//             //     {
//             //         Id = table.Column<int>(type: "int", nullable: false)
//             //             .Annotation("SqlServer:Identity", "1, 1"),
//             //         TipoDescricao = table.Column<string>(type: "nvarchar(max)", nullable: true)
//             //     },
//             //     constraints: table =>
//             //     {
//             //         table.PrimaryKey("PK_Tipos", x => x.Id);
//             //     });

//             migrationBuilder.CreateIndex(
//                 name: "IX_Imoveis_TipoId",
//                 table: "Imoveis",
//                 column: "TipoId");

//             // migrationBuilder.CreateIndex(
//             //     name: "IX_Bairros_CidadeId",
//             //     table: "Bairros",
//             //     column: "CidadeId");

//             migrationBuilder.CreateIndex(
//                 name: "IX_Images_ImovelId",
//                 table: "Images",
//                 column: "ImovelId");

//             // migrationBuilder.AddForeignKey(
//             //     name: "FK_Bairros_Cidades_CidadeId",
//             //     table: "Bairros",
//             //     column: "CidadeId",
//             //     principalTable: "Cidades",
//             //     principalColumn: "Id",
//             //     onDelete: ReferentialAction.Cascade);

//             // migrationBuilder.AddForeignKey(
//             //     name: "FK_Imoveis_Tipos_TipoId",
//             //     table: "Imoveis",
//             //     column: "TipoId",
//             //     principalTable: "Tipos",
//             //     principalColumn: "Id",
//             //     onDelete: ReferentialAction.Cascade);
//         }

//         protected override void Down(MigrationBuilder migrationBuilder)
//         {
//             migrationBuilder.DropForeignKey(
//                 name: "FK_Bairros_Cidades_CidadeId",
//                 table: "Bairros");

//             migrationBuilder.DropForeignKey(
//                 name: "FK_Imoveis_Tipos_TipoId",
//                 table: "Imoveis");

//             migrationBuilder.DropTable(
//                 name: "Cidades");

//             migrationBuilder.DropTable(
//                 name: "Images");

//             migrationBuilder.DropTable(
//                 name: "Tipos");

//             migrationBuilder.DropIndex(
//                 name: "IX_Imoveis_TipoId",
//                 table: "Imoveis");

//             migrationBuilder.DropIndex(
//                 name: "IX_Bairros_CidadeId",
//                 table: "Bairros");

//             migrationBuilder.DropColumn(
//                 name: "TipoId",
//                 table: "Imoveis");

//             migrationBuilder.DropColumn(
//                 name: "CidadeId",
//                 table: "Bairros");

//             migrationBuilder.RenameColumn(
//                 name: "EVenda",
//                 table: "Imoveis",
//                 newName: "ECondominio");

//             migrationBuilder.AddColumn<string>(
//                 name: "Cidade",
//                 table: "Imoveis",
//                 type: "nvarchar(max)",
//                 nullable: true);

//             migrationBuilder.AddColumn<bool>(
//                 name: "EApartamento",
//                 table: "Imoveis",
//                 type: "bit",
//                 nullable: false,
//                 defaultValue: false);
//         }
//     }
// }
