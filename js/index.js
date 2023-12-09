import { jacketscollectionHomePage } from "./home.js";
import { jacketPage } from "./postjacket.js";
import { jacketscollectionPage } from "./postjackets.js";
import { checkoutPage } from "./checkout.js";

/* for local, /index.html, /collection.html, /productdetail.html are working
   but for live environment i have to remove .html */

/* "/" is index or home page on live server */
if(location.pathname === "/")
{
  jacketscollectionHomePage();
}

if(location.pathname === "/collection")
{
  jacketscollectionPage();

}


if(location.pathname === "/productdetail")
{
  alert("hi from index.js from productdetail");
  jacketPage();
}


if(location.pathname === "/checkout")
{
  alert("hi from index.js");
  checkoutPage();
}