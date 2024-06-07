// src/ScrollOpacityComponent.js

import React, { useState, useEffect } from "react";
// import './ScrollOpacityComponent.css';

const ScrollOpacityComponent = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const maxScroll = windowHeight / 2;

    if (scrollTop < maxScroll) {
      setOpacity(1 - scrollTop / maxScroll);
    } else {
      setOpacity(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="scroll-opacity-content" style={{ opacity }}>
        <h1>Scroll to Hide Content</h1>
        <p>
          This content will fade out as you scroll down. Once you've scrolled
          halfway down the viewport height, the content will be fully hidden.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum auctor est. Nam vitae finibus ante. Duis lobortis, justo
          eget commodo elementum, enim urna volutpat ex, sit amet bibendum odio
          dolor id leo. Curabitur non vehicula justo. Nam nec sapien at odio
          vehicula tincidunt.
        </p>
        {/* Add more content if needed */}
      </div>
      <p style={{ opacity: 1 - opacity, position: "absolute", top: 0 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        tempore deleniti doloremque, quod excepturi doloribus autem eos quam
        voluptates corporis dolores? Nam obcaecati eligendi exercitationem minus
        nobis quas. Iste accusantium optio omnis cumque molestias expedita
        possimus aliquid quis aliquam, ad ut quasi repellat fugit? Aliquid
        maxime placeat voluptatum, harum possimus architecto? In, libero tempora
        provident nesciunt possimus laboriosam illo itaque, totam animi
        reiciendis, sit a voluptatibus nostrum temporibus ut. Quae non error
        voluptatem officia nemo quia iste est quos ipsam, saepe inventore autem.
        Tenetur esse placeat eaque expedita doloremque. Vel id doloremque dicta
        quidem totam ipsa necessitatibus, repellendus incidunt unde voluptates
        ullam eius beatae possimus earum neque molestiae eligendi, facilis quos
        tempora voluptatibus doloribus amet, laborum non. Ad temporibus odio
        recusandae ipsum laboriosam totam, obcaecati molestiae facere aspernatur
        odit, similique ducimus officia nam reiciendis quaerat necessitatibus
        perspiciatis libero id nobis iure cumque tempore. Sequi vitae autem,
        commodi, totam aspernatur tempora repellat, provident suscipit eligendi
        ut iure? Omnis laudantium provident excepturi atque, libero accusantium
        reprehenderit corporis, eligendi sint fuga ex, doloremque nemo dolore
        repellendus earum saepe? Id dolor distinctio mollitia cupiditate? Fugit
        hic libero possimus nisi enim, iure voluptate, voluptas expedita at,
        quam mollitia natus nobis consequuntur eveniet. Error, enim soluta!
      </p>
    </div>
  );
};

export default ScrollOpacityComponent;
