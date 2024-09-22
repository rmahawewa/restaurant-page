import "./styles.css";
import { create_menu } from "./menu.js";

let option = document.querySelectorAll(".nav-btn");
// console.log(option);

let add_content = (id) => {
    let content = document.querySelector("#content");
    let temp = document.createElement("template");
    content.innerHTML=temp;
    if(id.localeCompare("home-btn") === 0){

    }
    if(id.localeCompare("menu-btn") === 0){
        temp.innerHTML = create_menu;
    }
    if(id.localeCompare("about-btn") === 0){
        // content.innerHTML = ;
    }
};

// option.forEach((item) => item.addEventListner("click", add_content(item.id)));
option.forEach((item) => item.addEventListener("click", function(){
    add_content(item.id);
}));

// document.querySelector("#home-btn").addEventListener("click", function(){});
// document.querySelector("#menu-btn").addEventListener("click", function(){add_content("menu-btn")});
// document.querySelector("#about-btn").addEventListener("click", function(){});

console.log("Hello Friends!");