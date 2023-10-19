import React from "react";

function Address () {
    return (
      <div name="address" className="w-[full] h-[screen]">
        <div className="w-[full] h-[300px] bg-white">
            <p className="about-heading text-8xl text-center my-[150px]" >Find us here</p>
        </div>
        <div className="flex bg-gray-800 w-[full] h-[screen]">
         <div className="h-[50%]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14106.58194084622!2d27.893947655414618!3d-27.882158567321397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1020%20site%20ntha%20lindley%20south%20africa!5e0!3m2!1sen!2sza!4v1697620072365!5m2!1sen!2sza" 
          width="100%"
          height="450" 
          allowfullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="googleMap"></iframe>
         </div>
         <div>
          <h1 className="text-white text-4xl p-6 ">MIDDLE STREET<br></br> NEXT BEHIND <br></br>THE NTHA PARK</h1>
          <p className="text-white p-6">1020 Site Ntha<br></br>
             Lindley<br></br>
             Free State<br></br>
             9602
          </p>
         </div>
        </div>
      </div>
        
    )
}

export default Address;