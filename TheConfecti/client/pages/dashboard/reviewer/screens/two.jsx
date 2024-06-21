import Link from 'next/link';

export default function StripeCheckoutButton() {
  return (
    <div>
      {/* Directly use the Link component */}
      <Link href="https://www.check-plagiarism.com/" passHref>
        Check
      </Link>
    </div>
  );
}
