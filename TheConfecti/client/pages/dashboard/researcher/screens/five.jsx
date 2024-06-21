import Link from 'next/link';

export default function Five() {
  return (
    <div>
      <Link href="https://buy.stripe.com/test_00gdUVejN4Gv2C4cMN" passHref>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay Fee
        </button>
      </Link>
    </div>
  );
}
