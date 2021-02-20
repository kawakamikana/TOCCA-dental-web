$(function(){
    $('.parent-container').magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: { //ギャラリー表示にする
        enabled:true
      }
      });
    });