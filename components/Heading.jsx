import React from "react";
import "/src/bootstrap.min.css";
import "/src/styles.css";
function Heading() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div class="container-fluid">
          <a class="navbar-brand label" href=""></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="theory">
                  Theory
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#model">
                  Model
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <h3>Gropu 16</h3>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Heading;
