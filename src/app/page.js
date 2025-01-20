'use client'

import { useState } from 'react'

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const articles = [
    {
      title: "Introduce 1",
      content: "As a passionate web developer with a proven track record in both frontend and backend development, I thrive on transforming complex ideas into intuitive, functional applications. My journey in web development has been marked by a strong commitment to problem-solving, continuous learning, and effective communication. One of my key strengths is my ability to quickly identify and clarify problems. I excel at breaking down complex issues into manageable parts and ensuring clear, concise communication with my team or stakeholders. This approach helps us address challenges head-on and implement effective solutions. My problem-solving skills are complemented by a collaborative mindset, where I value open communication and collective brainstorming to drive project success."
    },
    {
      title: "Introduce 2", 
      content: "In a recent project, I was proud to lead the development of a comprehensive internal application for automating data processing tasks. This project significantly reduced manual work and improved efficiency, showcasing my ability to handle large volumes of data while maintaining a responsive system. My proactive approach and willingness to learn on the go contributed to a 30% reduction in processing time and a 40% increase in efficiency. I stay up-to-date with new technologies through a blend of structured learning and hands-on experimentation. Online courses, personal projects, and active participation in developer communities keep me informed and inspired. My adaptability allows me to thrive in fast-paced environments, quickly learning and applying new skills to meet evolving requirements. With a focus on continuous improvement, I'm always ready to contribute my technical expertise, leadership, and problem-solving abilities to create impactful solutions and drive team success"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-900 text-white p-4 relative">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <button 
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden z-50"
            aria-label="Toggle navigation"
          >
            {isNavOpen ? '×' : '☰'}
          </button>
          <ul className={`
            fixed md:relative
            inset-0 md:inset-auto
            bg-slate-900 md:bg-transparent
            flex flex-col md:flex-row 
            items-center justify-center
            gap-8 md:gap-4
            text-lg md:text-base
            transition-transform duration-300
            ${isNavOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            md:flex
            z-40
          `}>
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4 flex flex-col md:flex-row gap-4">
        <div className="flex-grow space-y-4">
          {articles.map((article, index) => (
            <article key={index} className="bg-white p-4 max-w-7xl rounded-lg shadow">
                <h2 className="text-xl font-bold">{article.title}</h2>
              <p className="mt-2 break-words">{article.content}</p>
            </article>
          ))}
        </div>
        
        <aside className="md:w-1/3 bg-white p-4 rounded-lg shadow">
          <div className="text-center">
            <img
              src="/img/DSCF5712 (copy).jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-bold">About Me</h2>
            <p className="mt-2">
              Web Developer | Passionate about Creating Innovative and User-Friendly Applications
            </p>
          </div>
        </aside>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 My Website. content take from my own linkedin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}