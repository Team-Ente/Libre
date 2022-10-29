import React from 'react'
import './BookUpload.css'
import * as AiIcons from 'react-icons/ai'
function BookUpload() {
  const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");
form.addEventListener("click", () =>{
  fileInput.click();
});
fileInput.onchange = ({target})=>{
  let file = target.files[0];
  if(file){
    let fileName = file.name;
    if(fileName.length >= 12){
      let splitName = fileName.split('.');
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
    }
    uploadFile(fileName);
  }
}
function uploadFile(name){
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/upload.php");
  xhr.upload.addEventListener("progress", ({loaded, total}) =>{
    let fileLoaded = Math.floor((loaded / total) * 100);
    let fileTotal = Math.floor(total / 1000);
    let fileSize;
    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
    let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
    uploadedArea.classList.add("onprogress");
    progressArea.innerHTML = progressHTML;
    if(loaded == total){
      progressArea.innerHTML = "";
      let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="fas fa-check"></i>
                          </li>`;
      uploadedArea.classList.remove("onprogress");
      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
    }
  });
  let data = new FormData(form);
  xhr.send(data);
}
  return (
    <div className='mainbody'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
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

            <div class="wrapper">
                <input className="file-input" type={'file'} name="file" hidden/>
                <i class="fas fa-cloud-upload-alt"></i>
                <p>Browse File to Upload</p>
              <section class="progress-area"></section>
              <section class="uploaded-area"></section>
            </div>
          </div>
        </form>
    </div>
    </div>
  )
}

export default BookUpload