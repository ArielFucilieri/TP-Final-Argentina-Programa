
fetch('https://randomuser.me/api/')
.then((response) =>{
    let data = response.json()
    .then((data)=>{
        document.getElementById("nombre").innerText= data.results[0].name.first + " " + data.results[0].name.last
        document.getElementById("image").setAttribute("src",data.results[0].picture.medium)
        document.getElementById("dni").innerText=`DNI: ${data.results[0].location.postcode}`
        document.getElementById("fecha").innerText=`Fecha de nacimiento: ${data.results[0].dob.date}`
        document.getElementById("dom").innerText=`Domicilio: ${data.results[0].location.street.name + " " + data.results[0].location.street.number}`
        document.getElementById("estado").innerText=`Estado civil: ${data.results[0].location.city}`
        document.getElementById("cel").innerText=`Celular: ${data.results[0].cell}`
        document.getElementById("email").innerText=`Email: ${data.results[0].email}`
        document.getElementById("usuario").innerText=`Usuario: ${data.results[0].login.username}`
        document.getElementById("lk").innerText=`LinkedIn: ${data.results[0].login.password}`


    })
})