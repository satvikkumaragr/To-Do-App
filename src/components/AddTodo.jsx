import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input.trim()));
    setInput("");
  };
  return (
    <div className="w-full flex justify-center items-center mb-4 sm:mb-6">
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 bg-gray-900 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg w-full max-w-full sm:max-w-xl"
      >
        <input
          type="text"
          className="flex-1 bg-gray-800 rounded-lg border-2 border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-600 text-sm sm:text-base outline-none text-gray-100 py-2 sm:py-3 px-3 sm:px-4 leading-6 sm:leading-8 transition-colors duration-200 ease-in-out placeholder-gray-400 shadow-sm min-w-0"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full sm:w-auto text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 py-2 sm:py-3 px-6 sm:px-8 focus:outline-none hover:from-indigo-600 hover:to-pink-600 rounded-lg text-sm sm:text-lg font-semibold shadow-md transition-all duration-200"
        >
          <span className="inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 sm:w-5 h-4 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Todo
          </span>
        </button>
      </form>
    </div>
  );
}
