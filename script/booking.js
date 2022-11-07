(()=>{

    let list = document.getElementById("list")

    if(!details.getCollection)
    {
        list.innerHTML = `<tr><td class="text-center h1" colspan="6"> No Reservations</td></tr>`
    }
    else
    {
        details.getCollection.forEach((elem,index)=>{
            list.innerHTML+=`
            <tr>
            <td>${index+1}</td>
            <td>${elem.name}</td>
            <td>${elem.email}</td>
            <td>${elem.seats}</td>
            <td>${elem.time}</td>
            <td>${elem.date}</td>
            </tr>
            `
        })
    }

})()