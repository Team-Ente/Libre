import React, {useState, useEffect, useRef} from 'react';
import * as AiIcons from 'react-icons/ai'; //for aiICons icons
import './Reader.css';
import Sidebar from '../../Components/TableofContents/Sidebar.jsx';

function Reader(props) {
  const toc = props.toc;
  const pages = props.pages;
  const [content, setContent] = useState("");
  const [book, setBook] = useState(props.book);
  const [chapter, setChapter] = useState(props.chapter);

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
    iframeRef.current.contentWindow.location.reload();
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
        fetch("http://localhost:3050/read?book="+book+"&chapter="+chapter, {
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
      iframeRef.current.style.height = iframeRef.current.contentWindow.document.body.scrollHeight + 50 + 'px';
      iframeRef.current.style.height = iframeRef.current.contentWindow.document.documentElement.scrollHeight + 5 + 'px';
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

      // iframeRef.current.contentWindow.document.body.style.fontSize = 3 + 'em';
    });
    fetchData();
  }, [book, chapter]);


  
  

  return (
    <div className='body'>
      
      <header className='book-name'>
        <span>{book}</span>

        <div className='zoom'><AiIcons.AiOutlineZoomIn /></div>
        <div className='zoom'><AiIcons.AiOutlineZoomOut /></div>
        
      </header>

      <div className='main-container'>
      
        <aside className='sidebar'>
          <Sidebar toc={toc} navigateToChapter={navigateToChapter} reloadIframe={reloadIframe}/>
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