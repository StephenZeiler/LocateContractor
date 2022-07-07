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
        private TestContext _testContext;

        public TestController(TestContext context)
        {
            _testContext = context;
        }

        List<Test> list = new List<Test>() { new Test(0, "Stephen"), new Test(1, "Krescens"), new Test(2, "Andrew"), new Test(3, "David"), new Test(4, "Zac") };

        [HttpGet]
        public ActionResult<IEnumerable<Test>> Get()
        {
            return _testContext.Test.ToList();
        }
    }

}



