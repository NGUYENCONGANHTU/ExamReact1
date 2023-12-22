import React from 'react'
import './Student.css'
import StudentList from './List'
export default function Student() {
  return (
    <div className='cardStudent'>
        <div className='container'>
            <div className='row'>
              <div className="col-3">
                <img src='data:image/png;base64,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' />
              </div>
              <div className="col-9 ">
                <h4 className='title-name'>FPT APTECH HA NOI</h4>
              </div>
            </div>
        </div>
        <div className='main-content'>
                {StudentList.map((item, index) => (
                <div className="main" >
                    <div key={index.id} className='avt'>
                        <img src={item.avt}/>
                    </div>
                    <div className="produce">
                      <h3 className='title-topic'>Student Card</h3>
                      <div className='title-pro'>
                        <div className="title">
                          <h5 ><b>Name:</b>{item.name}</h5>
                        </div>
                        <div className="title">
                          <h5 ><b>Student ID:</b> {item.id}</h5>
                        </div>
                        <div className="title">
                          <h5 ><b>Email:</b> {item.email}</h5>
                        </div>
                      </div>
                        
                    </div>
                </div>
              ))}
        </div>
    </div>
  )
}





