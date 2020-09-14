import React,{Component } from 'react'
export default class Experience extends Component {
    render() {
      return (
        <section class="colorlib-experience" data-section="experience">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span class="heading-meta">Experience</span>
                    <h2 class="colorlib-heading animate-box">Work Experience</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                 <div class="timeline-centered">
                     <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div class="timeline-entry-inner">

                           <div class="timeline-icon color-1">
                              <i class="icon-pen2"></i>
                           </div>

                           <div class="timeline-label">
                              <h2><a href="#">Associate Software Engineer,</a> <span>Wolters Kluwers ELM Solutions, </span><span>2017-2019</span></h2>
                              <p>•	Designed and implemented key features of SaaS based e-billing and matter management web-application using .Net Framework 4.5 C#, JavaScript (jQuery), SQL server 2012 (Implementation of data objects along with query optimization) in agile Scrum Environment.<br/>
•	Handled critical client requests, addressing/patching product related issues (Troubleshooting the issues with Splunk) and also received spot award for completing maximum Client issues/requests (JIRA Tickets) with short turnaround time.<br/>
•	Worked on the creation of Restful Web Services for Invoice testing Protocols (To review the invoices sent to ebilling module) <br/>
•	Performed unit testing (and Nightly code test) and automated deployment (run builds, automatic unit test and deployment) using team city and octopus. 
</p>
                           </div>
                        </div>
                     </article>
  
                     <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div class="timeline-entry-inner">

                           <div class="timeline-icon color-1">
                              <i class="icon-pen2"></i>
                           </div>

                           <div class="timeline-label">
                              <h2><a href="#">PINC Research Mentor</a> <span>2020-Present</span></h2>
                              <p>PINC- Promoting Inclusivity in computing <br/> 
                              PINC (Promoting Inclusivity in Computing) program is designed for the biology major students 
                              integrating CS topics such as mobile app development in the context of Biology topics, 
                              App Inventor and then moving onto Python.
                              I am currently mentoring a group of 6 students and my responsibility includes teaching them Python and basics of open CV 
                              </p>
                           </div>
                        </div>
                     </article>
                     </div> 
                     </div>
                     </div>
                     </div></section>

      )}
}
