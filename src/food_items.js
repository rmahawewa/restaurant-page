function food_item(id,image_src,name,description,price){
    return {id, image_src, name, description, price}
}

let b0 = food_item(0, "./img/breakfast/cheese.png", "Chedar cheese","Fresh chedar cheese made from cow milk. Unsweetened. 100g in one slice.", "$ 1.85");
let b1 = food_item(1, "./img/breakfast/butter.png", "Salted butter", "Fresh salted butter made from cow milk without added ingredients. 100g in one block.", "$ 2.25");
let b2 = food_item(2, "./img/breakfast/jam.png", "Mix fruit jam", "Ingredients: Orange, Pineapple, Strawberry, Gelatin, Sugar, Salt. 100g in one cup.", "$ 1.20");
let b3 = food_item(3, "./img/breakfast/honey.png", "Pure bee honey", "100g in one jar.", "$ 3");
let b4 = food_item(4, "./img/breakfast/banana.png", "Banana", "Cavendish banans. Three bananas included in one pack.", "$ 1");
let b5 = food_item(5, "./img/breakfast/coconut_milk", "Coconut milk", "Can enjoy with Flat bread, Steamed peas or beans. 200ml in a jar", "$ 1");
let b6 = food_item(6, "./img/breakfast/coconut_chutney.png", "Coconut chutney", "Ingredients: Shreaded coconut, water, curd, coconut oil, fried spices. Three cups in one bawl", "$ 3");
let b7 = food_item(7, "./img/breakfast/shreaded_coconut_and_sour_and_spicy_paste.png", "Shreader coconut and sour spice paste", "Spice paste ingredients: Red chillie, onion, ginger, lemon juice, salt. Can enjoy with steamed peas and beans or with steamed sweet potatoes. 100g of shreaded coconut in one bawl", "$ 1.85");
let b8 = food_item(8, "./img/breakfast/dhal.png", "Dhal curry", "Ingredients: Lentils, coconut milk, chillie, garlik, salt and other spices. Three cups in one bawl", "$ 4");
let b9 = food_item(9, "./img/breakfast/flat_bread.png", "Flat bread", "Ingredients: Wheat flour, coconut, salt, water. 200g in one bread", "$ 1.85");
let b10 = food_item(10, "./img/breakfast/mixed_beans_and_peas_steamed.png", "Steamed peas and beans mix", "Ingredients: Red beans, white beans, green peas, chickpeas. Can enjoy with coconut milk or with shreaded coconut and sour spice paste. Three cups in one bawl", "$ 4");
let b11 = food_item(11, "./img/breakfast/white_beans.png", "Steamed white beans", "Can enjoy with coconut milk or with shreaded coconut and sour spice paste. Three cups in one bawl.", "$ 4" );
let b12 = food_item(12, "./img/breakfast/fried_mushrooms.png", "Fried mushrooms", "Fried mushrooms with added salt, pepper and garlic. Can enjoy with rice. One cup in one bawl.", "$ 1.85" );
let b13 = food_item(13, "./img/breakfast/red_beans.png", "Steamed red beans", "Can enjoy with coconut milk or with shreaded coconut and sour spice paste. Three cups in one bawl.", "$ 4");
let b14 = food_item(14, "./img/breakfast/bread.png", "Bread", "Whole wheat bread. Five slices for one plate", "$ 1");
let b15 = food_item(15, "./img/breakfast/sweet_potato.png", "Steamed sweet potatoes", "Can enjoy with shreaded coconut and sour spice paste. Three cups in one plate", "$ 1.25");
let b16 = food_item(16, "./img/breakfast/chickpeas.png", "Steamed chickpeas", "Can enjoy with coconut milk or with shreaded coconut and sour spice paste. Three cups in one bawl.", "$ 4");
let b17 = food_item(17, "./img/breakfast/rice.png", "Rice", "Can enjoy with dhal curry. Three cups in one bawl", "$ 1.85");

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