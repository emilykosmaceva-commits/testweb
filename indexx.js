function rezultats() {

let izveles = [];

document.querySelectorAll('#test input:checked').forEach(function(el){
    izveles.push(el.value);
});

if (izveles.length === 0) {
    document.getElementById("answer").innerText = "Izvēlieties vismaz vienu!";
    return;
}

if (izveles.length > 2) {
    document.getElementById("answer").innerText = "Var izvēlēties tikai divus!";
    return;
}

let tips = "";

if (izveles.length === 1) {

if (izveles[0] === "rastr") tips = "asociatīvais";
if (izveles[0] === "vektor") tips = "uzskatāmi-tēlainais";
if (izveles[0] === "video") tips = "abstraktais";
if (izveles[0] === "ms") tips = "analītiskais";

document.getElementById("answer").innerText =
"Ja jums patīk " + nosaukums(izveles[0]) +
", tad jums ir " + tips + " domāšanas tips!";

return;
}

let kombinacija = izveles.sort().join("-");

if (kombinacija === "rastr-vektor") tips = "figūrfonu";
if (kombinacija === "rastr-video") tips = "distālais";
if (kombinacija === "ms-rastr") tips = "uzņēmīgais";
if (kombinacija === "vektor-video") tips = "vizuālais/daudzdimensionālais";
if (kombinacija === "ms-vektor") tips = "algoritmiskais";
if (kombinacija === "ms-video") tips = "divergentais";

document.getElementById("answer").innerText =
"Ja jums patīk " + nosaukums(izveles[0]) +
" un " + nosaukums(izveles[1]) +
", tad jums ir " + tips + " domāšanas tips!";
}

function nosaukums(v) {

if (v === "rastr") return "rastrgrafika";
if (v === "vektor") return "vektorgrafika";
if (v === "video") return "video montāža";
if (v === "ms") return "MS programmas";

}
