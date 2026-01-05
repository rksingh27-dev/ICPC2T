<template>
  <div id="carousel-main-div-for-spacing" class="position-relative">
    <!-- Carousel -->
    <div id="carousel-example-1z" class="carousel slide" data-ride="carousel">
      <!-- Brochure Button -->
      <div class="brochure-button">
        <a href="./Brochure_new.pdf" id="btn" ><button class="btn btn-primary">Brochure</button></a>
      </div>

      <!-- Arrows -->
      <a
        class="carousel-control-prev"
        href="#carousel-example-1z"
        role="button"
        data-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel-example-1z"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>

      <!-- Slides -->
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img
            id="key-speaker"
            class="card-img-top"
            src="@/assets/p1.jpeg"
            alt="Slide 1"
          />
        </div>
        <div class="carousel-item">
          <img
            id="key-speaker"
            class="card-img-top"
            src="@/assets/p4.svg"
            alt="Slide 2"
          />
        </div>
        <div class="carousel-item">
          <img
            id="key-speaker"
            class="card-img-top"
            src="@/assets/p2.svg"
            alt="Slide 3"
          />
        </div>
        <div class="carousel-item">
          <img
            id="key-speaker"
            class="card-img-top"
            src="@/assets/p3.svg"
            alt="Slide 4"
          />
        </div>
        <div class="carousel-item">
          <img
            id="key-speaker"
            class="card-img-top"
            src="@/assets/p5.svg"
            alt="Slide 4"
          />
        </div>
      </div>


    </div>

    <!-- Marquee -->
    <div class="marquee-style">
  <div class="marquee-content">
     <div class="marquee-item">
     
    CMT link for paper submission: <a href="https://cmt3.research.microsoft.com/ICPC2T2026" target="_blank">https://cmt3.research.microsoft.com/ICPC2T2026</a>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    Camera Ready Instructions for Participants: <a href="./template_acceptance.docx" target="_blank">Download camera ready instructions</a>

    </div>
 
  </div>
</div>


  </div>
</template>





<script>
export default {
  name: "ABCD",
};
</script>

<style scoped>


#carousel-main-div-for-spacing {
  margin: 50px auto;
  max-width: 1300px;
  width: 100%;
  position: relative;
}

.card-img-top {

  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-inner img {
  object-fit: cover;
  max-height: 600px;
}

/* Styling the Arrows */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 50px;
  height: 50px;
  background-size: 100%; 
  transition: transform 0.3s ease, background-color 0.3s ease; 

}

#slide-2 img {
  height: 300px; /* Slide 2 ke liye height set ki gayi */
  width: auto;
}


.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
  transform: scale(1.3); 
  background-color: rgba(0, 0, 0, 0.2); 
  border-radius: 50%; 
}
#btn, a{
  text-decoration: none !important;
}

.brochure-button {
  position: absolute;
  top: 94%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.brochure-button .btn-primary {
  font-size: 18px;
  padding: 10px 20px;
  white-space: nowrap;
  background-color: rgb(99, 53, 250) !important;
  border: 1px solid rgb(57, 0, 243) ;
  color:white;

}
.brochure-button :hover.btn-primary:hover{
  color: rgb(198, 193, 193);

}

.marquee-style {
  
  color: white;
  background-color: rgb(57, 0, 243); 
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  border: 2px solid rgb(99, 53, 250); 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  height: 4em; 
}


.marquee-content {
  display: flex;
  flex-direction: column;
  gap: 0; 
  position: absolute;
  width: 100%; 
  animation: scroll-marquee 20s linear infinite;
}

/* Pause animation on hover to allow clicking */
.marquee-style:hover .marquee-content {
  animation-play-state: paused;
}

/* Individual marquee items */
.marquee-item {
  display: block;
  text-align: left;
  padding: 0 20px;
  white-space: nowrap;
  pointer-events: auto; /* Ensure pointer events are enabled */
  line-height: 1.5;
}

.marquee-item a {
  color: rgb(255, 255, 0) !important; 
  text-decoration: underline !important;
  pointer-events: auto !important; /* Ensure links are clickable */
  cursor: pointer !important;
  position: relative;
  z-index: 100; /* Bring links to front */
  display: inline-block;
  padding: 2px 4px; /* Add some padding for easier clicking */
}

.marquee-item a:hover {
  color: rgb(255, 204, 0) !important; 
  text-decoration: none !important;
  background-color: rgba(255, 255, 255, 0.1); /* Add hover background */
}


/* Keyframes for scrolling */
@keyframes scroll-marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}






/* Responsive Adjustments */
@media (max-width: 768px) {
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 40px;
    height: 40px;
  }

  .brochure-button .btn-primary {
    font-size: 16px;
    padding: 8px 16px;
  }
  .marquee-style {
    font-size: 1rem;
  }

}
@media (max-width: 400px) {
 
.brochure-button{
  top: 90%;
}
.brochure-button .btn-primary {
    font-size: 10px;
    padding: 4px 10px;
  }
  .marquee-style{
    font-size: 0.8rem;
    padding: 5px 0;
  }

}
</style>

