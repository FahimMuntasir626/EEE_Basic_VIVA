/* ═══════════════════════════════════════════════════════════════
   EEE SUBJECTS QUIZ — 60 MCQ Questions
   Drawn from all 15 B.Sc. EEE subjects
   ═══════════════════════════════════════════════════════════════ */

const SUBJECTS_QUIZ_SECTIONS = [
  { id:"sq-ckt", icon:"🔌", name:"Circuits", color:"#6c63ff" },
  { id:"sq-mach", icon:"⚙️", name:"Machines", color:"#339af0" },
  { id:"sq-tnd", icon:"🗼", name:"T&D / Power", color:"#ff922b" },
  { id:"sq-comm", icon:"📡", name:"Communication", color:"#ffd43b" },
  { id:"sq-vlsi", icon:"💻", name:"VLSI", color:"#51cf66" },
  { id:"sq-elec", icon:"💎", name:"Electronics", color:"#ff6b6b" },
  { id:"sq-sns", icon:"〰️", name:"Signal & System", color:"#da77f2" },
  { id:"sq-ctrl", icon:"🎛️", name:"Control System", color:"#f06595" },
  { id:"sq-misc", icon:"📏", name:"Measurement & Others", color:"#20c997" }
];

const SUBJECTS_QUIZ_QUESTIONS = [
// ═══ Circuits (Q1-Q7) ═══
{id:1,sec:"sq-ckt",q:"The number of independent mesh equations for a circuit with b branches and n nodes is:",a:"b + n − 1",b:"b − n + 1",c:"n − 1",d:"b − 1",ans:"b",exp:"Number of independent meshes = b − n + 1 (branches − nodes + 1)."},
{id:2,sec:"sq-ckt",q:"The time constant of an RL circuit is:",a:"R × L",b:"L/R",c:"R/L",d:"√(L/R)",ans:"b",exp:"τ = L/R seconds. After one time constant, current reaches 63.2% of its final value."},
{id:3,sec:"sq-ckt",q:"In the Laplace domain, the impedance of a capacitor C is:",a:"sC",b:"1/sC",c:"Cs",d:"s²C",ans:"b",exp:"Capacitor impedance Z(s) = 1/(sC). This converts time-domain calculus to algebraic equations."},
{id:4,sec:"sq-ckt",q:"At resonance, the power factor of a series RLC circuit is:",a:"0",b:"0.5",c:"0.707",d:"1 (unity)",ans:"d",exp:"At resonance XL = XC, so the circuit is purely resistive. Power factor = cosφ = cos(0°) = 1."},
{id:5,sec:"sq-ckt",q:"The h₂₁ parameter (hfe) represents:",a:"Input impedance",b:"Forward current gain (β)",c:"Output admittance",d:"Reverse voltage ratio",ans:"b",exp:"hfe = h₂₁ = I₂/I₁ (output current / input current) = forward current gain β of a transistor."},
{id:6,sec:"sq-ckt",q:"In an AC circuit, admittance Y is the reciprocal of:",a:"Resistance",b:"Reactance",c:"Impedance",d:"Susceptance",ans:"c",exp:"Y = 1/Z = G + jB (conductance + j × susceptance). Unit: Siemens (S)."},
{id:7,sec:"sq-ckt",q:"The coupled inductors with coupling coefficient k = 1 represent:",a:"No coupling",b:"Loose coupling",c:"Perfect (ideal) coupling",d:"Negative coupling",ans:"c",exp:"k = 1 means all flux from one coil links the other (perfect coupling). Ideal transformer has k = 1."},

// ═══ Machines (Q8-Q14) ═══
{id:8,sec:"sq-mach",q:"The back EMF equation of a DC motor is Eb = PΦNZ/(60A). If the speed doubles, Eb:",a:"Halves",b:"Doubles",c:"Remains same",d:"Quadruples",ans:"b",exp:"Eb ∝ N (speed). If speed doubles, back EMF doubles (with constant flux and other parameters)."},
{id:9,sec:"sq-mach",q:"Slip of an induction motor at standstill is:",a:"0",b:"0.5",c:"1",d:"Infinity",ans:"c",exp:"At standstill, Nr = 0, so slip s = (Ns − Nr)/Ns = Ns/Ns = 1 (100%)."},
{id:10,sec:"sq-mach",q:"A 6-pole, 50 Hz induction motor has a synchronous speed of:",a:"3000 RPM",b:"1500 RPM",c:"1000 RPM",d:"750 RPM",ans:"c",exp:"Ns = 120f/P = 120 × 50/6 = 1000 RPM."},
{id:11,sec:"sq-mach",q:"An over-excited synchronous motor operates at _____ power factor:",a:"Unity",b:"Lagging",c:"Leading",d:"Zero",ans:"c",exp:"Over-excited synchronous motor draws leading current (acts like a capacitor) — used for PF correction."},
{id:12,sec:"sq-mach",q:"In a DC shunt motor, if field winding opens, the motor will:",a:"Stop immediately",b:"Run at rated speed",c:"Run away (dangerously high speed)",d:"Reverse direction",ans:"c",exp:"If field opens, Φ → 0 (only residual flux). Speed N ∝ 1/Φ → very high → motor runs away and can be destroyed."},
{id:13,sec:"sq-mach",q:"The rotor copper loss of an induction motor equals:",a:"s × Pg (slip × air-gap power)",b:"(1-s) × Pg",c:"Pg/s",d:"Pg × s²",ans:"a",exp:"Rotor copper loss = s × Pg. Mechanical power developed = (1-s) × Pg. Rotor efficiency = 1 − s."},
{id:14,sec:"sq-mach",q:"Damper windings in a synchronous motor are used to:",a:"Increase efficiency",b:"Improve power factor",c:"Provide starting torque and damp hunting",d:"Reduce core losses",ans:"c",exp:"Damper (amortisseur) windings: 1) Provide starting torque (like squirrel cage) and 2) Damp oscillations (hunting)."},

// ═══ T&D / Power (Q15-Q21) ═══
{id:15,sec:"sq-tnd",q:"Power is transmitted at high voltage to:",a:"Increase power",b:"Reduce I²R losses",c:"Increase frequency",d:"Reduce voltage drop to zero",ans:"b",exp:"Higher V → lower I (for same P) → much lower I²R losses and smaller conductors needed."},
{id:16,sec:"sq-tnd",q:"For a short transmission line (<80 km), the model neglects:",a:"Resistance",b:"Inductance",c:"Shunt capacitance",d:"All impedances",ans:"c",exp:"Short line model: only series R + jX. Shunt capacitance is negligible for lines < 80 km."},
{id:17,sec:"sq-tnd",q:"The most common type of conductor used in overhead transmission is:",a:"Copper",b:"ACSR",c:"Aluminium only",d:"Steel only",ans:"b",exp:"ACSR (Aluminium Conductor Steel Reinforced) combines aluminium (conductivity) with steel (strength)."},
{id:18,sec:"sq-tnd",q:"In per-unit system, the base impedance is:",a:"Vbase/Ibase",b:"Vbase²/Sbase",c:"Sbase/Vbase²",d:"Both a and b",ans:"d",exp:"Zbase = Vbase/Ibase = Vbase²/Sbase. Both formulas are equivalent."},
{id:19,sec:"sq-tnd",q:"The most common type of fault in power systems is:",a:"Three-phase",b:"Single line-to-ground",c:"Line-to-line",d:"Double line-to-ground",ans:"b",exp:"SLG faults account for ~70% of all faults. Three-phase faults are rarest (~5%) but most severe."},
{id:20,sec:"sq-tnd",q:"Symmetrical components decompose unbalanced quantities into:",a:"Two components",b:"Three balanced components",c:"Four components",d:"Only one component",ans:"b",exp:"Three balanced sets: Positive sequence (abc), Negative sequence (acb), Zero sequence (aaa)."},
{id:21,sec:"sq-tnd",q:"The equal area criterion is used for:",a:"Load flow analysis",b:"Transient stability assessment",c:"Economic dispatch",d:"Fault analysis",ans:"b",exp:"Equal area criterion determines if a synchronous machine will remain stable after a large disturbance without solving the swing equation."},

// ═══ Communication (Q22-Q28) ═══
{id:22,sec:"sq-comm",q:"Shannon channel capacity formula is C = B × log₂(1 + ?):",a:"SNR",b:"Bandwidth",c:"Bit rate",d:"Frequency",ans:"a",exp:"C = B × log₂(1 + SNR). Capacity increases with both bandwidth and signal-to-noise ratio."},
{id:23,sec:"sq-comm",q:"In FM, Carson's rule for bandwidth is:",a:"BW = 2fm",b:"BW = 2(Δf + fm)",c:"BW = Δf",d:"BW = fm",ans:"b",exp:"Carson's bandwidth rule: BW ≈ 2(Δf + fm), where Δf = frequency deviation, fm = modulating frequency."},
{id:24,sec:"sq-comm",q:"PCM encoding involves sampling, quantization, and:",a:"Modulation",b:"Filtering",c:"Encoding (binary coding)",d:"Amplification",ans:"c",exp:"PCM: Sampling → Quantization → Encoding (each quantized level gets a binary code)."},
{id:25,sec:"sq-comm",q:"The Nyquist rate for a 4 kHz audio signal is:",a:"2 kHz",b:"4 kHz",c:"8 kHz",d:"16 kHz",ans:"c",exp:"Nyquist rate = 2 × fmax = 2 × 4 kHz = 8 kHz. Telephone system samples at 8 kHz."},
{id:26,sec:"sq-comm",q:"Which digital modulation is most spectrally efficient?",a:"ASK",b:"FSK",c:"BPSK",d:"QAM",ans:"d",exp:"QAM (Quadrature Amplitude Modulation) varies both amplitude and phase, carrying more bits per symbol."},
{id:27,sec:"sq-comm",q:"Single-mode optical fiber has a core diameter of approximately:",a:"50 μm",b:"62.5 μm",c:"9 μm",d:"125 μm",ans:"c",exp:"Single-mode: ~9 μm core (one light path — long distance). Multi-mode: 50 or 62.5 μm (multiple paths — short distance)."},
{id:28,sec:"sq-comm",q:"Spread spectrum communication is resistant to:",a:"Thermal noise",b:"Jamming and interference",c:"Attenuation",d:"Reflection",ans:"b",exp:"Spread spectrum spreads signal over wide bandwidth, making it resistant to narrowband jamming and interference."},

// ═══ VLSI (Q29-Q35) ═══
{id:29,sec:"sq-vlsi",q:"CMOS stands for:",a:"Common MOS",b:"Complementary MOS",c:"Capacitive MOS",d:"Coupled MOS",ans:"b",exp:"CMOS = Complementary MOS — uses paired N-channel and P-channel MOSFETs."},
{id:30,sec:"sq-vlsi",q:"The main advantage of CMOS is:",a:"High speed",b:"Zero static power dissipation",c:"Simple fabrication",d:"Low threshold voltage",ans:"b",exp:"CMOS has zero static power — no DC path from VDD to GND in either logic state. Power consumed only during switching."},
{id:31,sec:"sq-vlsi",q:"Moore's Law states that transistor count doubles approximately every:",a:"6 months",b:"1 year",c:"2 years",d:"5 years",ans:"c",exp:"Moore's Law: transistor density doubles approximately every 2 years (originally 18 months)."},
{id:32,sec:"sq-vlsi",q:"Dynamic power in CMOS is proportional to:",a:"VDD",b:"VDD²",c:"1/VDD",d:"VDD³",ans:"b",exp:"Pdynamic = α × C × VDD² × f. Power is proportional to the square of supply voltage."},
{id:33,sec:"sq-vlsi",q:"HDL stands for:",a:"Hardware Design Language",b:"Hardware Description Language",c:"High-Density Logic",d:"Hierarchical Design Layout",ans:"b",exp:"HDL = Hardware Description Language. Verilog and VHDL are the two main HDLs used for digital design."},
{id:34,sec:"sq-vlsi",q:"Static timing analysis checks for:",a:"Power consumption",b:"Setup and hold time violations",c:"Logic correctness",d:"Thermal issues",ans:"b",exp:"STA verifies that all timing constraints (setup time, hold time) are met at every flip-flop in the design."},
{id:35,sec:"sq-vlsi",q:"An FPGA can be:",a:"Fabricated only once",b:"Reconfigured by the user",c:"Used only for analog circuits",d:"Programmed only at the factory",ans:"b",exp:"FPGA = Field-Programmable Gate Array — can be reconfigured (reprogrammed) by the user after manufacturing."},

// ═══ Electronics (Q36-Q42) ═══
{id:36,sec:"sq-elec",q:"The transconductance (gm) of a BJT is:",a:"VT/IC",b:"IC/VT",c:"β × RB",d:"VBE/IC",ans:"b",exp:"gm = IC/VT, where VT ≈ 26mV at room temperature. Higher IC → higher gm → higher voltage gain."},
{id:37,sec:"sq-elec",q:"The Wien bridge oscillator frequency is:",a:"f = 1/(2πLC)",b:"f = 1/(2πRC)",c:"f = RC/2π",d:"f = 2πRC",ans:"b",exp:"Wien bridge: f₀ = 1/(2πRC). The RC network provides 0° phase shift at this frequency."},
{id:38,sec:"sq-elec",q:"A Schmitt trigger has:",a:"No feedback",b:"Negative feedback",c:"Positive feedback (hysteresis)",d:"Both positive and negative feedback",ans:"c",exp:"Schmitt trigger uses positive feedback to create hysteresis — two different switching thresholds (UTP and LTP)."},
{id:39,sec:"sq-elec",q:"An instrumentation amplifier typically uses how many op-amps?",a:"1",b:"2",c:"3",d:"4",ans:"c",exp:"Standard instrumentation amplifier uses 3 op-amps: 2 input buffers + 1 difference amplifier."},
{id:40,sec:"sq-elec",q:"The current mirror's primary function is to:",a:"Amplify voltage",b:"Copy a reference current",c:"Regulate voltage",d:"Generate oscillation",ans:"b",exp:"A current mirror copies a reference current to another branch with high accuracy. Used for biasing in ICs."},
{id:41,sec:"sq-elec",q:"Class AB amplifier eliminates _____ found in Class B:",a:"Thermal noise",b:"Power loss",c:"Crossover distortion",d:"Saturation",ans:"c",exp:"Class AB applies small bias to both transistors, keeping them slightly ON at zero crossing to eliminate crossover distortion."},
{id:42,sec:"sq-elec",q:"The Miller effect in CE amplifier causes:",a:"Increased bandwidth",b:"Increased effective input capacitance",c:"Decreased gain",d:"Improved stability",ans:"b",exp:"Miller effect: Cin(effective) = Cfeedback × (1 + |Av|). This increased capacitance limits the high-frequency bandwidth."},

// ═══ Signal & System (Q43-Q49) ═══
{id:43,sec:"sq-sns",q:"A system is BIBO stable if:",a:"All poles are in the right half plane",b:"The impulse response is absolutely integrable",c:"The transfer function has no zeros",d:"The system is nonlinear",ans:"b",exp:"BIBO stability: ∫|h(t)|dt < ∞. Equivalently, all poles of the transfer function must be in the left half plane."},
{id:44,sec:"sq-sns",q:"The Z-transform is the discrete-time equivalent of the:",a:"Fourier transform",b:"Laplace transform",c:"Hilbert transform",d:"Wavelet transform",ans:"b",exp:"Z-transform for discrete-time systems is analogous to Laplace transform for continuous-time systems."},
{id:45,sec:"sq-sns",q:"An FIR filter is always:",a:"Unstable",b:"Stable",c:"IIR",d:"Nonlinear",ans:"b",exp:"FIR (Finite Impulse Response) filters have finite-length impulse response and no feedback → always stable."},
{id:46,sec:"sq-sns",q:"The Fourier Transform of a real, even signal is:",a:"Imaginary",b:"Real and even",c:"Complex",d:"Odd",ans:"b",exp:"FT of a real even signal is real and even. FT of a real odd signal is purely imaginary and odd."},
{id:47,sec:"sq-sns",q:"Aliasing occurs when:",a:"Sampling rate > 2fmax",b:"Sampling rate < 2fmax",c:"Signal is filtered",d:"Signal is amplified",ans:"b",exp:"Aliasing occurs when fs < 2fmax (below Nyquist rate). High frequencies fold back and appear as low frequencies."},
{id:48,sec:"sq-sns",q:"The DFT of N samples produces:",a:"N/2 frequency components",b:"N frequency components",c:"2N frequency components",d:"N² frequency components",ans:"b",exp:"DFT: N time samples → N frequency components (0 to N−1). Only N/2+1 are unique for real signals (symmetry)."},
{id:49,sec:"sq-sns",q:"Convolution in time domain equals _____ in frequency domain:",a:"Addition",b:"Subtraction",c:"Multiplication",d:"Division",ans:"c",exp:"y(t) = x(t) * h(t) → Y(ω) = X(ω) × H(ω). Convolution becomes multiplication in the frequency domain."},

// ═══ Control System (Q50-Q56) ═══
{id:50,sec:"sq-ctrl",q:"A type-1 system has zero steady-state error for _____ input:",a:"Ramp",b:"Parabolic",c:"Step",d:"Impulse only",ans:"c",exp:"Type-1 system (one integrator): zero ess for step input, finite ess for ramp, infinite ess for parabolic."},
{id:51,sec:"sq-ctrl",q:"The Routh-Hurwitz criterion determines:",a:"Gain margin",b:"Phase margin",c:"Stability from characteristic equation",d:"Transient response",ans:"c",exp:"Routh-Hurwitz determines if all roots of the characteristic equation are in the left half plane (stable) without finding actual roots."},
{id:52,sec:"sq-ctrl",q:"Root locus starts at _____ and ends at _____:",a:"Zeros, poles",b:"Poles, zeros",c:"Origin, infinity",d:"Infinity, origin",ans:"b",exp:"Root locus starts at open-loop poles (K=0) and ends at open-loop zeros (K→∞), including zeros at infinity."},
{id:53,sec:"sq-ctrl",q:"Phase margin is measured at the _____ crossover frequency:",a:"Phase",b:"Gain",c:"Resonant",d:"Natural",ans:"b",exp:"Phase margin is measured at the gain crossover frequency (where |G(jω)| = 0 dB). PM = 180° + ∠G(jωgc)."},
{id:54,sec:"sq-ctrl",q:"The 'I' in PID controller eliminates:",a:"Overshoot",b:"Oscillation",c:"Steady-state error",d:"Noise",ans:"c",exp:"The integral term accumulates error over time, driving ess to zero. It adds a pole at origin (increases system type)."},
{id:55,sec:"sq-ctrl",q:"For a stable system, all poles must be in the:",a:"Right half of s-plane",b:"Left half of s-plane",c:"On the imaginary axis",d:"At the origin",ans:"b",exp:"For BIBO stability, all closed-loop poles must have negative real parts (left half of s-plane)."},
{id:56,sec:"sq-ctrl",q:"A lead compensator improves:",a:"Steady-state accuracy",b:"Transient response (faster, more stable)",c:"Low-frequency gain",d:"Noise rejection",ans:"b",exp:"Lead compensator adds phase at crossover → increases phase margin → faster response, better stability."},

// ═══ Measurement & Others (Q57-Q60) ═══
{id:57,sec:"sq-misc",q:"A Maxwell bridge measures:",a:"Capacitance",b:"Inductance",c:"Frequency",d:"Temperature",ans:"b",exp:"Maxwell bridge measures unknown inductance L and its resistance R using a standard capacitor as reference."},
{id:58,sec:"sq-misc",q:"The overall efficiency of a thermal power plant is typically:",a:"85-90%",b:"60-70%",c:"33-42%",d:"10-15%",ans:"c",exp:"Thermal power plants have ~33-42% efficiency. Major losses occur in the condenser (heat rejection to cooling water)."},
{id:59,sec:"sq-misc",q:"A protective relay should be:",a:"Fast but not selective",b:"Reliable, selective, fast, and sensitive",c:"Only sensitive",d:"Only reliable",ans:"b",exp:"A good protective relay must be: Reliable (operate when needed), Selective (trip only faulted section), Fast, and Sensitive."},
{id:60,sec:"sq-misc",q:"In a CMOS inverter, when input is HIGH, the output is:",a:"HIGH",b:"LOW",c:"Floating",d:"Oscillating",ans:"b",exp:"Input HIGH → NMOS ON, PMOS OFF → output connected to GND → output LOW. This is the basic inverter operation."}
];
