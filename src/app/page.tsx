import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Home Page
      <br />
      <SignUpButton>Signup</SignUpButton>
      <br />
      <SignOutButton>Signout</SignOutButton>
    </div>
  );
}
