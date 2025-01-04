import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "./nav-menu";

export function Header() {
  return (
    <>
      <div className="mt-4 mb-4 flex justify-between items-center">
        <h1 className="font-medium">
          <Link href={"/"} className="flex gap-1 items-center">
            <CircleCheckBig size="icon" className="h-4 w-4" /> ToDer
          </Link>
        </h1>
        <NavMenu />
      </div>
    </>
  );
}
