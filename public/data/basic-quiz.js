/* ═══════════════════════════════════════════════════════════════
   BASIC EEE QUIZ — 100 MCQ Questions
   Drawn from Basic Viva topics
   ═══════════════════════════════════════════════════════════════ */

const BASIC_QUIZ_SECTIONS = [
  { id:"bq-fund", icon:"⚡", name:"Fundamentals", color:"#6c63ff" },
  { id:"bq-comp", icon:"🔧", name:"Components", color:"#f06595" },
  { id:"bq-circ", icon:"🔌", name:"Circuits", color:"#339af0" },
  { id:"bq-ac",   icon:"〰️", name:"AC Theory", color:"#20c997" },
  { id:"bq-trans", icon:"🔄", name:"Transformers", color:"#ff922b" },
  { id:"bq-mach", icon:"⚙️", name:"Machines", color:"#da77f2" },
  { id:"bq-semi", icon:"💎", name:"Semiconductors", color:"#ffd43b" },
  { id:"bq-digi", icon:"🖥️", name:"Digital", color:"#51cf66" },
  { id:"bq-pow",  icon:"🔋", name:"Power Systems", color:"#ff6b6b" },
  { id:"bq-meas", icon:"📏", name:"Measurements", color:"#f783ac" }
];

const BASIC_QUIZ_QUESTIONS = [
// ═══ Fundamentals (Q1-Q10) ═══
{id:1,sec:"bq-fund",q:"Ohm's law states that V =",a:"I/R",b:"I × R",c:"R/I",d:"I² × R",ans:"b",exp:"Ohm's Law: V = I × R. Voltage equals current times resistance."},
{id:2,sec:"bq-fund",q:"KCL is based on the conservation of:",a:"Energy",b:"Momentum",c:"Charge",d:"Mass",ans:"c",exp:"Kirchhoff's Current Law is based on conservation of charge — total current entering a node equals total current leaving."},
{id:3,sec:"bq-fund",q:"KVL is based on the conservation of:",a:"Charge",b:"Energy",c:"Flux",d:"Mass",ans:"b",exp:"Kirchhoff's Voltage Law is based on conservation of energy — sum of voltages around a closed loop is zero."},
{id:4,sec:"bq-fund",q:"The unit of electrical power is:",a:"Joule",b:"Ampere",c:"Watt",d:"Volt",ans:"c",exp:"Power is measured in Watts (W). P = V × I = I²R = V²/R. 1 Watt = 1 Joule/second."},
{id:5,sec:"bq-fund",q:"In a series circuit, the total resistance is:",a:"Less than the smallest resistor",b:"Sum of all resistances",c:"Product over sum",d:"Average of all resistances",ans:"b",exp:"In series: Rt = R₁ + R₂ + R₃ + ... Total resistance is the sum."},
{id:6,sec:"bq-fund",q:"The reciprocal of resistance is called:",a:"Reactance",b:"Impedance",c:"Conductance",d:"Susceptance",ans:"c",exp:"Conductance (G) = 1/R, measured in Siemens (S). It indicates how easily current flows."},
{id:7,sec:"bq-fund",q:"Energy stored in a capacitor is:",a:"½CV²",b:"½LI²",c:"CV",d:"QV²",ans:"a",exp:"Energy stored in a capacitor E = ½CV², where C is capacitance and V is voltage."},
{id:8,sec:"bq-fund",q:"The time constant of an RC circuit is:",a:"R/C",b:"R × C",c:"R + C",d:"C/R",ans:"b",exp:"Time constant τ = RC. After one time constant, the capacitor charges to 63.2% of its final value."},
{id:9,sec:"bq-fund",q:"Faraday's law of electromagnetic induction relates to:",a:"Static charges",b:"Changing magnetic flux inducing EMF",c:"Ohm's law",d:"Capacitance",ans:"b",exp:"Faraday's law: EMF = −N × dΦ/dt. A changing magnetic flux through a coil induces an EMF."},
{id:10,sec:"bq-fund",q:"Thevenin's theorem replaces a circuit with:",a:"Current source and parallel resistance",b:"Voltage source and series resistance",c:"Only a voltage source",d:"Only a resistance",ans:"b",exp:"Thevenin's theorem: any linear circuit can be replaced by Vth in series with Rth."},

// ═══ Components (Q11-Q20) ═══
{id:11,sec:"bq-comp",q:"A Zener diode is used for:",a:"Rectification",b:"Amplification",c:"Voltage regulation",d:"Oscillation",ans:"c",exp:"A Zener diode operates in reverse breakdown, maintaining a constant voltage across its terminals."},
{id:12,sec:"bq-comp",q:"Forward voltage drop of a silicon diode is approximately:",a:"0.3V",b:"0.5V",c:"0.7V",d:"1.2V",ans:"c",exp:"Silicon PN junction diodes have a forward voltage drop of approximately 0.7V."},
{id:13,sec:"bq-comp",q:"An SCR can be turned OFF by:",a:"Removing gate signal",b:"Reducing anode current below holding current",c:"Increasing gate voltage",d:"Reversing gate polarity",ans:"b",exp:"Once latched, an SCR stays ON until anode current falls below the holding current (or anode-cathode voltage reverses)."},
{id:14,sec:"bq-comp",q:"The IGBT combines features of:",a:"Diode and thyristor",b:"MOSFET and BJT",c:"JFET and SCR",d:"LED and photodiode",ans:"b",exp:"IGBT has MOSFET's high input impedance (voltage-controlled gate) with BJT's low saturation voltage."},
{id:15,sec:"bq-comp",q:"A bridge rectifier uses how many diodes?",a:"1",b:"2",c:"4",d:"6",ans:"c",exp:"A bridge rectifier uses 4 diodes to convert both half-cycles of AC to DC (full-wave rectification)."},
{id:16,sec:"bq-comp",q:"A varistor (MOV) is used for:",a:"Amplification",b:"Voltage regulation",c:"Surge protection",d:"Frequency generation",ans:"c",exp:"A MOV clamps voltage spikes to protect equipment by absorbing surge energy."},
{id:17,sec:"bq-comp",q:"An optocoupler provides:",a:"Voltage amplification",b:"Electrical isolation",c:"Current multiplication",d:"Frequency doubling",ans:"b",exp:"An optocoupler uses LED + photodetector to transmit signals while maintaining electrical isolation between circuits."},
{id:18,sec:"bq-comp",q:"A Schottky diode has a forward drop of approximately:",a:"0.7V",b:"0.2-0.3V",c:"1.5V",d:"0V",ans:"b",exp:"Schottky diodes have lower forward voltage (~0.2-0.3V) and faster switching than silicon PN diodes."},
{id:19,sec:"bq-comp",q:"A current transformer secondary should NEVER be:",a:"Short-circuited",b:"Open-circuited",c:"Grounded",d:"Connected to a meter",ans:"b",exp:"An open CT secondary develops dangerously high voltage that can damage insulation and harm personnel."},
{id:20,sec:"bq-comp",q:"The 7805 voltage regulator provides a fixed output of:",a:"+3.3V",b:"+5V",c:"+12V",d:"+15V",ans:"b",exp:"7805 is a fixed positive voltage regulator providing +5V output. The '05' indicates the output voltage."},

// ═══ Circuits (Q21-Q30) ═══
{id:21,sec:"bq-circ",q:"In a Wheatstone bridge at balance, galvanometer current is:",a:"Maximum",b:"Zero",c:"Equal to source current",d:"Infinite",ans:"b",exp:"At balance (R₁/R₂ = R₃/R₄), no current flows through the galvanometer (null condition)."},
{id:22,sec:"bq-circ",q:"Maximum power transfer occurs when RL equals:",a:"Zero",b:"Infinity",c:"Source resistance Rs",d:"2 × Rs",ans:"c",exp:"Maximum power transfer theorem: RL = Rs for maximum power delivery to the load."},
{id:23,sec:"bq-circ",q:"Norton's equivalent consists of:",a:"Voltage source + series R",b:"Current source + parallel R",c:"Only a resistor",d:"Voltage source + parallel R",ans:"b",exp:"Norton's theorem: IN (current source) in parallel with RN (resistance). IN = Vth/Rth."},
{id:24,sec:"bq-circ",q:"The impedance of a series RLC circuit at resonance is:",a:"Zero",b:"R (minimum)",c:"Infinity",d:"XL",ans:"b",exp:"At resonance, XL = XC cancels out, leaving Z = R (minimum impedance, maximum current)."},
{id:25,sec:"bq-circ",q:"Star-delta transformation is used to simplify:",a:"Series circuits",b:"Parallel circuits",c:"Complex networks that can't be reduced by series-parallel",d:"DC circuits only",ans:"c",exp:"Y-Δ transformation converts between star and delta configurations to simplify complex networks."},
{id:26,sec:"bq-circ",q:"A dependent source's value depends on:",a:"Temperature",b:"A voltage or current elsewhere in the circuit",c:"Frequency",d:"Time only",ans:"b",exp:"A dependent (controlled) source has its output determined by another voltage or current in the circuit."},
{id:27,sec:"bq-circ",q:"The quality factor Q of a resonant circuit is defined as:",a:"R/BW",b:"fr/BW",c:"BW/fr",d:"fr × BW",ans:"b",exp:"Q = fr/BW = resonant frequency divided by bandwidth. Higher Q = sharper resonance."},
{id:28,sec:"bq-circ",q:"In nodal analysis, we write equations using:",a:"KVL at loops",b:"KCL at nodes",c:"Ohm's law only",d:"Power equations",ans:"b",exp:"Nodal analysis applies KCL at each node to write equations in terms of node voltages."},
{id:29,sec:"bq-circ",q:"Millman's theorem is used for circuits with:",a:"Single voltage source",b:"Multiple voltage sources in parallel",c:"No sources",d:"Only current sources",ans:"b",exp:"Millman's theorem simplifies finding the common node voltage when multiple voltage sources are in parallel."},
{id:30,sec:"bq-circ",q:"The Laplace variable 's' represents:",a:"Time",b:"Frequency only",c:"σ + jω (complex frequency)",d:"Resistance",ans:"c",exp:"s = σ + jω is the complex frequency variable. It converts time-domain differential equations to algebraic equations."},

// ═══ AC Theory (Q31-Q40) ═══
{id:31,sec:"bq-ac",q:"The RMS value of a sinusoidal AC voltage with peak 311V is approximately:",a:"110V",b:"220V",c:"311V",d:"440V",ans:"b",exp:"Vrms = Vpeak/√2 = 311/1.414 ≈ 220V. This is the standard mains voltage."},
{id:32,sec:"bq-ac",q:"In a purely inductive circuit, current _____ voltage by 90°:",a:"Leads",b:"Lags",c:"Is in phase with",d:"Is 180° out of phase with",ans:"b",exp:"In an inductor, current lags voltage by 90°. Mnemonic: ELI — in L, E (voltage) leads I (current)."},
{id:33,sec:"bq-ac",q:"In a purely capacitive circuit, current _____ voltage by 90°:",a:"Leads",b:"Lags",c:"Is in phase with",d:"Is 180° out of phase with",ans:"a",exp:"In a capacitor, current leads voltage by 90°. Mnemonic: ICE — in C, I (current) leads E (voltage)."},
{id:34,sec:"bq-ac",q:"Power factor of a purely resistive circuit is:",a:"0",b:"0.5",c:"0.85",d:"1 (unity)",ans:"d",exp:"In a purely resistive circuit, V and I are in phase (φ = 0°), so PF = cos(0°) = 1."},
{id:35,sec:"bq-ac",q:"In a star (Y) connected system, VL = :",a:"VP",b:"√3 × VP",c:"VP/√3",d:"2 × VP",ans:"b",exp:"In star connection, line voltage VL = √3 × phase voltage VP."},
{id:36,sec:"bq-ac",q:"Three-phase power is given by:",a:"VL × IL",b:"3 × VL × IL",c:"√3 × VL × IL × cosφ",d:"VL × IL × cosφ",ans:"c",exp:"Three-phase power P = √3 × VL × IL × cosφ for both star and delta connections."},
{id:37,sec:"bq-ac",q:"The frequency of AC supply in most of Asia and Europe is:",a:"50 Hz",b:"60 Hz",c:"100 Hz",d:"25 Hz",ans:"a",exp:"Most countries in Asia, Europe, and Africa use 50 Hz. The Americas and some parts of Asia use 60 Hz."},
{id:38,sec:"bq-ac",q:"Inductive reactance XL is given by:",a:"1/(2πfL)",b:"2πfL",c:"R × L",d:"L/f",ans:"b",exp:"XL = 2πfL = ωL. Inductive reactance increases with frequency and inductance."},
{id:39,sec:"bq-ac",q:"Capacitive reactance XC is given by:",a:"2πfC",b:"1/(2πfC)",c:"C/f",d:"f × C",ans:"b",exp:"XC = 1/(2πfC) = 1/(ωC). Capacitive reactance decreases with frequency and capacitance."},
{id:40,sec:"bq-ac",q:"At resonance in a series RLC circuit, the impedance equals:",a:"XL",b:"XC",c:"R",d:"Zero",ans:"c",exp:"At resonance, XL = XC (they cancel), leaving Z = R. Current is maximum and purely resistive."},

// ═══ Transformers (Q41-Q50) ═══
{id:41,sec:"bq-trans",q:"A transformer works on the principle of:",a:"Ohm's law",b:"Electromagnetic induction",c:"Electrostatics",d:"Photoelectric effect",ans:"b",exp:"A transformer works on Faraday's law of electromagnetic induction — changing flux in the primary induces EMF in the secondary."},
{id:42,sec:"bq-trans",q:"A step-up transformer:",a:"Increases current",b:"Increases voltage",c:"Increases power",d:"Increases frequency",ans:"b",exp:"A step-up transformer increases voltage (V₂ > V₁) while decreasing current (I₂ < I₁). Power remains approximately constant."},
{id:43,sec:"bq-trans",q:"The EMF equation of a transformer is E = :",a:"4.44fNΦm",b:"2πfNΦm",c:"NΦm/f",d:"f/(NΦm)",ans:"a",exp:"E = 4.44 × f × N × Φm, where f = frequency, N = turns, Φm = maximum flux."},
{id:44,sec:"bq-trans",q:"The open circuit test determines:",a:"Copper loss",b:"Core loss",c:"Total loss",d:"Mechanical loss",ans:"b",exp:"OC test (rated V, no load) determines core (iron) loss and magnetizing parameters. Core loss is constant."},
{id:45,sec:"bq-trans",q:"The short circuit test determines:",a:"Core loss",b:"Copper loss and equivalent impedance",c:"Efficiency only",d:"Voltage regulation only",ans:"b",exp:"SC test (reduced V, rated I) determines copper loss (I²R) and equivalent impedance (Zeq, Req, Xeq)."},
{id:46,sec:"bq-trans",q:"Maximum efficiency of a transformer occurs when:",a:"Load is maximum",b:"Core loss = Copper loss",c:"Core loss = 0",d:"Load is minimum",ans:"b",exp:"Maximum efficiency occurs when variable losses (copper loss, I²R) equal constant losses (core loss). This typically occurs at 50-75% of full load."},
{id:47,sec:"bq-trans",q:"A transformer does NOT work on DC because:",a:"DC cannot flow through windings",b:"DC produces constant flux, so dΦ/dt = 0 and no EMF is induced",c:"DC causes resonance",d:"Transformer core saturates instantly",ans:"b",exp:"DC produces constant flux. Faraday's law requires changing flux (dΦ/dt ≠ 0) to induce EMF."},
{id:48,sec:"bq-trans",q:"Transformer oil serves the purpose of:",a:"Lubrication only",b:"Insulation and cooling",c:"Increasing efficiency",d:"Reducing noise",ans:"b",exp:"Transformer oil provides electrical insulation between windings and removes heat by convection."},
{id:49,sec:"bq-trans",q:"The Buchholz relay is used in:",a:"All transformers",b:"Oil-filled transformers above 500 kVA",c:"Dry-type transformers only",d:"Air-cooled transformers",ans:"b",exp:"The Buchholz relay detects internal faults in oil-filled transformers by sensing gas produced from oil decomposition."},
{id:50,sec:"bq-trans",q:"An autotransformer has:",a:"Two separate windings",b:"A single winding common to both primary and secondary",c:"Three windings",d:"No magnetic core",ans:"b",exp:"An autotransformer uses a single continuous winding with a common section. Smaller and more efficient but no electrical isolation."},

// ═══ Machines (Q51-Q60) ═══
{id:51,sec:"bq-mach",q:"The back EMF in a DC motor:",a:"Aids the supply voltage",b:"Opposes the supply voltage",c:"Has no effect",d:"Equals the supply voltage",ans:"b",exp:"Back EMF opposes the supply voltage. Motor current Ia = (V − Eb)/Ra. It limits the current and indicates motor speed."},
{id:52,sec:"bq-mach",q:"Slip of an induction motor at no-load is approximately:",a:"100%",b:"50%",c:"1-3%",d:"0%",ans:"c",exp:"At no load, the rotor runs close to synchronous speed. Slip is very small (1-3%). Small slip is needed to maintain induced current and torque."},
{id:53,sec:"bq-mach",q:"Synchronous speed for a 4-pole, 50 Hz motor is:",a:"3000 RPM",b:"1500 RPM",c:"1000 RPM",d:"750 RPM",ans:"b",exp:"Ns = 120f/P = 120 × 50/4 = 1500 RPM."},
{id:54,sec:"bq-mach",q:"A synchronous motor runs at:",a:"Sub-synchronous speed",b:"Super-synchronous speed",c:"Exactly synchronous speed",d:"Variable speed",ans:"c",exp:"A synchronous motor runs at exactly Ns = 120f/P RPM, regardless of load (within limits)."},
{id:55,sec:"bq-mach",q:"Fleming's left-hand rule is used for:",a:"Generator action",b:"Motor action",c:"Transformer action",d:"Rectifier action",ans:"b",exp:"Fleming's left-hand rule: Index=Field, Middle=Current, Thumb=Force. Determines force direction on a current-carrying conductor in a magnetic field (motor)."},
{id:56,sec:"bq-mach",q:"Which DC motor has the highest starting torque?",a:"Shunt motor",b:"Series motor",c:"Compound motor",d:"PMDC motor",ans:"b",exp:"DC series motor has the highest starting torque because T ∝ Ia² (field flux is proportional to armature current)."},
{id:57,sec:"bq-mach",q:"A VFD controls motor speed by varying:",a:"Voltage only",b:"Current only",c:"Frequency and voltage",d:"Resistance",ans:"c",exp:"A VFD (Variable Frequency Drive) controls speed by varying both frequency and voltage to maintain V/f ratio."},
{id:58,sec:"bq-mach",q:"A stepper motor rotates in:",a:"Continuous motion",b:"Discrete angular steps",c:"Random increments",d:"Only one direction",ans:"b",exp:"A stepper motor rotates in fixed angular steps (e.g., 1.8° per step). Each pulse moves it one step."},
{id:59,sec:"bq-mach",q:"The squirrel cage rotor is used in:",a:"DC motors",b:"Synchronous motors",c:"Induction motors",d:"Universal motors",ans:"c",exp:"Squirrel cage rotors (short-circuited bars with end rings) are the most common rotor type in induction motors."},
{id:60,sec:"bq-mach",q:"Star-delta starter reduces starting current to:",a:"1/2",b:"1/√3",c:"1/3",d:"1/4",ans:"c",exp:"Star-delta starter reduces starting voltage to V/√3, which reduces starting current to 1/3 of DOL starting current."},

// ═══ Semiconductors (Q61-Q70) ═══
{id:61,sec:"bq-semi",q:"N-type semiconductor is created by doping with:",a:"Trivalent atoms (B, Al, Ga)",b:"Pentavalent atoms (P, As, Sb)",c:"Tetravalent atoms (Si, Ge)",d:"Noble gas atoms",ans:"b",exp:"Pentavalent (5 electrons) dopants add extra electrons to silicon, creating N-type material with electron majority carriers."},
{id:62,sec:"bq-semi",q:"The energy band gap of Silicon is approximately:",a:"0.67 eV",b:"1.12 eV",c:"1.42 eV",d:"3.4 eV",ans:"b",exp:"Si: Eg = 1.12 eV. Ge: 0.67 eV. GaAs: 1.42 eV. Eg determines the material's electrical and optical properties."},
{id:63,sec:"bq-semi",q:"The Darlington pair provides:",a:"Very low input impedance",b:"Very high current gain (β₁ × β₂)",c:"Voltage regulation",d:"Oscillation",ans:"b",exp:"Darlington pair cascades two BJTs. Total gain β_total = β₁ × β₂, which can exceed 10,000."},
{id:64,sec:"bq-semi",q:"For sustained oscillation, the Barkhausen criterion requires loop gain |Aβ| = :",a:"0",b:"< 1",c:"1",d:"> 1 always",ans:"c",exp:"Barkhausen: |Aβ| = 1 and total phase shift = 0° (or 360°) for sustained oscillation."},
{id:65,sec:"bq-semi",q:"A CE amplifier provides:",a:"No phase inversion",b:"180° phase inversion",c:"90° phase shift",d:"360° phase shift",ans:"b",exp:"Common Emitter amplifier inverts the signal by 180°. It also provides both voltage and current gain."},
{id:66,sec:"bq-semi",q:"Crossover distortion occurs in:",a:"Class A amplifiers",b:"Class B push-pull amplifiers",c:"Class C amplifiers",d:"Class D amplifiers",ans:"b",exp:"Class B has a dead zone near zero crossing where neither transistor conducts (VBE < 0.7V). Class AB biasing fixes this."},
{id:67,sec:"bq-semi",q:"Thermal runaway in BJT is prevented by:",a:"Removing the heat sink",b:"Increasing VCE",c:"Using emitter resistor (negative feedback)",d:"Using positive feedback",ans:"c",exp:"An emitter resistor provides negative feedback: if IC increases, VE increases, reducing VBE and limiting further IC increase."},
{id:68,sec:"bq-semi",q:"An astable multivibrator has:",a:"One stable state",b:"Two stable states",c:"No stable state",d:"Three stable states",ans:"c",exp:"Astable = no stable state. It continuously oscillates between HIGH and LOW (free-running square wave)."},
{id:69,sec:"bq-semi",q:"A monostable multivibrator produces:",a:"Continuous square wave",b:"Single pulse of fixed duration when triggered",c:"Sinusoidal wave",d:"Triangular wave",ans:"b",exp:"Monostable has one stable state. When triggered, it produces a single pulse of width T = 1.1RC, then returns to stable state."},
{id:70,sec:"bq-semi",q:"Voltage divider bias is preferred because it provides:",a:"Maximum gain",b:"Good bias stability against temperature changes",c:"No need for resistors",d:"Infinite bandwidth",ans:"b",exp:"Voltage divider bias provides the most stable Q-point against temperature changes and β variations."},

// ═══ Digital (Q71-Q80) ═══
{id:71,sec:"bq-digi",q:"De Morgan's theorem: (A·B)' = ",a:"A' · B'",b:"A' + B'",c:"A + B",d:"A · B",ans:"b",exp:"De Morgan's: complement of AND = OR of complements. (A·B)' = A' + B'."},
{id:72,sec:"bq-digi",q:"A NAND gate is called universal because:",a:"It's the most common gate",b:"It can implement any Boolean function",c:"It uses the least power",d:"It's the fastest gate",ans:"b",exp:"NAND and NOR are universal gates — any Boolean function (AND, OR, NOT, XOR, etc.) can be built using only NAND (or only NOR) gates."},
{id:73,sec:"bq-digi",q:"How many input combinations does a 3-input truth table have?",a:"3",b:"6",c:"8",d:"16",ans:"c",exp:"n inputs = 2ⁿ combinations. 3 inputs = 2³ = 8 combinations."},
{id:74,sec:"bq-digi",q:"A D flip-flop:",a:"Toggles on every clock pulse",b:"Stores the input data on the clock edge",c:"Has no clock input",d:"Has invalid states",ans:"b",exp:"A D (Data) flip-flop captures the input D value and holds it at the output Q on the active clock edge."},
{id:75,sec:"bq-digi",q:"The Nyquist sampling rate for a 10 kHz signal is:",a:"5 kHz",b:"10 kHz",c:"20 kHz",d:"40 kHz",ans:"c",exp:"Nyquist rate = 2 × fmax = 2 × 10 kHz = 20 kHz minimum sampling rate to avoid aliasing."},
{id:76,sec:"bq-digi",q:"An 8-bit ADC has how many quantization levels?",a:"8",b:"64",c:"128",d:"256",ans:"d",exp:"n-bit ADC has 2ⁿ levels. 8-bit = 2⁸ = 256 quantization levels."},
{id:77,sec:"bq-digi",q:"A 4-to-1 MUX has how many select lines?",a:"1",b:"2",c:"4",d:"8",ans:"b",exp:"A 2ⁿ-to-1 MUX needs n select lines. 4-to-1 MUX: n = 2 select lines."},
{id:78,sec:"bq-digi",q:"Binary 1010 equals decimal:",a:"8",b:"9",c:"10",d:"12",ans:"c",exp:"1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10₁₀."},
{id:79,sec:"bq-digi",q:"Which memory is volatile?",a:"ROM",b:"Flash",c:"EEPROM",d:"RAM",ans:"d",exp:"RAM (Random Access Memory) is volatile — data is lost when power is removed."},
{id:80,sec:"bq-digi",q:"A K-map is used for:",a:"Amplifier design",b:"Boolean expression simplification",c:"Power calculation",d:"Filter design",ans:"b",exp:"Karnaugh maps graphically simplify Boolean expressions by grouping adjacent minterms."},

// ═══ Power Systems (Q81-Q90) ═══
{id:81,sec:"bq-pow",q:"A circuit breaker's primary function is to:",a:"Measure current",b:"Interrupt fault current",c:"Step down voltage",d:"Store energy",ans:"b",exp:"A circuit breaker automatically opens to interrupt abnormal (fault) current and protect equipment."},
{id:82,sec:"bq-pow",q:"SF6 circuit breakers are used for:",a:"Low voltage only",b:"High voltage (132kV+)",c:"DC circuits only",d:"Residential use",ans:"b",exp:"SF6 (sulfur hexafluoride) breakers are used for high voltage due to SF6's excellent arc-quenching properties."},
{id:83,sec:"bq-pow",q:"The most common type of fault in power systems is:",a:"Three-phase fault",b:"Line-to-line fault",c:"Single line-to-ground (SLG) fault",d:"Double line-to-ground fault",ans:"c",exp:"SLG faults account for about 70% of all power system faults. Three-phase faults are rarest (~5%) but most severe."},
{id:84,sec:"bq-pow",q:"An isolator should be operated:",a:"Under full load",b:"Only when circuit is de-energized",c:"During fault conditions",d:"At any time",ans:"b",exp:"Isolators have NO arc-extinguishing capability. They must only be opened/closed when the circuit is already de-energized."},
{id:85,sec:"bq-pow",q:"Corona discharge occurs when:",a:"Current exceeds rated value",b:"Surface electric field exceeds air breakdown strength",c:"Voltage is below rated",d:"Cable insulation fails",ans:"b",exp:"Corona occurs when the conductor surface electric field exceeds ~30 kV/cm, causing ionization of surrounding air."},
{id:86,sec:"bq-pow",q:"The Ferranti effect causes receiving-end voltage to be:",a:"Lower than sending-end",b:"Equal to sending-end",c:"Higher than sending-end",d:"Zero",ans:"c",exp:"On long, lightly loaded lines, the capacitive charging current causes receiving-end voltage to exceed sending-end voltage."},
{id:87,sec:"bq-pow",q:"Demand factor = ",a:"Max demand / Connected load",b:"Connected load / Max demand",c:"Average demand / Max demand",d:"Max demand / Average demand",ans:"a",exp:"Demand factor = Maximum demand / Total connected load. It is always ≤ 1."},
{id:88,sec:"bq-pow",q:"Load flow analysis is used to determine:",a:"Fault currents only",b:"Steady-state voltages, currents, and power flows",c:"Transient response",d:"Insulation strength",ans:"b",exp:"Load flow calculates the steady-state operating conditions: bus voltages, line flows, losses, and power factor."},
{id:89,sec:"bq-pow",q:"A solar PV system generates:",a:"AC directly",b:"DC that needs an inverter for AC",c:"Three-phase AC",d:"High-frequency AC",ans:"b",exp:"PV cells generate DC. An inverter converts this DC to AC for grid connection or AC loads."},
{id:90,sec:"bq-pow",q:"The Betz limit for wind turbine efficiency is:",a:"100%",b:"59.3%",c:"33.3%",d:"75%",ans:"b",exp:"The Betz limit (Cp max = 16/27 ≈ 59.3%) is the theoretical maximum fraction of wind energy that can be extracted."},

// ═══ Measurements (Q91-Q100) ═══
{id:91,sec:"bq-meas",q:"A PMMC instrument can measure:",a:"AC only",b:"DC only",c:"Both AC and DC",d:"Frequency only",ans:"b",exp:"PMMC (Permanent Magnet Moving Coil) measures DC only. For AC, it needs a rectifier."},
{id:92,sec:"bq-meas",q:"A clamp meter measures current by:",a:"Breaking the circuit",b:"Sensing the magnetic field around a conductor",c:"Measuring voltage drop",d:"Using a shunt resistor",ans:"b",exp:"A clamp meter uses transformer principle (AC) or Hall effect (DC) to sense the magnetic field around a conductor without breaking the circuit."},
{id:93,sec:"bq-meas",q:"A megger is used to measure:",a:"Current",b:"Voltage",c:"Insulation resistance",d:"Frequency",ans:"c",exp:"A megger (insulation resistance tester) applies high DC voltage and measures the insulation resistance in MΩ."},
{id:94,sec:"bq-meas",q:"An oscilloscope displays:",a:"Current vs resistance",b:"Voltage vs time",c:"Power vs frequency",d:"Temperature vs time",ans:"b",exp:"An oscilloscope displays voltage waveforms as a function of time. It can show amplitude, frequency, phase, and waveform shape."},
{id:95,sec:"bq-meas",q:"Pt100 is a type of:",a:"Thermocouple",b:"Thermistor",c:"RTD (Resistance Temperature Detector)",d:"Strain gauge",ans:"c",exp:"Pt100 is a platinum RTD with 100Ω resistance at 0°C. It provides accurate, stable temperature measurement."},
{id:96,sec:"bq-meas",q:"The loading effect in measurement is reduced by using instruments with:",a:"Low input impedance",b:"High input impedance",c:"High sensitivity to temperature",d:"Low bandwidth",ans:"b",exp:"High input impedance draws less current from the circuit, minimizing the loading effect and giving more accurate readings."},
{id:97,sec:"bq-meas",q:"A wattmeter has two coils called:",a:"Primary and secondary",b:"Current coil and pressure (voltage) coil",c:"Input and output coils",d:"Field and armature coils",ans:"b",exp:"A wattmeter has a current coil (series, low impedance) and pressure/voltage coil (parallel, high impedance)."},
{id:98,sec:"bq-meas",q:"Polarization Index (PI) indicates:",a:"Motor speed",b:"Insulation quality",c:"Power factor",d:"Voltage regulation",ans:"b",exp:"PI = 10-minute resistance / 1-minute resistance. Higher PI indicates better insulation quality."},
{id:99,sec:"bq-meas",q:"The resolution of a 3½-digit DMM on a 2V range is approximately:",a:"1V",b:"0.1V",c:"0.01V",d:"0.001V (1mV)",ans:"d",exp:"3½-digit DMM: max count 1999. On 2V range: 2/1999 ≈ 0.001V = 1mV resolution."},
{id:100,sec:"bq-meas",q:"Two wattmeters can measure:",a:"Single-phase power only",b:"Three-phase power",c:"DC power only",d:"Reactive power only",ans:"b",exp:"The two-wattmeter method measures total three-phase power: P = W₁ + W₂. Also gives power factor information."}
];
