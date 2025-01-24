import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useMutation } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { X } from "lucide-react";
import toast from "react-hot-toast";

// Tailwind (or your CSS) can define an @keyframes for a simple scale-in.
const scaleInAnimation = `
  @keyframes scaleIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

function ShareSnippetDialog({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const { language, getCode } = useCodeEditorStore();
  const createSnippet = useMutation(api.snippets.createSnippet);

  const handleShare = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSharing(true);

    try {
      const code = getCode();
      await createSnippet({ title, language, code });
      onClose();
      setTitle("");
      toast.success("Snippet shared successfully");
    } catch (error) {
      console.log("Error creating snippet:", error);
      toast.error("Error creating snippet");
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <>
      <style>{scaleInAnimation}</style>

      <div
        className="
          fixed
          inset-0
          bg-black/50
          backdrop-blur-sm
          flex
          items-center
          justify-center
          z-50
        "
      >
        <div
          className="
            relative
            bg-[#0f0f0f]
            ring-1 ring-gray-700
            rounded-lg
            shadow-xl
            p-6
            w-full
            max-w-md
            animate-[scaleIn_0.2s_ease-out]
          "
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Share Snippet</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* The form */}
          <form onSubmit={handleShare}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="
                  w-full
                  px-3
                  py-2
                  bg-[#0f0f0f]
                  border
                  border-[#313244]
                  rounded-lg
                  text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-gray-500
                "
                placeholder="Enter snippet title"
                required
              />
            </div>

            {/* Action buttons */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="
                  px-4
                  py-2
                  text-gray-400
                  hover:text-gray-300
                  transition-colors
                "
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSharing}
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-gradient-to-r
                  from-blue-600
                  to-blue-700
                  text-white
                  hover:from-blue-600
                  hover:to-blue-700
                  disabled:opacity-50
                  transition-colors
                "
              >
                {isSharing ? "Sharing..." : "Share"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ShareSnippetDialog;
