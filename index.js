// Add your code here
function submitData(name, email){
    const userData = {
        name: name,
        email: email,
      };
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(userData),
      };
      
      return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            let p = document.createElement("p");
            p.innerHTML = object.id;
            document.body.appendChild(p);
            console.log(object);
        })
        .catch(function (error) {
            let h1 = document.createElement("h1");
            h1.innerHTML = error.message;
            document.body.appendChild(h1)
            console.log(error.message)
        });
}
submitData()