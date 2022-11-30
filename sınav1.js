let hesap1 = document.querySelector("#hesap1");
let hesap2 = document.querySelector("#hesap2");
let borc1 = document.querySelector("#borc1");
let alacak1 = document.querySelector("#alacak1");
let borc2 = document.querySelector("#borc2");
let alacak2 = document.querySelector("#alacak2");
let hesaplar1 = fetch("hesaplar.json")
.then(response =>
    response.json())
.then(data=>{
    for(let i=0; i<data.hesaplar.length;i++){
        let option = document.createElement("option")
        option.textContent = data.hesaplar[i].ad
        hesap1.appendChild(option);
    }
    for(let i=0; i<data.hesaplar.length;i++){
        let option = document.createElement("option")
        option.textContent = data.hesaplar[i].ad
        hesap2.appendChild(option);
    }

    let sonuc = document.getElementById("sonuc")
    sonuc.addEventListener("click",olay=>{
        if(hesap1.value == data.hesaplar[0].ad & borc1.value==85000 & hesap2.value == data.hesaplar[1].ad & alacak2.value==85000 ){

            alert("başarılı")         
           document.querySelector("#sınav_soru1").style.display="none"
           document.querySelector("#sınav_soru2").style.display="block"
        }else{
            alert("başarısız")
        }
   
    })
})


