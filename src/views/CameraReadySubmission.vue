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
          <p>
            Dear {Recipient.Name},<br>
            Greetings from Team ICPC2T 2026!<br>
            Congratulations! We are pleased to inform you that your Paper ID "{Submission.Id}" titled "{Submission.Title}" has been provisionally accepted for possible inclusion in the {Conference.Name} to be organized at NIT Raipur scheduled to be held during 11 – 13 March, 2026.
          </p>
          <p>Authors are requested to follow the instructions below for final camera-ready paper submission:-</p>
          <ol>
            <li>
              Please log in to <a href="https://cmt3.research.microsoft.com/ICPC2T2026">https://cmt3.research.microsoft.com/ICPC2T2026</a> to view the reviewer comments, if any, and address the concerns/comments of the reviewers in the final camera-ready submission.
            </li>
            <hr>
            <li>
              The authors are urged to ensure that the camera-ready submission strictly follows the IEEE Template given on the conference website. The camera-ready papers that do not meet the template requirements may not be submitted for further consideration to IEEE Xplore.
            </li>
            <hr>
            <li>
              Please make sure that the Plagiarism of your final camera-ready paper should be below 30%, using standard plagiarism checking software, before submitting the camera-ready paper from your end to confirm the inclusion of the paper in IEEE Xplore.
            </li>
            <hr>
            <li>
              The number of pages in Final Camera-ready Paper must be within 06 Pages. Up to two (2) additional pages are permissible with over-length page charges. The maximum number of pages per manuscript allowed is eight (8).
            </li>
            <hr>
            <li>
              The final manuscript should have the copyright clearance code notice at the bottom of the first page. Kindly refer to the latex/word template provided here:
              <a href="https://www.ieee.org/conferences/publishing/templates.html">https://www.ieee.org/conferences/publishing/templates.html</a> and replace the dummy code at the first page bottom with this code:
              <ul>
                <li>For papers in which all authors are employed by the US government, the copyright notice is: <strong>U.S. Government work not protected by U.S. copyright.</strong></li>
                <li>For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is: <strong>979-8-3315-9055-0/26/$31.00 ©2026 Crown.</strong></li>
                <li>For papers in which all authors are employed by the European Union, the copyright notice is: <strong>979-8-3315-9055-0/26/$31.00©2026 European Union.</strong></li>
                <li>For all other papers the copyright notice is: <strong>979-8-3315-9055-0/26/$31.00 ©2026 IEEE.</strong></li>
              </ul>
            </li>
            <hr>
            <li>
              IEEE is very strict about the compliance requirements for PDF files for inclusion in the IEEE Xplore® Digital Library. We strongly recommend using IEEE PDF eXpress® site <a href="https://www.pdf-express.org/">https://www.pdf-express.org/</a> to check your final version of the paper. Please log in using the conference code ID: <strong>68221X</strong>.
            </li>
            <hr>
            <li>
              At least one author must register with Full Author Registration and present the accepted paper in hybrid mode at {Conference.Name}, in order for the paper to be considered for inclusion in IEEE Xplore.
            </li>
            <hr>
            <li>
              The authors will have to submit a camera-ready version as per the guidelines given on the conference website on or before 20th January 2026.
            </li>
            <hr>
            <li>
              For any queries please contact the<br>
              <strong>Conference Chair</strong><br>
              Prof. Anamika Yadav - <a href="mailto:ayadav.ele@nitrr.ac.in">ayadav.ele@nitrr.ac.in</a><br>
              <strong>Organizing Secretaries</strong><br>
              Dr. Varsha Singh - <a href="mailto:vsingh.ele@nitrr.ac.in">vsingh.ele@nitrr.ac.in</a><br>
              Dr. Hari priya Vemuganti - <a href="mailto:hpvemuganti.ee@nitrr.ac.in">hpvemuganti.ee@nitrr.ac.in</a><br>
              Dr. Venu Sonti – <a href="mailto:svenu.ee@nitrr.ac.in">svenu.ee@nitrr.ac.in</a><br>
              Dr. Ramya Selvaraj - <a href="mailto:rselvaraj.ee@nitrr.ac.in">rselvaraj.ee@nitrr.ac.in</a>
            </li>
            <hr>
            <li>
              IEEE Copyright Form also need to be signed and uploaded in the corresponding section. It can be seen upon login to your CMT account against the paper accepted.
              <br><br>
              <strong>Procedure for IEEE Copyright Form eCF submission:</strong><br>
              To enable your paper to appear in IEEE Xplorer, it is mandatory to transfer the Copyright to IEEE. The corresponding/submitting author of each paper has to transfer IEEE eCF. The steps to transfer the Copyright to IEEE are also given below:
              <ul>
                <li>Login to your CMT Paper Submission Portal to <a href="https://cmt3.research.microsoft.com/ICPC2T2026">https://cmt3.research.microsoft.com/ICPC2T2026</a> and Click on the IEEE copyright link. You will be redirected to IEEE Copyright Form Submission page.</li>
                <li>Click on “Click here to redirect to the IEEE copyright website” to transfer eCF and you will be redirected to IEEE copyright portal.</li>
                <li>Follow the steps and other instructions to complete the IEEE Copyright Transfer process.</li>
                <li>Download the completed Copyright Form and save it as .pdf file. Don’t change the name of the file.</li>
                <li>Login to your CMT Paper Submission Portal to <a href="https://cmt3.research.microsoft.com/ICPC2T2026">https://cmt3.research.microsoft.com/ICPC2T2026</a> and upload this .pdf file of Copyright Transfer Form.</li>
                <li>It completes the Copyright Transfer of your paper to IEEE. Please note that separate copyright transfer is required for each paper.</li>
              </ul>
            </li>
          </ol>
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
