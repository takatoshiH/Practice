var app = new Vue({  //Vueクラスをインスタンス化している
  el: "#app",  //Vue.jsを適用する要素
  data: {　//データオブジェクト　リアクティブデータと呼ぶ　リアクティブデータを管理する仕組みをリアクティブシステムと言う
    email: "Good@gmail.com",
  },
  methods: {
    localEmail: function () {
      return this.email.split("@")[0].toLowerCase();
    }
  }
});