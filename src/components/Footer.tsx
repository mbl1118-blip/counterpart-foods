import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark py-10 text-center">
      <div
        className="text-[1.15rem] font-bold text-white mb-1.5"
        style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
      >
        Counterpart Foods
      </div>
      <p className="text-[0.78rem] text-[#777]">
        &copy; {new Date().getFullYear()} Counterpart Foods &middot; New York
        City &middot;{" "}
        <a
          href="mailto:michael@counterpartfoods.com"
          className="text-[#999] no-underline hover:text-white transition-colors"
        >
          michael@counterpartfoods.com
        </a>
        {" "}&middot;{" "}
        <Link
          href="/cafes"
          className="text-[#999] no-underline hover:text-white transition-colors"
        >
          For Cafes
        </Link>
        {" "}&middot;{" "}
        <Link
          href="/brands"
          className="text-[#999] no-underline hover:text-white transition-colors"
        >
          For Brands
        </Link>
      </p>
    </footer>
  );
}
