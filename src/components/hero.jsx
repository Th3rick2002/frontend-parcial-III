import React from "react";
import './hero.css'

function hero(){
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img  src="https://edteam-media.s3.amazonaws.com/courses/big/ae3f0782-49a1-498f-9136-8b8283a2cc23.png" className="max-w-sm rounded-lg shadow-2xl" />
                
                
                <div>
                    <h1  className="text-5xl font-bold">Programación desde cero 2024</h1>
                    
                    <p className="py-6">
                        El mejor curso de programación en español regresa renovado. Descubre con nosotros que la programación no es difícil, sino que te han enseñado mal.
                        ¿Qué aprenderás?
                    </p>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <img src="https://edteam-media.s3.amazonaws.com/web/utils/svg/list/check-list-green.svg" className="check-img"></img>
                            <h1>Comprender los fundamentos de programación.</h1>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                        <img src="https://edteam-media.s3.amazonaws.com/web/utils/svg/list/check-list-green.svg" className="check-img"></img>
                            <h1>Comprender la lógica que está detrás de cualquier lenguaje.</h1>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                        <img src="https://edteam-media.s3.amazonaws.com/web/utils/svg/list/check-list-green.svg" className="check-img"></img>
                            <h1>Resolver ejercicios de programación.</h1>
                        </label>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                    
                </div>
            </div>
        </div>
    )
}

export default hero;