import React from "react";

const DataScienceSubmission = () => {
  // Array of questions and answers with YouTube links
  const submissions = [
    {
      question: "Basics of Coding R/Python",
      answer: "https://youtu.be/Wb8AVCLW31I",
    },
    {
      question: "Data Preparation",
      answer: "https://youtu.be/-iAnjFPSsak",
    },
    {
      question: "Exploratory Data Analysis",
      answer: "https://youtu.be/IKiDJwZP7cQ",
    },
    {
      question: "Data Preparation Phase to Model the Data",
      answer: "https://youtu.be/yM6s7ANhRjo",
    },
    {
      question: "Model Evaluation",
      answer: "https://youtu.be/PmPqKZx4Dlg",
    },
    {
      question: "Naive Bayes classification",
      answer: "https://www.youtube.com/watch?v=O23aXVzJFbg",
    },
    {
      question: "Neural Networks",
      answer: "https://youtu.be/w7Pez36VrVs",
    },
    {
      question: "Clustering",
      answer: "https://youtu.be/eYx00mF4Sew",
    },
    {
      question: "Regression Modeling",
      answer: "https://youtu.be/-9Qy19DyueM",
    },
    {
      question: "Dimension Reduction",
      answer: "https://youtu.be/4wxZbeqBItY",
    },
    {
      question: "Logistic Regression Modeling",
      answer: "https://youtu.be/P29Wh1YIw68",
    },
    {
      question: "Assosciation Rules",
      answer: "https://youtu.be/e6LNM5Kpufg",
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
