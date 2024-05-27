const prama = new URLSearchParams(window.location.search)
document.getElementById("description-title").innerText=prama.get("title")
document.getElementById("des-img1").src=prama.get("image1")
document.getElementById("dis-image2").src=prama.get("image2")
document.getElementById("dis-image3").src=prama.get("image3")
document.getElementById("dis-image4").src=prama.get("image4")
document.getElementById("dis-image5").src=prama.get("image5")
document.getElementById("dis-image6").src=prama.get("image6")
document.getElementById("dis-price").innerText=prama.get("price")




let desc=document.getElementById("desc-id")
// console.log(desc)
desc.setAttribute("data-id",prama.get("id"))

