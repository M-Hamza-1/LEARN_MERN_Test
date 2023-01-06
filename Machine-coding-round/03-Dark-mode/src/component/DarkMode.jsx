import React from 'react'

function DarkMode({mode ,colorToggller}) {
   

  return (
    <section className="toggler">
      <div className="toggler--center">
        <p className={`toggler--light ${mode ? "p-light--dark" : " "}`}>
          light
        </p>
        <div
          className={`toggler--slider ${mode ? "slider--dark" : ""} `}
          onClick={() => colorToggller()}
        >
          <div
            className={` toggler--slider--circle ${
              mode ? "slider--circle--dark" : " "
            } `}
          ></div>
        </div>
        <p className={`toggler--dark ${mode ? "p-dark--dark" : " "}`}>dark</p>
      </div>
    </section>
  );
}

export default DarkMode