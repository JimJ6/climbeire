// Accordion Menu on Resources Page:
let title = document.querySelectorAll(".title");
  
  for(let i = 0; i < title.length; i++){
    title[i].addEventListener("click", function(){
      let result = this.nextElementSibling;
      this.classList.toggle("titleclicked");
      result.classList.toggle("clicked");
      
        
       if(this.firstElementChild.innerText === "+"){
         this.firstElementChild.innerText = "-"
         }
      else{
        this.firstElementChild.innerText = "+"
      }
  
    })
  }
 