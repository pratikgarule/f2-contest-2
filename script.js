var empArray = [
    {id:1,name:"john",age:18,profession:"developer"},
    {id:2,name:"jack",age:20, profession:"developer"},
    {id:3,name:"karen", age:19,profession:"admin"}
]

function displayEmp(arr){
    const list = document.getElementById("list");
    list.innerHTML="";
    for(let i=0;i<arr.length;i++){
        const li=document.createElement("li");
        const spanId=document.createElement("span");
        const spanName=document.createElement("span");
        const spanProf=document.createElement("span");
        const spanAge=document.createElement("span");
        spanId.innerText=i+1;
        spanName.innerText="Name : "+arr[i].name;
        spanProf.innerText="Profession: "+arr[i].profession;
        spanAge.innerText="Age:"+arr[i].age;
        li.id="list-item";
        li.appendChild(spanId);
        li.appendChild(spanName);
        li.appendChild(spanProf);
        li.appendChild(spanAge);
        list.appendChild(li)
    }
}
displayEmp(empArray);

function filterEmp(arr){
    const selectVal=document.getElementById("select1")
    var filteredArray=empArray;
    if(selectVal.value=="Profession"){
        alert("Select a profession before clicking the button");
        
    }else{

             filteredArray=arr.filter((element)=>{
            if(element.profession==selectVal.value){
                return element;
            }
        })
    }
    displayEmp(filteredArray)
   
}

function addUser(){
    const inputName=document.getElementById("name");
    const inputprof=document.getElementById("profession");
    const inputAge=document.getElementById("age");
    if(inputName.value!="" && inputAge.value!="" && inputprof.value!=""){
        var newObj={
            name:inputName.value,
            age:inputAge.value,
            profession:inputprof.value
        };
        empArray.push(newObj)
        displayEmp(empArray)
    }else{
        alert("Enter Valid values to add Employee !")
    }
}
