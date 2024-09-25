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

import lnch1 from "./asset/resource/img/lunch/baked_beans.png";
import lnch2 from "./asset/resource/img/lunch/corn_soup.png";
import lnch3 from "./asset/resource/img/lunch/mixed_veg_noodles.png";
import lnch4 from "./asset/resource/img/lunch/mixed_veg_rice.png";
import lnch5 from "./asset/resource/img/lunch/pasta_and_cheese.png";
import lnch6 from "./asset/resource/img/lunch/pasta_with_herb_source.png";
import lnch7 from "./asset/resource/img/lunch/roasted_veggies.png";
import lnch8 from "./asset/resource/img/lunch/smashed_potatoes.jpg";
import lnch9 from "./asset/resource/img/lunch/veg_burger.jpeg";

import dnr1 from "./asset/resource/img/dinner/idli.png";
import dnr2 from "./asset/resource/img/dinner/masala_dosa.png";
import dnr3 from "./asset/resource/img/dinner/pasta_salad.png";
import dnr4 from "./asset/resource/img/dinner/dumpling_soup.png";
import dnr5 from "./asset/resource/img/dinner/pizza.png";
import dnr6 from "./asset/resource/img/dinner/upma.png";
import dnr7 from "./asset/resource/img/dinner/veg_soup.png";
import dnr8 from "./asset/resource/img/dinner/veggie_salad.png";

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

let l0 = food_item(0, dnr1, "Baked beans", "Ingredients: Green beans, butter, salt, pepper powder", "$ 1.85");
let l1 = food_item(1, dnr2, "Corn soup", "Ingredients: Corn seeds, Corn flour, mushrooms, garlic, butter, salt, pepper powder", "$ 1.85");
let l2 = food_item(2, dnr3, "Mixed veg noogles", "Ingredients: Wheat noobles, vegitables, sesami seeds, butter, salt, pepper powder", "$ 2.25");
let l3 = food_item(3, dnr4, "Mixe veg rice", "Ingredients: Rice, vegitables, mushroom, green peas, corn seeds, raisins, cashews, mint, celery, basil, butter, salt", "$ 4.45");
let l4 = food_item(4, dnr5, "Pasta and cheese", "Ingredients: Wheat pasta, Fresh milk, Cheese, fried mushroom, garlic, butter, pepper powder, salt", "$ 3.85");
let l5 = food_item(5, dnr6, "Green pasta", "Ingredients: Wheat pasta, butter, almond milk, basil, mint, celery, rosemery, thyme, origano, salt, pepper powder", "$ 3.65");
let l6 = food_item(6, dnr7, "Roasted veggies", "Includes: Cauliflower, Cabbage, Carrot, Okra, Squash, Celery, Potato, Corn, butter, salt, pepper powder", "$ 3.75");
let l7 = food_item(7, dnr8, "Smashed potatoes", "Ingredients: Potato, fresh milk, butter, musted seeds, cumin seeds, basil, garlic, salt", "$ 3");
let l8 = food_item(8, lnch9, "Veg burger", "Includes: Wheat bun, tomato, onion, celery leaves, cheese, fried mushroom, bell pepper, sesami seeds, salt, black pepper powder", "$ 2.95");
let l9 = food_item(9, bfst18, "Rice", "Can enjoy with dhal curry. Three cups in one bawl", "$ 1.85");
let l10 = food_item(10, bfst9, "Dhal curry", "Ingredients: Lentils, coconut milk, chillie, garlik, salt and other spices. Three cups in one bawl", "$ 4");
let l11 = food_item(11, bfst15, "Bread", "Whole wheat bread. Five slices for one plate", "$ 1");

let list_lunch_items = [];
list_lunch_items.push(l0);
list_lunch_items.push(l1);
list_lunch_items.push(l2);
list_lunch_items.push(l3);
list_lunch_items.push(l4);
list_lunch_items.push(l5);
list_lunch_items.push(l6);
list_lunch_items.push(l7);
list_lunch_items.push(l8);
list_lunch_items.push(l9);
list_lunch_items.push(l10);
list_lunch_items.push(l11);

let d0 = food_item(0, dnr1, "Idli", "Ingredients: Rice flour, Urdu dhal flour, Fenugreek powder, Salt, Water. 3 idlis for one plate", "$ 2.85");
let d1 = food_item(1, dnr2, "Masala dosa", "Ingredients: Rice flour, Urdu dhal flour, Semolina, Water, Salt, Ghee, Potato, Cilantro, Cumin seeds, Musterd seeds, Garlic, Coconut chutney. One dosa for one plate", "$ 3");
let d2 = food_item(2, dnr3, "Pasta salad", "Ingredients: Wheat pasta, Vegitables, Curd, Lemon juice, Salt, Black pepper.", "$ 3.25");
let d3 = food_item(3, dnr4, "Dumpling soup", "Ingredients: Wheat flour, vegitables, mushroom, green peas, corn seeds, mint, celery, basil, butter, salt, water. Four dumplings in one bawl", "$ 4");
let d4 = food_item(4, dnr5, "Pizza", "Ingredients: Mozeralla Cheese, Cheddar cheese, fried mushroom, cauliflower, tomato, garlic, butter, italian seasonings, pepper powder, salt", "$ 4.85");
let d5 = food_item(5, dnr6, "Upma", "Ingredients: Semolina, butter, coconut milk, basil, celery, garlic, musted seeds, salt, green pepper. One upma for a plate", "$ 2.65");
let d6 = food_item(6, dnr7, "Vegi soup", "Includes: Cauliflower, Cabbage, Carrot, Green onion, Squash, Celery, Potato, Corn, butter, salt, pepper powder", "$ 3.75");
let d7 = food_item(7, dnr8, "Vegi salad", "Ingredients: Cabbage, Carrot, Cucumber, Bellpepper, Green peas, Onion, Basil, Mint, Curd, Lemon juice, Sugar, Green pepper, Black pepper. Three cups in one bawl", "$ 3");
let d8 = food_item(8, bfst2, "Salted butter", "Fresh salted butter made from cow milk without added ingredients. 100g in one block.", "$ 2.25");
let d9 = food_item(9, bfst18, "Rice", "Can enjoy with dhal curry. Three cups in one bawl", "$ 1.85");
let d10 = food_item(10, bfst9, "Dhal curry", "Ingredients: Lentils, coconut milk, chillie, garlik, salt and other spices. Three cups in one bawl", "$ 4");
let d11 = food_item(11, bfst15, "Bread", "Whole wheat bread. Five slices for one plate", "$ 1");

let list_dinner_items = [];
list_dinner_items.push(d0);
list_dinner_items.push(d1);
list_dinner_items.push(d2);
list_dinner_items.push(d3);
list_dinner_items.push(d4);
list_dinner_items.push(d5);
list_dinner_items.push(d6);
list_dinner_items.push(d7);
list_dinner_items.push(d8);
list_dinner_items.push(d9);
list_dinner_items.push(d10);
list_dinner_items.push(d11);

export {list_breakfast_items, list_lunch_items, list_dinner_items};