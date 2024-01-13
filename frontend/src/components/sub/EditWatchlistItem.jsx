import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Pencil2Icon } from "@radix-ui/react-icons";
import SelectStatus from "./SelectStatus";

export function EditWatchlistItem() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Pencil2Icon className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 p-4">
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="setStatus" className="text-right col-span-2">
              Set Status:
            </Label>
            <SelectStatus id="setStatus" className="col-span-3" />
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="currentEpisode" className="text-right col-span-2">
              Current Episode:
            </Label>
            <Input id="currentEpisode" className="col-span-3" type="number" />
          </div>
          <div className="grid grid-cols-5 items-center gap-4">
            <Label htmlFor="myRating" className="text-right col-span-2">
              My Rating:
            </Label>
            <Input id="myRating" className="col-span-3" type="number" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
