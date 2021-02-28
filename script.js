const tBody = document.getElementById('tBody')

function getItems() {

    fetch('http://localhost/php_rest_whoomans/api/dataList/read.php')
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);
            createTable(data);
        })
        .catch(error => console.error(error));
}

function createTable(data) {

    data.map(item => {
        let tRow = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.setAttribute('id', item.id)
        td1.innerText = item.id
        let td2 = document.createElement('td')
        td2.setAttribute('id', item.id + 'name')
        td2.classList.add('field')
        td2.innerText = item.name
        let td3 = document.createElement('td')
        td3.setAttribute('id', item.id + 'surname')
        td3.classList.add('field')
        td3.innerText = item.surname
        let td4 = document.createElement('td')
        td4.setAttribute('id', item.id + 'date')
        td4.classList.add('field')
        td4.innerText = item.date
        let td5 = document.createElement('td')
        td5.setAttribute('id', item.id + 'gender')
        td5.classList.add('field')
        td5.innerText = item.gender
        let td6 = document.createElement('td')
        td6.classList.add('field', 'deleteBtn', 'text-center')
        let deleteBtn = document.createElement('i')
        deleteBtn.classList.add('far', 'fa-trash-alt')
       

        tBody.prepend(tRow)
        tRow.appendChild(td1)
        tRow.appendChild(td2)
        tRow.appendChild(td3)
        tRow.appendChild(td4)
        tRow.appendChild(td5)
        tRow.appendChild(td6)
        td6.appendChild(deleteBtn)

        td2.addEventListener('click', editField)
        td2.myParam = 'nameField'
        td3.addEventListener('click', editField)
        td3.myParam = 'surnameField'
        td4.addEventListener('click', editField)
        td4.myParam = 'dateField'
        td5.addEventListener('click', editField)
        td5.myParam = 'genderField'
        td6.addEventListener('click', deleteRow)
    })

}

function editField(event) {
    let editFieldParam = event.target.myParam

    switch (editFieldParam) {
        case 'nameField' :
            editFunctions.editName(event)
            break;
        case 'surnameField' :
            editFunctions.editSurname(event)
            break;
        case 'dateField' :
            editFunctions.editDate(event)
            break;
        case 'genderField' :
            editFunctions.editGender(event)
            break;
    }

    // if(editFieldParam == 'idField') {
    //     editFunctions.editIdFn(event)
    // }

    // if(editFieldParam == 'nameField') {
        
    // }

}

const editFunctions = {
    editName: function(data) {
        console.log('this came from name fn object');
        console.log(data);
    },

    editSurname: function(data) {
        console.log('this came from edit Surname fn');
    },

    editDate: function(data) {
        console.log('this came from edit Date fn');
    },

    editGender: function(data) {
        console.log('this came from editGender fn');
    }
}

function deleteRow(event) {
    console.log(event);
}
getItems()