import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserId } from "../../store/actions/actions"
import { getStreamId } from "../../store/actions/actions"
import { useModal } from "./Modal/useModal"
import Modal from "./Modal/Modal"
import NewStream from "./NewStream/NewStream"
import Card from "./Card/Card"
import './HomeStream.css'

const HomeStream = () => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.usersDetail)
    const user1 = useSelector( state => state.user)
    const streamDetail = useSelector( state => state.streamDetail)

    console.log(user)


    const [id, setId] = useState('L')

    const idUser = user1._id

    useEffect(() => {
        dispatch(getUserId(idUser))
        dispatch(getStreamId(id))
    },[id])

    const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false)

    return(
        <div className="HomeStream">
            <div className="allStreams">
                {
                    user.map(element => (
                        <div key={element._id}>
                            {
                                (element.myStreams.length > 0) ?
                                <div>
                                    {console.log(element.myStreams)}
                                    {element.myStreams.map(stream => (
                                        <button className="mystreams" onClick={e => setId(stream._id)} key={stream}>Stream {(element.myStreams.indexOf(stream))+1}</button>
                                    ))}
                                </div>
                                :
                                <div>No Tiene Streams jajaja</div>
                            }
                        </div>
                    ))
                }
            </div>
            <div className="NewStream">
                <button className="new_stream" onClick={openModalCreate}>
                    New Stream
                </button>
                <Modal isOpen={isOpenModalCreate} closeModal={closeModalCreate}>
                    <NewStream id={idUser}></NewStream>
                </Modal>
            </div>
            <div className="HomeStream-Card">
                {
                    (streamDetail.length === 1) ? 
                    <div >
                        {streamDetail.map(stream => (
                            <Card key={stream._id} stream={stream}></Card>
                        ))}
                    </div>
                    :
                    <div className="message">
                        You don't have Streams 😳
                    </div>
                }
            </div>
        </div>

    )
}

export default HomeStream
