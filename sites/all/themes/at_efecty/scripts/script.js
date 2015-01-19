(function($){
  
  $('.view-reporte').find('tfoot').each(function(){
    
    $(this).find('td').each(function(i){
      if (i === 0) {
        $(this).attr( 'colspan', '5' );
        $(this).find('.label').html('<em><b>Total de usuarios:</b></em> ');
      } else if ( i === 5 ) {
        $(this).attr( 'colspan', '2' );
        $(this).find('.label').html('<em><b>Total de preguntas:</b></em> ');
      } else {
        $(this).remove();
      }
    });
    
  });
    
  
})(jQuery);

