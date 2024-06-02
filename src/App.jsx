import Task from "./components/Task";
import "./App.css";

const tempData = [
  { id: 1, item: "Create Guest Experience mobile check-in" },
  { id: 2, item: "Document current CI/CD process" },
  { id: 3, item: "Perform Code Review for final Pillow-Talk release" },
  { id: 4, item: "Implement new Color Palette from Design Team" },
  { id: 5, item: "Fix image uploading process for guest check-in" },
  { id: 6, item: "Provide on-boarding documentation" },
];

function App() {
  return (
    <div className="constructor font-sans leading-normal font-normal my-0 mx-auto p-8 text-center bg-[#242424] text-white/[0.87]">
      <div className="card min-w-screen-sm my-0 mx-auto max-w-screen-md">
        <h1 className="text-2xl font-bold mb-8">Chores ToDo List</h1>

        {/* Card Body */}
        <div className="card-body mb-8">
          <ul className="list-of-task sm:mx-auto grid gap-5">
            {/* md:mx-96 */}
            {tempData.map((data) => (
              <Task key={data.id} text={data.item} />
            ))}
          </ul>
        </div>
        <hr className="border-t border-slate-500" />

        {/* Card Footer */}
        <div className="card-footer sm:mx-auto">
          {/* md:mx-96 */}
          <p className="text-2xl font-semibold mt-4">Done : 0</p>
          <div className="action-wrapper text-left grid">
            <label htmlFor="input-task" className="block mb-3">
              Add todo
            </label>
            <input
              type="text"
              name="input-task"
              id="input-task"
              className="py-2 px-4 rounded-md mb-5 hover:ring-2 focus:ring-1 focus:ring-cyan-500"
            />
            <button className="add-task justify-self-start py-2 px-4 bg-cyan-500 text-black font-bold rounded-md hover:bg-cyan-600 focus:ring-4">
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
