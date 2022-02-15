// const getCats=document.getElementById("getCats")

// // function getAllCat(){
//     const url="https://cataas.com/api/cats"
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//         const res=data.map(e=>e.tags)
//         console.log(res)
//         resultCats(res)
//     })
//     .catch((err)=>{
//         alert("Cats aren't home yet. Try again later");
//     })
// // }

// function resultCats(res){
//     const list=document.getElementById("allCats");
//     res.forEach(res=>{
//         const div=document.createElement("div")
//         div.innerText=res;
//         list.appendChild(div);
//     })
// }



function getRandomCat(query){
    const url=`https://cataas.com/api/cats?tags=${query}`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
    const res=data.map(e=>e.tags)   
    // console.log(data)
    var div=document.createElement('div');
    // div.innerHTML='';
    for (var id in data) {
    //    console.log(data[id].id);
       const cats=`https://cataas.com/cat/${data[id].id}`
       console.log(cats)
       div.innerHTML+='<span><img alt="cats" width="500" height="600" src="'+cats+'"></span>';
    }
    document.getElementById('cats').append(div);
    })
    .catch((err)=>{
       alert("Cats aren't home yet. Try again later")
    })
}

// let searchTimeoutToken=0;

window.onload=()=>{
    const searchCats=document.getElementById("searchCats")
    searchCats.onkeyup=(event)=>{
        // clearTimeout(searchTimeoutToken);

        if(searchCats.value.trim().length===0){
            return
        }

        // searchTimeoutToken=
        setTimeout(()=>{
            getRandomCat(searchCats.value)
        },250)
        
    }
}




