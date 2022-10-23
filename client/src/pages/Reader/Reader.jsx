import React, {useState, useEffect, useRef} from 'react';
import * as AiIcons from 'react-icons/ai'; //for aiICons icons
import './Reader.css';
import Sidebar from '../../Components/TableofContents/Sidebar.jsx';
import { useLocation } from 'react-router-dom';

function Reader() {
  const location = useLocation();
  const data = location.state;
  const toc = location.state.toc;
  const pages = data.pages;
  const id = data.id;
  const [content, setContent] = useState("");
  const [book, setBook] = useState(data.title);
  const [chapter, setChapter] = useState(pages[0].id);

  const [fontSize, setFontSize] = useState(1);

  const iframeRef = useRef();
  const [scrollPercentage, setScrollPercentage] = useState("");
  const handleScroll = () => {
    const iframe = iframeRef.current.contentWindow;
    const scrollY = iframe.window.scrollY;
    const height = iframe.document.body.scrollHeight - iframe.window.innerHeight;
    setScrollPercentage(Math.floor(100 * scrollY / height));
  }
  
  const navigateToChapter = (chapterID) => {
    setChapter(chapterID);
  }

  const reloadIframe = () => {
    iframeRef.current.contentDocument.location.reload();
    // iframeRef.current.style.height = iframeRef.current.contentWindow.document.body.scrollHeight + 50 + 'px';
    // iframeRef.current.style.height = iframeRef.current.contentWindow.document.documentElement.scrollHeight + 5 + 'px';
    // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  const increaseFontSize = () => {
    setFontSize(Math.min(5, fontSize + .1));
    reloadIframe();
  }

  const decreaseFontSize = () => {
    setFontSize(Math.max(1, fontSize - .1));
    reloadIframe();
  }

  const prevPage = () => {
    const currentPageIndex = pages.findIndex((pg) => pg.id === chapter);
    if(currentPageIndex === 0) {
      // give feedback to user (Tariq)
      return;
    }
    const prevPage = pages[currentPageIndex - 1]
    setChapter(prevPage.id);
  }

  const nextPage = () => {
    const currentPageIndex = pages.findIndex((pg) => pg.id === chapter);
    if(currentPageIndex === pages.length - 1) {
      // give feedback to user (Tariq)
      return;
    }
    const nextPage = pages[currentPageIndex + 1]
    setChapter(nextPage.id);
  }

  useEffect(() => {
    // check logged in user
    const fetchData = async () => {
        fetch("http://localhost:3050/read?book="+id+"&chapter="+chapter, {
            mode: "cors",
            credentials: "include"
        }).then((result) => {
            result.json().then((jsonResult) => {
                setContent(jsonResult.chapter);
            });   
        }, (reason) => {
            console.log(reason);
        });
    };

    iframeRef.current.addEventListener('load', () => {
      // e.target.contentWindow.document.addEventListener('scroll', handleScroll);

      iframeRef.current.contentWindow.document.body.style.fontSize = fontSize + "em";

      iframeRef.current.style.height = iframeRef.current.contentWindow.document.body.scrollHeight + 50 + 'px';
      iframeRef.current.style.height = iframeRef.current.contentWindow.document.documentElement.scrollHeight + 5 + 'px';
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      
    });
    fetchData();
  }, [id, chapter, fontSize]);


  
  

  return (
    <div className='body'>
      
      <header className='book-name'>
        <span>{book}</span>


        
      </header>

      <div className='main-container'>
      
        <aside className='sidebar'>
          <Sidebar 
            toc={toc} 
            navigateToChapter={navigateToChapter} 
            reloadIframe={reloadIframe}
            increaseFontSize={increaseFontSize}
            decreaseFontSize={decreaseFontSize}
          />
        </aside>
      
        <main className='content'>
          <div className='book'>
            
            <iframe 
              className='iframe'
              ref={iframeRef}
              // sandbox="allow-scripts" 
              title="content" 
              srcDoc={content} 
              // onScroll={handleScroll}
            ></iframe>



            {/* <iframe sandbox="allow-top-navigation" title="content" src='http://localhost:3050/read?book=LN_test_1&chapter=toc' width="100%" height="100%"></iframe> */}
            {/* <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/2' element={<Discover />} />
            </Routes> */}
          </div>
          <div className='page-control'>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
          </div>
        </main>
      
      </div>

    </div>
  )
}

export default Reader