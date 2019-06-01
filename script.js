// hier komt je code
// console.log("Hallo wereld!");
let mijnKnoppen = document.querySelectorAll("a");
let i = 0;
let scrollAantal = 0;
while (i < mijnKnoppen.length) {
      mijnKnoppen[i].addEventListener("click", function(event) {
         window.scroll({
            top: (window.innerHeight*this.getAttribute("data-factor")),
            left: 0,
            behavior: 'smooth'
         });
         event.preventDefault();
}, false);
      i++;
}

$(function(){

  $('button').on('click', function(){
    var vali = $('input').val(),
        txt = $('textarea').val();
        console.log(txt)

        console.log(vali)
    if (vali != "") {

        $('<h4>' + vali + '</h4>').appendTo('.commentaar');
        $('<p>' + txt + '</p>').appendTo('.commentaar');
        $('input, textarea').val('');


    }



  });


});
