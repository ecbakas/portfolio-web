import Link from "next/link";

export default function AvailableBadge({
  withLink = false,
}: {
  withLink?: boolean;
}) {
  if (withLink) {
    return (
      <Link
        href={"/contact"}
        className="flex h-6 items-center gap-2 rounded-full bg-green-100 px-4 text-xs font-semibold uppercase text-green-500 dark:bg-green-900"
      >
        <span className="block min-h-[0.3rem] min-w-[0.3rem] rounded-full bg-green-500"></span>
        Available for work
      </Link>
    );
  }
  return (
    <div className="flex h-6 items-center gap-2 rounded-full bg-green-100 px-4 text-xs font-semibold uppercase text-green-500 dark:bg-green-900">
      <span className="block min-h-[0.3rem] min-w-[0.3rem] rounded-full bg-green-500"></span>
      Available for work
    </div>
  );
}
