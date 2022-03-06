import React from 'react'

const Enviar = () => {
  return (
    <div className='envioderesumenes'>
        <div className='formularios_1'>
            <h1>Rellene el siguiente formulario para 
                subir su resumen.
            </h1>
            <div className='Formulario_01'>
                <p>Título</p>
                <input></input>
                <p>Descripción</p>
                <input></input>
                <p>Imagen del resumen</p>
                <div className='imagenflex01'>
                <input></input>
                <button>Explorar imagen</button>
                </div>
                <p>Resumen</p>
                <div className='imagenflex01'>
                <input></input>
                <button>Explora fichero</button>
                </div>
                <p>Archivo de audio</p>
                <div className='imagenflex01'>
                <input></input>
                <button>Explora fichero</button>
                </div>
                <p>Permisos</p>
                <div className='imagenflex01'>
                    <p id = "gratuito01">Gratuito</p>
                    <p id = "premium_001">Premium</p>
                </div>
                <button id = "boton_01">Subir</button>
            </div>
        </div>
    </div>
  )
}

export default Enviar