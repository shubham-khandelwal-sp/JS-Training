
class Menu{
    constructor(elem){
      this._elem=elem
      elem.onclick=this.onClick.bind(this)
    }
    save(){
      alert('Saving ')
    }
    load(){
      alert('Loading ')
    }
    search(){
      alert('Searching ')
    }
    onClick(event){
      console.log('Action')
      let actionPerf=event.target.dataset.action;
      if(actionPerf){
        this[actionPerf]()
      }
    };
  }

const menu = document.querySelector('#menu');
console.log(menu)
new Menu(menu);