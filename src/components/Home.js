import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card'
import image1 from '../images/henry.jpg'


function Home() {
    return (
        <div className="col-md-8 mx-auto mt-3 mb-5">

            <h1 className="text-center bg-dark text-light rounded mt-2">Henry Herrera - Web Developer</h1>
            
            {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
            <Card>
            <div className="row">
                <div className="col-md-4">
                <Card.Img src={image1} />
                </div>
                <div className="col-md-8">
                <Card.Body>
                    <Card.Title>Hello!</Card.Title>
                    <Card.Text className="pt-3">
                    <p>My name is Henry Herrera, I'm a web developer and this is my
									portfolio!</p>
								<p>I just graduated from a Web and Mobile Development Co-Op program at Cornerstone
									International Community College of Canada in Vancouver.</p>
								<p>I am currently looking for a full-time position as a Web Developer!</p>
								<p>If you know about an opportunity, please reach out to me!</p>
                    </Card.Text>
                    </Card.Body>
                </div>
            </div>
    </Card>

    
        
        </div>
    )
}

export default Home
