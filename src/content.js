import {list_breakfast_items} from "./food_items.js";
import {list_lunch_items} from "./food_items.js";
import {list_dinner_items} from "./food_items.js";

function itm(itmid,img_src,name,description,price) {
    let item = `<div class='item'>
                                <img id=`+ itmid +` class="img" src=`+ img_src +`>
                                <label class='itm-name'>`+ name +`</label>
                                <button class='`+ itmid +`-dtls'>Details</button>
                                <label class='price ` + itmid + `'>`+ price +` (50% off for first three days)</label>
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
let brft = food_items("bft", breakfast_items);
let lnch = food_items("lnch", lunch_items);
let dinr = food_items("dnr", dinner_items);


let create_menu = `<div class="meal-time">
                        <label id="bfst">Breakfast</label>
                        <label id="lunch">Lunch</label>
                        <label id="dnnr">Dinner</label>
                    </div>
                    <div class='menu' >
                        <div class='breakfast' >`+ brft.list() +`
                        </div>
                        <div class='lunch' >`+ lnch.list() +`</div>
                        <div class='dinner' >`+ dinr.list() +`
                        </div>
                        <div class='beverages' >
                        </div>
                        <div class='desserts' >
                        </div>
                    </div>`; 



 export {create_menu};