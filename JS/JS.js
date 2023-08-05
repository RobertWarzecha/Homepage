console.log("Witaj przybyszu");
let button = document.querySelector(".button");
let me = document.querySelector(".me")
button.addEventListener ("click", () => {
    if (button.innerText === "Pokaż informacje o autorze strony"){
        button.innerText = "Ukryj informacje o autorze strony";
        me.innerHTML = ' <H2 class="zainteresowania">Zainteresowania</H2> <p>Lubie budować i projektować nowe urządzeia które mają zrewolucjonizować świat</p> <H2 class="praca">Praca</H2> <div class="di"> <p>Dwie firmy na "A" w których pracuję</p></div> <h2 class="czasWolny">Czas wolny</h2><p>Na koniec wspomnę ze lubię jeździć na <span class="bike"><b>ROWERZE ELEKTRYCZNYM</b></span></p>'
    }else if (button.innerText === "Ukryj informacje o autorze strony")
    {
        button.innerText = "Pokaż informacje o autorze strony";
        me.innerText = " ";
    }
})