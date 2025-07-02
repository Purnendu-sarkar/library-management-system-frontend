import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBorrowBookMutation } from "@/redux/api/bookApi";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

type BorrowData = {
  book: string;
  quantity: number;
  dueDate: string;
};

export default function BorrowBook() {
  const { bookId } = useParams();
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const navigate = useNavigate();
  const [borrowData, setBorrowData] = useState<BorrowData>({
    book: bookId || "",
    quantity: 1,
    dueDate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const { value } = e.target;
    setBorrowData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      await borrowBook({
        ...borrowData,
        quantity: parseInt(borrowData.quantity.toString()),
      }).unwrap();
      toast("Book borrowed successfully");
      navigate("/borrow-summary");
    } catch (error) {
      toast("Failed to borrow book");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Borrow Book</h1>
      <div className="grid gap-4 max-w-md">
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            value={borrowData.quantity}
            onChange={(e) => handleInputChange(e, "quantity")}
          />
        </div>
        <div>
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            type="date"
            value={borrowData.dueDate}
            onChange={(e) => handleInputChange(e, "dueDate")}
          />
        </div>
        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Borrowing..." : "Borrow Book"}
        </Button>
      </div>
    </div>
  );
}
