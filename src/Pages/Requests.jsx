import React from 'react'
import Usercard from '../components/Usercard'


const Requests = () => {
  const users = [
    {
      username: "john_doe_91",
      name: "John Doe",
      profession: "Software Engineer",
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      followers: 5000,
      following: 300,
      jobDescription: "Developing scalable web applications."
    },
    {
      username: "jane_smith_designs",
      name: "Jane Smith",
      profession: "Graphic Designer",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      followers: 7000,
      following: 400,
      jobDescription: "Creating visually stunning designs for brands."
    },
    {
      username: "alex_marketing_guru",
      name: "Alex Johnson",
      profession: "Marketing Manager",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      followers: 10000,
      following: 600,
      jobDescription: "Developing and executing marketing strategies."
    },
    {
      username: "emily_financial_wiz",
      name: "Emily Brown",
      profession: "Financial Analyst",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      followers: 4500,
      following: 200,
      jobDescription: "Analyzing financial data and providing insights."
    },
    {
      username: "michael_shutterbug",
      name: "Michael Lee",
      profession: "Photographer",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      followers: 8000,
      following: 700,
      jobDescription: "Capturing moments that last a lifetime."
    },
    {
      username: "sarah_chef_extraordinaire",
      name: "Sarah Wilson",
      profession: "Chef",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      followers: 6000,
      following: 500,
      jobDescription: "Crafting delicious and innovative dishes."
    },
    {
      username: "david_architect_designs",
      name: "David Garcia",
      profession: "Architect",
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      followers: 8500,
      following: 400,
      jobDescription: "Designing sustainable and beautiful structures."
    },
    {
      username: "olivia_fashionista",
      name: "Olivia Martinez",
      profession: "Fashion Designer",
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      followers: 9200,
      following: 300, 
      jobDescription: "Creating unique and trendy fashion pieces."
    }
];

  return (
    <div>
      <div className="mt-12 text-center">
        <h1 className='text-2xl font-bold'>Your Follow Requests</h1>
        <p className='text-sm text-neutral-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      {
        users.map((user)=><Usercard img={user.img} name={user.name} prof={user.profession} username={user.username}/>)
      }
      </div>
    </div>
  )
}

export default Requests
