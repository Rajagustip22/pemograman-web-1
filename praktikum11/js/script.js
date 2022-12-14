document.querySelectorAll("a").forEach((a)=>{
    // jika di klik akan menjalankan fungsi compuerchoise
    a.addEventListener("click", (Element)=>{
        computerchoice(Element);
        console.log("berhasil mengambil element a");
    })
})
function computerchoice(element){
    // pilihan User
    let pilihanUser = element.target.innerText;

    // mengambil element pilihan Komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan Komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk Komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan Komputer = pilihan User (Draw)
    if(pilihanUser == pilihanKomputer){
        alert("Draw");
    }

    // jika pilahan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Komputer MENANG");
    }else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Komputer MENANGG");
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Komputer MENANGGG");
    }

    // jika pilihan User menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("User MENANG");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User MENANGG");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User MENANGGG");
    }
}