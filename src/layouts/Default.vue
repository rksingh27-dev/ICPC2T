<template>
  <div id="app">
    <!-- Navigation -->
    <div v-cloak>
      <header>
        <div class="banner">
          <img src="../assets/Drawing1.svg" alt="" />
        </div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark" id="nav">
          <router-link class="navbar-brand" id="col" to="/">ICPC<sup>2</sup>T</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" :key="$route.path">
            <ul class="navbar-nav mr-auto">
             <!-- Dropdown -->
             <li class="nav-item dropdown" id="col">
                <a
                  class="nav-link dropdown-toggle col"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  
                  >Committees</a
                >

                <div
                  class="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink" 
                >
                  <router-link class="dropdown-item" id="dropmenu" to="/advisory"
                    >Advisory Committee</router-link
                  >
                  <hr/>
                  <router-link class="dropdown-item" id="dropmenu" to="/organising"
                    >Organizing Committee</router-link
                  >
                  <hr/>
                  <router-link class="dropdown-item" id="dropmenu" to="/technical"
                    >Technical Program Committee</router-link
                  >
                </div>
              </li>

              <li class="nav-item dropdown" id="col">
                <a
                  class="nav-link dropdown-toggle "
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  >Call for Papers</a
                >

                <div
                  class="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link class="dropdown-item" id="dropmenu"  to="/call-for-papers"
                    >Call for Papers</router-link
                  >
                  <hr/>
                  <router-link class="dropdown-item" id="dropmenu" to="/tracks"
                    >Tracks / Topics</router-link
                  >
                  <hr/>
                  <router-link class="dropdown-item" id="dropmenu"  to="/camerareadysubmission"
                    >Camera Ready Submission Instructions</router-link
                  >
                  <hr/>
                  <router-link class="dropdown-item" id="dropmenu" to="/Special"
                    >Special Session</router-link
                  >
      
                </div>
              </li>

              <router-link class="nav-link" id="col" to="/speakers"
                >Keynote Speakers</router-link
              >
              
              <router-link class="nav-link" id="col" to="/schedule"
                >Program Schedule</router-link
              >

              <router-link class="nav-link " id="col" to="/workshops"
                >Workshops</router-link
              >

              <router-link class="nav-link " id="col" to="/registration"
                >Registration</router-link
              >
             <router-link class="nav-link"  id="col" to="/accomodation"
                >Accomodation</router-link
              >
              <router-link class="nav-link " id="col"  to="/pptguidelines"
                >PPT Guidelines</router-link
              >
              <router-link class="nav-link "  id="col" to="/downloads"
                >Downloads</router-link
              >

              <router-link class="nav-link " id="col"  to="/partners"
                >Partners</router-link
              >
             
              <router-link class="nav-link" id="col" to="/tourist"
                >Tours & Travels</router-link
              >
              <router-link class="nav-link " id="col"  to="/contact"
                >Contact Us</router-link
              >
            </ul>
          </div>
        </nav>
      </header>

      <!-- Carousel -->
      <Carousel />

      <!-- Main layout -->
      <main>
        <div class="content-container">
          <!-- Left Section -->
          <div class="home-content">
            <slot />
          </div>
          
          <Side />
          <!-- Right Section -->
          
        </div>
      </main>
      
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Side from "../components/Side.vue";
 import Carousel from "../components/Carousel.vue";
// import Home from "../views/Home.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "App",
  components: {
    // Home,
    Side,
    Carousel,
    Footer,
  },
  data() {
    return {};
  },
  watch: {
    '$route' () {
      this.$root.$emit('button::toggle::collapse', 'navbar-toggler')
    }
  }
};
</script>
<style scoped>
a.router-link-exact-active {
  border-bottom: 3px solid;
  text-decoration-color: 5px solid rgb(255, 255, 255);
}

.sampleContent {
  padding: 4em 0 4em 0;
}

#nav {
  background-color: rgb(135, 169, 242);
  border-radius: 5px;
}

#col {
  color: black;
  font-weight: 500;
  font-family: Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
}

#col:hover {
  color: rgb(59, 58, 58) !important;
}

/* Banner Styling */
.banner img {
  width: 100%;
}

/* Main Content Container */
.content-container {
  display: flex;
  flex-direction: row;
  /* gap: 20px; */
}

/* Sidebar (Side Component) */
.content-container > Side {
  flex: 0 0 300px;
  max-width: auto;
  background-color: #f0f0f0;
  height: auto;
  overflow-y: auto;
  padding: 10px;
}


.home-content {
  flex: 1; 
  padding: 20px;
  background-color: #ffffff;
}

#nav {
  background-color: rgb(135, 169, 242);
  border-radius: 5px;
  display: flex; 
  align-items: center !important; 
  justify-content: space-between !important; 
  padding: 5px 15px; 
}

#col {
  color: black;
  font-weight: 500;
  font-family: Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  padding: 20px 5px !important;
}

#col:hover {
  color: rgb(59, 58, 58) !important;
 
}

/* Dropdown Menu Styling */
.dropdown-menu {
  background-color: #f9f9f9;
  border-radius: 5px;
}

.dropdown-item {
  color: black;
  padding: 5px 10px !important;
}

.dropdown-item:hover {
  background-color: rgba(135, 169, 242, 0.2);
}

/* Navbar Brand Styling */
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: black !important;
}

.navbar-toggler {
  border: none;
}

/* .navbar-toggler-icon {
  background-color: black; 
} */

@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
  }

  .content-container > Side {
    max-width: 100%;
    flex: 1; 
  }

  .home-content {
    max-width: 100%;
    flex: 1; 
  }
}


[v-cloak] {
  display: none;
}
</style>
