"use client";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip"; // Correct import for the new version
import { FC } from "react"; // Import Function Component type

const ContributionGraph: FC = () => {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  // Function to filter the last 12 months of contributions
  const selectLastHalfYear = (contributions: any) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12; // Last 12 months

    return contributions.filter((activity: any) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  // Check if the username is provided
  if (!username)
    return (
      <p>
        Unable to load Contribution Graph. We could not find any GitHub
        credentials added to the .env file. To display the graph, provide your
        username and the year you joined GitHub.
      </p>
    );

  // Define theme colors
  const explicitTheme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#7593d8'],
    dark: ['#746e6e', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[35vh] w-full p-4 bg-gray-100">
      <div className="w-full text-center mb-4">
        <p className="font-roboto text-2xl font-extrabold text-slate-800 underline">
          GitHub Contribution Graph
        </p>
      </div>
      <div className="w-[90%] overflow-x-auto p-4 shadow-lg shadow-[#f2d3d8] rounded-lg pb-4 mb-4">
        <div className="w-full h-full flex justify-center items-center">
          <GitHubCalendar
            username={username}
            transformData={selectLastHalfYear}
            hideColorLegend
            theme={explicitTheme}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
      </div>
      {/* Attach the tooltip */}
      <ReactTooltip id="contribution-tooltip" place="top" />
    </div>
  );
};

export default ContributionGraph;
