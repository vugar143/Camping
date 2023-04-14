import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Turlarim from '../components/Turlarim';
import Muracietlerim from '../components/Muracietlerim';
import Footer from '../components/Footer';
function Profile({ user }) {
    const [showComponent1, setShowComponent1] = useState(true);
    const [showComponent2, setShowComponent2] = useState(false);
    const [activeLink, setActiveLink] = useState("link1");
   
    const handleLink1Click = () => {
        setShowComponent1(true);
        setShowComponent2(false);
        setActiveLink("link1");
    };

    const handleLink2Click = () => {
        setShowComponent1(false);
        setShowComponent2(true);
        setActiveLink("link2");
    };
    return (
        <>
            <div className='basket-image'>
                <img src="http://fastwpdemo.com/newwp/amping/wp-content/uploads/2022/03/page-title.jpg" alt="" />
                <div className="profile-img"   >
                    <img className="" src="/images/user-icon-up.svg" alt="" />
                </div>
                <div className='text  mt-36 '>
                    <h3 className='text-white'>{user.toUpperCase()}</h3>
                    <h4 className='text-white font-semibold'>surname</h4>
                    <h4 className='text-white font-semibold'>email</h4>

                </div>
            </div>

            <ul className='profile-links'>
                <li>
                    <a href="#" onClick={handleLink1Click}
                    className={activeLink === "link1" ? "active" : ""}
                    >
                        Turlarim
                    </a>
                </li>
                <li>
                    <a href="#" onClick={handleLink2Click}
                    className={activeLink === "link2" ? "active" : ""}
                    >
                        Muracietlerim
                    </a>
                </li>
            </ul>
            <div>
                {showComponent1 && <Turlarim />}
                {showComponent2 && <Muracietlerim />}
            </div>
            <Footer/>
        </>
    )
}
const t = (a) => a
export default connect(t)(Profile)