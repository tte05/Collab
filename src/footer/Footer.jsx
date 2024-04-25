import { React } from "react";
import ReactDOM from 'react-dom/client'
import './Footer.css';

export function Footer() {
   return (
    <div className="footerContainer">
       <div className="wrapper">
       <div className="homeNavigation">
            <p className="headline" id="homeHeadline">Home</p>
            <button>Features</button>
            <button>Blogs</button>
            <button>Resources</button>
            <button>Testimonials</button>
            <button>Contact Us</button>
            <button>Newsletter</button>
        </div>

        <div className="newsNavigation">
            <p className="headline">News</p>
            <button>Trending Stories</button>
            <button>Featured Videos</button>
            <button>Technology</button>
            <button>Health</button>
            <button>Politics</button>
            <button>Environment</button>
        </div>

        <div className="blogsNavigation">
            <p className="headline">Blogs</p>
            <button>Quantum Computing</button>
            <button>AI Ethics</button>
            <button>Space Exploration</button>
            <button>Biotechnology</button>
            <button>Renewable Energy</button>
            <button>Biohacking</button>
        </div>

        <div className="podcastsNavigation">
            <p className="headline">Podcasts</p>
            <button>AI Revolution</button>
            <button>AI Revolution</button>
            <button>TechTalk AI</button>
            <button>AI Conversations</button>
        </div>
        <div className="resourcesNavigation">
            <p className="headline">Resources</p>
            <button>Whitepapers</button>
            <button>Ebooks</button>
            <button>Reports</button>
            <button>Research Papers</button>
        </div>
        <hr />
       </div>
    </div>
   )
}