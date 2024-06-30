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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const UpdateModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#5C53FE]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Your Task</DialogTitle>
            <DialogDescription>
              Update your task that you want to finish ..
            </DialogDescription>
          </DialogHeader>
          <form  className="grid gap-4 py-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="task" className="text-start ">
                Task
              </Label>
              <Input
               
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
               
                id="description"
                placeholder="write description"
                className="border border-slate-600 focus:border-blue-400 focus:outline-0 h-16 "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="description" className="ext-start">
                Priority
              </Label>

              <Select >
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

export default UpdateModal;
