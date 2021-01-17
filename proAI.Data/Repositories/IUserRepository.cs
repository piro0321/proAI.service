using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using proAI.Common.Models;

namespace proAI.Data.Repositories
{
    public interface IUserRepository
    {

        Task<User> GetByIdAsync(string id);
        Task<IEnumerable<User>> GetAll();

    }
}
