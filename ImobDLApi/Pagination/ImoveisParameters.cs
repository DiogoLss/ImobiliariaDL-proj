using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImobDLApi.Pagination
{
    public class ImoveisParameters
    {
        const int maxPageSize = 50;
        public int PageNumber {get;set;} = 1;
        private int _pageSize = 20;
        public int PageSize{
            get{
                return _pageSize;
            }
            set{
                _pageSize = (value > maxPageSize)? maxPageSize : value;
            }
        }
    }
}