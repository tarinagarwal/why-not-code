import NavigationHeader from "@/components/NavigationHeader";
import { ArrowRight, Command, Star } from "lucide-react";
import Link from "next/link";

function ProPlanView() {
  return (
    <div className=" bg-black">
      <NavigationHeader />
      <div className="relative px-4 h-[80vh] flex items-center justify-center">
        <div className="relative max-w-xl mx-auto text-center">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerlad-500/30 to-cyan-500/30 blur-2xl opacity-10" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl p-12">
            <div className="relative">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerlad-500/10 mb-6 ring-1 ring-gray-800/60">
                <Star className="w-8 h-8 text-cyan-400" />
              </div>

              <h1 className="text-3xl font-semibold text-white mb-3">
                Pro Plan Active
              </h1>
              <p className="text-gray-400 mb-8 text-lg">
                Experience the full power of professional development
              </p>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-emerlad-500/10 to-cyan-500/10 hover:from-emerlad-500/20 hover:to-cyan-500/20 text-white rounded-xl transition-all duration-200 border border-gray-800 hover:border-emerlad-500/50 group"
              >
                <Command className="w-5 h-5 text-emerlad-400" />
                <span>Open Editor</span>
                <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProPlanView;
