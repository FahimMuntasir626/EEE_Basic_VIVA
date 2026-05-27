/* ═══════════════════════════════════════════════════════════════
   INTRODUCTION QUIZ — 30 MCQ Questions
   Topics: Op-Amp, 555 Timer, BJT, MOSFET, FET
   ═══════════════════════════════════════════════════════════════ */

const INTRO_SECTIONS = [
  { id:"opamp", icon:"⚡", name:"Op-Amp (IC 741)", color:"#6c63ff" },
  { id:"timer555", icon:"⏱️", name:"555 Timer", color:"#f06595" },
  { id:"bjt", icon:"🔀", name:"BJT", color:"#339af0" },
  { id:"mosfet", icon:"💠", name:"MOSFET", color:"#20c997" },
  { id:"fet", icon:"🔶", name:"FET (JFET)", color:"#ffd43b" }
];

const INTRO_QUESTIONS = [

// ═══ Op-Amp (Q1-Q6) ═══
{ id:1, sec:"opamp",
  q:"How many pins does the IC 741 Op-Amp have?",
  a:"14 pins", b:"16 pins", c:"8 pins", d:"6 pins",
  ans:"c",
  exp:"The 741 op-amp comes in an 8-pin DIP package. Pin 1 & 5: Offset Null, Pin 2: Inverting Input (−), Pin 3: Non-Inverting Input (+), Pin 4: V−, Pin 6: Output, Pin 7: V+, Pin 8: NC." },

{ id:2, sec:"opamp",
  q:"What is the ideal open-loop voltage gain of an op-amp?",
  a:"100", b:"10,000", c:"200,000", d:"Infinity (∞)",
  ans:"d",
  exp:"An ideal op-amp has infinite open-loop gain. Practically, the 741 has a gain of about 200,000 (106 dB)." },

{ id:3, sec:"opamp",
  q:"The gain of an inverting amplifier is given by:",
  a:"A = 1 + Rf/Rin", b:"A = −Rf/Rin", c:"A = Rf × Rin", d:"A = Rin/Rf",
  ans:"b",
  exp:"For an inverting amplifier, Gain = −Rf/Rin. The negative sign indicates 180° phase inversion." },

{ id:4, sec:"opamp",
  q:"What is the concept of 'virtual ground' in an op-amp inverting amplifier?",
  a:"The ground pin is not connected", b:"The inverting input is at approximately 0V due to feedback", c:"The output is always zero", d:"Both inputs are physically grounded",
  ans:"b",
  exp:"In an inverting configuration with negative feedback, the high open-loop gain forces V+ ≈ V−. Since the non-inverting input is grounded, the inverting input sits at ~0V — called 'virtual ground'." },

{ id:5, sec:"opamp",
  q:"What does CMRR stand for in op-amp specifications?",
  a:"Common Mode Resistance Ratio", b:"Common Mode Rejection Ratio", c:"Current Mode Rejection Ratio", d:"Capacitive Mode Reactance Ratio",
  ans:"b",
  exp:"CMRR = Common Mode Rejection Ratio. It measures the ability to reject signals common to both inputs. Ideal CMRR is infinite. The 741 has CMRR of ~90 dB." },

{ id:6, sec:"opamp",
  q:"A voltage follower (unity gain buffer) has a gain of:",
  a:"0", b:"−1", c:"+1", d:"Infinity",
  ans:"c",
  exp:"A voltage follower has Gain = +1 (100% of input). It has very high input impedance and very low output impedance, ideal for impedance matching." },

// ═══ 555 Timer (Q7-Q12) ═══
{ id:7, sec:"timer555",
  q:"How many pins does the 555 Timer IC have?",
  a:"14 pins", b:"6 pins", c:"8 pins", d:"10 pins",
  ans:"c",
  exp:"The NE555 timer comes in an 8-pin DIP package: Pin 1-GND, Pin 2-Trigger, Pin 3-Output, Pin 4-Reset, Pin 5-Control Voltage, Pin 6-Threshold, Pin 7-Discharge, Pin 8-Vcc." },

{ id:8, sec:"timer555",
  q:"The internal voltage divider of the 555 timer creates reference voltages of:",
  a:"½Vcc and Vcc", b:"⅓Vcc and ⅔Vcc", c:"¼Vcc and ¾Vcc", d:"Vcc/5 and 4Vcc/5",
  ans:"b",
  exp:"The three equal 5kΩ resistors create voltage levels of ⅓Vcc (lower comparator threshold) and ⅔Vcc (upper comparator threshold)." },

{ id:9, sec:"timer555",
  q:"In astable mode, the 555 timer output frequency is given by:",
  a:"f = 1/(2πRC)", b:"f = 1.44/((R₁+2R₂)×C)", c:"f = 1/(RC)", d:"f = 2.2/(R×C)",
  ans:"b",
  exp:"In astable mode, f = 1.44/((R₁+2R₂)×C), where R₁ and R₂ are timing resistors and C is the timing capacitor." },

{ id:10, sec:"timer555",
  q:"In monostable mode, the output pulse width of the 555 timer is:",
  a:"T = RC", b:"T = 2.2RC", c:"T = 1.1RC", d:"T = 0.693RC",
  ans:"c",
  exp:"In monostable mode, the output pulse width T = 1.1 × R × C. The output goes HIGH for this duration after a trigger pulse." },

{ id:11, sec:"timer555",
  q:"Pin 4 (Reset) of the 555 Timer is an active-low input. When it is pulled LOW, the output:",
  a:"Goes HIGH", b:"Oscillates", c:"Is forced LOW regardless of other inputs", d:"Is not affected",
  ans:"c",
  exp:"The Reset pin is active-low. When pulled below 0.7V, it forces the output LOW and the discharge transistor ON, overriding all other inputs. For normal operation, Reset should be connected to Vcc." },

{ id:12, sec:"timer555",
  q:"The 555 Timer supply voltage range is typically:",
  a:"1.5V to 5V", b:"4.5V to 16V", c:"3V to 36V", d:"12V to 24V",
  ans:"b",
  exp:"The NE555 operates from 4.5V to 16V (15V max recommended). The CMOS version (TLC555) can operate from 2V to 15V." },

// ═══ BJT (Q13-Q18) ═══
{ id:13, sec:"bjt",
  q:"In an NPN BJT, the arrow on the emitter symbol points:",
  a:"Inward (toward the base)", b:"Outward (away from the base)", c:"Upward", d:"There is no arrow",
  ans:"b",
  exp:"In NPN BJT, the emitter arrow points outward (away from the base). Memory trick: NPN = Not Pointing iN. The arrow shows conventional current direction." },

{ id:14, sec:"bjt",
  q:"The relationship between collector current (Ic), base current (Ib), and current gain (β) is:",
  a:"Ic = Ib/β", b:"Ic = β × Ib", c:"Ic = β + Ib", d:"Ib = β × Ic",
  ans:"b",
  exp:"Ic = β × Ib. The current gain β (also called hFE) is typically 50–300 for small-signal BJTs. A small base current controls a much larger collector current." },

{ id:15, sec:"bjt",
  q:"The forward bias voltage of a silicon BJT (VBE) is approximately:",
  a:"0.3V", b:"0.5V", c:"0.7V", d:"1.2V",
  ans:"c",
  exp:"For a silicon BJT, VBE ≈ 0.7V when forward-biased. For germanium BJTs, VBE ≈ 0.3V. This is the voltage needed to turn ON the base-emitter junction." },

{ id:16, sec:"bjt",
  q:"In the active region of a BJT:",
  a:"Both junctions are forward-biased", b:"Both junctions are reverse-biased", c:"BE is forward-biased, BC is reverse-biased", d:"BE is reverse-biased, BC is forward-biased",
  ans:"c",
  exp:"In the active region (used for amplification), the base-emitter (BE) junction is forward-biased and the base-collector (BC) junction is reverse-biased. Ic = β × Ib." },

{ id:17, sec:"bjt",
  q:"Which BJT configuration provides both voltage and current gain?",
  a:"Common Base (CB)", b:"Common Collector (CC)", c:"Common Emitter (CE)", d:"None of the above",
  ans:"c",
  exp:"The Common Emitter (CE) configuration provides both high voltage gain and high current gain. It also has 180° phase inversion and is the most commonly used configuration." },

{ id:18, sec:"bjt",
  q:"In the saturation region of a BJT, VCE(sat) is approximately:",
  a:"0V", b:"0.2V", c:"0.7V", d:"5V",
  ans:"b",
  exp:"In saturation, both BE and BC junctions are forward-biased. VCE(sat) ≈ 0.2V (nearly zero). The transistor acts like a closed switch." },

// ═══ MOSFET (Q19-Q24) ═══
{ id:19, sec:"mosfet",
  q:"A MOSFET is a:",
  a:"Current-controlled device", b:"Voltage-controlled device", c:"Resistance-controlled device", d:"Temperature-controlled device",
  ans:"b",
  exp:"MOSFET is a voltage-controlled device. The gate voltage (VGS) controls the drain current. No gate current flows because the gate is insulated by SiO₂." },

{ id:20, sec:"mosfet",
  q:"An enhancement-mode N-channel MOSFET is normally:",
  a:"ON", b:"OFF", c:"Oscillating", d:"Saturated",
  ans:"b",
  exp:"Enhancement-mode MOSFETs are normally OFF. They need VGS > Vth (threshold voltage) to create a conducting channel and turn ON." },

{ id:21, sec:"mosfet",
  q:"The threshold voltage (Vth) of a MOSFET is:",
  a:"The maximum drain voltage", b:"The minimum VGS to create a conducting channel", c:"The breakdown voltage", d:"The supply voltage",
  ans:"b",
  exp:"Threshold voltage (Vth) is the minimum gate-source voltage required to form a conducting channel between drain and source. Typically 1–3V for standard MOSFETs." },

{ id:22, sec:"mosfet",
  q:"The gate of a MOSFET is insulated by:",
  a:"Air gap", b:"Silicon dioxide (SiO₂)", c:"Mica", d:"Rubber",
  ans:"b",
  exp:"The gate is separated from the channel by a very thin layer of silicon dioxide (SiO₂), giving the MOSFET its extremely high input impedance (10⁹ to 10¹⁵ Ω)." },

{ id:23, sec:"mosfet",
  q:"In CMOS technology, complementary pairs of which transistors are used?",
  a:"NPN and PNP BJTs", b:"N-channel and P-channel MOSFETs", c:"N-JFET and P-JFET", d:"Enhancement and depletion MOSFETs",
  ans:"b",
  exp:"CMOS (Complementary MOS) uses paired N-channel and P-channel enhancement MOSFETs. This allows zero static power consumption and is the basis of modern digital ICs." },

{ id:24, sec:"mosfet",
  q:"In the saturation region of a MOSFET, the drain current ID is:",
  a:"Zero", b:"Proportional to VDS", c:"Approximately constant (independent of VDS)", d:"Decreasing with VDS",
  ans:"c",
  exp:"In saturation (VDS ≥ VGS − Vth), the drain current is approximately constant. ID = K(VGS − Vth)², independent of VDS. This region is used for amplification." },

// ═══ FET/JFET (Q25-Q30) ═══
{ id:25, sec:"fet",
  q:"A JFET is a normally _____ device:",
  a:"OFF", b:"ON", c:"Unstable", d:"Bidirectional",
  ans:"b",
  exp:"JFETs are normally ON (depletion-mode) devices. Maximum current flows when VGS = 0V. Applying reverse bias to the gate pinches off the channel and reduces current." },

{ id:26, sec:"fet",
  q:"The pinch-off voltage (VP) of a JFET is the VGS at which:",
  a:"Maximum current flows", b:"The channel is fully depleted and ID ≈ 0", c:"The device breaks down", d:"VDS reaches maximum",
  ans:"b",
  exp:"Pinch-off voltage (VP) is the VGS value that fully depletes the channel, reducing drain current to approximately zero. For N-channel JFET, VP is negative." },

{ id:27, sec:"fet",
  q:"IDSS in a JFET refers to:",
  a:"Drain current at VGS = VP", b:"Maximum drain current when VGS = 0", c:"Gate leakage current", d:"Source current at saturation",
  ans:"b",
  exp:"IDSS is the drain current at VGS = 0V (maximum current through the JFET). It's a key parameter. The Shockley equation: ID = IDSS(1 − VGS/VP)²." },

{ id:28, sec:"fet",
  q:"In an N-channel JFET symbol, the gate arrow points:",
  a:"Outward (away from the channel)", b:"Inward (toward the channel)", c:"Upward", d:"There is no arrow",
  ans:"b",
  exp:"In N-channel JFET, the gate arrow points inward (toward the channel), indicating the direction of conventional current flow in the PN junction." },

{ id:29, sec:"fet",
  q:"Compared to a BJT, a JFET has:",
  a:"Lower input impedance", b:"Higher input impedance", c:"Same input impedance", d:"No input impedance",
  ans:"b",
  exp:"JFETs have much higher input impedance (10⁸–10¹² Ω) compared to BJTs (~kΩ). This is because the gate junction is reverse-biased, drawing negligible current." },

{ id:30, sec:"fet",
  q:"The JFET drain current equation (Shockley equation) is:",
  a:"ID = IDSS(VGS/VP)²", b:"ID = IDSS(1 − VGS/VP)²", c:"ID = IDSS × VGS", d:"ID = β × IB",
  ans:"b",
  exp:"The Shockley equation: ID = IDSS(1 − VGS/VP)². At VGS = 0, ID = IDSS. At VGS = VP, ID = 0. This is a parabolic transfer characteristic." }
];
