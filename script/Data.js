let tbody = document.getElementById("menuBody")

let data = [
{
 name:"MOMO",
 price:60,    
},
{
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },
   {
    name:"MOMO",
    price:60,    
   },

]

data.forEach((elem,index)=>{
    tbody.innerHTML += `
    <tr>
    <td>${index+1}</td>
    <td>${elem.name}</td>
    <td>${elem.price}</td>
    </tr>
    `
})