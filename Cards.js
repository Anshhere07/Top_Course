 import React, { useState } from 'react';
 import Card from './Card';
// import { FcNumericalSorting12 } from 'react-icons/fc';
 
 const Cards = (props) => {

    let courses = props.courses;
    const [likedCourses, setLikedCourses] = useState([]);
    let category = props.category;

    function getCourses() {
      if (category === "All"){
           
        let allCourses = [];
        Object.values(courses).forEach( array => {
          array.forEach(courseData => {
            allCourses.push(courseData);
          })
      })
      return allCourses;

      }
      else{
        // specific category passed
        return  courses[category];
      }
  }

   return (
     <div className='flex justify-center flex-wrap gap-4 mb-4 '>
       {
        getCourses().map ( (course) => (
          <Card key={course.id} course = {course} likedCourses = {likedCourses}
          setLikedCourses = {setLikedCourses}/>
        ))
       }
     </div>
   )
 }
 
 export default Cards;
 