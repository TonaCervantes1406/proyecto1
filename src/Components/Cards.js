import React from 'react'
import Card from './Card'
import image1 from '../assets/MG.jpg'
import image2 from '../assets/MG.jpg'
import image3 from '../assets/MG.jpg'

const cards = [
{
    id: 1,
    title: 'MG - Jefe',
    image: image1,
    instructor: 'Cervantes Tovar Tonathiu Adonai'
},
{
    id: 2,
    title: 'MG - Especialista en redes',
    image: image2,
    instructor: 'Lopez Garcia Alejandro'
},
{
    id: 3,
    title: 'MG - Programador',
    image: image3,
    instructor: 'Castañeda Godoy Luis Fernando'
}
]

export default function Cards(){
    console.log()
    return(

    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(c => (
                    <div className="col-md-4" key={cards.id}>
                        <Card
                        key = {c.id}
                        id = {c.id}
                        title = {c.title}
                        image = {c.image}
                        instructor= {c.instructor}
                        />
                        </div>
                    ))
            }
        </div>
    </div>
    );
}