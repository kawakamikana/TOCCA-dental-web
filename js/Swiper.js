var swiper1 = new Swiper ('.swiper1', {
  // オプションパラメータ(一部のみ抜粋)
  loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
  speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。
  slidesPerView: 1, // 何枚のスライドを表示するか
  spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
  direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
  effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
  initialSlide: '0',//先頭スライドを番号で指定する。

  // スライダーの自動再生
  // autoplay: true 　のみなら既定値での自動再生
  autoplay: {
    delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
    stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
    disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
  },

  // レスポンシブ化条件
  breakpoints: {
    // 960ピクセル幅以下になったら
    960: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // 780ピクセル幅以下になったら
    780: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  },
});


//スマホ版のみスライド
  var swiper2 = new Swiper('.swiper2', // 適用させる要素のセレクターを設定。
  {
    pagination: '.swiper-pagination',  // ページネーションを使う場合適用要素のクラスを指定。
    loop: true, //ループ
    simulateTouch: true,//マウス操作でスライドさせるか
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 30,
    speed: 800,
    initialSlide: 0,//最初に表示するスライド（0からの連番）
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:  // ブレイクポイントを設定する場合。
    {
        960: {  // 横幅が960px以下で、下記設定に書き換える。
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20
        	},
        780: {  // 横幅が780px以下で、下記設定に書き換える。
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10
        	}
    	}
  	}
	);



//PC、スマホ共スライド
var swiper3 = new Swiper('.swiper3', // 適用させる要素のセレクターを設定。
{
  pagination: '.swiper-pagination',  // ページネーションを使う場合適用要素のクラスを指定。
  loop: true, //ループ
  simulateTouch: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  speed: 800,
  centeredSlides: true,
  initialSlide: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:  // ブレイクポイントを設定する場合。
  {
      960: {  // 横幅が960px以下で、下記設定に書き換える。
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20
      },
      780: {  // 横幅が780px以下で、下記設定に書き換える。
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10
      }
  }
}
);


var swipenone = new Swiper ('.swipenone', {
  // スライダーの自動再生
  // autoplay: false
});
