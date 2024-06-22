import React from "react";
import "./productOffering.scss";
import { Link } from "react-router-dom";

const ProductOffering = ({ data }) => {
  const pathname = location.pathname
  const inscludedPath = ['/about-us', '/frequently-asked-questions']
  return (
    <div className="productOffering">
      <div className="Container">
        <div className="cards">
          {inscludedPath.includes(pathname) && data?.slice(0, 2).map((item, index) => (
            <div className="card" key={index}>
              <h3>{item?.title}</h3>
              {item?.redirect ? (
                <div>
                  {item.desc.split(",").map((word, wordIndex) => (
                    <Link key={wordIndex} to={item.redirect} className="desc">
                      {word},
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="desc" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              )}
              {item?.more && (
                <>
                  <p className="desc">
                    {item?.more.link && "Visit : "}
                    <a
                      href={item?.more?.link}
                      className=" underline text-blue-600 cursor-pointer"
                    >
                      {" "}
                      {item?.more?.link}
                    </a>
                  </p>
                  <ul className="desc ml-[4rem]">
                    {item?.more?.steps.map((step) => (
                      <li className=" list-disc">{step}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
          {!inscludedPath.includes(pathname) && data?.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item?.title}</h3>
              <p className="desc" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOffering;
