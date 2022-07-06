using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;



namespace Test_API
{

    [ApiController]
    [Route("[controller]")]

    public class TestController : ControllerBase
    {
        List<Test> list = new List<Test>() { new Test(0, "Stephen"), new Test(1, "Krescens"), new Test(2, "Andrew"), new Test(3, "David"), new Test(4, "Zac") };

        [HttpGet("{Id}")]
        public IActionResult GetById(int id)
        {
            return Ok(list.Where(list => list.Id == id));
        }

    }

}
