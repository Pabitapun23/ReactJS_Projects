import React from 'react';

const About = () => {
  return (
    <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img src={require('../images/about.jpg')} className= "imageAboutPage" alt="" />
                </div>

                <div className="col-lg-8">
                    <p> I am exploring myself with new experiences and try to grow and learn.                    
                    </p>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <ul>
                                <li>Name: Pabita</li>
                                <li>Age: 23</li>
                                <li>Occupation: Developer and Designer</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Phone: +977 9876543210</li>
                                <li>Email: myemail@gmail.com</li>
                                <li>Address: Nepal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;