/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementsByTagName('body')[0].style.cssText = "background-color: wheat;";

//body.style.cssText = "background-color: grey;";
var iDiv = document.createElement("div");
iDiv.className = "block";
iDiv.style.cssText = " color: black; display: block; text-align: center; font-size: 30px";

var heading = document.createElement("h1");
heading.innerHTML = "Welcome";
iDiv.appendChild(heading);

document.getElementsByTagName('body')[0].appendChild(iDiv);

var innerDiv = document.createElement("div");
innerDiv.className = "main_block";
innerDiv.style.cssText = " color: blue; display: block;";

var leftDiv = document.createElement("div");
leftDiv.className = "left_block";
leftDiv.style.cssText = " color: pink; display: block; float: left; width: 60%";

var elem = document.createElement("img");
elem.setAttribute ("src", "images/WelcomePage.jpeg");
elem.style.cssText = " height: 300px; width: 450px;";
elem.setAttribute("onclick", "alert('vhjjjjj')");
//elem.setAttributes{"src": "images/WelcomePage.jpeg"; "height": "30%"; "width": "30%"};
leftDiv.appendChild(elem);
innerDiv.appendChild(leftDiv);


var rightDiv = document.createElement("div");
rightDiv.className = "right_block";
rightDiv.style.cssText = "color: green; display: block; float: left; width: 40%; text-align: center";

var para = document.createElement("P");
para.id = "text";
var x =  "Selection Before the Library can buy any books, we have to know whats being published.";
para.innerHTML = x;
para.setAttribute("onclick", "console.log(event)");
para.style.cssText = " float: left; text-align: center";

rightDiv.appendChild(para);
innerDiv.appendChild(rightDiv);

document.getElementsByTagName('body')[0].appendChild(innerDiv);

