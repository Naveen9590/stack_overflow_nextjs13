import Link from "next/link";

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/projects/jobit">jobit</Link>
      </li>
      <li>
        <Link href="/projects/carrent">carrent</Link>
      </li>
      <li>
        <Link href="/projects/park">park</Link>
      </li>
    </ul>
  );
}
