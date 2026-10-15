import React, { useState } from 'react';
import { Ruler, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ErgonomicSpacePlannerProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ErgonomicSpacePlanner: React.FC<ErgonomicSpacePlannerProps> = ({
  products,
  onSelectProduct,
}) => {
  const [heightCm, setHeightCm] = useState<number>(175);
  const [workStyle, setWorkStyle] = useState<'hybrid' | 'seated' | 'student'>('hybrid');

  // Ergonomic calculations based on human anthropometry (ANSI/BIFMA G1-2017)
  const sittingDeskHeight = Math.round(heightCm * 0.405);
  const standingDeskHeight = Math.round(heightCm * 0.625);
  const chairSeatHeight = Math.round(heightCm * 0.255);
  const armrestHeight = Math.round(heightCm * 0.145);
  const monitorEyeDistance = Math.round(heightCm * 0.38);

  const recommendedDesk = products.find(p => p.id === 'desk-apexpro-motorized') || products[0];
  const recommendedChair = products.find(p => p.id === 'chair-ergomesh-pro') || products[1];

  return (
    <section id="ergo-planner" className="py-16 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
            <Activity className="w-4 h-4" />
            <span>Ergonomics & Posture Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Find Your Ideal Desk & Chair Geometry
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Eliminate lower back pain, neck stiffness, and wrist strain during long hours of research, study, and teaching at Karatina University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Controls */}
          <div className="lg:col-span-5 bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Your Body Height
                </label>
                <span className="text-lg font-bold font-mono text-amber-400 tabular-nums">
                  {heightCm} cm <span className="text-xs text-slate-400">({Math.floor(heightCm / 30.48)}&apos;{Math.round((heightCm % 30.48) / 2.54)}&quot;)</span>
                </span>
              </div>
              <input
                type="range"
                min="145"
                max="205"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>145 cm (Petite)</span>
                <span>175 cm (Average)</span>
                <span>205 cm (Tall)</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Daily Focus Style
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'hybrid', label: 'Sit-Stand' },
                  { id: 'seated', label: 'Full Seated' },
                  { id: 'student', label: 'Study & Exam' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setWorkStyle(s.id as any)}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                      workStyle === s.id
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/80 space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Supports neutral 90° elbow typing alignment</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Prevents lumbar disc compression and slouching</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Optimized for dual monitors or laptops with riser</span>
              </div>
            </div>
          </div>

          {/* Right: Calculated Ergonomic Blueprint */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 space-y-1">
                <span className="text-xs text-slate-400 uppercase font-medium">Standing Desk Height</span>
                <p className="text-2xl font-bold font-mono text-white tabular-nums">
                  {standingDeskHeight} <span className="text-xs text-amber-400">cm</span>
                </p>
                <p className="text-[11px] text-slate-500">Forearms parallel to floor</p>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 space-y-1">
                <span className="text-xs text-slate-400 uppercase font-medium">Sitting Desk Height</span>
                <p className="text-2xl font-bold font-mono text-white tabular-nums">
                  {sittingDeskHeight} <span className="text-xs text-amber-400">cm</span>
                </p>
                <p className="text-[11px] text-slate-500">Shoulders relaxed</p>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 space-y-1">
                <span className="text-xs text-slate-400 uppercase font-medium">Chair Seat Height</span>
                <p className="text-2xl font-bold font-mono text-white tabular-nums">
                  {chairSeatHeight} <span className="text-xs text-amber-400">cm</span>
                </p>
                <p className="text-[11px] text-slate-500">Feet flat on floor</p>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 space-y-1">
                <span className="text-xs text-slate-400 uppercase font-medium">Armrest Elevation</span>
                <p className="text-2xl font-bold font-mono text-white tabular-nums">
                  {armrestHeight} <span className="text-xs text-amber-400">cm</span>
                </p>
                <p className="text-[11px] text-slate-500">Above chair cushion</p>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 space-y-1 col-span-2 sm:col-span-2">
                <span className="text-xs text-slate-400 uppercase font-medium">Eye to Screen Distance</span>
                <p className="text-2xl font-bold font-mono text-white tabular-nums">
                  {monitorEyeDistance}–{monitorEyeDistance + 15} <span className="text-xs text-amber-400">cm</span>
                </p>
                <p className="text-[11px] text-slate-500">Top 1/3 of monitor at eye level</p>
              </div>
            </div>

            {/* Recommended Combo match */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-850 p-5 rounded-2xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  Recommended Fit for {heightCm} cm
                </span>
                <h4 className="text-base font-bold text-white font-display">
                  {recommendedDesk.name} + {recommendedChair.name}
                </h4>
                <p className="text-xs text-slate-300">
                  Combined KSh {(recommendedDesk.price + recommendedChair.price).toLocaleString()} · Free assembly at Karatina University
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onSelectProduct(recommendedDesk)}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  <span>View Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectProduct(recommendedChair)}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  <span>View Chair</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
