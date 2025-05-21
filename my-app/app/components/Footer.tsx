import React from 'react'

const footer = () => {
  return (
    <div>
         <footer className="bg-gray-900 text-white text-sm py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h4 className="font-semibold mb-2">Purpose</h4>
            <p>Providing compassionate mental health care and resources to help you on your journey to wellness.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul>
              <li><a href="#" className="hover:underline">AI Chatbots</a></li>
              <li><a href="#" className="hover:underline">Group Therapy</a></li>
              <li><a href="#" className="hover:underline">Anxiety Treatment</a></li>
              <li><a href="#" className="hover:underline">Stress Management</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-xs">
          <p>235 Cheonjam-Ro, Wansan-Gu, Jeonju-Si, Jeollabuk-Do 55069 Korea</p>
          <p>TEL: +82-63-220-4114</p>
          <p>© VISION College of Jeonju. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default footer