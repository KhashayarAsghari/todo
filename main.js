
// dom nodes
let btnAdd = document.getElementById('add');
let input = document.getElementById('input');
let itemsList = document.getElementById("items-list");

// functions

function addTask(){
    // get input text
    let taskText = input.value;
    input.value = "";
    

    
    let newItem = document.createElement("div");//create new card
    newItem.setAttribute("class", "item");

    let itemDetail = document.createElement("div");//create card task text
    itemDetail.setAttribute("class", "item__detail");
    let itemTitle = document.createElement("h2");
    itemTitle.setAttribute("class", "item__detail__title");
    itemTitle.textContent = taskText;//insert task text into card

    itemDetail.appendChild(itemTitle);//insert h2 into card title container
    newItem.appendChild(itemDetail);//insert card title container into card

    let itemControls = document.createElement("div");//create item controls container
    itemControls.setAttribute("class", "item__controls");

    let itemCheckBox = document.createElement("input");//create card checkbox
    itemCheckBox.setAttribute("class", "item__controls--input");
    itemCheckBox.setAttribute("id", "done");
    itemCheckBox.setAttribute("type", "checkbox");

    let itemMenu = document.createElement('i');//create card menu
    itemMenu.setAttribute("class", "fa-solid fa-ellipsis-vertical");

    itemControls.appendChild(itemCheckBox);//insert checkbox to card controls container
    itemControls.appendChild(itemMenu);//insert card menu into card controls container

    newItem.appendChild(itemControls);





    


    itemsList.appendChild(newItem)
    
   
}



// events
btnAdd.addEventListener("click", addTask);
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });