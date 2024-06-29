// import { useAppSelector } from "@/redux/hook";
import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

// type TTodo = {
//   id: string;
//   title: string;
//   description: string;
//   isCompleted?: boolean;
// };

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from server state

  const { data: todos, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-3">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="h-full w-full rounded-xl bg-primary-gradient p-[5px] ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((todo: any) => (
            <div>
              <TodoCard {...todo} />
            </div>
          ))}
        </div>

        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
