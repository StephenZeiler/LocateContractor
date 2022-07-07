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


        [HttpGet]
        public ActionResult<IEnumerable<Test>> Get()
        {
            return _testContext.Test.ToList();
        }

    }

}



