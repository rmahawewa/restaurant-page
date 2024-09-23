function itm(itmid) {
    let item = `<div class='item'>
                                <div id=`+ itmid +` class="img-div"></div>
                                <label class='itm-name'>item</label>
                                <button class='`+ itmid +`-dtls'>Details</button>
                                <label class='price ` + itmid + `'> per one (50% off for first three days)</label>
                </div>`;
    return {item};
}

function food_items(time) {    
    let list = () => {
        let brkfst = '';
        for(let i=0; i<12; i++){
            let num = i + 1;
            let itmid = time + num;
            brkfst += itm(itmid).item;
        }
        return brkfst;
    }    
    return {list};
}

let brft = food_items("bft");

let create_menu = `<div class="meal-time">
                        <label id="bfst">Breakfast</label>
                        <label id="lunch">Lunch</label>
                        <label id="dnnr">Dinner</label>
                    </div>
                    <div class='menu' >
                        <div class='breakfast' >`+ brft.list() +`
                        </div>
                        <div class='lunch' ></div>
                        <div class='dinner' >
                        </div>
                        <div class='beverages' >
                        </div>
                        <div class='desserts' >
                        </div>
                    </div>`; 



 export {create_menu};