import './App.css';
import Logo from './Components/Logo/logo';
import Header from './Components/header/header';
import Sidenav from './Components/Sidenav/Sidenav';
import Book from './Components/Book/Book';

function App() {
  return (
    <div className='App'>
        <div className='container'>
          <div className='logo'><Logo /><Sidenav /></div>
          <div className='header'><Header /></div>
          <div className='content'>
            <h2 className='group'>Now Reading</h2>
            <div className='books'>
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='The Dictatorship Syndrome'
              author='Alaa Al Aswany'
              year='2019'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
            </div>

            <h2 className='group'>Trending</h2>
            <div className='books'>
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='The Dictatorship Syndrome'
              author='Alaa Al Aswany'
              year='2019'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
            </div>

            <h2 className='group'>Recently Added</h2>
            <div className='books'>
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='The Dictatorship Syndrome'
              author='Alaa Al Aswany'
              year='2019'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
            </div>
            
            <h2 className='group'>Editors Pick</h2>
            <div className='books'>
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='The Dictatorship Syndrome'
              author='Alaa Al Aswany'
              year='2019'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
              <Book 
              img="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title='Boikoter Jibon'
              author='Sami Khan'
              year='2022'
              />
            </div>
          </div>
          <div className='footer'>footer</div>
        </div>
    </div>
  );
}

export default App;
