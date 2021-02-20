$(function(){
    //表示設定
    $(".datepicker").datepicker({
      dateFormat: 'yy/mm/dd',
      showButtonPanel: false,
      buttonImageOnly: false,
      buttonText: "aaaaa",
      showOn: "focus",
      closeText: '閉じる',
      prevText: '◀',
      nextText: '▶',
      currentText: '今日',
      monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
      dayNamesShort: ['日曜','月曜','火曜','水曜','木曜','金曜','土曜'],
      dayNamesMin: ['日','月','火','水','木','金','土'],
      yearSuffix: '年',
      firstDay: 0
    });
   
  });