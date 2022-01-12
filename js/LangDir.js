let langMenu = document.querySelector(".langIcon")
let langListDom = document.querySelector(".langIcon .langList");
let langIconDom = document.querySelector(".langIcon i");
let getLang = localStorage.getItem("langDir");

if(getLang){
    if(getLang == 'rtl')
        {
            changeDir(getLang);
        }
    else{
        changeDir('ltr');
    }
}

langIconDom.addEventListener("click" , openLangMenu);
/*toggle lang menu*/
function openLangMenu(){
if(langListDom.style.display === "block"){
    langListDom.style.display = "none";
}
else
    langListDom.style.display = "block";
}

/*Change Direction*/
let en = document.getElementById("en-lang");
let ar = document.getElementById("ar-lang");
en.addEventListener("click" , () => changeDir('ltr'));
ar.addEventListener("click" , () => changeDir('rtl'));
function changeDir(dirAttr) {
    document.documentElement.setAttribute("dir", dirAttr);
    localStorage.setItem("langDir",dirAttr );
    langListDom.style.display = "none";

}