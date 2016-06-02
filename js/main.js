//IMAGENES
 $(function() {
	$('.wrap').hover(
		function(){
			var $this = $(this);
			$this.stop().animate({'height':'280px','top':'0px','padding':'30px',});
		},
		function(){
			var $this = $(this);
			$this.stop().animate({'height':'270px','top':'0px','padding':'0px'});
		}
	);
});

//BOTON HACIA ARRIBA DEL MODAL
$(document).ready(function(){
 
	$('.btn-arriba').click(function(){
		$('.modal, .modal-title').animate({
			scrollTop: '0px'
		}, 300);
	});
 
/*	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 */
});





