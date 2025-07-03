import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Library Management</h1>
        <div className="space-x-4">
          <Link to="/books">
            <Button variant="ghost" className="text-white">
              All Books
            </Button>
          </Link>
          <Link to="/create-book">
            <Button variant="ghost" className="text-white">
              Add Book
            </Button>
          </Link>
          <Link to="/borrow-summary">
            <Button variant="ghost" className="text-white">
              Borrow Summary
            </Button>
          </Link>
          <div className="">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
