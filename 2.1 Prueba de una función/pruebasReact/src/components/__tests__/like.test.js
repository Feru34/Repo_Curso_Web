import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Like from "../like";

test("renders Likes component with initial state", () => {
  const { getByText } = render(<Like />);
  const likesElement = getByText(/Likes:/i);
  expect(likesElement).toBeInTheDocument();
  expect(likesElement.textContent).toBe("Likes: 0");
});

test("increments likes when Like button is clicked", () => {
  const { getByText } = render(<Like />);
  const likeButton = getByText(/Like/i);
  const likesElement = getByText(/Likes:/i);

  fireEvent.click(likeButton);

  expect(likesElement.textContent).toBe("Likes: 1");
});

test("decrements likes when Dislike button is clicked", () => {
  const { getByText } = render(<Like />);
  const dislikeButton = getByText(/Dislike/i);
  const likesElement = getByText(/Likes:/i);

  fireEvent.click(dislikeButton);

  expect(likesElement.textContent).toBe("Likes: -1");
});

// You can add more test cases based on your requirements
