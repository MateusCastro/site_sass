(function () {
    setInterval(() => {
        var hour = new Date().getHours();
        var aberto = document.getElementsByClassName("aberto");
        if(hour > 7 && hour < 18){
            aberto[0].style.background = "green";
        }else{
            aberto[0].style.background = "red";
        }
    }, 1000)
})();