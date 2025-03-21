fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>{
        const tableBody = document.getElementById('tbody')
        data.forEach(user => {
            const row = document.createElement('tr')
            row.innerHTML = `
                <td> ${user.id} </td>
                <td> ${user.name} </td>
                <td> ${user.username} </td>
                <td> ${user.email} </td>
                <td> ${user.phone} </td>
                <td> <a href = "http://${user.website}"> ${user.website} <a/> </td>
                <td> ${user.company.name} </td>

            `
            tableBody.appendChild(row)
        });
        console.log(data)
    })

    document.getElementById("searchInput").addEventListener('input', function(event){
        const searchValue = event.target.value
        const rows = document.querySelectorAll("#usersTable tbody tr")
        rows.forEach(row=>{
            const name = row.children[1].textContent;
            const username = row.children[2].textContent;
            if(name.includes(searchValue) || username.includes(searchValue)){
                row.style.display = ""
            } else {
                row.style.display = "none"
            }
        })
        console.log(searchValue)
    })