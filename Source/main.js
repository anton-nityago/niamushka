var app = new Vue({
  components: {'comp-a': compA}, 
  el: '#app',
  data: {
   title: "Ты сегодня покормил кота?", 
   mydata: [] 
  }, 
  beforeMount: function(){ 
   this.mydata = JSON.parse(data); }
})
