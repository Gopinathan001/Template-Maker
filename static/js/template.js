const clear = document.getElementById("clear")

clear.addEventListener('click', function handleClick(event) {
    event.preventDefault
    const inputs = document.querySelectorAll('#yourname, #phno, #skill, #mail, #linkedin, #degree, #major, #position, #Companyname')
    const innerH = document.querySelectorAll('#display')
    innerH.forEach(innerHT => {
        innerHT.innerHTML = ""
    })
    inputs.forEach(input => {
        input.value = ''
    })
})



function inputValue() {
    const Name = document.getElementById("yourname").value;
    const phno = document.getElementById("phno").value;
    const skill = document.getElementById("skill").value;
    const mail = document.getElementById("mail").value;
    const linkedin = document.getElementById("linkedin").value;
    const degree = document.getElementById("degree").value;
    const major = document.getElementById("major").value;
    const position = document.getElementById("position").value;
    const Companyname = document.getElementById("Companyname").value;

    const textCopy = document.getElementById('display').innerHTML = (`<h3>Template 1</h3><br><br>Application for ${position} - ${Name}<br><br> I hope you're doing well. I wanted to express my interest in the <strong>${position}</strong> at <strong>${Companyname}</strong> that I found on your website.<br><br>

        As a recent graduate with a <strong>${degree}</strong> in <strong>${major}</strong>, I'm excited to start my career and be part of your team.<br><br>
    
        During my studies, I gained skills in <strong>${skill}</strong>, and I've completed projects that showcase my abilities.<br><br>
    
        I've attached my resume for your review. I'm available for an interview at your convenience and eager to discuss how I can contribute to <strong>${Companyname}</strong>.<br><br>
    
        Thank you for considering my application.<br><br>
        Warm regards,<br>
        ${Name}<br>
        ${phno}<br>
        ${mail}<br>
        ${linkedin}<br><br><hr>`)


    document.getElementById('display1').innerHTML = (`<h3>Template 2</h3><br><br>Application for ${position} - ${Name}<br><br> I hope this message finds you well. I am writing to express my interest in the <strong>${position}</strong> role at <strong>${Companyname}</strong> and to submit my application for the same. As a recent MCA graduate, I am enthusiastic about the opportunity to contribute to your esteemed organization.<br><br>

        I am eager to apply my knowledge and skills to make a meaningful contribution to <strong>${Companyname}</strong> mission and objectives.<br><br>
    
        I have attached my resume to this email for your reference, which provides additional details about my educational background and experiences. I would welcome the opportunity to discuss how my qualifications align with the requirements of the <strong>${position}</strong> role further.<br><br>
    
        Thank you for considering my application. I look forward to the possibility of contributing to <strong>${Companyname}</strong> success and the opportunity to interview for the <strong>${position}</strong> position.</strong>.<br><br>
    
        Sincerely,<br>
        ${Name}<br>
        ${phno}<br>
        ${mail}<br>
        ${linkedin}<br>`)

    function copyText() {
        textCopy.select()

        document.execCommand("copy")

        textCopy.blur()
    }
}




