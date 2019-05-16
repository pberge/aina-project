using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aina.Services;
using Microsoft.AspNetCore.Mvc;

namespace Aina.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class PricesController : ControllerBase
    {
        // GET api/prices
        [HttpGet]
        public ActionResult<int> Get()
        {
            return new PricesService().GetPrices();
        }

        // GET api/prices/type
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "price";
        }

        // POST api/prices
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/prices/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/prices/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
