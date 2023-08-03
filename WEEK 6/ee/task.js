// Header 
let header=document.createElement("header");
header.style.cssText="padding:20px; background-color:#3f5abe color:white;display:flex;justify-content:space-between;"


let logo=document.createElement("div");
let logoText=document.createTextNode("ELWAKEEL");
logo.style.cssText="color:red; font-size:20px; font-weight:bold;"



let menu=document.createElement("ul");
menu.style.cssText="display:flex;list-style-type:none;padding:0px;margin:0px";

let li1=document.createElement("li");
let li1Text=document.createTextNode("Home");
li1.style.cssText="margin-right:10px";


let li2=document.createElement("li");
let li2Text=document.createTextNode("About");
li2.style.cssText="margin-right:10px";

let li3=document.createElement("li");
let li3Text=document.createTextNode("Services");
li3.style.cssText="margin-right:10px";


let li4=document.createElement("li");
let li4Text=document.createTextNode("Contact");
li4.style.cssText="margin-right:10px";

li1.appendChild(li1Text);
li2.appendChild(li2Text);
li3.appendChild(li3Text);
li4.appendChild(li4Text);
menu.appendChild(li1);
menu.appendChild(li2);
menu.appendChild(li3);
menu.appendChild(li4);

logo.appendChild(logoText);
header.appendChild(logo);
header.appendChild(menu);
document.body.appendChild(header);


//content

let content=document.createElement("div");
content.style.cssText="background-color:#eeeeee;display:flex;box-sizing:border-box;flex-wrap:wrap;gap:2px;justify-content:center;";


for(let i=1;i<=15;i++)
{
let product=document.createElement("div");
product.style.cssText="padding:20px; color:black; border:1px solid black; background-color:#bcbcbc;margin-top:8px;width: calc((100% - 200px) / 3);text-align:center;"

let num=document.createElement("span");
let number=document.createTextNode(`${i}`);
num.style.cssText="color:white;font-weight:bold;font-size:30px";

let pargh=document.createElement("p");
let parghText=document.createTextNode("Product");
pargh.style.cssText="color:black;"

num.appendChild(number);
pargh.appendChild(parghText);
product.appendChild(num);
product.appendChild(pargh)
content.appendChild(product);
}


document.body.appendChild(content)


//footer

let footer=document.createElement("footer");
let footerText=document.createTextNode("Eyad Ahmed Elwakeel");
footer.style.cssText="padding:20px; margin-top:10px; text-align:center; color:white; background-color:#803939; font-weight:bold;";

footer.appendChild(footerText);
document.body.appendChild(footer);
