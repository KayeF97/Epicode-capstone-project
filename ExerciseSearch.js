import React from "react";
import './ExerciseSearch.css'
import StartPics from "./StartCarousel";



function ExerciseSearch() {
    return (
    <>
    
    <div class="container">

<div class="row height d-flex justify-content-center align-items-center">
<div class="col-md-8">
<div class="search">
      <i class="fa fa-search"></i>
      <input type="text" class="form-control" placeholder="Search for exercises here"/>
      <button class="btn btn-primary">Search</button>
    </div>
    
  </div>
  
</div>
<StartPics />
</div>
</>

    )
   

}
    


export default ExerciseSearch;
