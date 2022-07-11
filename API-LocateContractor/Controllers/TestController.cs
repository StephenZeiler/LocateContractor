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
        public ActionResult<List<Test>> Get()
        {

            try
            {
                var data = _testContext.Test.ToList();
                return StatusCode(StatusCodes.Status200OK, data);

            }


            catch (Exception E)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
            }
        }
    }

}



