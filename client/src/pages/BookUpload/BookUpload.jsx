import React from 'react'
import './BookUpload.css'
import * as AiIcons from 'react-icons/ai'
import TopBar from '../../Components/TopBar/TopBar'
import Author from './author'
import { useState } from 'react'
function BookUpload() {
  const [counter, setCounter] = useState(1);
 
  //increase counter
  const increase = () => {
    if(counter<20)
    setCounter(counter => counter + 1);
    console.log(counter);
  };
  //decrease counter
  const decrease = () => {
    if(counter>1)
    setCounter(counter => counter - 1);
    console.log(counter);
  };

  const authors = [];
  for (let i = 1; i <= counter; i++) {
    authors.push(<Author id={i} key={i} />);
  }
  return (
    <div>
    <TopBar />
    <div className='mainbody'>
    <div className='container-main'>
    <div className='titleadd'>Add New Book</div>
        <form>
        <div className='bookdetails'>
            <div className="input_box">
              <label className="Labeldetails" >Book Name</label>
              <span></span>
              <input type="text" name='Bookname' required />
            </div>
            
            <div className="input_box">
              <label className="Labeldetails" >Langugae</label>
              <span></span>
              <input type="text" name='Language' required />
            </div>

            <div className="input_box">
              <label className="Labeldetails" >Publisher</label>
              <span></span>
              <input type="text" name='Publisher' required />
            </div>
            

            <div className="input_box">
              <label className="Labeldetails" >Topic</label>
              <span></span>
              <input type="text" name='Topic' required />
            </div>


            <div className="input_box">
              <label className="Labeldetails" >Format</label>
              <span></span>
              <input type="text" name='Format' required />
            </div>


            <div className="input_box">
              <label className="Labeldetails" >Publishing Year</label>
              <span></span>
              <input type="text" name='PublishingYear' required />
            </div>

            <div className="input_box">
              <label className="Labeldetails" >ISBN</label>
              <span></span>
              <input type="text" name='ISBN' required />
            </div>
            <div className="input_box">
              <label className="Labeldetails" ></label>
              <span></span>
              <input type="text" name='ISBN' hidden />
            </div>
            <div className='input-box'>
              <label className="LabeldetailsA" >Author</label>
              <span></span>
              <AiIcons.AiFillPlusCircle onClick={increase} className="authorbtn" />
              <AiIcons.AiFillMinusCircle onClick={decrease} className="authorbtn" />
              {authors}
            </div>

            <div className="input_boxz">
              <label className="Labeldetails" >Summary</label>
              <span></span>
                <textarea required />
            </div>

            <input className='addfile' type={"file"} />
            <input className='submitform' type={"submit"} value="submit" />  
          </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default BookUpload