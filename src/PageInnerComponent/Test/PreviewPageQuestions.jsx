import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

// import listArrow from "../../../assets/icon/listarrow.svg";
import './PreviewPageQuestions.css'

/* ================= DUMMY DATA ================= */

const dummySectionName = "JavaScript Fundamentals";
const dummyTestId = 101;

const dummyQuestions = [
  {
    id: 1,
    question_text: "What is the difference between <b>var</b>, <b>let</b>, and <b>const</b>?",
  },
  {
    id: 2,
    question_text: "Explain the concept of <b>closures</b> in JavaScript.",
  },
  {
    id: 3,
    question_text: "What is <b>event delegation</b> and why is it useful?",
  },
  {
    id: 4,
    question_text: "How does the <b>this</b> keyword work in JavaScript?",
  },
  {
    id: 5,
    question_text: "What are <b>promises</b> and how do they differ from callbacks?",
  },
];

const PreviewPageQuestions = () => {
  return (
    <div className="containers">
      {/* ================= HEADER ================= */}
      <div className="headers">
        <h2 className="text-test-section">{dummySectionName}</h2>

        <Link to={`/admin/previewpage`}>
          <button className="back-button-qus ">Back</button>
        </Link>
      </div>

      <hr />

      {/* ================= QUESTION LIST ================= */}
      <ul className="question-list cus_question_list">
        {dummyQuestions.map((question, index) => (
          <div key={question.id} className="d-flex cus_d_flex">
            <span className="cus-question-number">{index + 1}</span>

            <li className="question-item">
              <span className="question-text">
                <div
                  className="cus_question_text"
                  dangerouslySetInnerHTML={{ __html: question.question_text }}
                />
              </span>

              <IconButton>
                <Link
                  to="#"
                  state={{
                    sectionId: question.id,
                    sectionName: dummySectionName,
                    testId: dummyTestId,
                  }}
                >
                  <span className="question-arrow">
                    {/* <img src={listArrow} alt="arrow" /> */}
                  </span>
                </Link>
              </IconButton>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PreviewPageQuestions;
