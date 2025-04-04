var sampleList = JSON.parse(localStorage.getItem("sampleList")) || [

    {name: "Vishal",email: "vkstyle14@gmail.com"},
    {
    name: "John",email:"test123@gmail.com"
    }
];

displayList(sampleList);

document.querySelector('form').addEventListener('submit', addList)

function addList(event){
    event.preventDefault();
    
    var toDoList = {
        name: document.querySelector('#name').value,

        email: document.querySelector('#email').value
    }

    sampleList.push(toDoList);
    localStorage.setItem('sampleList', JSON.stringify(sampleList));

    displayList(sampleList);
}

function displayList(sampleList){
    document.querySelector('#container').innerHTML = " ";

    sampleList.forEach(element => {

         var box = document.createElement('div');

         var name = document.createElement('h3');
         name.innerText = element.name;

            var email = document.createElement('h4');
            email.innerText = element.email;

            box.append(name, email);

            document.querySelector('#container').append(box);

        
    });
}

