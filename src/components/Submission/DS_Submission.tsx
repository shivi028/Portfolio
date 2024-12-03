import React from "react";

const DataScienceSubmission = () => {
  // Array of questions and answers with YouTube links
  const submissions = [
    {
      question: "Basics of Coding R/Python",
      answer: "https://www.youtube.com/watch?v=xC-c7E5PK0Y",
    },
    {
      question: "Data Preparation",
      answer: "https://www.youtube.com/watch?v=Ht3N2XfN-p4",
    },
    {
      question: "Exploratory Data Analysis",
      answer: "https://www.youtube.com/watch?v=niJWhEmoxlA",
    },
    {
      question: "Data Preparation Phase to Model the Data",
      answer: "https://www.youtube.com/watch?v=f0t-TPxsxYQ",
    },
    {
      question: "Model Evaluation",
      answer: "https://www.youtube.com/watch?v=Kdsp6soqA7o",
    },
    {
      question: "Naive Bayes classification",
      answer: "https://www.youtube.com/watch?v=4XUE3Yy4joQ",
    },
    {
      question: "Neural Networks",
      answer: "https://www.youtube.com/watch?v=ua-CiDNNj30",
    },
    {
      question: "Clustering",
      answer: "https://www.youtube.com/watch?v=cI3t02I0NQA",
    },
    {
      question: "Regression Modeling",
      answer: "https://www.youtube.com/watch?v=2JUuCt4e2Mw",
    },
    {
      question: "Dimension Reduction",
      answer: "https://www.youtube.com/watch?v=KMpOJQ7s5D0",
    },
    {
      question: "Logistic Regression Modeling",
      answer: "https://www.youtube.com/watch?v=ZH8PCT6TgoA",
    },
    {
      question: "Assosciation Rules",
      answer: "https://www.youtube.com/watch?v=1PYcW-7fPSE",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl text-headcolor font-bold text-center underline mb-10">
        Data Science Submission
      </h1>
      <div className="space-y-8">
        {submissions.map((submission, index) => (
          <div key={index} className="space-y-4">
            {/* Question */}
            <h2 className="text-2xl font-semibold text-slate-700">
              <span className="text-headcolor text-xl">Question {index + 1}:</span>  {submission.question}
            </h2>
            {/* Answer */}
            <p className="text-gray-600">
              Answer:{" "}
              <a
                href={submission.answer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                {submission.answer}
              </a>
            </p>
            {/* Horizontal Rule */}
            <hr className="border-slate-300 shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataScienceSubmission;
