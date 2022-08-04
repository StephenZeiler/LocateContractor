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

        private BusinessContext _reviewContext;
        public ReviewController(BusinessContext context)
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
        [HttpGet("BusinessReview/{searchString}")]
        public ActionResult<IEnumerable<Review>> GetByBusiness(string searchString)
        {
            IQueryable<Review> reviewQuery = from Review in _reviewContext.Review
                                             where Review.BusinessEmail == searchString
                                             select Review;
            List<Review> list = new List<Review>();
            foreach (Review review in reviewQuery)
            {
                list.Add(review);
            }

            return list;
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