import React from "react";

function card(){
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://edteam-media.s3.amazonaws.com/courses/medium/fd3a82f9-16e7-496a-8e05-b3f5ee4b7f93.png" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Introducción a la terminal</h2>
                <p>Aprende los fundamentos de la línea de comandos Linux. Una herramienta que todo programador debe conocer.</p>
                <div className="card-actions">
                    <button className="btn btn-primary">ver curso</button>
                </div>
            </div>
        </div>
    )
}

export default card;