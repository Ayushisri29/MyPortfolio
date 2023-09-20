import React from 'react'
import './education.css'
import {BiCheck} from 'react-icons/bi'
import hbtu from '../../assests/HBTI-Kanpur.png'
import cvric from '../../assests/DR.C.V.Raman.png'

const Education = () => {
  return (
    <section id="education">
      <h5>What I have Achieved</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <h3>Graduation</h3>
          </div>
          <ul className="education__list">
          <div className="education__img">
            <img src={hbtu} alt="" className='edIm'/>
          </div>
            <li>
             <BiCheck className='education__list-icon'/>
             <p>Final Year B.Tech in Information Technology</p>
            </li>
            <li>
             <BiCheck className='education__list-icon'/>
             <p>Harcourt Butler Technical University</p>
            </li>
            <li>
             <BiCheck className='education__list-icon'/>
             <p>Scored a CGPA of 7.905(till 6th Semester)</p>
            </li>
          </ul>
        </article>

        {/* 12th */}
        <article className="education">
          <div className="education__head">
            <h3>Intermediate</h3>
          </div>
          <ul className="education__list">
          <div className="education__img">
            <img src={cvric} alt="" className='edIm' />
          </div>
            <li>
             <BiCheck className='education__list-icon'/>
             <p>Intermediate in Science in 2019</p>
            </li>
            <li>
             <BiCheck className='education__list-icon'/>
             <p>DR. C. V. Raman Intermediate College</p>
            </li>
            <li>
             <BiCheck className='education__list-icon'/>
             <p>Scored an Aggregate Percentage of 87.6%</p>
            </li>
          </ul>
        </article>

        {/* 10th */}
        <article className="education">
          <div className="education__head">
            <h3>High School</h3>
          </div>
          <ul className="education__list">
          <div className="education__img">
            <img src={cvric} alt="" className='edIm'/>
          </div>
            <li>
             <BiCheck className='education__list-icon'/>
             <p>Completed in June 2017</p>
            </li>
            <li>
             <BiCheck className='education__list-icon'/>
             <p>DR. C. V. Raman Intermediate College</p>
            </li>
            <li>
             <BiCheck className='education__list-icon'/>
             <p>Scored an Aggregate Percentage of 87%</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education