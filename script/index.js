 class Restro
{
    
    collection = [];


    constructor(key)
    {
        this.key = key;
        this.collection = JSON.parse(localStorage.getItem(this.key)) ?? [];
    }

    add(model){
        this.collection.push(model)
        this.updateStore();
    }

    delete(id)
    {
        this.collection = this.collection.filter(reservation=>reservation.id!=id)
        this.updateStore();
    }
 
     update(model){
        this.collection = this.collection.map(reservation=>model.id==reservation.id?model:reservation)    
        this.updateStore();
    }
  
    getModel(id)
    {
        for(let i=0;i<this.collection.length;i++)
        {
            if(id==this.collection[i].id)
            {
                return this.collection[i];
            }
        }
    }
    

    get getCollection(){
        return JSON.parse(localStorage.getItem(this.key))
    }

    updateStore()
    {
        localStorage.setItem(this.key,JSON.stringify(this.collection))
    }

    sort()
    {
        this.collection.sort((a,b)=>a.date-b.date)
    }
    
    MaxId()
    {
        if(!this.collection.length) return 0
        let maxId = this.collection.reduce((acc,current)=>acc>current.id?acc:current.id,0)
        return maxId;
    }



}
let booking  = document.getElementById("booking")
let details = new Restro("details")
let form = document.querySelector("form")
console.log(details)
function book()
{
    booking.classList.remove("d-none")
    booking.classList.add("animate")
}

function cancel()
{
    let res = confirm("Are you sure you want to cancel ?")
    if(res)
    {
        booking.classList.add("d-none")
        booking.classList.remove("animate")
    }
}
function Submit()
{ 
let inputs = document.querySelectorAll("input")
let obj ={};
 inputs = Array.from(inputs)
let result =  inputs.map(input=>input.value!=""?true:false).every(item=>item==true)

if(!result)
{
    alert("Pleased fill all fields ...")
}
else
{
obj.id = details.MaxId() + 1;
inputs.forEach(input=>{
    obj[input.name] = input.value
    
})
details.add(obj)
alert("Reservation done Successfully")
booking.classList.add("d-none")
window.location.reload();
}

}

