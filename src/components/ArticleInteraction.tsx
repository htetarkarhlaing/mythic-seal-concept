"use client";

import React, { useState } from "react";
import { MessageSquare, Send, Heart } from "lucide-react";

export default function ArticleInteraction() {
  const [comments, setComments] = useState<
    { name: string; date: string; text: string }[]
  >([
    {
      name: "Thant Zin Oo",
      date: "May 19, 2026",
      text: "The macro synergy in Game 2 was legendary! Justin's Ling was completely untouchable. Best of luck in the Semi Finals!",
    },
    {
      name: "Kyaw Ko Ko",
      date: "May 18, 2026",
      text: "Mythic SEAL on top! Ready to cheer for the boys on May 24 against Team MAX.",
    },
  ]);

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [likes, setLikes] = useState(148);
  const [hasLiked, setHasLiked] = useState(false);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentName && commentText) {
      setComments((prev) => [
        {
          name: commentName,
          date: "Just now",
          text: commentText,
        },
        ...prev,
      ]);
      setCommentName("");
      setCommentText("");
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((l) => l + 1);
      setHasLiked(true);
    } else {
      setLikes((l) => l - 1);
      setHasLiked(false);
    }
  };

  return (
    <>
      {/* Like Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-xs font-bold transition-colors cursor-pointer ${
            hasLiked
              ? "bg-rose-600/20 border-rose-500 text-rose-400"
              : "bg-[#081026] border-slate-700 text-slate-300 hover:text-white"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${hasLiked ? "fill-rose-400" : ""}`} />
          <span>{likes}</span>
        </button>
      </div>

      {/* Comments Section */}
      <section className="pt-10 border-t border-slate-800 space-y-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#FFC107]" />
          <h3 className="text-xl font-black uppercase text-white tracking-wider">
            FAN REACTION & DISCUSSION ({comments.length})
          </h3>
        </div>

        {/* Comment Submission Form */}
        <form onSubmit={handleAddComment} className="p-6 rounded-sm bg-[#050b1d] border border-slate-800 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                YOUR NAME / IGN
              </label>
              <input
                type="text"
                required
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                placeholder="e.g. SealFan2026"
                className="w-full bg-[#081026] border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
              COMMENT
            </label>
            <textarea
              rows={3}
              required
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your thoughts with the team..."
              className="w-full bg-[#081026] border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107]"
            />
          </div>

          <button type="submit" className="btn-scifi-primary !py-2.5 !px-5 text-xs">
            <Send className="w-3.5 h-3.5" />
            <span>POST COMMENT</span>
          </button>
        </form>

        {/* Comment List */}
        <div className="space-y-4">
          {comments.map((c, i) => (
            <div key={i} className="p-4 rounded-sm bg-[#050b1d] border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#FFC107] uppercase">{c.name}</span>
                <span className="text-slate-500 text-[11px]">{c.date}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
