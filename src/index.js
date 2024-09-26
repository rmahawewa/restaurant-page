import "./styles.css";
import { create_menu } from "./content.js";

let option = document.querySelectorAll(".nav-btn");
// console.log(option);

let add_content = (id) => {
    let content = document.querySelector("#content");
    if(id.localeCompare("home-btn") === 0){

    }
    if(id.localeCompare("menu-btn") === 0){
        console.log("menu button clicked");
        content.innerHTML = create_menu;
    }
    if(id.localeCompare("about-btn") === 0){
        // content.innerHTML = ;
    }
};

// option.forEach((item) => item.addEventListner("click", add_content(item.id)));
option.forEach((item) => item.addEventListener("click", function(){
    add_content(item.id);
}));

let details_btn = document.querySelectorAll(".details");
details_btn.forEach((btn) => btn.addEventListener("click", function(){
    console.log("details button clicked");
    let name = this.getAttribute("nme");
    let imgsrc = this.getAttribute("imgsrc");
    let description = this.getAttribute("descr");

    view_details(name, imgsrc, description);
}));

let modal_btn = document.querySelectorAll(".ok-btn");
modal_btn.forEach((btn) => btn.addEventListener("click", function(){
    view_prev_content();
}));

function view_details(name, image, description){
    mdl = description_modal(name,image,description).modal;
    let content = document.querySelector("#content");
    content.innerHTML = mdl;
}

function view_prev_content(){
    let content = document.querySelector("#content");
    content.innerHTML = create_menu;
}

console.log("Hello Friends!");