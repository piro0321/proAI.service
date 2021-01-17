using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace proAI.Data.Common
{
    public interface IConnectionCreater
    {
        IDbConnection CreateConnection();
    }
}
