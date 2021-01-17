using System;
using System.Collections.Generic;
using System.Text;

namespace proAI.Common.Models
{
    /// <summary>
    /// ユーザ情報
    /// </summary>
    public class User
    {
        /// <summary>
        /// ユーザID
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// ユーザ名
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 性別
        /// </summary>
        public string Sex { get; set; }

        /// <summary>
        /// コメント
        /// </summary>
        public string Comment { get; set; }
    }
}