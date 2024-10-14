import ContributionGraph from "@/components/Contribution Graph/Contribution";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />
        <ContributionGraph />
      </div>
    </>
  );
}
