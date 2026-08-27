"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[94vw] max-w-4xl translate-x-[-50%] translate-y-[-50%] bg-[#060c22] border-2 border-amber-500/60 rounded-xl overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.4)] flex flex-col focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/30 bg-[#040817]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <Dialog.Title className="font-['Rajdhani',sans-serif] text-xs uppercase tracking-widest text-white font-bold">
                MYTHIC SEAL • MSL SEASON 4 HYPE TRAILER & HIGHLIGHTS
              </Dialog.Title>
            </div>

            <Dialog.Close
              aria-label="Close dialog"
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-amber-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          <Dialog.Description className="sr-only">
            Mythic SEAL Season 4 documentary video preview and YouTube link.
          </Dialog.Description>

          {/* Video Player Area */}
          <div className="relative aspect-video w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

            <div className="text-center space-y-4 z-10 px-6 max-w-md">
              <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.6)] animate-pulse">
                <Play className="w-8 h-8 fill-amber-400 text-amber-400 translate-x-0.5" />
              </div>

              <div className="space-y-1">
                <h3 className="font-['Rajdhani',sans-serif] text-2xl font-black text-white uppercase tracking-wider">
                  DESTINED FOR GLORY
                </h3>
                <p className="text-xs text-slate-400">
                  Official MLBB Cinematic Documentary & Team Mic Check
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded font-['Rajdhani',sans-serif] text-xs font-bold uppercase transition-colors flex items-center gap-2"
                >
                  <span>WATCH FULL ON YOUTUBE</span>
                </a>
              </div>
            </div>

            <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-400 bg-black/60 px-2 py-1 rounded border border-cyan-500/30">
              REC • 60 FPS • 4K ULTRA HD
            </div>

            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-amber-400 bg-black/60 px-2 py-1 rounded border border-amber-500/30">
              AUDIO: STEREO HIGH FIDELITY
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
