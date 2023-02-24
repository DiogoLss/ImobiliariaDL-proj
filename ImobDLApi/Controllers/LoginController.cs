using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ImobDLApi.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ImobDLApi.Controllers
{
    public class LoginController : BaseApiController
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public LoginController(UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }
        // [HttpGet("see")]
        // public ActionResult See()
        // {
        //     _userManager.
        // }
        [HttpPost]
        public async Task<IActionResult> Login(LoginDTO model)
        {
            var user = await _userManager.FindByNameAsync(model.Login);

            if(user != null)
            {
                var result = await _signInManager.PasswordSignInAsync(user, model.Senha, false, false);
                if (result.Succeeded)
                {
                    return Ok("Logado");
                }
            }
            return NotFound();
        }
        [HttpPost("Registrar")]
        public async Task<ActionResult> RegisterUser(string login, string senha, string confirmaSenha, string role)
        {
             var user = new IdentityUser()
             {
                UserName = login
             };
            if(senha != confirmaSenha)
            {
                return BadRequest();
            }

            var result = await _userManager.CreateAsync(user, senha);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, role);
                await _signInManager.SignInAsync(user, false);
                return Ok("Registrado");
            }
            return BadRequest(result.Errors);
            
        }
        [HttpPost("Role")]
        public async Task<ActionResult> CreateRole(string name)
        {
            await _roleManager.CreateAsync(new IdentityRole(){
                NormalizedName = name.ToUpper(),
                Name = name
            });
            return Ok();
        }
    }
}