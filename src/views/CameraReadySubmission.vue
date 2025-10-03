<template>
  <div class="col-xl-8 col-md-12">
    <!-- Post -->
    <div class="row mt-2 mb-5 pb-3 mx-2">
      <!-- Card -->
      <div class="card card-body mb-5">

        
       
        
        <h3 class="font-weight-bold mt-5">
          <strong>FINAL CAMERA-READY PAPER AND COPYRIGHT FORM SUBMISSION INSTRUCTIONS</strong>
        </h3>
        <hr class="red title-hr" />
        <div class="submission-instructions">
          <h4>Step 1: Final Camera-ready paper submission Preparation</h4>
          <ol>
            <li>Please follow the IEEE two-column A4 size standard conference format for preparing your final manuscript. For more details, please visit the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank">IEEE Templates page</a>.</li>
            <li>Revised Version: Revise your paper based on reviewers' comments/suggestions. The reviewer's comments are available on the Microsoft CMT Portal: <a href="https://cmt3.research.microsoft.com/ICPC2T2025/Submission/Index" target="_blank">Reviewer Comments</a>.</li>
            <li>The maximum page limit is six pages, including references. Do not include an author biography at the end.</li>
            <li>Similarity index with other papers should be less than 30%, including references. The maximum file size allowed is 10 MB, and the file format should be PDF (.pdf) without encryption or passwords.</li>
          </ol>
          
          <h4>Step 2: Address Reviewers' Comments</h4>
          <p>Prepare a Response Sheet detailing how you have addressed each of the reviewers' comments. The name of the document should be <strong>RS_PIDX.pdf</strong> (where xxx is your paper ID in CMT). This document must include:</p>
          <ol>
            <li>The reviewer’s comment.</li>
            <li>Your response to the comment.</li>
            <li>Changes made to the manuscript (if applicable), with page and section references.</li>
          </ol>

          <h4>Step 3: IEEE Copyright Notice</h4>
          <p>An appropriate copyright notice is to appear at the bottom of the first page of each paper. Replace the copyright notice in the camera-ready paper template (if provided) with the correct copyright notice based on the following:</p>
          <ul>
            <li>For papers in which all authors are employed by the US government: <strong>U.S. Government work not protected by U.S. copyright</strong></li>
            <li>For papers in which all authors are employed by a Crown government (UK, Canada, Australia): <strong>979-8-3315-3040-2/25/$31.00 ©2025 Crown</strong></li>
            <li>For papers in which all authors are employed by the European Union: <strong>979-8-3315-3040-2/25/$31.00 ©2025 European Union</strong></li>
            <li>For all other papers: <strong>979-8-3315-3040-2/25/$31.00 ©2025 IEEE</strong></li>
          </ul>

          <h4>Step 4: PDF eXpress Check</h4>
          <p>After preparing the final revised manuscript, submit it to PDF eXpress using Conference ID (63847X) at <a href="https://ieee-pdf-express.org/Account/Login" target="_blank">IEEE PDF Express</a>. If you do not have an account in PDF eXpress, click on the link “Create Account” and fill in your information (email address and password). If you are not familiar with PDF eXpress, you can get detailed instructions on using IEEE PDF eXpress at:<a href = 'https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress'>Using IEEE PDF eXpress</a> or contact at <a href = 'icpc2t-2025@nitrr.ac.in'>icpc2t-2025@nitrr.ac.in</a>.</p>

          <h4>Step 5: Camera Ready Paper Submission</h4>
          <p>Submit the Camera-Ready Paper (after passing PDF check) through the author console in CMT. Please change the file name to <strong>PIDxxx</strong> (where xxx is your paper ID in CMT) before submission to CMT. Please note that authors are expected to retain the title of the original paper in the final paper. Also, the author list and order in the original paper cannot be changed in the final manuscript.</p>
          <p class="step5_red" style="color: red;">Note: please make sure before submitting the camera-ready paper you have approved the generated pdf in PDF eXpress.</p>
          <img src="../assets/cameraready.png" alt="camera" />


          <h4>Step 6: Submission of the Copyright Form</h4>
          <p>After uploading the Camera-Ready Paper (the paper must have passed PDF Check in IEEE PDF eXpress), click on ‘Submit IEEE Copyright Form’ link to enter the IEEE Copyright Form Submission CMT page. Click on the IEEE copyright website link. Now, the author will be redirected to IEEE eCF site to submit copyright form. After filling out the IEEE Copyright Form on eCF website, authors need to download the form and upload it into CMT. Please note that the corresponding author can submit the copyright form for all the authors.</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CameraReadySubmission",
};
</script>

<style scoped>
p {
  text-align: justify;
  font-family: sans-serif;
}

.submission-instructions {
  margin-top: 20px;
}

.submission-instructions h4 {
  margin-top: 15px;
  font-weight: bold;
}

.submission-instructions ol, .submission-instructions ul {
  margin-left: 20px;
}
img[alt="camera"] {
  width: 500px;
}

@media(max-width: 500px)
{
  img[alt="camera"] {
  width: 300px;;
}
}
@media(max-width: 400px)
{
  img[alt="camera"] {
  width: 250px;;
}
}

</style>
