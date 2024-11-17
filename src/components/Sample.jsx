import React from 'react'

function Sample() {
  return (
    <div>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <button className="hamburger" id="hamburger" onClick={() => setSize(150)}>
        ☰
        </button>
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32" src={logo} alt="logo" ></svg>
        <span class="fs-4">Cosmic Odyssey</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link"><Link to="/contact">Contact</Link></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><a href="#">About</a></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><Link to="/signup">
              <button id="sign_up" className="button">
                Sign Up
              </button>
              </Link>
        </a></li>
        <li class="nav-item"><a href="#" class="nav-link"><Link to="/signin">
              <button id="sign_in" className="button">
                Sign In
              </button>
              </Link>
        </a></li>
      </ul>
    </header>
    </div>
  )
}

export default Sample
