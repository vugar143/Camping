import React ,{useState,useEffect} from 'react'
import Tour from './Tour'
import { connect } from 'react-redux'
function Turlarim({tours}) {
    const [showModal, setShowModal] = useState(false);
    const [input,setInput]=useState({
        title:"",
        description:"",
        duration:"",
        category:"",
        type:"",
        tarix:"",
        price:0,
        image:""
    })
    const handleModalOpen = () => {
        setShowModal(true);
      };
    
      const handleModalClose = () => {
        setShowModal(false);
      };

      const handleChange=(e)=>{
        if(e.target.name ==="image"){
            let file=e.target.files[0]
            let reader=new FileReader()
            reader.readAsDataURL(file)
            reader.addEventListener("load",()=>{
                setInput({...input,[e.target.name]:reader.result})
            })
            return;
        }
        setInput({...input,[e.target.name]:e.target.value})
      }
      console.log(input)
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        const a = await fetch("http://127.0.0.1:8080/comment/create", {
          method: "POST",
          mode: 'cors',
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify(input),
      })
          .then((a) => a.json())
          .then((a) => a);
        // do something with the form data, like submit it to a server
        console.log({ name, category, image });
    
        // close the modal
        handleModalClose();
      };
  return (
   <>
   <div className="wrapper">
    <div className="products">
              {tours.map((a) => (
                <Tour key={a.id} tour={a} />

              ))}
              <button class="tour-btn" onClick={handleModalOpen}>
  <i class="fas fa-map-marker-alt"></i> Add Tour
</button>
            </div>
            {showModal && (
        <div className="modal-profile">
          <div className="modal-content">
            <h2>Add Tour</h2>
            <form >
              <label>
                Title:
                <input
                  type="text"
                  value={input.title}
                  name='title'
                  onChange={handleChange}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={input.description}
                  name='description'
                  onChange={handleChange}
                />
              </label>
              <label>
                Duration:
                <input
                  type="text"
                  value={input.duration}
                  name='duration'
                  onChange={handleChange}
                />
              </label>
              <label>
                Category:
                <input
                  type="text"
                  name='category'
                  value={input.category}
                  onChange={handleChange}
                />
              </label>
              <label>
                Type:
                <input
                  type="text"
                  value={input.type}
                  name='type'
                  onChange={handleChange}
                />
              </label>
              <label>
                Tarix:
                <input
                  type="date"
                  value={input.tarix}
                  name='tarix'
                  onChange={handleChange}
                />
              </label>
              <label>
                Title:
                <input
                  type="number"
                  value={input.price}
                  name='price'
                  onChange={handleChange}
                />
              </label>
              <label>
                Image:
                <input type="file" name="image" onChange={handleChange} />
              </label>
              <button onSubmit={handleFormSubmit} type="submit">Save</button>
            </form>
            <button onClick={handleModalClose}>Cancel</button>
          </div>
        </div>
      )}
            </div>
   </>
  )
}
const t=(a)=>a
export default connect(t) (Turlarim)