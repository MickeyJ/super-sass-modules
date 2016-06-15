import React from 'react'

function boxFactory(count){
  const boxArr = [];
  for(let i=1; i <= count;i++) boxArr[i] = i;
  return boxArr;
}

const Boxes = (props) => (
  <section className="box-container">
    {boxFactory(props.count).map((i) =>(
      <div key={i} className={`box-1 box-border ${props.color}`}>
        <span>box - {i}</span>
      </div>
    ))}
  </section>
);
export default Boxes


