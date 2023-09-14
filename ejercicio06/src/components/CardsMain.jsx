import React, { useEffect, useState } from 'react'
import { cargarPersonajes } from '../service/CardMainService'

export const CardsMain = () => {
    const [pjs, setPersonaje] = useState([])

    useEffect(() => {
        cargarPersonajes().then(data => { setPersonaje(data.results) })
    }, [])

    console.log(pjs);
    return (
        <div>
            {pjs.map((pj) =>
                <div class="card-group" key={pj.id}>
                    <div class="card">
                        <img src={pj.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{pj.name}</h5>
                            <p class="card-text">Especie = {pj.species}</p>
                            <p class="card-text"><small class="text-body-secondary">{pj.created}</small></p>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
