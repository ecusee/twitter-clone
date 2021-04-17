import React from 'react';
import './style.css'


const Sidebar = () => {
  return (
    <div className="sidebar">

      <a className="sidebar-links">
        <i class="bi bi-twitter"></i>
      </a>

      <a className="sidebar-links active" href="#">
        <i class="bi bi-house-door"></i>
        <p>Home</p>
      </a>

      <a className="sidebar-links" href="#">
        <i class="bi bi-hash"></i>
        <p>Explore</p>
      </a>

      <a className="sidebar-links" href="#">
        <i class="bi bi-bell"></i>
        <p>Notification</p>
      </a>

      <a className="sidebar-links" href="#">
        <i class="bi bi-envelope"></i>
        <p>Messages</p>
      </a>

      <a className="sidebar-links" href="#">
        <i class="bi bi-bookmark"></i>
        <p>Bookmarks</p>
      </a>

      <a className="sidebar-links" href="#">
        <i class="bi bi-file-text"></i>
        <p>Lists</p>
      </a>

      <a className="sidebar-links" href="#">
        <i class="bi bi-person"></i>
        <p>Profile</p>
      </a>

      <a className="sidebar-links" href="#">
        <i class="bi bi-three-dots"></i>
        <p>More</p>
      </a>

      <a className="btn-tweet" href="#">
        <p>Tweet</p>
      </a>

    </div>
  )
}

export default Sidebar
