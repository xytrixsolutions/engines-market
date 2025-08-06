"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

interface QuoteButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
  keyToInclude: string;
}

const QuoteButton = ({ data, keyToInclude }: QuoteButtonProps) => {
  const router = useRouter();

  const handleQuoteClick = () => {
    router.push(
      `/contact?${keyToInclude}=${encodeURIComponent(data[keyToInclude])}`,
    );
  };

  return (
    <Button variant="green" onClick={handleQuoteClick}>
      Request Quote
    </Button>
  );
};

export default QuoteButton;
