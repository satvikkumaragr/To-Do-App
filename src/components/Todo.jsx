import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-lg sm:text-xl md:text-2xl font-bold text-center items-center text-indigo-400 mb-4 sm:mb-6 tracking-wide">
        Todos
      </div>
      <ul className="list-none w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto flex flex-col gap-3 sm:gap-4 px-2 sm:px-0">
        {todos.length === 0 ? (
          <li className="text-center text-gray-400 py-6 sm:py-8 bg-zinc-900 rounded-lg sm:rounded-xl shadow-inner text-sm sm:text-base">
            No todos yet. Add one above!
          </li>
        ) : (
          todos.map((todo) => (
            <li
              className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 group"
              key={todo.id}
            >
              <div className="text-white text-sm sm:text-base md:text-lg font-medium break-words w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
                {todo.text}
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="flex items-center gap-2 text-white bg-gradient-to-r from-red-500 to-pink-500 border-0 py-2 px-4 sm:px-5 focus:outline-none hover:from-red-600 hover:to-pink-600 rounded-lg text-sm sm:text-base font-semibold shadow transition-all duration-200 mt-1 sm:mt-0"
                aria-label="Delete Todo"
              >
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                <span className="hidden sm:inline">Delete</span>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
