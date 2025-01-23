"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardDemo() {
  return (
    <div className="max-w-xs w-full group/card border border-gray-300 dark:border-gray-700 rounded-md shadow-lg overflow-hidden">
      <div
        className={cn(
          "cursor-pointer relative h-96 flex flex-col justify-between p-4 bg-cover",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)]"
        )}
      >
        {/* Background Overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50 group-hover/card:opacity-70 transition duration-300"></div>

        {/* Player Info */}
        <div className="flex items-center space-x-4 relative z-10">
          <Image
            height={40}
            width={40}
            alt="Player"
            src="/manu.png"
            className="h-10 w-10 rounded-full border-2 border-white object-cover"
          />
          <div>
            <p className="text-sm text-gray-400">Previous Purchase</p>
            <p className="text-lg font-bold text-white">MS Dhoni</p>
            <p className="text-sm text-gray-400">Team: Chennai Super Kings</p>
            <p className="text-sm text-green-500">₹12 Crore</p>
          </div>
        </div>
      </div>
    </div>
  );
}
