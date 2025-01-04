import Link from "next/link";
import { NavMenu } from "./nav-menu";

export function Header() {
  return (
    <>
      <div className="py-6 px-8 flex justify-between items-center">
        <h1 className="font-medium">
          <Link href={"/"}>ToDer</Link>
        </h1>
        <NavMenu />
      </div>
    </>
  );
}
