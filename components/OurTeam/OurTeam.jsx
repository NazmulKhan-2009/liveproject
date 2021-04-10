import React from 'react'
import TeamMember from './components/TeamMember/TeamMember';


// const teamMembers = [
//  {
//    name: "Williamson",
//    designation: "Web Developer",
//    image: "images/img-1.jpg",
//    about:
//      "Williamson has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//  },
//  {
//    name: "Kristiana",
//    designation: "App Developer",
//    image: "images/img-2.jpg",
//    about:
//      "Kristiana has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//  },
//  {
//    name: "Ronit",
//    designation: "App Developer",
//    image: "images/img-3.jpg",
//    about:
//      "Ronit has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//  },
//  {
//    name: "Amit",
//    designation: "Mobile Developer",
//    image: "images/img-1.jpg",
//    about:
//      "Amit has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//  },
// ];


export default function OurTeam({teamMembers=[]}) {
 return (
  <div className="row my-4">
  <div className="col-12">
    <h2 className="noo-sh-title">Meet Our Team</h2>
  </div>
  {teamMembers.map((memberDetails, index) => (
    <div className="col-sm-6 col-lg-3" key={index}>
      <TeamMember {...memberDetails} />
    </div>
  ))}
</div>
 )
}

