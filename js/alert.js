window.onload = function () {
    var ua = navigator.userAgent;
    if (ua.indexOf("Trident") !== -1) {
      alert(
        "お使いのブラウザは閲覧推奨環境ではありません。ウェブサイトが正しく表示されない、動作しない等の現象が起こる場合がありますので予めご了承ください。\nchromeまたはEdgeブラウザのご利用をおすすめいたします。"
      );
    }
  };