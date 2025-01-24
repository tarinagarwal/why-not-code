import HeaderProfileBtn from "@/app/(root)/_components/HeaderProfileButton";
import { SignedOut } from "@clerk/nextjs";
import { Blocks, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

function NavigationHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative">
              {/* logo hover effect */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-teal-300/20 to-cyan-500/20 rounded-lg opacity-0 
              group-hover:opacity-100 transition-all duration-500 blur-xl"
              />

              {/* Logo */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Blocks className="w-6 h-6 text-emerald-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
              </div>

              <div className="relative">
                <span className="block text-lg font-semibold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-transparent bg-clip-text">
                  WhyNotCode
                </span>
              </div>
            </Link>

            {/* snippets Link */}
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-white/5
              border border-white/10 hover:border-gray-700 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>
          </div>

          {/* right rection */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <Link
                href="/pricing"
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20
                 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all 
                duration-300"
              >
                <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
                <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                  Pro
                </span>
              </Link>
            </SignedOut>

            {/* profile button */}
            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;
