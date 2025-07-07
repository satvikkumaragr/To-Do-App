import AddTodo from "./components/AddTodo.jsx";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 p-2 sm:p-4 md:p-6">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400 mb-4 sm:mb-6 md:mb-8 text-center tracking-wide drop-shadow-lg">
          Learn About React-Redux Toolkit
        </h1>
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}
