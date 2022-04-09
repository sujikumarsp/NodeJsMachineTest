var selectedRow = null

function onFormSubmit(){
    if(validate()) {
        var formData=readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);
        else
    updateRecord(formData);

    resetForm();
    }
}

function readFormData(){
    var formData = {};
    formData["ProductId"] = document.getElementById("ProductId").value;
    formData["ProductName"] = document.getElementById("ProductName").value;
    formData["CategoryId"] = document.getElementById("CategoryId").value;
    formData["CategoryName"] = document.getElementById("CategoryName").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.insertHTML = data.ProductId;
    cell2 = newRow.insertCell(1);
    cell2.insertHTML = data.ProductName;
    cell3 = newRow.insertCell(2);
    cell3.insertHTML = data.CategoryId;
    cell4 = newRow.insertCell(3);
    cell4.insertHTML = data.CategoryName;
    cell4 = newRow.insertCell(4);
    cell4.insertHTML = `<a onclick = "onEdit(this)">Edit</a>
                       <a>Delete</a>`;
}

function resetForm(){
    document.getElementById("ProductId").value = "";
    document.getElementById("ProductName").value = "";
    document.getElementById("CategoryId").value = "";
    document.getElementById("CategoryName").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("ProductId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ProductName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("CategoryId").value = selectedRow.cells[2].innerHTML;
    document.getElementById("CategoryName").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.ProductId;
    selectedRow.cells[1].innerHTML = formData.ProductName;
    selectedRow.cells[2].innerHTML = formData.CategoryId;
    selectedRow.cells[3].innerHTML = formData.CategoryName;
}

function onDelete(td){
    if (confirm('Are you sure to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validation(){
    isValid = true;
    if (document.getElementById("ProductId").value == "") {
        isValid = false;
        document.getElementById("ProductIdValidationError").classList.remove("hide");
    }else{
        isValid = true;
        if (!document.getElementById("ProductIdValidationError").classList.contains("hide"))
        document.getElementById("ProductIdValidationError").classList.add("hide");
    }
    return isValid;
}
