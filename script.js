function submit(){
    let userdata={
        name : document.getElementById("option1").Value,
        name : document.getElementById("option2").Value,
        name : document.getElementById("option3").Value,
        feedback : document.getElementById("feedback").Value,
        fname : document.getElementById("firstname").Value,
        lname : document.getElementById("lastname").Value,
        email : document.getElementById("email").Value,
        phonenumber : document.getElementById("number").Value,
       }
       localStorage.setItem("userdata",JSON.stringify(userdata));

       alert("thank you for our feedback")
}