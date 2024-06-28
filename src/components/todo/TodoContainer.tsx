import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="h-full w-full rounded-xl bg-primary-gradient p-[5px] ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>

        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
