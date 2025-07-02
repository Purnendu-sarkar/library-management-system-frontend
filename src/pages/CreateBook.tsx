import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddBookMutation } from "@/redux/api/bookApi";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type BookData = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
};

export default function CreateBook() {
  const [addBook, { isLoading }] = useAddBookMutation();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState<BookData>({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    const { value } = e.target;
    setBookData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      await addBook({
        ...bookData,
        copies: parseInt(bookData.copies.toString()),
      }).unwrap();
      toast("Book added successfully");
      navigate("/books");
    } catch (error) {
      toast("Failed to add book");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Book</h1>
      <div className="grid gap-4 max-w-md mx-auto">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter book title"
            value={bookData.title}
            onChange={(e) => handleInputChange(e, "title")}
          />
        </div>
        <div>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            placeholder="Enter author's name"
            value={bookData.author}
            onChange={(e) => handleInputChange(e, "author")}
          />
        </div>
        <div>
          <Label htmlFor="genre">Genre</Label>
          <select
            id="genre"
            value={bookData.genre}
            onChange={(e) => handleInputChange(e, "genre")}
            className="w-full p-2 border rounded-md"
          >
            <option value="" disabled>
              Select a genre
            </option>
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non-Fiction</option>
            <option value="SCIENCE">Science</option>
            <option value="HISTORY">History</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
          </select>
        </div>
        <div>
          <Label htmlFor="isbn">ISBN</Label>
          <Input
            id="isbn"
            placeholder="Enter ISBN number"
            value={bookData.isbn}
            onChange={(e) => handleInputChange(e, "isbn")}
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="Brief description of the book"
            value={bookData.description}
            onChange={(e) => handleInputChange(e, "description")}
          />
        </div>
        <div>
          <Label htmlFor="copies">Copies</Label>
          <Input
            id="copies"
            placeholder="Number of available copies"
            type="number"
            value={bookData.copies === 0 ? "" : bookData.copies}
            onChange={(e) => handleInputChange(e, "copies")}
          />
        </div>
        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Book"}
        </Button>
      </div>
    </div>
  );
}
