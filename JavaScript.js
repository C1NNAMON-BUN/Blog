$(document).ready(function () {
    $('.spoiler_links').click(function () {
        $(this).parent().children('div.spoiler_body').toggle('normal');
        return false;
    });
});

function hotkey(event) {
    id = event.keyCode - 48;

    var key_press = event.code;

    if (event.shiftKey) {
        url = '';
        switch (id) {
            case 1:
                url = 'dostup.html';
                break;
            case 2:
                url = 'uvlecenia-i-talanty.html';
                break;
            case 3:
                url = 'azyki-programmirovania.html';
                break;
            case 4:
                url = 'lubimye-skolnye-predmety.html';
                break;
            case 5:
                url = 'plany-na-budusee.html';
                break;
            case 6:
                url = 'gal.html';
                break;
            case 7:
                url = 'blog.html';
                break;

        }
        if (url) window.location.href = url;
    }
}
$(document).ready(function () {
    $(".color_table tr").hover(function () {
        $(this).addClass("hover_color")
    }, function () {
        $(this).removeClass("hover_color")
    });

});



$(document).keyup('keyup', function(event){
    if(event.which === 191) {
        $('#inputMessage').focus();
    }
});



function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();
  }
}

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
if(inputText.value.match(mailformat))
{
document.form1.text1.onfocus();
   
return true;
}
else
{
alert("?????????????????? ?????????????????? ???????? ??????????!");
document.form1.text1.onfocus();
return false;
}
}


function ValidatePhone(inputText)
{

    var mailformat = /^\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
if(inputText.value.match(mailformat))
{
document.form1.text2.onfocus();
   
return true;
}
else
{
alert("?????????????????? ?????????????????? ???????? ??????????????!");
document.form1.text2.onfocus();
return false;
}
}





$(document).ready(function() { // ???????? ???????????????? ????????????????
						   
	var slides = $(".slider .slides").children(".slide"); // ???????????????? ???????????? ???????? ??????????????
	var width = $(".slider .slides").width(); // ???????????????? ???????????? ?????????????? ??????????????
	var i = slides.length; // ???????????????? ???????????????????? ??????????????
	var offset = i * width; // ???????????? ?????????????????? ???????????????? ?? ???????????? ???????? ??????????????
	i--; // ?????????????????? ??????-???? ?????????????? ???? ???????? ( ?????? ???????????????? ?? ?????????????? )

	$(".slider .slides").css('width',offset); // ???????????? ?????????? ???? ???????????????? ???????????? ???????? ??????????????
	
	offset = 0; // ???????????????? ????????????????, ?????? ?????? ???????????????????????? ???????????? 1 ??????????
	$("body .slider .next").click(function(){	// ?????????????? ?????????? ???? ???????????? "?????????????????? ??????????"
		if (offset < width * i) {	// ??????????????????, ?????????? ???? ???? ???? ??????????
			offset += width; // ?????????????????????? ???????????????? ???? ???????????????????? ????????????
			$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // ?????????????? ???????? ???? ???????????????? ?? ????????????????????
		}
	});


	$("body .slider .prev").click(function(){	// ?????????????? ?????????? ???? ???????????? "???????????????????? ??????????"
		if (offset > 0) { // ??????????????????, ?????????? ???? ???? ???? ??????????
			offset -= width; // ?????????????????? ???????????????? ???? ?????????????????????? ????????????
			$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // ?????????????? ???????? ???? ???????????????? ?? ??????????????????????
		}
	});

}); 


$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
      
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
      left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
    });
    $('#overlay, #magnify').fadeIn(800);
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut(800, function() {
        
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
 


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();
  }
}