const tBody = document.getElementById('tBody')

let previousField = ''
let previousFieldValue = ''
let previousFieldParam = ''


const fetchFn = {
    getItems: function() {
        fetch('http://localhost/php_rest_whoomans/api/dataList/read.php')
        .then(resp => resp.json())
        .then(data => {
            createTable(data);
        })
        .catch(error => console.error(error));
    },

    updateRow: function(data) {
        fetch('http://localhost/php_rest_whoomans/api/dataList/update.php', {
            method: 'PUT',
            body: JSON.stringify(data),
        }) .then(resp => resp.json())
        .then(data => {
            
            
        })
    }
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
        td6.classList.add('deleteBtn', 'text-center')
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

        td2.addEventListener('click', openEditField)
        td2.myParam = 'nameField'
        td3.addEventListener('click', openEditField)
        td3.myParam = 'surnameField'
        td4.addEventListener('click', openEditField)
        td4.myParam = 'dateField'
        td5.addEventListener('click', openEditField)
        td5.myParam = 'genderField'
        td6.addEventListener('click', deleteRow)
    })

}

function editField(data) {
    let editFieldParam = data.target.myParam

    switch (editFieldParam) {
        case 'nameField':
            editFunctions.editName(data)
            fieldOpened = false
            closeEditControls(data)
            break;
        case 'surnameField':
            editFunctions.editSurname(data)
            fieldOpened = false
            // closeEditControls(data)
            break;
        case 'dateField':
            editFunctions.editDate(data)
            fieldOpened = false
            // closeEditControls(data)
            break;
        case 'genderField':
            editFunctions.editGender(data)
            fieldOpened = false
            // closeEditControls(data)
            break;
    }

    console.log('sveiki');
}

const editFunctions = {
    editName: function (data) {

        let rowData = {
            id: data.path[3].children[0].innerText,
            name: data.path[2].children[0].value,
            surname: data.path[3].children[2].innerText,
            date: data.path[3].children[3].innerText,
            gender: data.path[3].children[4].innerText

        }

        fetchFn.updateRow(rowData)

        console.log('this came from name fn object');
        console.log(rowData);
    },

    editSurname: function (data) {

        let rowData = {
            id: data.path[3].children[0].innerText,
            name: data.path[3].children[1].innerText,
            surname: data.path[2].children[0].value,
            date: data.path[3].children[3].innerText,
            gender: data.path[3].children[4].innerText

        }

        fetchFn.updateRow(rowData)
        console.log('this came from edit Surname fn');
        console.log(rowData);
    },

    editDate: function (data) {
        let rowData = {
            id: data.path[3].children[0].innerText,
            name: data.path[3].children[1].innerText,
            surname: data.path[3].children[2].innerText,
            date: data.path[2].children[0].value,
            gender: data.path[3].children[4].innerText

        }

        fetchFn.updateRow(rowData)
        console.log(rowData);
        console.log('this came from edit Date fn');
    },

    editGender: function (data) {
        console.log(data);
        
        let rowData = {
            id: data.path[3].children[0].innerText,
            name: data.path[3].children[1].innerText,
            surname: data.path[3].children[2].innerText,
            date: data.path[3].children[3].innerText,
            gender: ''
        }
        if(data.path[2].children[0][0].checked) {
            rowData.gender = 'Male'
        } else {
            rowData.gender = 'Female'
        }

        fetchFn.updateRow(rowData)
        console.log(rowData);
        console.log('this came from editGender fn');
    }
}

function deleteRow(event) {
    console.log(event);
}

function openEditField(event) {


    closeEditControls(event)

    let editFieldParam = event.target.myParam
    let input
    let value = event.target.innerText
    let target = event.target
    previousField = event.target.id
    previousFieldValue = value
    previousFieldParam = event.target.myParam
    event.target.removeEventListener('click', openEditField)

    target.innerHTML = ''
    
    
    switch (editFieldParam) {
        case 'nameField':
            input = document.createElement('input')
            input.classList.add('form-control')
            input.setAttribute('type', 'text')
            input.setAttribute('value', value)
            break;

        case 'surnameField':
            input = document.createElement('input')
            input.classList.add('form-control')
            input.setAttribute('type', 'text')
            input.setAttribute('value', value)
            break;
        case 'dateField':
            input = document.createElement('input')
            input.classList.add('form-control')
            input.setAttribute('type', 'date')
            input.setAttribute('value', value)
            break;
        case 'genderField':
            input = document.createElement('form')
            input.classList.add('form-check', 'form-check-inline')
            let maleInput = document.createElement ('input')
            maleInput.classList.add('form-check-input')
            maleInput.setAttribute('type', 'radio')
            maleInput.setAttribute('value', 'Male')
            maleInput.setAttribute('name', 'gender')
            maleInput.setAttribute('id', 'male')
            value == 'Male' ? maleInput.setAttribute('checked', '') : ''
            console.log(value);
            let maleLabel = document.createElement('label')
            maleLabel.setAttribute('for', 'male')
            maleLabel.classList.add('form-check-label', 'mr-2')
            maleLabel.innerText = 'Male'
            let femaleInput = document.createElement ('input')
            femaleInput.setAttribute('type', 'radio')
            femaleInput.setAttribute('value', 'Female')
            femaleInput.setAttribute('name', 'gender')
            femaleInput.setAttribute('id', 'female')
            femaleInput.classList.add('form-check-input')
            value == 'Female' ? femaleInput.setAttribute('checked', '') : ''
            let femaleLabel = document.createElement('label')
            femaleLabel.setAttribute('for', 'female')
            femaleLabel.classList.add('form-check-label')
            femaleLabel.innerText = 'Female'
            
            input.appendChild(maleInput)
            input.appendChild(maleLabel)
            input.appendChild(femaleInput)
            input.appendChild(femaleLabel)
            break;
    }


    let div = document.createElement('div')
    div.classList.add('editTools', 'd-flex')
    saveBtn = document.createElement('button')
    saveBtn.innerText = 'SAVE'
    saveBtn.classList.add('btn', 'btn-primary', 'btn-sm',)
    cancelBtn = document.createElement('button')
    cancelBtn.innerText = 'CANCEL'
    cancelBtn.classList.add('btn', 'btn-secondary', 'btn-sm',)

    target.appendChild(input)
    target.appendChild(div)
    div.appendChild(saveBtn)
    div.appendChild(cancelBtn)

    saveBtn.addEventListener('click', editField)
    saveBtn.myParam = event.target.myParam
    cancelBtn.addEventListener('click', closeEditControls)
    cancelBtn.myParam = event.target.myParam

}

function closeEditControls(event) {
    let field = document.getElementById(previousField)
    if (field) {
        field.innerHTML = ''
        field.innerText = previousFieldValue
        field.myParam = previousFieldParam
        field.addEventListener('click', openEditField)
    }
}

fetchFn.getItems()