import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
function LoginModal(props) {
    // let modalClass = props.modalShow ? "modal open " : "modal";
    
    return (
      //   <div className="modal-wrapper">
      //   <div className="modal">
      //   <div className="modal">
      <div className={`modal-wrapper ${props.modalShow ? "openyes" : ""}`}>
        <div className="modall">
        <div className="modal-text">
            <h1>Şəxsi kabinetə daxil olun</h1>
            <form>
              <input
                type="text"
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(
                      0,
                      e.target.maxLength
                    );
                }}
                maxLength={13}
                placeholder="Username daxil edin"
              />
              <input
                type="password"
                placeholder="Şifrənizi daxil edin"
                // onMouseLeave={(e) => {
                //   if (e.target.value.length < e.target.minLength) {
                //     alert("Şifrə minimum 7 simvol olmalıdır")
                //   }
                  
                // }}
                minLength={7}
              />
            </form>
            <p id="brown">Şəxsi kabinetiniz yoxdur?</p>
            <NavLink
              to="/login"
              onClick={() =>
                props.dispatch({
                  type: "CLOSE_MODAL",
                })
              }
            >
          
              Qeydiyyatdan keçin
            </NavLink>
          </div>
          <button
         id="closed"
            onClick={() =>
              props.dispatch({
                type: "CLOSE_MODAL",
              })
            }
          >
            &times;
          </button>

         
        </div>
      
      </div>
    );
}
let t = (a) => a;
export default connect(t)(LoginModal);