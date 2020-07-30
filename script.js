// Get the data from each element in the form.
const name = document.getElementById('nm');
const lname = document.getElementById('lnm');
const email = document.getElementById('mail');
const password = document.getElementById('pass');
const dob = document.getElementById('bday');
const college=document.getElementById('college');
const button=document.getElementById('bt');
var ele = document.getElementsByName('gender');



let saveFile = () => {
    	
    var sex;
    for(var i=0;i<ele.length;i++)
   {
       if(ele[i].checked)
      {
        sex=ele[i].value;
      }
   }

        // This variable stores all the data.
        let data = 
            '\r First Name: ' + name.value + ' \r\n ' + 
            'Last Name: ' +lname.value + ' \r\n ' + 
            'Email: ' + email.value + ' \r\n ' + 
            'Password: ' + password.value + ' \r\n ' + 
            'DOB: ' + dob.value + ' \r\n ' +
            'Gender: ' + sex+ ' \r\n ' +
            'Institute: ' + college.value+ ' \r\n';
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'form1Data.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }

button.addEventListener('click',saveFile);