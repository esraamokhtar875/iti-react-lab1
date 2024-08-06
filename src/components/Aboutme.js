import'./Aboutme .css'
function AboutMe(){
    const onButtonClick = () => {
        const pdfUrl='./file.pdf';
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
    }
    return(
        <>
        <div className="all">
            <h2> About Me</h2>
        <div className="about">
            <p>  Front-end developer ,graduated from faculity of science fayoum univerisity 
                Zoology and Chemistry department ,<br/>
                studed programing in ITI instatue for 4 monthes
                and worked for a company named 'Mindbox' for 2 years.,<br/>
                I love working with React and Node.js, <br/>and I'm always eager to learn new technologies.
                I'm also interested in traveling and exploring new cultures.,<br/>
                My hobbies include playing basketball, cooking, and playing the piano.
            </p>
            <button onClick={onButtonClick} className='cv'> Download Resume </button>
        </div>
        </div>
        </>
    )
}

export default AboutMe;