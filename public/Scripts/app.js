/* <!--Student name : Raghuveer Kumar Pendyala(301178112),
Subject :COMP229-web application development
Date : 19 feb 2022 --> */
//IIFE : Immediately Invoked Function Expression
(function()
{
    function Start()
    {
        console.log("App started..");

        let deleteButtons = document.querySelectorAll('.btn-danger')
        
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event)=>{

              if(!confirm("Are you sure?")){
                  event.preventDefault();
                  window.location.assign('/business-contact-list');
              }  

            });
        }
    }

    window.addEventListener("load", Start);
})();