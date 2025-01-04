import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Trash2Icon } from "lucide-react";

export default function Page() {
  return (
    <>
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle>TODO</CardTitle>
          {/* <CardDescription>行いたいタスクを追加しましょう</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Input type="text" placeholder="タスクを入力" />
            <Button>
              <Plus className="mr-1 h-4 w-4" />
              追加
            </Button>
          </div>
          {/* <Separator /> */}
          <div className="mt-4">
            <TodoList>
              <TodoItem index={1} text={"部屋の掃除"} />
              <TodoItem index={2} text={"読書"} completed={true} />
              <TodoItem index={3} text={"部屋の掃除"} />
              <TodoItem index={4} text={"読書"} completed={true} />
              <TodoItem index={5} text={"部屋の掃除"} />
            </TodoList>
          </div>
          <div className="mt-4 text-right">
            <Button variant="outline">完了したタスクを削除</Button>
          </div>
        </CardContent>
        {/* <CardFooter></CardFooter> */}
      </Card>
    </>
  );
}

function TodoItem({
  index,
  text,
  completed = false,
}: {
  index: number;
  text: string;
  completed?: boolean;
}) {
  const id = `todo-${index}`;
  return (
    <div className="flex gap-2 items-center">
      <Checkbox id={id} checked={completed} />
      <label
        htmlFor={id}
        className={`${completed ? "text-muted-foreground line-through" : ""}`}
      >
        {text}
      </label>
      <Button variant="ghost" size="icon" className="ml-auto h-3 w-3">
        <Trash2Icon />
      </Button>
    </div>
  );
}

function TodoList({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea className="h-[300px] w-full rounded-md border overflow-y-auto">
      <div className="flex flex-col gap-3 px-3 py-2">{children}</div>
    </ScrollArea>
  );
}
