"use client";
import GitHubCalendar from "react-github-calendar";

export default function ContributionGraph() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  const selectLastHalfYear = (contributions : any) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity : any) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  if (!username)
    return (
      <p>
        Unable to load Contribution Graph message="We could not find any GitHub
        credentials added to the .env file. To display the graph, provide your
        username and the year you joined GitHub"
      </p>
    );

  return (
    <div className="flex xl:flex-row flex-col gap-4 justify-center items-center">
      <GitHubCalendar
        username={username}
        transformData={selectLastHalfYear}
        hideColorLegend
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
      />
    </div>
  );
}
