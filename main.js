
// dom nodes
let btnAdd = document.getElementById('add');
let input = document.getElementById('input');
let itemsList = document.getElementById("items-list");
let doneCheckBox = document.querySelectorAll('.item__controls--input');
let deleteItem = document.querySelectorAll(".item__controls__delete");




// DATA
let tasksData = []








// functions

// function addTask() {


//     if (input.value != "") {
//         // get input text
//         let taskText = input.value;
//         input.value = "";

//         let newItem = document.createElement("div");//create new card
//         newItem.setAttribute("class", "item");

//         let itemDetail = document.createElement("div");//create card task text
//         itemDetail.setAttribute("class", "item__detail");
//         let itemTitle = document.createElement("h2");
//         itemTitle.setAttribute("class", "item__detail__title");
//         itemTitle.textContent = taskText;//insert task text into card

//         itemDetail.appendChild(itemTitle);//insert h2 into card title container
//         newItem.appendChild(itemDetail);//insert card title container into card

//         let itemControls = document.createElement("div");//create item controls container
//         itemControls.setAttribute("class", "item__controls");

//         let itemCheckBox = document.createElement("input");//create card checkbox
//         itemCheckBox.setAttribute("class", "item__controls--input");
//         itemCheckBox.setAttribute("type", "checkbox");

//         let itemMenu = document.createElement('i');//create card menu
//         itemMenu.setAttribute("class", "fa-solid fa-trash");
//         itemMenu.classList.add("item__controls__delete");

//         itemControls.appendChild(itemCheckBox);//insert checkbox to card controls container
//         itemControls.appendChild(itemMenu);//insert card menu into card controls container

//         newItem.appendChild(itemControls);//insert item controls container to card

//         itemsList.appendChild(newItem);//insert new card to cards container



//         // select all checkboxes after new card added
//         doneCheckBox = document.querySelectorAll(".item__controls--input");
//         // define event for all available checkboxes
//         for (let i = 0; i < doneCheckBox.length; i++) {
//             doneCheckBox[i].onclick = checked;
//         }


//         // select all delete icons after new card added
//         deleteItem = document.querySelectorAll(".item__controls__delete");
//         for (let i = 0; i < deleteItem.length; i++) {
//             deleteItem[i].onclick = removeItem;
//         }
//     } else {
//         alert("please fill input");
//     }
// }

function addTask(){
    tasksData.push(input.value);
    input.value = "";

    updateView();

// select all checkboxes after new card added
doneCheckBox = document.querySelectorAll(".item__controls--input");
// define event for all available checkboxes
for (let i = 0; i < doneCheckBox.length; i++) {
    doneCheckBox[i].onclick = checked;
}


// select all delete icons after new card added
deleteItem = document.querySelectorAll(".item__controls__delete");
for (let i = 0; i < deleteItem.length; i++) {
    deleteItem[i].onclick = removeItem;
}

}


function updateView(){
    let items = tasksData.map(todo => {
        return `<div class="item">
        <div class="item__detail">
            <h2 class="item__detail__title">${todo}</h2>
        </div>

        <div class="item__controls">
            <input class="item__controls--input" type="checkbox">
            <i class="fa-solid fa-trash item__controls__delete"></i>
        </div>
    </div>`
    }).join();

    itemsList.innerHTML = items;
}

// when a task has checked
function checked(evt) {
    if (evt.target.checked) {
        let parent = evt.target.parentElement.parentElement;
        parent.classList.add("checked");
    } else {
        let parent = evt.target.parentElement.parentElement;
        parent.classList.remove("checked");
    }
}


// when delete item clicked
function removeItem(evt) {
    let recheckDelete = confirm("are you sure to delete this item?");

    if(recheckDelete){
        debugger;
        console.log(tasksData);
        let itemTitle = evt.target.parentElement.parentElement.innerText.trim();
        console.log(itemTitle);
        let indexOfItem = tasksData.indexOf(itemTitle);
        console.log(indexOfItem);
        tasksData.splice(indexOfItem,1);
        console.log(tasksData);
        updateView();
    }
    
    
}



// events
btnAdd.addEventListener("click", addTask);
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});











