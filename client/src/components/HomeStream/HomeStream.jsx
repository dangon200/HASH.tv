import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserId } from "../../store/actions/actions"
import { getStreamId } from "../../store/actions/actions"
import Modal from 'react-bootstrap/Modal'
import NewStream from "./NewStream/NewStream"
import Card from "./Card/Card"
import './HomeStream.css'

const HomeStream = () => {
    const dispatch = useDispatch()
    const user1 = useSelector( state => state.user)
    const user = useSelector( state => state.usersDetail)
    const streamDetail = useSelector( state => state.streamDetail)
    const [show, setShow] = useState()
    const [fullscreen, setFullscreen] = useState(true);
    const handleChange = () => setShow(!show)
    console.log(user)

    const [id, setId] = useState()

    const idUser = user1._id

    useEffect(() => {
        dispatch(getUserId(idUser))
        dispatch(getStreamId(id))
    },[id])


    return(
        <div className="HomeStream">
            <div className="NewStream">
            
            <div className="navlink" type='button' onClick={handleChange}>
            New Channel
           </div>
 
           <Modal  fullscreen={fullscreen}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   show={show} 
                   onHide={handleChange}>
   
           <Modal.Header closeButton>
          <Modal.Title>Create a new channel</Modal.Title>
           </Modal.Header>

            <Modal.Body>
           <NewStream id={user1._id} />
   </Modal.Body>
   <Modal.Footer className='d-flex justify-content-between align-items-center'>
       Hash, players only...
     </Modal.Footer>
 </Modal>
       </div>
            <div className="col col-xl-12 ">
                {
                    user.map(element => (
                        <div key={element._id}>
                            {
                                (element.myStreams.length > 0) ?
                                <div>
                                    {console.log(element.myStreams)}
                                    {element.myStreams.map((stream, index) => (

                                        <button className="mystreams" onClick={e => setId(stream)} key={index}>Stream {(element.myStreams.indexOf(stream))+1}</button>
                                    ))}
                                </div>
                                :
                                <div>No Tiene Streams jajaja</div>
                            }
                        </div>
                    ))
                }
                
            </div>
            <div className="col col-xl-12">
                {
                    (streamDetail.length === 1) ? 
                    <div >
                        {streamDetail.map(stream => (
                            <Card key={stream._id} stream={stream} />
                        ))}
                    </div>
                    :
                    <div className="message">
                    </div>
                }
            </div>
            
        </div>

    )
}

export default HomeStream
