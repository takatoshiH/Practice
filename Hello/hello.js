var app = new Vue({  //Vueクラスをインスタンス化している
  el: "#app",  //Vue.jsを適用する要素
  data: {　//データオブジェクト　リアクティブデータと呼ぶ　リアクティブデータを管理する仕組みをリアクティブシステムと言う
    current: new Date(),
  },
  created: function () {　//createするときにタイマーをセットする
    let that = this;
    this.timer = setInterval(function () {
      that.current = new Date(); //１秒ごとに時間を更新する
    }, 1000);
  },
  beforeDestory: function () {
    clearInterval(this.timer);
  }
});

//dataオプションにデータを登録すると、その全てのプロパティを監視対象として登録する