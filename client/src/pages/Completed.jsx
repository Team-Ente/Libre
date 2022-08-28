import React from 'react';
import './Completed.css';
import Book from '../Components/Book/Book';

function Completed() {
    return (
        <div className='group'>
            <h2>The Books You've Read</h2>
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
      )
}

export default Completed