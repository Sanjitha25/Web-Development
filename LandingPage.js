import React from 'react';
import "./Landing.css";
import logo from "./college.png";
import Menu from '@mui/material/Menu';

const LandingPage = () => {
  const [event, setEvent] = React.useState(null);

  const handleClick = (event) => {
    setEvent(event.currentTarget);   
  };
  const handleClose = () => {
    setEvent(null);
  };

  const handleAction1 = () => {
    
    console.log('ecr');
  };
  return (
    <>
    
      <div className='landing'>
        <div className='container-fluid'>
          <div className="row">
            <div className='card shadow-lg col-sm-12 m-0 p-3'>
              <nav className="navbar navbar-expand-md navbar-dark sticky-top col-sm-12 m-0">
                <img className='m-0' src={logo} width="100px" height="100px" alt="College Logo" />
                <div className='collname m-1'>
                  <h3>MUTHAYAMMAL ENGINEERING COLLEGE</h3>
                  <h6>An Autonomous Institution</h6>
                  <h6>Approved by AICTE | Affiliated to Anna University</h6>
                </div>
                <div>
                  <h3 className='stdname m-1'><span className='text-danger'>NAME:</span><span className='text-success'>SANJITHA</span></h3>
                </div>
                <button className='btn btn-primary m-2 log collname m-3'>ECR</button>

                <button
                  className=' btn btn-primary m-2 log collname m-3'
                  onClick={handleClick}
                >
                  SetAF
                </button>

                <Menu
                  id="ecr"
                  event={event}
                  open={Boolean(event)}
                 
                >
                  <a ><button className='btn btn-outline-info m-2'>Journal Publications</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Conference Publications and Presentations</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Workshop and Seminar</button></a>
                  <a ><button className='btn btn-outline-info m-2'>TechTalks to be delivered Multidisciplinary Lectures</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Faculty Guest Talk in other Institutions</button></a>
                  <a ><button className='btn btn-outline-info m-2'>NPTEL Certification</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Participation in TASTE</button></a>
                  <a ><button className='btn btn-outline-info m-2'>.e-Content,(Video Lecture)</button></a>
                  <a href='/signup' onClick={() => { handleAction1(); handleClose(); }}><button className='btn btn-outline-info m-2'>Visite to Industries,Institution</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Seed Money Proposal for Research</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Awards at National ,International Level</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Proposals Submission for Grants</button></a>
                  <a ><button className='btn btn-outline-info m-2'>.Books,Chapters Authorship</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Consultancy and Corporate Training done for Revenue Generation</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Patents Filled,Published,Granted</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Collaborative Activities with MoU Signed Industries,Institutions</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Visits to the Library</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Students Motivation for Paper Presentation,Project Submission,Other Contests</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Professional Society Membership</button></a>
                  <a ><button className='btn btn-outline-info m-2'>Students Field Work,Internship Guidance</button></a>
                </Menu>

                <button className=' btn btn-primary m-2 log collname m-3 '>SESTA</button>
                <button className=' btn btn-primary m-2 log collname m-3 '>IV</button>
                
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;


