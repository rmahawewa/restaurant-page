import bfst1 from "./asset/resource/img/breakfast/cheese.png";
import bfst2 from "./asset/resource/img/breakfast/butter.png";
import bfst3 from "./asset/resource/img/breakfast/jam.png";
import bfst4 from "./asset/resource/img/breakfast/honey.png";
import bfst5 from "./asset/resource/img/breakfast/banana.png";
import bfst6 from "./asset/resource/img/breakfast/coconut_milk.png";
import bfst7 from "./asset/resource/img/breakfast/coconut_chutney.png";
import bfst8 from "./asset/resource/img/breakfast/shreaded_coconut_and_sour_and_spicy_paste.png";
import bfst9 from "./asset/resource/img/breakfast/dhal.png";
import bfst10 from "./asset/resource/img/breakfast/flat_bread.png";
import bfst11 from "./asset/resource/img/breakfast/mixed_beans_and_peas_steamed.png";
import bfst12 from "./asset/resource/img/breakfast/white_beans.png";
import bfst13 from "./asset/resource/img/breakfast/fried_mushrooms.png";
import bfst14 from "./asset/resource/img/breakfast/red_beans.png";
import bfst15 from "./asset/resource/img/breakfast/bread.png";
import bfst16 from "./asset/resource/img/breakfast/sweet_potato.png";
import bfst17 from "./asset/resource/img/breakfast/chickpeas.png";
import bfst18 from "./asset/resource/img/breakfast/rice.png";

function food_item(id,image_src,name,description,price){
    return {id, image_src, name, description, price}
}

let b0 = food_item(0, bfst1, "Chedar cheese","Fresh chedar cheese made from cow milk. Unsweetened. 100g in one slice.", "$ 1.85");
let b1 = food_item(1, bfst2, "Salted butter", "Fresh salted butter made from cow milk without added ingredients. 100g in one block.", "$ 2.25");
let b2 = food_item(2, bfst3, "Mix fruit jam", "Ingredients: Orange, Pineapple, Strawberry, Gelatin, Sugar, Salt. 100g in one cup.", "$ 1.20");
let b3 = food_item(3, bfst4, "Pure bee honey", "100g in one jar.", "$ 3");
let b4 = food_item(4, bfst5, "Banana", "Cavendish banans. Three bananas included in one pack.", "$ 1");
let b5 = food_item(5, bfst6, "Coconut milk", "Can enjoy with Flat bread, Steamed peas or beans. 200ml in a jar", "$ 1");
let b6 = food_item(6, bfst7, "Coconut chutney", "Ingredients: Shreaded coconut, water, curd, coconut oil, fried spices. Three cups in one bawl", "$ 3");
let b7 = food_item(7, bfst8, "Shreader coconut and sour spice paste", "Spice paste ingredients: Red chillie, onion, ginger, lemon juice, salt. Can enjoy with steamed peas and beans or with steamed sweet potatoes. 100g of shreaded coconut in one bawl", "$ 1.85");
let b8 = food_item(8, bfst9, "Dhal curry", "Ingredients: Lentils, coconut milk, chillie, garlik, salt and other spices. Three cups in one bawl", "$ 4");
let b9 = food_item(9, bfst10, "Flat bread", "Ingredients: Wheat flour, coconut, salt, water. 200g in one bread", "$ 1.85");
let b10 = food_item(10, bfst11, "Steamed peas and beans mix", "Ingredients: Red beans, white beans, green peas, chickpeas. Can enjoy with coconut milk or with shreaded coconut and sour spice paste. Three cups in one bawl", "$ 4");
let b11 = food_item(11, bfst12, "Steamed white beans", "Can enjoy with coconut milk or with shreaded coconut and sour spice paste. Three cups in one bawl.", "$ 4" );
let b12 = food_item(12, bfst13, "Fried mushrooms", "Fried mushrooms with added salt, pepper and garlic. Can enjoy with rice. One cup in one bawl.", "$ 1.85" );
let b13 = food_item(13, bfst14, "Steamed red beans", "Can enjoy with coconut milk or with shreaded coconut and sour spice paste. Three cups in one bawl.", "$ 4");
let b14 = food_item(14, bfst15, "Bread", "Whole wheat bread. Five slices for one plate", "$ 1");
let b15 = food_item(15, bfst16, "Steamed sweet potatoes", "Can enjoy with shreaded coconut and sour spice paste. Three cups in one plate", "$ 1.25");
let b16 = food_item(16, bfst17, "Steamed chickpeas", "Can enjoy with coconut milk or with shreaded coconut and sour spice paste. Three cups in one bawl.", "$ 4");
let b17 = food_item(17, bfst18, "Rice", "Can enjoy with dhal curry. Three cups in one bawl", "$ 1.85");

let list_breakfast_items = [];
list_breakfast_items.push(b0);
list_breakfast_items.push(b1);
list_breakfast_items.push(b2);
list_breakfast_items.push(b3);
list_breakfast_items.push(b4);
list_breakfast_items.push(b5);
list_breakfast_items.push(b6);
list_breakfast_items.push(b7);
list_breakfast_items.push(b8);
list_breakfast_items.push(b9);
list_breakfast_items.push(b10);
list_breakfast_items.push(b11);
list_breakfast_items.push(b12);
list_breakfast_items.push(b13);
list_breakfast_items.push(b14);
list_breakfast_items.push(b15);
list_breakfast_items.push(b16);
list_breakfast_items.push(b17);

export {list_breakfast_items};