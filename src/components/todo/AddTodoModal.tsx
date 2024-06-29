import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useAddTodosMutation } from "@/redux/api/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// import { useAppDispatch } from "@/redux/hook";
// import { addTodo } from "@/redux/features/TodoSlice";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  //! for local state
  // const dispatch = useAppDispatch();

  //* for server
  const [addTodo] = useAddTodosMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      // id: randomString,
      title: task,
      isCompleted: false,
      description: description,
      priority: priority,
    };

    console.log("inside modal", taskDetails);

    //! for local state
    // dispatch(addTodo(taskDetails));

    //* for server
    addTodo(taskDetails);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary-gradient">Add todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Your Task</DialogTitle>
            <DialogDescription>
              Add your task that you want to finish ..
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="task" className="text-start ">
                Task
              </Label>
              <Input
                onChange={(e) => setTask(e.target.value)}
                id="task"
                placeholder="write you task"
                className="border border-slate-600 focus:border-blue-400 focus:outline-0  "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="description" className="ext-start">
                Description
              </Label>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="write description"
                className="border border-slate-600 focus:border-blue-400 focus:outline-0 h-16 "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="description" className="ext-start">
                Priority
              </Label>

              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="w-full border border-slate-600 focus:border-blue-400 focus:outline-0">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
