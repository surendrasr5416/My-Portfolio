import './About.css';

export default function About() {
    return (
        <>
            <section className='about'>
                <div>
                    <p >
                        My name is Patil Surendra Reddy, and I hold a Bachelor of Engineering in Information Science And Engineering (ISE).
                        I’m passionate about technology, problem-solving, and building practical digital solutions.
                        To strengthen my development skills, I also completed a Python Full Stack Development course,
                        where I gained hands-on experience in front-end, back-end, and database technologies.
                    </p>
                </div>
            </section>
            <section className='bio-section'>
                <h1>
                    Python Full Stack Developer
                </h1>
                <p className='above-p'>
                    With hands-on experience in Python, Django, JavaScript, HTML, CSS, and database systems like MySQL and MongoDB,
                    <br />I enjoy building complete, scalable, and user-friendly web applications.
                </p>
                <div className='bio-div'>
                    <div className='bio-div-1'>
                        <p><b>Name: </b>Patil Surendra Reddy</p>
                        <p><b>DOB: </b>18 January 2004</p>
                        <p><b>City: </b>Banglore, Karnataka</p>
                    </div>
                    <div className='bio-div-2'>
                        <p><b>Degree: </b>Bachelor of Engineering</p>
                        <p><b>Mobile No: </b>+91 7842378018</p>
                        <p><b>E-mail: </b>suri09969@gmail.com</p>

                    </div>
                </div>

            </section>
        </>
    )
}