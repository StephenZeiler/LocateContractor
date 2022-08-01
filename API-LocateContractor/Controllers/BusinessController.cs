using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;



namespace Business
{

    [ApiController]
    [Route("[controller]")]
    public class BusinessController : ControllerBase
    {
        private BusinessContext _businessContext;

        public BusinessController(BusinessContext context)
        {
            _businessContext = context;
        }

        [HttpGet]
        public ActionResult<List<Business>> Get()
        {
            try
            {
                var data = _businessContext.Business.ToList();
                return StatusCode(StatusCodes.Status200OK, data);
            }
            catch (Exception E)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
            }
        }

        [HttpPost]
        public ActionResult<List<Business>> Post([FromBody] Business values)
        {

            try
            {
                if (values != null)
                {
                    _businessContext.Business.Add(values);

                    _businessContext.SaveChanges();
                    return StatusCode(StatusCodes.Status200OK);
                }
                return StatusCode(StatusCodes.Status304NotModified);

            }


            catch (Exception E)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
            }
        }
        [HttpGet("email/{UserEmail}")]
        public ActionResult<List<Business>> GetByEmail(string userEmail)
        {
            try
            {
                List<Business> data = new List<Business>();
                if (userEmail != null)
                {
                    var dataId = _businessContext.Business.FirstOrDefault(t => t.UserEmailId == userEmail);
                    data.Add(dataId);
                    return StatusCode(StatusCodes.Status200OK, data.ToList());
                }
                return StatusCode(StatusCodes.Status404NotFound);
            }

            catch (Exception E)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
            }
        }

        [HttpGet("search/{searchString}")]
        public ActionResult<List<Business>> GetBySearch(string searchString)
        {
            var searchBusiness = from Business in _businessContext.Business
                                 where (Business.Services.Contains(searchString))
                                 || (Business.BusinessName.Contains(searchString))
                                 || (Business.Specialty.Contains(searchString))
                                 select Business;
            List<Business> list = new List<Business>();
            foreach (Business business in searchBusiness)
            {
                list.Add(business);
            }
            return list;
        }

        [HttpDelete("{UserEmail}")]
        public ObjectResult Delete(string userEmail)
        {
            try
            {

                var business = _businessContext.Business.FirstOrDefault(t => t.UserEmailId == userEmail);
                if (business != null)
                {
                    _businessContext.Business.Remove(business);
                    _businessContext.SaveChanges();
                    return StatusCode(StatusCodes.Status200OK, business);
                }
                return StatusCode(StatusCodes.Status304NotModified, business);
            }
            catch (Exception E)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
            }
        }


        [HttpPut("{userEmail}")]
        public ActionResult<List<Business>> UpdateBusiness([FromBody] Business business)
        {
            List<Business> data = new List<Business>();
            try
            {
                data.Add(business);
                if (data != null)
                {
                    var businessPut = _businessContext.Business.Where(x => x.UserEmailId == business.UserEmailId).FirstOrDefault();
                    if (businessPut != null)
                    {
                        _businessContext.Remove(businessPut);
                        _businessContext.Add(business);
                        if (_businessContext.ChangeTracker.HasChanges())
                        {
                            _businessContext.SaveChanges();
                            return StatusCode(StatusCodes.Status200OK, data);
                        }
                    }
                }
                return StatusCode(StatusCodes.Status304NotModified, data);
            }
            catch (Exception E)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
            }
        }
    }

}