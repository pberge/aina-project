using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AinaBackoffice.Models;
using Microsoft.AspNetCore.Mvc;

namespace AinaBackoffice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/news
        [HttpPost]
        public ActionResult<string> Post(dynamic value)
        {
            return "ok";
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
