let inputField = document.querySelector("[data-inputField]");
let storeContaner = document.querySelector("[data-storeContaner]");
let addBtn = document.querySelector("[data-AddBtn]");


function add(){
    if(inputField.value !== ""){
        let newField = document.createElement("ul");
        newField.innerHTML = `${inputField.value} <k class="fa-solid fa-trash"></k>  <i class="fa-solid fa-minus"></i >`;
        storeContaner.appendChild(newField);

        let deletOption = newField.querySelector("k");
        deletOption.addEventListener("click", deletTask);
        function deletTask(){
            newField.remove();
        }

        inputField.value = "";

        let competeOption = newField.querySelector("i");
        competeOption.addEventListener("click", (e) =>{
            newField.classList.add("complete");
        });

    }  //newField.classList.add("complete")
    else{
        alert("Please input Task");
    }
}

addBtn.addEventListener("click", add);