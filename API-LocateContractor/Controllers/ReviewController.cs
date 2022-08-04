using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Business
{
    [ApiController]
    [Route("[controller]")]
    public class ReviewController : ControllerBase
    {

        private ReviewContext _reviewContext;
        public ReviewController(ReviewContext context)
        {
            _reviewContext = context;
        }

        [HttpGet]
        public ActionResult<List<Review>> Get()
        {
            try
            {
                var data = _reviewContext.Review.ToList();
                return StatusCode(StatusCodes.Status200OK, data);
            }
            catch (Exception E)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
            }
        }

        [HttpPost]
        public ActionResult<List<Review>> Post([FromBody] Review values)
        {

            try
            {
                if (values != null)
                {
                    _reviewContext.Review.Add(values);

                    _reviewContext.SaveChanges();
                    return StatusCode(StatusCodes.Status200OK);
                }
                return StatusCode(StatusCodes.Status304NotModified);

            }


            catch (Exception E)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
            }
        }
    }
}