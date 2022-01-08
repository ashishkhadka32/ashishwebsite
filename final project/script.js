var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["studentname"] = document.getElementById("studentname").value;
    formData["perBook"] = document.getElementById("perBook").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.id;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.studentname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.perBook;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('studentname').value = selectedRow.cells[1].innerHTML;
    document.getElementById('perBook').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.studentname;
    selectedRow.cells[2].innerHTML = formData.perBook;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('id').value = '';
    document.getElementById('studentname').value = '';
    document.getElementById('perBook').value = '';
}