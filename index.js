function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value,
    };
  
    const serviceID = "service_avgu00m";
    const templateID = "template_sjhq6t3";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          confirm("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }