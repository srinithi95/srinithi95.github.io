import React,{Component} from 'react'

export default class Education extends Component {
    render() {
      return (
        <section class="colorlib-education" data-section="education">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span class="heading-meta">Education</span>
                    <h2 class="colorlib-heading animate-box">Education</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div class="fancy-collapse-panel">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Degree - Computer Science
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                     <div class="panel-body">
                                        <div class="row">
                                              <div class="col-md-6">
                                                  <p>GPA: 4.0/4.0<br/>
                                                  San Francisco State University, USA
                                                  </p>
                                              </div>
                                              <div class="col-md-6">
                                                  <p>Coursework: Advanced Internet application Design and Development, Analysis of Algorithm, Software Engineering, Database Management System, Data Structures and Algorithms.</p>
                                              </div>
                                          </div>
                                     </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor of Technology- Information Technology
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="panel-body">
                                    <div class="row">
                                              <div class="col-md-6">
                                                  <p>GPA: 3.6/4.0<br/>
                                                  Anna University, India
                                                  </p>
                                              </div>
                                              <div class="col-md-6">
                                                  <p>Coursework: Operating System, Data Mining, Data Structures and Algorithm, Compiler Design, Object-Oriented Programming, Database management System, Computer Networks.</p>
                                              </div>
                                          </div>
                                    </div>
                                </div>
                            </div>
                           

                          

                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      )}
}
