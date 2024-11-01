import Image from "next/image";
import Link from "next/link";
import profilePage from "./admin/dashboard/page";
import UserHomePage from "@/components/UserHomePage";

export default function Home() {
  return (
    <div>
      <UserHomePage />
    </div>
  );
}
