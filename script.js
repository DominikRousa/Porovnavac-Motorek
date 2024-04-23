window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")

    loader.classList.add("loader-hidden")

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader")
    })
})

const motos = [
    {
        brand: "Beta",
        type: "rr 125 2t",
        motorType: "2 takt",
        motorPower: "28kw",
        motorTorque: "25Nm",
        year: "2022",
        wheels: "21/18"
    },
    {
        brand: "Beta",
        type: "rr 125 4t",
        motorType: "4 takt",
        motorPower: "11kw",
        motorTorque: "12Nm",
        year: "2022",
        wheels: "21/18"
    },
    {
        brand: "Benelli",
        type: "BN 125",
        motorType: "4 takt",
        motorPower: "8,2kw",
        motorTorque: "10Nm",
        year: "2022",
        wheels: "17/17"
    },
    {
        brand: "KTM",
        type: "EXC 150",
        motorType: "4 takt",
        motorPower: "30kw",
        motorTorque: "28Nm",
        year: "2022",
        wheels: "21/18"
    },
    {
        brand: "KTM",
        type: "Duke 125",
        motorType: "4 takt",
        motorPower: "11kw",
        motorTorque: "12Nm",
        year: "2022",
        wheels: "17/17"
    }
    
]


function changeMoto(side) {
    if (side == "left") {
        var image = document.getElementById("leftMoto");
        var moto = document.getElementById("leftMoto").value;
    } else if (side == "right") {
        var image = document.getElementById("rightMoto");
        var moto = document.getElementById("rightMoto").value;
    }

    if (moto == "Beta rr 125 4t") {
        image.style.opacity = "1";
        image.src = "https://betahavirov.cz/wp-content/uploads/2023/05/RR-125-4T-Motard-T-side-Black.jpg";
    } else if (moto == "Beta rr 125 2t") {
        image.style.opacity = "1";
        image.src = "https://www.lillerolf-mc.no/image/beta/046810000001-046810000001.jpg";
    } else if (moto == "Benelli BN 125 4t") {
        image.style.opacity = "1";
        image.src = "https://cdn.myshoptet.com/usr/motocentrum.pel.cz/user/shop/big/3482_benelli-bn-125.jpg?63e4c18b";
    } else if (moto == "KTM EXC 150 2t") {
        image.style.opacity = "1";
        image.src = "https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_REVO_MY24-KTM-150-EXC-90-Front-Right_%23SALL_%23AEPI_%23V1.png";
    } else if (moto == "KTM Duke 125 4t") {
        image.style.opacity = "1";
        image.src = "https://www.amd-svitavy.cz/upload_files/images/2021street/125duke.jpg";
    } else {
        image.style.opacity = "0";
        image.src == "";
    }

}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function compareMoto() {

    var nlist = document.getElementById('output')

    nlist.innerHTML = ""

    for (let i = 0; i < motos.length; i++) {
        nlist.innerHTML += "Značka: " + motos[i].brand + " Typ motoru: " + motos[i].motorType + " Velikost kol: " + motos[i].wheels + " Ročník: " + motos[i].year + " "
    }

}