var compA =  {
  props: [
      'top1',
      'top2',  
      'title', 
      'subtitle', 
      'description', 
      'sticker1', 
      'sticker2', 
      'bottom1', 
      'bottom2',
      'distxt',  
      'def', 
      'hov', 
      'sel', 
      'dis', 
      'disable'
      ], 
  data: function () {
    return {
      defImg: '', 
      buttonText: 'купи.', 
      buttonLine: '_ _ _ _ _', 
      mouseIn: false, 
      isMouseOut: false, 
      isSelected: false, 
      txtTop: '', 
      buttOver: '', 
      buttOn: true, 
      topColor: "", 
      isDisabled: false, 
      disColor: "", 
      bottomDisColor: "", 
      isMouseImg: false, 
      isMouseBtn: false  
    }
  },

    methods:{
    mouseover: function (){
      if(!this.isDisabled){
        if(!this.isSelected){
          this.mouseIn = true;
          this.def = this.hov;
        } else {
          if(this.isMouseOut){
            this.top1 = this.top2; 
            this.topColor = "color: #e62e7a"; 
          }
        }
      }
    }, 

    mouseleave: function(){
      if(!this.isDisabled){
        if(!this.isSelected){
          this.mouseIn = false;
          this.def = this.defImg;
        } else {
          if(!this.isMouseOut){
            this.isMouseOut = true; 
          } else {
            this.top1 = this.txtTop;
            this.topColor = "color: #666666"; 
          }
        }
      }
    }, 

    mousedown: function(){
      if(!this.isDisabled){
        if(this.isMouseImg || this.isMouseBtn){
          if(!this.isSelected){
            this.isSelected = true; 
            this.def = this.sel; 
            this.bottomTxt = this.bottom2;  
            this.buttOn = false;
            this.isMouseBtn = false;   
          } else {
            this.isSelected = false; 
            this.def = this.defImg; 
            this.top1 = this.txtTop; 
            this.topColor = "color: #666666";
            this.buttOver = "opacity: 0";  
            this.isMouseOut = false;
            this.bottomTxt = this.bottom1;
            this.buttOn = true; 
          }
        }
      }
    }, 

    buttonOver: function(){
      if(!this.isDisabled){
        this.buttOver = "opacity: 1"; 
        this.isMouseBtn = true; 
      }
    }, 

    buttonLeave: function(){
      if(!this.isDisabled){
        this.buttOver = "opacity: 0"; 
        this.isMouseBtn = false; 
      }
    }, 

    imgOver: function(){
      this.isMouseImg = true; 
    }, 
    imgLeave: function(){
      this.isMouseImg = false; 
    },
  },

    created: function(){
       if(this.disable === 'true'){
          this.def = this.dis; 
          this.isDisabled = true; 
          this.disColor = "color: #b3b3b3"; 
          this.topColor = "color: #b3b3b3"
          this.bottomDisColor = "color: #c1c14a"; 
          this.buttOn = false; 
          this.bottomTxt = this.distxt;

          
          this.defImg = this.def; 
      } else {
          this.bottomTxt = this.bottom1; 
          this.defImg = this.def; 
      }
          this.txtTop =  this.top1; 
  }, 
  
  template: '<div class="card" @mouseover="mouseover" @mouseleave="mouseleave" @mousedown="mousedown"><img class="img1" v-bind:src="def" @mouseover="imgOver" @mouseleave="imgLeave"><div class="top" :style="topColor" @mouseover="imgOver" @mouseleave="imgLeave">{{top1}}</div><div class="title" :style="disColor" @mouseover="imgOver" @mouseleave="imgLeave">{{title}}</div><div class="subtitle" :style="disColor" @mouseover="imgOver" @mouseleave="imgLeave">{{subtitle}}</div><p class="description" v-html="description" :style="disColor" @mouseover="imgOver" @mouseleave="imgLeave"></p><div class="stick-num" @mouseover="imgOver" @mouseleave="imgLeave">{{sticker1}}</div><div class="stick-text" @mouseover="imgOver" @mouseleave="imgLeave">{{sticker2}}</div><div class="bottom"><div class="bottom-text"><div :style="bottomDisColor">{{bottomTxt}}</div><div class="bottom-text-line">1</div></div><div class="bottom-button" @mouseover="buttonOver" @mouseleave="buttonLeave" v-if="buttOn"><div class="button-text">{{buttonText}}</div><div class="button-line" v-bind:style.opacity="buttOver">{{buttonLine}}</div></div></div></div>'
}
