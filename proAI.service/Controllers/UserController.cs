using Microsoft.AspNetCore.Mvc;
using proAI.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proAI.service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserRepository _userRepository;

        public UserController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            Console.WriteLine("通過");
            var user = await _userRepository.GetAll();
            return Ok(user);
        }

        // Get: api/user
        [HttpGet("/id")]
        public async Task<IActionResult> GetById(string id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            // https://docs.microsoft.com/ja-jp/aspnet/core/web-api/action-return-types?view=aspnetcore-5.0
            return Ok(user);
        }
    }
}
