const $tableBody = document.querySelector("#table-body")

fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json() )
    .then(data => renderTable(data.data))

const renderTable = (data)  => {
    data.forEach(user => {
        const $tr = document.createElement("tr")
        $tr.className= "tr"
        $tr.innerHTML = `
            <td>${user.id}</td>
            <td><img class="w-[50px] h-[50px] mx-auto object-cover  rounded-full" src="${user.avatar}" alt="${user.first_name}"></td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>

        `
        $tableBody.appendChild($tr)
    });
}
