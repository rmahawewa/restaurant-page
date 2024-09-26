import {list_breakfast_items} from "./food_items.js";
import {list_lunch_items} from "./food_items.js";
import {list_dinner_items} from "./food_items.js"
import {list_beverages} from "./food_items.js";
import {list_desserts} from "./food_items.js";

function itm(itmid,img_src,name,description) {
    let item = `<div class='item'>
                                <img id=`+ itmid +` class="img" src=`+ img_src +`>
                                <label class='itm-name'>`+ name +`</label>                                
                                <button class='details' data-nme=`+ name +` data-imgsrc=`+ img_src +` data-descr=`+ description +` >Details</button>
                </div>`;
    return {item};
}

function food_items(time, menu_arr) {    
    let list = () => {
        let menu = '';
        for(let i=0; i<menu_arr.length; i++){
            let num = i + 1;
            let itmid = time + num;
            let img_src = menu_arr[i].image_src;
            let item_name = menu_arr[i].name;
            let description = menu_arr[i].description;
            let price = menu_arr[i].price;
            menu += itm(itmid, img_src, item_name, description, price).item;
        }
        return menu;
    }    
    return {list};
}

let breakfast_items = list_breakfast_items;
let lunch_items = list_lunch_items;
let dinner_items = list_dinner_items;
let beverages = list_beverages;
let desserts = list_desserts;
let brft = food_items("bft", breakfast_items);
let lnch = food_items("lnch", lunch_items);
let dinr = food_items("dnr", dinner_items);
let dest = food_items("dest", desserts);
let bevs = food_items("bev", beverages);


let create_menu = `<p id="discount">50% off from every menu item for the first three days of staying</p>
                    <div class='menu' >
                        <h1 id='b'>Breakfast</h1>
                        <div class='breakfast' >`+ brft.list() +`
                        </div>
                        <h1 id='l'>Lunch</h1>
                        <div class='lunch' >`+ lnch.list() +`</div>
                        <h1 id='d'>Dinner</h1>
                        <div class='dinner' >`+ dinr.list() +`
                        </div>
                        <h1 id='ds'>Desserts</h1>
                        <div class='desserts' >`+ dest.list() +`
                        </div>
                        <h1 id='bv'>Beverages</h1>
                        <div class='beverages' >`+ bevs.list() +`
                        </div>
                    </div>`; 

function description_modal(itm_name, img_src, description){
    let modal = `
        <div id='modal'>
            <div id='card'>
                <div class='close'><button id="close" onclick='view_prev_content()'>X<button></div>
                <div id="modal-content">
                    <div>`+ itm_name +`</div>
                    <div><img src='`+ img_src +`' id="selected-img"></div>
                    <div>`+ description +`</div>
                    <button class='ok-btn'>ok</button>
                </div>
            </div>
        </div>            
    `;
    return modal;
}

export {create_menu};