import React from 'react'
import { useState } from 'react'

export const TextMain = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    function addCont(){
        setCount(count+1)
    }

    function addCont2(){
        setCount2(count2+1)
    }

  return (
    <div>
        <div class="input-group">
            <textarea class="form-control" aria-label="With textarea" placeholder='Ingrese el Texto' onChange={addCont}></textarea>
        </div>
            <p>Contando letras y Espacios<span class="badge text-bg-success">{count}</span></p>
        <div>
            <button type="button" class="btn btn-primary" onClick={addCont2}>
                Contador Clicks <span class="badge text-bg-danger">{count2}</span>
            </button>
        </div>
    </div>
    
  )
}

