import { useGetBookByIdQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookDetails() {
  const { id } = useParams();
  console.log("Book ID:", id);

  const { data: book, isLoading } = useGetBookByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (!book) return <div>Book not found</div>;
  console.log("Book Data:", book);

  return (
    <div className="w-fit mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{book.data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Author:</strong> {book.data.author}
          </p>
          <p>
            <strong>Genre:</strong> {book.data.genre}
          </p>
          <p>
            <strong>ISBN:</strong> {book.data.isbn}
          </p>
          <p>
            <strong>Description:</strong> {book.data.description || "N/A"}
          </p>
          <p>
            <strong>Copies:</strong> {book.data.copies}
          </p>
          <p>
            <strong>Available:</strong> {book.data.available ? "Yes" : "No"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
