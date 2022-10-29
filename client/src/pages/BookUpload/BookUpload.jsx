import React from 'react'
import './BookUpload.css'
import * as AiIcons from 'react-icons/ai'
import TopBar from '../../Components/TopBar/TopBar'
function BookUpload() {
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
              <label className="Labeldetails" >Author</label>
              <span></span>
              <input type="text" name='Author' required />
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