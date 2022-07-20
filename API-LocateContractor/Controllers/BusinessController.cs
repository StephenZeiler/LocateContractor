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

        // [HttpGet("{Id}")]
        // public ActionResult<List<Business>> GetById(int id)
        // {

        //     try
        //     {
        //         List<Business> data = new List<Business>();
        //         var dataId = _businessContext.Business.FirstOrDefault(t => t.Id == id);
        //         data.Add(dataId);
        //         return StatusCode(StatusCodes.Status200OK, data.ToList());
        //     }


        //     catch (Exception E)
        //     {
        //         return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
        //     }
        // }

        [HttpPost]
        public ActionResult<List<Business>> Post([FromBody] Business values)
        {

            try
            {
                _businessContext.Business.Add(values);

                _businessContext.SaveChanges();
                return StatusCode(StatusCodes.Status200OK);

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
                var dataId = _businessContext.Business.FirstOrDefault(t => t.UserEmailId == userEmail);
                data.Add(dataId);
                return StatusCode(StatusCodes.Status200OK, data.ToList());
            }

            catch (Exception E)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, E.Message);
            }
        }

        [HttpPatch("{UserEmailId}")]
        public ActionResult<List<Business>> UpdateBusiness([FromBody] Business business)
        {
            List<Business> data = new List<Business>();

            if (data != null)
            {
                var businessPatch = _businessContext.Business.FirstOrDefault(t => t.UserEmailId == business.UserEmailId);
                data.Add(business);
                if (businessPatch != null)
                {
                    businessPatch = business;
                }
            }
            return Ok(data);
        }
    }

}