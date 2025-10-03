<template>
  <!-- Navigation -->
  <header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark unique-color">
      <!-- Navbar brand -->
      <!-- <a class="navbar-brand" href="#">ICPC2T</a> -->

      <!-- Collapse button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Links -->
        <ul class="navbar-nav mr-auto">
          <a class="nav-link">Home</a>
          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Committees</a
            >

            <div
              class="dropdown-menu dropdown-primary"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#">Advisory Committee</a>

              <a class="dropdown-item" href="#">Organising Committee</a>

              <a class="dropdown-item" href="#">Technical Committee</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Call for Papers</a
            >

            <div
              class="dropdown-menu dropdown-primary"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#">Call for Papers</a>

              <a class="dropdown-item" href="#">Tracks / Topics</a>

              <a class="dropdown-item" href="#">Special Session</a>

              <a class="dropdown-item" href="#">Camera Ready Submission Instructions</a>

            </div>
          </li>

          <a class="nav-link">Keynote Speakers</a>

          <a class="nav-link">Program Schedule</a>

          <a class="nav-link">Workshops</a>

          <a class="nav-link">Registration</a>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Plan Travel</a
            >

            <div
              class="dropdown-menu dropdown-primary"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#">About India</a>

              <a class="dropdown-item" href="#">About Raipur</a>

              <a class="dropdown-item" href="#">Travelling to Raipur</a>
            <a class="dropdown-item" href="#">Conference Venue</a>

              <a class="dropdown-item" href="#">Accomodation</a>

              
           </div>
          </li>  
          <a class="nav-link">Downloads</a> 

           <a class="nav-link">Partners</a> 
          <a class="nav-link" href="/tourist">Tourists Attraction</a>

          <!-- <a href=""> Test </a> -->

          <!-- <router-link class="nav-link" to="/tourist">Tourists Attraction</router-link> -->


          <a class="nav-link">Contact Us</a>
        </ul>
        <!-- Links -->

      </div>
      <!-- Collapsible content -->
    </nav>
    <!-- Navbar -->
  </header>
  <!-- Navigation -->
</template>

<script>
export default {
  name: "Navbar",
};
</script>
