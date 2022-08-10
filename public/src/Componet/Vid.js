import React   from "react"
import Haed from "./head"

{/* 
                    <video className="  w-75 top-50 start-50" controls src=''  id="change" autoPlay={true}>
                    <source  type="video/mp4" autoPlay={true}/>
                    </video>
                */}
                    {//تغير الرابط
}


function Contact(props){



const url = props.server ;
const url1 = props.server1 ;
const url2 = props.server2;
const url3 = props.server3 ;
const btn = props.server4;
const button = props.button;

var vid = document.getElementById("change"); 

function playVid() { 
  vid.play(); 
} 
    return(
        <div className=" text-center warning">
            <Haed/>
<div className=" text-center">
    <div className="w-100">
        <button type="button" class="m-1 btn btn-outline-secondary font" onClick={()=>{props.vid1(url)}}>سرفر1</button>
        <button type="button" class="m-1 btn btn-outline-secondary font" onClick={()=>{props.vid1(url1)}}>سرفر2</button>
        <button type="button" class="m-1 btn btn-outline-secondary font" onClick={()=>{props.vid1(url2)}}>سرفر3</button>
        <button type="button" class="m-1 btn btn-outline-secondary font" onClick={()=>{props.vid1(url3)}}>سرفر4</button>
    </div>
    <iframe width="55%" height="330" src={props.vid} id="change"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoplay" ></iframe>
</div>

<div className="text-center">
{/*
//حلقات
*/}
<div className='w-100'>
        <button type="button" class="m-1 btn btn-outline-secondary font" onClick={()=>{
            props.vid1(btn)
            playVid()
            }}>حلقة 1</button>
        {button}
    </div>
{console.log(btn)}
</div>

                </div>

    )
}
export default Contact;