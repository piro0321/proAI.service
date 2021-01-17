using Dapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using proAI.Common.Models;
using proAI.Data.Common;
using System.Threading.Tasks;

namespace proAI.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IConnectionCreater _connectionCreater;

        public UserRepository(IConnectionCreater connectionCreater)
        {
            _connectionCreater = connectionCreater;
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            using IDbConnection Con = _connectionCreater.CreateConnection();
            Con.Open();
            var user = await Con.QueryAsync<User>("SELECT * FROM user");
            // var user = await Con
            // var user = new User();

            return user;
        }

        public async Task<User> GetByIdAsync(string id)
        {
            using IDbConnection Con = _connectionCreater.CreateConnection();
            Con.Open();
            var user = await Con.QueryFirstOrDefault("SELECT * FROM user WHERE id = @Id",new { Id = id });
            // var user = await Con
            // var user = new User();

            return user;
        }
    }
}

// 参考サイト　Dapper
// https://sweets-junkie.hatenablog.com/entry/2014/03/07/010004