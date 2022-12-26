import React from 'react'

function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='wrapper'>
            <div className="newslatter-container df">
                <div className="description df ">
                    <h1 className='title'>Subscribe to our newsletter to get latest news on your inbox</h1>
                    <div className="vertical-line"></div>
                

                </div>
                <form action="" >
                    <input className='enter-your-email' type="text" placeholder='Enter Your Email' />
                    <input className='submit-email' type="submit" />
                </form>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer