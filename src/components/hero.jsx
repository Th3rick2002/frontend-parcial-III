import React,{useEffect, useState} from "react";
import axios from "axios";


function Hero(){

    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses');
                setCourses(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses()
    }, []);

    if (loading) {
        return <span className="loading loading-spinner text-info"></span>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={courses[0].image}
                         className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="text-5xl font-bold">{courses[0].title}</h1>
                        <p className="py-6">{courses[0].description}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-start bg-base-200">
                {courses[0].modules.map(course => (
                    <div className="collapse bg-cyan-700 m-2.5 max-w-1/2">
                        <input type="checkbox"/>
                        <div className="collapse-title text-xl font-medium bg-teal-800">
                            {course.module}
                        </div>
                        <div className="collapse-content">
                            <ul className="steps steps-vertical">
                                {course.syllabus.map(element => (
                                    <li className="step"><a className="link link-hover flex justify-start text-gray-900"
                                       href={element.videoLink}>{element.topic}</a></li>
                                ))}
                            </ul>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Hero;