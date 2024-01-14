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
import { useContext, useEffect } from "react";
import DataContext from "../../context/DataContext";
import axios from "axios";

export function EditWatchlistItem(data) {
  const {
    itemStatus,
    setItemStatus,
    itemCurrentEp,
    setItemCurrentEp,
    itemMyRating,
    setItemMyRating,
    reload,
    setReload,
    itemDateFinished,
    setItemDateFinished,
  } = useContext(DataContext);

  const username = localStorage.getItem("username");
  const itemId = data.id;

  useEffect(() => {
    if (itemStatus === "Completed") {
      setItemDateFinished(Date.now());
    } else if (itemStatus && itemStatus !== "Completed") {
      setItemDateFinished(null);
    }
  }, [itemStatus]);

  const itemData = {
    status: itemStatus,
    currentEp: itemCurrentEp,
    myRating: itemMyRating,
    dateFinished: itemDateFinished,
  };

  const handleCurrentEp = (event) => {
    event.preventDefault();
    setItemCurrentEp(event.target.value);
  };

  const handleMyRating = (event) => {
    event.preventDefault();
    setItemMyRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(itemStatus, itemCurrentEp, itemMyRating, itemDateFinished);
    setReload(!reload);
    try {
      const response = await axios.post(
        `http://localhost:5000/watchlist/edit/${username}/${itemId}`,
        itemData
      );
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Pencil2Icon className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {data.title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 p-4">
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="setStatus" className="text-right col-span-2">
              Set Status:
            </Label>
            <SelectStatus id="setStatus" className="col-span-3" />
          </div>
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="currentEpisode" className="text-right col-span-2">
              Current Ep:
            </Label>
            <Input
              id="currentEpisode"
              className="col-span-3 w-[200px]"
              type="number"
              onChange={handleCurrentEp}
            />
          </div>
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="myRating" className="text-right col-span-2">
              My Rating:
            </Label>
            <Input
              id="myRating"
              className="col-span-3 w-[200px]"
              type="number"
              min="1"
              max="10"
              onChange={handleMyRating}
            />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
