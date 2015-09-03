using System;
using System.Data.Entity.Core.Common.EntitySql;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DataBindings()
        {
            return View();
        }

        public ActionResult Controllers()
        {
            return View();
        }

        public ActionResult Services()
        {
            return View();
        }

        public ActionResult Promises()
        {
            return View();
        }

        public ActionResult ComponentExample()
        {
            return View();
        }

        public ActionResult AsyncServices()
        {
            return View();
        }

        private static Random _random;
        private static Random Rand
        {
            get
            {
                return _random ?? (_random = new Random());
            }
        }

        public ActionResult AsyncServicesData()
        {
            return Json(new object[]
            {
                new
                {
                    Name = "Jhon",
                    Age = Rand.Next(1, 40),
                    Hits = 0
                },
                new
                {
                    Name = "Blah",
                    Age = Rand.Next(1, 20),
                    Hits = 0
                },
                new
                {
                    Name = "Meh",
                    Age = Rand.Next(1, 10),
                    Hits = 0
                }
            }, JsonRequestBehavior.AllowGet);
        }
    }
}