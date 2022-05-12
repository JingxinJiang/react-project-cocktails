import React from 'react'
// import { FaGithub } from "react-icons/fa";
import fig1 from '../images/bgfigure1.png'
const Home = () => {
  return (
    <section className='myhome section '>
      <div className="hometitle">
        <div >
          <h2 >
            welcome to <br/>Jingxin Jiang's website        
          </h2>
          <h3 className='jobpos'>Freelance Web Designer</h3>
          <button className='btn btn-primary'>Contact me</button>
          <div>
              <ul className="socials">
              <li><a href="https://www.gmail.com/" target="_blank"><i className="far fa-envelope"></i></a></li>
              <li><a href="https://github.com/JingxinJiang/" target="_blank"><i className="fab fa-github"></i></a></li>        
              <li><a href="https://linkedin.com/in/jingxin-jiang-canada" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>            
              </ul>
          </div>
        </div>      
      </div>
    <form 
            name="contact v1"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
        >               
            <input type="hidden" name="form-name" value="contact v1" />
            <div hidden>
                <input name="bot-field"/>
            </div>
            <div className="item">
                <label className="item1"><span style={{color:"red"}} >* </span>Email: <br/>                 
                <input  name="email" type="email" required="required" placeholder="Input your personal email"/>    
                </label>
            </div>
            <div className="item">
                <label className="item2 " htmlFor="username"><span style={{color:"blue"}}>* </span>Your name: <br/> </label>
                <input id="username" name="username" type="text" required="required"  placeholder="What is your name?"/>    
                
            </div>
            <button type="submit">submit</button>
        </form>  
    </section>
  )
}

export default Home
