import { Component } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk,MdLocationPin } from "react-icons/md";
import swal from "sweetalert";
import './contact.css'


class Contact extends Component{
    render(){
        const popup=(e)=>{
            e.preventDefault()
        swal({
            title: "Thank You !", 
            icon: "success",
            button: "Back",
          })
        }
        return(
            <div className="contact-main-container" id="Contact">
                <h2 className="heading-in-contactPage">Contact Me</h2>
                <div className="underline"/>
                <div className="contact-flex-container">
                    <div className="info-contact-container">
                        <h3>Let's Connect</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta…</p>
                        <div className="flex align-items"><AiOutlineMail style={{margin:"10px", color:"#858585", fontSize:"24px"}}/><text>Paritoshkashyap25@gmail.com</text>
                        </div>
                        <br/>
                        <div className="flex align-items"><MdPhoneInTalk style={{margin:"10px" , color:"#858585", fontSize:"24px"}}/><text>+91 8586906706</text></div>
                        <br/>
                        <div className="flex align-items"><MdLocationPin style={{margin:"10px" , color:"#858585", fontSize:"24px"}}/><text>delhi Univeristy North campus</text></div>
                    </div>
                    <div className="form-contact-container">
                        <h3>Send me a message</h3>
                        <form>
                            First & Last Name: <span>*</span><br/>
                            <input type="text" />
                            <br/>
                            Phone Number: <span>*</span><br/>
                            <input type="text"/>
                            <br/>
                            Email Address: <span>*</span><br/>
                            <input type="email"/>
                            <br/>
                            Message: <span>*</span><br/>
                            <textarea rows="4" cols="38" />
                            <br/>
                            <button onClick={popup}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;