const APP_STORE_URL = "https://apps.apple.com/app/id6743557889";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-[200px]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[7px] bg-[#0a84ff]/20 border border-[#0a84ff]/30 flex items-center justify-center text-[#0a84ff] text-xs font-semibold font-jura">
                N
              </div>
              <span className="text-[15px] font-semibold text-white/90 font-jura">N0te</span>
            </div>
            <p className="text-[12px] text-white/30 leading-relaxed">
              The capture layer before Obsidian.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest">
                Product
              </p>
              <a
                href="#features"
                className="text-[13px] text-white/50 hover:text-white/90 transition-colors"
              >
                Features
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white/50 hover:text-white/90 transition-colors"
              >
                Download
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest">
                Support
              </p>
              <a
                href="#reviews"
                className="text-[13px] text-white/50 hover:text-white/90 transition-colors"
              >
                Reviews
              </a>
              <a
                href="mailto:hello@n0teapp.com"
                className="text-[13px] text-white/50 hover:text-white/90 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} N0te. Built for macOS.
          </p>
          <p className="text-[11px] text-white/20">
            // Built by Tyler Suggs
          </p>
        </div>
      </div>
    </footer>
  );
}
