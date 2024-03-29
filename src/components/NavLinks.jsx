import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import { links } from "./Mylinks";
import AnimatedRouters from "../AnimatedRouters";

const NavLinks = ({products}) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  
  return (
    <>
      {links.map((link) => (
      
        <div>
        
          <div className=" px-3 text-left md:cursor-pointer group ">
            <NavLink  end to={link.linkk}
              className="navbar-heading py-7 flex justify-between items-center md:pr-0 pr-5 mynavbarli "
              onClick={() => {
               
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </NavLink>
            {link.submenu && (
              <div>
                <div className="absolute z-50 top-14 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-2 bg-white rotate-45 "
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                   
                    {link?.sublinks?.map((mysublinks) => (
                      <div>
                        <Link to={mysublinks.link} className="text-lg font-semibold sublinksli">
                          {mysublinks.Head}
                          {mysublinks.image&&  <img src={mysublinks.image} className="w-16 h-14" alt="" />}
                        
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link?.sublinks?.map((slinks) => (
              <div>
                <div>
                  <NavLink to={slinks.link}
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </NavLink>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink?.map((slink) => (
                      <li className="py-3 pl-14">
                        <NavLink to={slink.link}>{slink.name}</NavLink>
                        <img src={slink.image} alt="" />
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
