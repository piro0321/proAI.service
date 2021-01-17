using System;
using System.Collections.Generic;
using System.Text;
using System.Data.Common;
using System.Data;

namespace proAI.Data.Common
{
    class ProAIConnectionCreater : IConnectionCreater
    {
        // （readonly 中身は書き換え可能
        private readonly string _connectionString;// DBの接続に関する文字列
        private readonly DbProviderFactory _dbProviderFactory;// どのDbにアクセスするかの情報

        // コンストラクタ
        public ProAIConnectionCreater(string connectionString)
        {
            _connectionString = connectionString;
            _dbProviderFactory = DbProviderFactories.GetFactory("MySql.Data.MySqlClient");
        }

        // コネクションの宣言
        public IDbConnection CreateConnection()
        {
            IDbConnection conn = _dbProviderFactory.CreateConnection();
            conn.ConnectionString = _connectionString;

            return conn;
        }


    }
}
