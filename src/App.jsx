import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";
import data from "./data.json";

function App() {
  return (
    <div className="bg-white md:bg-blue-50 md:min-h-screen md:grid md:place-items-center">
      <main className="bg-white flex flex-col gap-6 md:gap-0 md:flex-row md:rounded-4xl md:shadow-[0_30px_60px_0_rgba(61,108,236,0.15)] md:overflow-hidden pb-[1.875rem] md:pb-0">
        <ResultCard />
        <SummaryCard data={data} />
      </main>
    </div>
  );
}

export default App;
