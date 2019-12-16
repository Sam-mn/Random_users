const usersInfo = (data)=>{

    data.forEach(user => {
        console.log(user);
        let name = `${user.name.first} ${user.name.last}`;
        let location = `${user.location.city} ${user.location.state} <br> ${user.location.country}  ${user.location.postcode}`
        document.querySelector('#users').innerHTML += `
<div class="card col-sm-12 col-md-6 col-lg-4  mb-3 bg-secondary text-white">
<img src="${user.picture.large}" class="card-img-top" alt="${name}">
<div class="card-body">
  <h5 class="text-center">${name}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Age: ${user.dob.age}</li>
  <li class="list-group-item">Email: ${user.email}</li>
  <li class="list-group-item">Phone: ${user.phone}</li>
  <li class="list-group-item">Location: ${location}</li>
</ul>
</div>
`
       
   });
}
let input = document.querySelector('#input');
document.querySelector('#btn').addEventListener('click', (e)=>{

    e.preventDefault();
    fetch(`https://randomuser.me/api/?results=${input.value}`)
    .then(response=>response.json())
    .then(data=>{
        let users = data.results;
        usersInfo(users)
        // console.log(users);
    })
    .catch(err=>{
        console.log('there is some thing wrong',err)
    })

    document.querySelector('#users').innerHTML=''
})

