import React from "react";
import "/src/bootstrap.min.css";
import "/src/styles.css";

function Footer() {
  return (
    <div id="about">
      <h2>About Project</h2>
      <p>
        The project submitted on the topic of Multiple Hashing explores the
        innovative concept of enhancing data security and computational
        efficiency through the utilization of multiple hashing algorithms. In an
        era marked by increasing cybersecurity threats, the conventional use of
        a single hashing algorithm has become susceptible to various attacks. To
        counter these vulnerabilities, the project proposes a novel approach
        that involves the simultaneous application of multiple hashing
        algorithms to strengthen the integrity and confidentiality of data. By
        combining the strengths of different algorithms, the project aims to
        create a robust and resilient hashing mechanism that can withstand
        sophisticated attacks. Furthermore, this approach also offers the
        advantage of improved computational efficiency, as the workload can be
        distributed across multiple algorithms, leading to faster processing
        times. Through extensive research, experimentation, and analysis, the
        project strives to provide a comprehensive understanding of the benefits
        and limitations of multiple hashing, paving the way for the development
        of more secure and efficient data protection systems.
      </p>
      <p>
        <small>This project could be found in the following link</small>
      </p>
      <p>
        <strong>
          <a href="https://github.com/sanjithganesa">Link</a>
        </strong>
        .
      </p>
      <p>
        Submitted on:<strong>04/07/2023</strong>{" "}
      </p>
    </div>
  );
}

export default Footer;
