let produductall=[];

function fetchdata(){
    fetch("https://java-script-a91o.onrender.com/product")
    .then((res)=>res.json())
    .then((data)=>{
        produductall=data
        CardList(data)
    })
    .catch((err)=>console.log(err))
    }
    fetchdata()



    function CardList(data){

        let store=data.map((el)=>Singlecard(el.image,el.price,el.title,el.id,el.price))
     /*    console.log(store) */
        document.getElementById("container").innerHTML=store.join("")
    }

    function Singlecard(image, price, title,id) {
        let card = `
                    <div class="box">
                <a href="items.html?title=${encodeURIComponent(title)}&image1=${encodeURIComponent(image[0])}&image2=${encodeURIComponent(image[2])}&image3=${encodeURIComponent(image[3])}&image4=${encodeURIComponent(image[4])}&image5=${encodeURIComponent(image[5])}&image6=${encodeURIComponent(image[6])}&id=${encodeURIComponent(id)}&price=${encodeURIComponent(price)}">
                <div class="w-100">
                <div class="image-hover d-flex justify-content-center">
                <img src=${image[0]} alt="" height="250" width="250" id="i1" class="front-image m-auto mt-3">
                <img src=${image[1]} alt="" height="250" width="250" class="back-image ms-4 mt-3">
                </div>
               <div style="background-color:#E7EAE9; width:90%; text-align:center" class="p-1 m-auto mb-5">
               <h3>${title}</h3>
               
               <p class="fw-bold">${price}</p>
               </div>
                </div></a>
                </div>
                    `
                    return card
       }

   
    let bags=document.getElementById("addcart")
    bags.addEventListener("click",(event)=>{
        // alert("hello")

         if(event.target.classList.contains("add-cart-btn")){
            let id=event.target.dataset.id
            console.log(id)
            fetch(`https://java-script-a91o.onrender.com/product/${id}`)
            .then((res)=>res.json())
            .then((data)=>{
                fetch("https://java-script-a91o.onrender.com/cart",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(data),
                })
                .then((res)=>res.json())
                .then((result)=>alert("Product Add successfully!"))
                .catch((err)=>alert("Product is not add!"))
            })
            .catch((err)=>console.log(err))

        }
        else
        {
            alert("id not get")
        }
        
   });
   
    
     
  
 