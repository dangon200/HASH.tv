import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getStreams, getUsers } from "../../store/actions/actions"
import Card from "../../components/Card/Card2";
import NavBar from "../../components/NavBar/NavBar.jsx"
import style from "./UserStreams.module.css"

const UserStreams = (props) => {
    const dispatch = useDispatch();
    const userId = props.match.params.id
    const userDetail = useSelector((state) => state.usersDetail)
    const allStreams = useSelector(state => state.streams)
    const filterStream = allStreams.filter(s => s._id?.includes(userDetail[0].myStreams))

    useEffect(() => {
        dispatch(getUserId(userId))
        dispatch(getStreams())
        dispatch(getUsers())
    }, [])

    return (
        <>
        <NavBar />
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