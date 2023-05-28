import React from "react";
import "../../allCss/Footer.css";
import data from "../../Products.json"

function Footerone() {
  return (
    <div className="Footerone">
      <h2>Our Sport Collection</h2>
      <Footeroneitems datas={data.AllSports} />
      <Footeroneitems datas={data.Men} />
      <Footeroneitems datas={data.Women} />
      <Footeroneitems datas={data.Kids} />
      <Footeroneitems datas={data.GymActivewear} />
    </div>
  );
}

export default Footerone;

function Footeroneitems({ type, datas }) {
  return (
    <>
      {Object.entries(datas).map(([category, sports])=>(
        <p className="Footeroneitemsheading" key={category}>
            <strong>{category} :</strong>&nbsp;
            
            {sports.map((item, index)=>(
                <span key={index}>{item} |&nbsp;</span>
            ))}
        </p>
      ))}
    </>
  );
}
