
function selectionList( selectOptions ) {

    let optionItems = [];
    selectOptions.forEach( e => {
        optionItems.push( document.createElement("option") );
        optionItems[optionItems.length-1].value = e;
        optionItems[optionItems.length-1].textContent = e;
    });
    
    return optionItems;

}

let bodyElement = document.getElementsByTagName("body")[0];
let sectionElementLeft = document.createElement("section");
let sectionElementRight = document.createElement("section");
let sectionElementMiddle = document.createElement("section");

let selectionItemLeft = document.createElement("select");
selectionItemLeft.name = "selection_left";
selectionItemLeft.size = 4;
let leftSelection = ["bread","milk","orange","tomato"];
sectionElementLeft.append(selectionItemLeft);
selectionItemLeft.append(...selectionList( leftSelection ));

let buttonUp = document.createElement("button");
buttonUp.textContent = "Up";
let buttonSelect = document.createElement("button");
buttonSelect.textContent = ">";
let buttonDelete = document.createElement("button");
buttonDelete.textContent = "X";
let buttonDown = document.createElement("button");
buttonDown.textContent = "Down";
sectionElementMiddle.append(buttonUp,buttonSelect,buttonDelete,buttonDown)
sectionElementMiddle.id = "middle";

let selectionItemRight = document.createElement("select");
selectionItemRight.name = "selection_right";
selectionItemRight.size = 4;
selectionItemRight.disabled = true;
let rightSelection = [];
sectionElementRight.append(selectionItemRight);
selectionItemRight.append(...selectionList( rightSelection ));

bodyElement.append(sectionElementLeft,sectionElementMiddle,sectionElementRight);
selectionItemRight.style.minWidth = selectionItemLeft.clientWidth * 1.1 +"px";
selectionItemLeft.style.minWidth = selectionItemLeft.clientWidth * 1.1 +"px";

let selectIndex = 0;
selectionItemLeft.selectedIndex = selectIndex;
buttonUp.onclick = () => {
    selectIndex--;
    selectIndex = (selectIndex < 0)? 0 : selectIndex;
    selectionItemLeft.selectedIndex = selectIndex;
}
buttonDown.onclick = () => {
    selectIndex++;
    selectIndex = (selectIndex > leftSelection.length-1)? leftSelection.length-1 : selectIndex;
    selectionItemLeft.selectedIndex = selectIndex;
}

buttonSelect.onclick = () => {
    rightSelection.push(leftSelection[selectionItemLeft.selectedIndex]);
    leftSelection.splice(selectionItemLeft.selectedIndex, 1);
    let toDelete = document.querySelectorAll("option");
    toDelete.forEach( e => e.remove() );
    selectionItemLeft.append(...selectionList( leftSelection ));
    selectionItemRight.append(...selectionList( rightSelection ));
    selectIndex = 0;
    selectionItemLeft.selectedIndex = 0;
}

buttonDelete.onclick = () => {
    leftSelection = ["bread","milk","orange","tomato"];
    rightSelection = [];
    let toDelete = document.querySelectorAll("option");
    toDelete.forEach( e => e.remove() );
    selectionItemRight.append(...selectionList( rightSelection ));
    selectionItemLeft.append(...selectionList( leftSelection ));
    selectIndex = 0;
    selectionItemLeft.selectedIndex = 0;
}