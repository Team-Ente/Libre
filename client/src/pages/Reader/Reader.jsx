import React, {useState, useEffect, useRef} from 'react';
import * as AiIcons from 'react-icons/ai'; //for aiICons icons
import './Reader.css';
import Sidebar from '../../Components/TableofContents/Sidebar.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

function Reader() {
  const location = useLocation();
  const navigate = useNavigate();

  const toc = location.state ? location.state.toc : null;
  const pages = location.state ? location.state.pages : null;
  const id = location.state? location.state.id : null;
  const [content, setContent] = useState("");
  const [book, setBook] = useState(location.state ? location.state.title : null);
  const [chapter, setChapter] = useState(pages ? pages[0].id : null);

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
  }

  const increaseFontSize = () => {
    setFontSize(Math.min(5, fontSize + .1));
    reloadIframe();
  }

  const decreaseFontSize = () => {
    setFontSize(Math.max(.5, fontSize - .1));
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
    if(!localStorage.getItem("logged-in-user")) {
      navigate("/unauthorized");
    }

    if(!location.state) {
      navigate("error");
    }

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
  }, [id, chapter, fontSize, navigate, location.state]);


  
  

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
            <iframe className='iframe' ref={iframeRef} title="content" srcDoc={content} ></iframe>
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