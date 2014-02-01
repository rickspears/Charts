using Charts.Data;
using Charts.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Charts.Web.Controllers
{
    public class HomeController : Controller
    {
        #region Constructors
        public HomeController(IRepository<Item> repository)
        {
            this.repository = repository;
        }
        #endregion

        #region Properties
        private IRepository<Item> repository { get; set; }
        #endregion

        #region Methods
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Item()
        {
            ViewBag.Message = "Your Item Page";
            var items = repository.GetAll();
            return View(items);
        }
        #endregion
    }
}
