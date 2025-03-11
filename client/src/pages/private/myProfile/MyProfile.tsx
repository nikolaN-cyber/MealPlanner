import { useEffect, useState } from "react";
import { useUser } from "../../../hooks/useUser";
import { User } from "../../../models/User";

const MyProfile = () => {

    const {handleGetProfile} = useUser();
    const [user, setUser] = useState<User|null>(null)
    const [error, setError] = useState('')

    const handleGet = async () => {
        try {
            const userProfile = await handleGetProfile();
            setUser(userProfile)
        } catch (error) {
            setError("Failed to get profile")
        }
    }

    useEffect(() => {
        handleGet();
    }, [])

    return (
        <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center">
                    <div className="col col-lg-9 col-xl-8">
                        <div className="card">
                            <div className="rounded-top text-white d-flex flex-row" style={{ "backgroundColor": "#2e5f62", "height": "200px" }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ "width": "150px" }}>
                                    <img src="#"
                                        alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                        style={{ "width": "150px", "zIndex": "1" }}></img>
                                    <button type="button" className="btn custom-btn" style={{ "zIndex": "1" }}>
                                        Edit profile
                                    </button>
                                </div>
                                { user ? (<div className="ms-3" style={{ 'marginTop': '130px' }}>
                                    <h5>{user.email}</h5>
                                    <p>{user.lastName}, {user.firstName}</p>
                                </div> ) : (<p>No user data available</p>)}
                            </div>
                            <div className="card-body p-4 text-black">
                                <div className="mb-5  text-body">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4 bg-body-tertiary">
                                        <p className="font-italic mb-1">Diet goal: {user?.dietGoal}</p>
                                        <p className="font-italic mb-1">Height: {user?.dietGoal}</p>
                                        <p className="font-italic mb-1">Weight: {user?.dietGoal}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4 text-body">
                                    <p className="lead fw-normal mb-0">Recent photos</p>
                                    <p className="mb-0"><a href="#" className="text-muted">Show all</a></p>
                                </div>
                                <div className="row g-2">
                                    <div className="col mb-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" alt="image 1"
                                            className="w-100 rounded-3" />
                                    </div>
                                    <div className="col mb-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="image 1"
                                            className="w-100 rounded-3" />
                                    </div>
                                </div>
                                <div className="row g-2">
                                    <div className="col">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="image 1"
                                            className="w-100 rounded-3" />
                                    </div>
                                    <div className="col">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="image 1"
                                            className="w-100 rounded-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyProfile