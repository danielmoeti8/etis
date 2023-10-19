import React from "react";
import Event1 from '../assets/kotiniFest.jpg';
import Event2 from '../assets/saints.jpg';
import Event3 from '../assets/maddest.jpg';
import EventMain from '../assets/newBackground.jpg'

function Events () {
    return (
        <div name="events" className="w-[full] h-[screen]">
            <div className="w-[full] h-[300px] bg-white">
              <p className="events-heading text-8xl text-center my-[150px] overflow-hidden" >This is what we have coming up</p>
            </div>
            <div style={{backgroundImage: `url(${EventMain})`}} className="event-back w-[full] h-[100vh] overflow-hidden ">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-8 py-20">
                <div style={{backgroundImage: `url(${Event1})`}} className="group container rounded-md flex justify-center items-center mx-auto events-img ">

                </div>
                <div style={{backgroundImage: `url(${Event2})`}} className="group container rounded-md flex justify-center items-center mx-auto events-img ">

                </div>
                <div style={{backgroundImage: `url(${Event3})`}} className="group container rounded-md flex justify-center items-center mx-auto events-img ">

                </div>
              </div>
            </div>
            
        </div>
    )
}

export default Events;