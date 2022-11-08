import React, {useState, useEffect, useRef, useCallback} from 'react';
import * as AiIcons from 'react-icons/ai'; //for aiICons icons
import './Reader.css';
import Sidebar from '../../Components/TableofContents/Sidebar.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

function Reader() {
  const location = useLocation();
  const navigate = useNavigate();

  const [countPages, setCountPages] = useState(1);

  // const toc = location.state ? location.state.toc : null;
  const pages = location.state ? location.state.pages : null;

  const book = location.state ? location.state.title : null;

  const [currentPageIndex, setCurrentPageIndex] = useState(location.state ? location.state.index : 0);

  const [fontSize, setFontSize] = useState(1);

  const [contents, setContents] = useState([""]);

  const iframeRefs = useRef();
  iframeRefs.current = [];

  const addToRefs = (el) => {
    if(el && !iframeRefs.current.includes(el)) {
      el.addEventListener('load', () => {
        el.contentWindow.document.body.style.fontSize = fontSize + "em";
        el.style.height = el.contentWindow.document.body.scrollHeight + 50 + 'px';
        el.style.height = el.contentWindow.document.documentElement.scrollHeight + 5 + 'px';
      })
      iframeRefs.current.push(el);
    }
  }

  // const [scrollPercentage, setScrollPercentage] = useState("");
  
  
  const navigateToChapter = (chapterIndex) => {
    setCurrentPageIndex(chapterIndex);
  }

  const reloadIframe = () => {
    for (let i=0; i<countPages; i++){
      iframeRefs.current[i].contentDocument.location.reload();
    }
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
    if(currentPageIndex === 0) {
      // give feedback to user (Tariq)
      return;
    }
    setCurrentPageIndex(currentPageIndex - 1);
  }

  const nextPage = () => {
    if(currentPageIndex === pages.length - 1) {
      // give feedback to user (Tariq)
      return;
    }
    setCurrentPageIndex(currentPageIndex + 1);
  }


  const fetchData = useCallback(async (idx) => {
      fetch("http://localhost:3050/read?book="+book+"&chapter="+pages[currentPageIndex+idx].id, {
          mode: "cors",
          credentials: "include"
      }).then((result) => {
          result.json().then((jsonResult) => {
            if(idx < countPages) {
              setContents((contents) => contents.map((oldContent, i) => {
                if(i === idx) {
                  return jsonResult.chapter;
                } else {
                  return oldContent;
                }
              }));
            } else {
              setContents((contents) => {
                if(contents.includes(jsonResult.chapter)) return contents;
                setCountPages(countPages + 1);
                return [...contents, jsonResult.chapter]
              })
            }

          });   
      }, (reason) => {
          console.log(reason);
      });
    }, [book, countPages, currentPageIndex, pages]);
  

    const handleScroll = useCallback(async (e) => {  
      if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
        console.log("loading chapter "+countPages);
        fetchData(countPages);
      }
  
    }, [countPages, fetchData])

  useEffect(() => {
    // check logged in user
    if(!localStorage.getItem("logged-in-user")) {
      navigate("/unauthorized");
    }

    if(!location.state) {
      navigate("error");
    }

    console.log("loading chapter 0");
    fetchData(0);

    // scrolling
    window.addEventListener("scroll", handleScroll);

  }, [fetchData, handleScroll, location.state, navigate]);


  return (
    <div className='body'>
      
      <header className='book-name'>
        <span>{book}</span>


        
      </header>

      <div className='main-container'>
      
        <aside className='sidebar'>
          <Sidebar 
            pages={pages} 
            navigateToChapter={navigateToChapter} 
            reloadIframe={reloadIframe}
            increaseFontSize={increaseFontSize}
            decreaseFontSize={decreaseFontSize}
          />
        </aside>
      
        <main className='content'>
          <div className='book'>
            {contents.map((content, index) => {
              return (<iframe key={index} className='iframe' ref={addToRefs} title="content" srcDoc={content} ></iframe>);
            })}
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