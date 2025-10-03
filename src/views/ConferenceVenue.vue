<template>
  <div class="col-xl-8 col-md-12">
    <!-- Post -->
    <div class="row mt-2 mb-5 pb-3 mx-2">
      <!-- Card -->
      <div class="card card-body mb-5">
        <!--Google map-->
        <div id="map-container-google-3" class="z-depth-1-half map-container-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5489569646047!2d81.60284041448584!3d21.249727185574933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology%2C%20Raipur!5e0!3m2!1sen!2sin!4v1623445987870!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        <hr class="red title-hr" />
        <h2 class="font-weight-bold mt-3">
          <strong>Conference Venue</strong>
        </h2>
        <hr class="red title-hr" />
        <p><strong>Venue:</strong></p>
        <p>
          G.E Road, National Institute of Technology Raipur, Chhattisgarh,
          India-492010.
        </p>
        <p>
          Institute Website:
          <a href="http://www.nitrr.ac.in/" target="_blank"
            >NITRR&nbsp;</a
          >
        </p>
        <p><strong>Map:</strong></p>
        <p>Reach us <a href="https://goo.gl/maps/9FMYUzAH5Dys2rBTA" target="_blank">here</a>. </p>
        <p>&nbsp;</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConferenceVenue",
};
</script>
<style scoped>
.map-container-3 {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-container-3 iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
