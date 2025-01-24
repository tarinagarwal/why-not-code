import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { Blocks, Code2, Sparkles, Menu } from "lucide-react";
import { SignedIn } from "@clerk/nextjs";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileButton from "./HeaderProfileButton";

async function Header() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser();

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  return (
    <header className="relative z-10 w-full pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/5 rounded-xl border border-white/10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-4 lg:py-6 space-y-4 lg:space-y-0">
          {/* Left section (logo & nav) */}
          <div className="flex flex-row sm:flex-row items-center gap-4 sm:gap-8 w-full lg:w-auto">
            <Link href="/" className="flex items-center gap-3 group relative">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-teal-300/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

              {/* Logo */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Blocks className="size-6 text-emerald-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
              </div>

              <div className="flex flex-col">
                <span className="block text-lg font-semibold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-transparent bg-clip-text">
                  WhyNotCode
                </span>
              </div>
            </Link>

            {/* Nav links */}
            <nav className="flex items-center space-x-1">
              <Link
                href="/snippets"
                className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-white/5 border border-white/10 hover:border-gray-700 transition-all duration-300 shadow-lg overflow-hidden"
              >
                <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
                <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                  Snippets
                </span>
              </Link>
            </nav>
          </div>

          {/* Right section (theme, language, upgrade link, etc.) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
            {/* Theme & Language Selectors */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <ThemeSelector />
              <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />
            </div>

            {/* Profile */}
            <div className="flex w-full items-center justify-between gap-3 sm:pl-3 border-gray-800">
              <div className="flex flex-row gap-3">
                <SignedIn>
                  <RunButton />
                </SignedIn>
                {/* {!convexUser?.isPro && (
                  <Link
                    href="/pricing"
                    className="flex items-center gap-3 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-300"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
                    <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                      Pro
                    </span>
                  </Link>
                )} */}
              </div>
              <HeaderProfileButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
