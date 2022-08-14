


searchButton = document.querySelector("#searchInput").addEventListener("click", ButtonSearch );
InfoCard= document.querySelector(".info")


function ButtonSearch(){
 html =` <form id="search" class="search" action="">
 <input id ="SearchForm" type="search" value=" Search best user...">
 <button id="searchB">Search</button>
</form>  `
InfoCard.remove();
document.getElementById("search").innerHTML=html;
    Ikon= document.querySelector("nav").style.display="none";
}

// class Bell{
//  constructor(info) {
//     this.info=info
//  }
// } 
FaBell= document.querySelector(".fa-bell");
FaBell.addEventListener("click", FBell);

 function FBell(){
   document.querySelector(".photo").style.opacity=.1;
   InfoCard.classList.toggle("active");
    
    const  inf=" "
        if(inf==" "){
            html =`<div>
                <p> Her hansi melumat yoxdur </p>
            
            <div>`;
          
        }
        else {
            html= `<div>
            <p> daxul olan melumat</p>
        
        <div>`;
       
        }
        document.querySelector(".info").innerHTML=html;
    

  
    

}

