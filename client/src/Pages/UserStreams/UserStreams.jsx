import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getStreams, getUsers } from "../../store/actions/actions"
import Card from "../../components/Card/Card2";
import NavBar from "../../components/NavBar/NavBar.jsx"
import style from "./UserStreams.module.css"

const UserStreams = () => {
    const dispatch = useDispatch();
    const myUser=useSelector(state=>state.user)
    const userDetail = useSelector((state) => state.usersDetail)
    const allStreams = useSelector(state => state.streams)
    const userId = myUser._id
    const filterStream = allStreams.filter(s => s._id?.includes(userDetail[0].myStreams))

    useEffect(() => {
        dispatch(getUserId(userId))
        dispatch(getStreams())
        dispatch(getUsers())
    }, [])

    return (
        <>
        <div className={`${style.containerProducts}`}>
            {filterStream.map((c, index) => {
                return (
                    <section className={style.sectionCards} key={index}>
                        <div>
                            <Card
                                user={c.user}
                                title={c.title}
                                description={c.description}
                                rules={c.rules}
                                continent={c.continent}
                                language={c.language}
                            />
                        </div>
                    </section>
                )
            })}
            </div>
        </>
    )
}

export default UserStreams;