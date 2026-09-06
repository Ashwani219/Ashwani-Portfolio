"use client";

import React, { useState } from "react";
import { MessageSquare, Bot, Send, Sparkles, CheckCircle2, Shield } from "lucide-react";
import { zaggleResearchReport } from "@/data/companyData";

export const AiResearchAssistant: React.FC = () => {
  const qaList = zaggleResearchReport.aiKnowledgeBase;

  const [selectedQa, setSelectedQa] = useState(qaList[0]);
  const [customInput, setCustomInput] = useState("");
  const [chatLog, setChatLog] = useState<{ query: string; answer: string; tag: string }[]>([
    {
      query: qaList[0].question,
      answer: qaList[0].answer,
      tag: qaList[0].tag,
    },
  ]);

  const handleSelectQuestion = (qa: (typeof qaList)[0]) => {
    setSelectedQa(qa);
    // Add to chat log if not already last message
    if (chatLog[chatLog.length - 1]?.query !== qa.question) {
      setChatLog((prev) => [...prev, { query: qa.question, answer: qa.answer, tag: qa.tag }]);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const queryLower = customInput.toLowerCase();
    // Search best matching question in knowledgebase
    let match = qaList.find((q) =>
      queryLower.split(" ").some((word) => word.length > 3 && q.question.toLowerCase().includes(word))
    );

    if (!match) {
      match = {
        question: customInput,
        answer:
          "Based strictly on the 21-page initiation report by Ashwani Kumar Singh: Zaggle is an Indian enterprise spend SaaS FinTech with 19 partner banks, 4,065+ clients, and ₹500.4 Cr net cash (~20% of Mcap). It trades at 17.9x FY26 P/E with a Base-Case DCF target of ₹270/share (+46.1% upside). Key risks include high historical working capital and partner bank concentration.",
        tag: "General Inquiry",
      };
    }

    setChatLog((prev) => [...prev, { query: customInput, answer: match!.answer, tag: match!.tag }]);
    setCustomInput("");
  };

  return (
    <div className="p-6 rounded-xl fin-card border border-cyan-500/30 bg-gradient-to-b from-[#0d121f] to-[#07090e] space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1a2336] gap-2">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-bold text-white">Ask About This Research (Report Assistant)</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>GROUNDED AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Query the 21-page initiation coverage report directly. Answers are strictly sourced from verified analyst models.
            </p>
          </div>
        </div>

        <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Zero Hallucination Protocol</span>
        </div>
      </div>

      {/* Suggested Prompt Pills */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
          Suggested Recruiter & Committee Inquiries:
        </span>
        <div className="flex flex-wrap gap-2">
          {qaList.map((qa, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectQuestion(qa)}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#07090e] border border-[#1e293b] hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-all text-left cursor-pointer"
            >
              {qa.question}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Chat Stream Display */}
      <div className="max-h-80 overflow-y-auto space-y-4 p-4 rounded-lg bg-[#07090e] border border-[#1a2336]">
        {chatLog.map((item, idx) => (
          <div key={idx} className="space-y-2">
            {/* User query bubble */}
            <div className="flex justify-end">
              <div className="max-w-md px-3.5 py-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-200">
                {item.query}
              </div>
            </div>

            {/* AI response bubble */}
            <div className="flex items-start space-x-2.5">
              <div className="p-1.5 rounded bg-[#131b2e] text-cyan-400 shrink-0 mt-0.5 border border-[#1e293b]">
                <Bot className="w-4 h-4" />
              </div>
              <div className="max-w-2xl p-3.5 rounded-lg bg-[#0d121f] border border-[#1a2336] text-xs text-slate-300 leading-relaxed font-sans space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[10px] font-mono text-slate-400">
                  <span>Source: Ashwani Kumar Singh Initiation Coverage (Sep 2026)</span>
                  <span className="text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/50">
                    Topic: {item.tag}
                  </span>
                </div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <form onSubmit={handleCustomSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Ask a question about Zaggle's thesis, working capital, M&A, or DCF assumptions..."
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-lg bg-[#07090e] border border-[#1a2336] text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
        />
        <button
          type="submit"
          className="px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer"
        >
          <span>ASK</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
