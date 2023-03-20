import { connect } from "react-redux";
import Product from "../components/Product";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
function Fav({ fav, dispatch}) {
  window.localStorage.setItem("fav", JSON.stringify(fav));
   const [searchInput, setSearchInput] = useState("");
   const searching = (e) => {
     setSearchInput(e.target.value);
   };
  return (
    <>
    <section>
          
      <div className="k">
         <h1>Bəyənilənlər</h1>
      </div>
      <div>
        <div className="container">
          <div className="fsearch">
            <div className="searching">
              <input
                className="input"
                type="text"
                placeholder="Bəyənilənlər"
                value={searchInput}
                onChange={searching}
              />
            </div>
          </div>
          <div className="favs">
            {fav.length ? (
              fav
                ?.filter((a) => {
                  if (searchInput == "") {
                    return a;
                  } else if (
                    a.name.toLowerCase().includes(searchInput.toLowerCase())
                  ) {
                    return a;
                  }
                })
                .map((a) => (
                    <Product key={a.id} item={a} />
                ))
            ) : (
              <div className="no">
                <h1>
                  <i>Bəyəndiyiniz məhsullar hələ yoxdur</i>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
let t=(a)=>a
export default connect(t)(Fav);