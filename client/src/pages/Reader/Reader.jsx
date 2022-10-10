import React, {useState, useEffect} from 'react';
import './Reader.css';
import Sidebar from '../../Components/TableofContents/Sidebar.jsx';
function Reader(props) {
  const book = props.book;
  const chapter = props.chapter;
  const [content, setContent] = useState("");
  const [style, setStyle] = useState("");
  useEffect(() => {

    // check logged in user
    const fetchData = async () => {
        fetch("http://localhost:3050/read?book="+book+"&chapter="+chapter, {
            mode: "cors",
            credentials: "include"
        }).then((result) => {
            result.json().then((jsonResult) => {
                setContent(jsonResult.chapter);
                // setStyle(jsonResult.style);
            });
            // result.blob().then((blobResult) => {
            //   setContent(blobResult.)
            // })
        }, (reason) => {
            console.log(reason);
        });
    };
    fetchData();
  }, [book, chapter]);
  return (
    <div className='body'>
      
      <header>
        <span className='inner-text'>{book}</span>
      </header>

      <div className='main-container'>
      
        <aside className='sidebar'>
          {/* <span className='inner-text'>Sidebar</span> */}
          <Sidebar />
        </aside>
      
        <main className='content'>
          <div className='book'>
            
            {/* <div dangerouslySetInnerHTML={{__html: content}}/> */}
            <iframe sandbox="allow-scripts" title="content" srcDoc={content} width="100%" height="100%"></iframe>
            {/* <iframe srcdoc="http://localhost:3050/read?book=LN_test_1&chapter=toc"></iframe> */}
            {/* <iframe srcDoc={content}></iframe> */}
            {/* <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/2' element={<Discover />} />
            </Routes> */}
          </div>
          <div className='page-control'>
            <button>Prev</button>
            <button>Next</button>
          </div>
        </main>
      
      </div>

    </div>
  )
}

export default Reader