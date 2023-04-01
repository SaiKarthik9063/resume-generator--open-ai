// import html2pdf from '../H4H/node_modules/html2pdf.js';
const form = document.querySelector('form');
const preview = document.querySelector('#preview');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	// Get form data
	const fullName = form.elements['full-name'].value;
	const email = form.elements['email'].value;
	const phoneNumber = form.elements['phone-number'].value;
	const address = form.elements['address'].value;
	const workExperience = form.elements['work-experience'].value;
	const education = form.elements['education'].value;
	const skills = form.elements['skills'].value;
    // const img=form.elements['img1'].value;
    // console.log(img)
	// Generate preview of resume
	const resume =
        `
		<h2>${fullName}</h2>
		<p>Email: ${email}</p>
		<p>Phone: ${phoneNumber}</p>
		<p>Address: ${address}</p>
		<h3>Work Experience</h3>
		<p>${workExperience}</p>
		<h3>Education</h3>
		<p>${education}</p>
		<h3>Skills</h3>
		<p>${skills}</p>
	`;

	// Display preview of resume
	preview.innerHTML = resume;
});


// function pdf(){
// // Define options for html2pdf
// const options = {
//     filename: 'resume.pdf',
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { format: 'a4', orientation: 'portrait' }
//   };
  
//   // Define element to convert to PDF
//   const element = document.getElementById('preview');
  
//   // Use html2pdf to convert the element to PDF
//   html2pdf().from(element).set(options).save();
    
//     // Create download link
//     // var content=document.getElementById("preview").innerHTML;
//     // var downloadLink = document.createElement("a");
//     // downloadLink.download = "resume.txt";
//     // downloadLink.href = "data:text/plain;charset=utf-8," + encodeURIComponent(content);
//     // document.body.appendChild(downloadLink);
    
//     // // Click download link to initiate download
//     // downloadLink.click();
//   }