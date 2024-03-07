import React, { useState } from "react";
import { faqData } from "../../constants";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./faq.css";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="app__faq flex__center section__padding">
      <h1 className="headtext">Awesome features optimizing your website</h1>
      <div className="app__faq_container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${expandedIndex === index ? "showItem" : ""}`}
          >
            <div className="faq-header" onClick={() => handleToggle(index)}>
              <h3>{`${index + 1}. ${item.question}`}</h3>
              <span>
                {expandedIndex === index ? (
                  <FaMinus color="#EB6E46" />
                ) : (
                  <FaPlus color="#757B8A" />
                )}
              </span>
            </div>
            {expandedIndex === index && (
              <p className="faq-content">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
