/* ═══════════════════════════════════════════════════════════════
   FILTER QUIZ — 20 MCQ Questions
   ═══════════════════════════════════════════════════════════════ */

const FILTER_QUIZ_SECTIONS = [
  { id:"fq-gen", icon:"📉", name:"Filter Fundamentals", color:"#6c63ff" },
  { id:"fq-lpf", icon:"📉", name:"Low-Pass Filters", color:"#20c997" },
  { id:"fq-hpf", icon:"📈", name:"High-Pass Filters", color:"#ff922b" },
  { id:"fq-notch", icon:"🚫", name:"Notch Filters", color:"#da77f2" }
];

const FILTER_QUIZ_QUESTIONS = [
{id:1,sec:"fq-gen",q:"The cutoff frequency of a filter is defined as the −___ dB point:",a:"1",b:"3",c:"6",d:"20",ans:"b",exp:"The cutoff frequency is the −3 dB point where output power is half the passband power (voltage = 0.707 of passband)."},
{id:2,sec:"fq-gen",q:"A 3rd order filter has a roll-off rate of:",a:"−20 dB/decade",b:"−40 dB/decade",c:"−60 dB/decade",d:"−80 dB/decade",ans:"c",exp:"Each order adds −20 dB/decade. 3rd order = 3 × (−20) = −60 dB/decade."},
{id:3,sec:"fq-gen",q:"The Butterworth filter response is also called:",a:"Equi-ripple",b:"Maximally flat magnitude",c:"Constant delay",d:"Elliptic",ans:"b",exp:"Butterworth = maximally flat magnitude response (no ripple in passband). Chebyshev = equi-ripple. Bessel = maximally flat delay."},
{id:4,sec:"fq-gen",q:"An active filter uses _____ to provide gain:",a:"Inductors",b:"Op-amps",c:"Transformers",d:"Crystals",ans:"b",exp:"Active filters use op-amps (or transistors) to provide gain, buffering, and eliminate the need for inductors."},
{id:5,sec:"fq-gen",q:"The Sallen-Key topology uses the op-amp in _____ configuration:",a:"Inverting",b:"Differential",c:"Non-inverting",d:"Comparator",ans:"c",exp:"Sallen-Key uses the op-amp as a non-inverting amplifier (often with gain for Q adjustment)."},
{id:6,sec:"fq-lpf",q:"For a 1st order RC LPF, the cutoff frequency is:",a:"fc = 2πRC",b:"fc = RC",c:"fc = 1/(2πRC)",d:"fc = R/(2πC)",ans:"c",exp:"fc = 1/(2πRC). This is the fundamental formula for RC filter cutoff frequency."},
{id:7,sec:"fq-lpf",q:"At the cutoff frequency, the gain of a Butterworth LPF is:",a:"0 dB",b:"−3 dB",c:"−6 dB",d:"−20 dB",ans:"b",exp:"By definition, the cutoff frequency is the −3 dB point (voltage = 0.707 × passband gain)."},
{id:8,sec:"fq-lpf",q:"A 2nd order Butterworth LPF has Q = :",a:"0.5",b:"0.707",c:"1.0",d:"1.414",ans:"b",exp:"Q = 1/√2 ≈ 0.707 for the maximally flat Butterworth response. This ensures no peaking at cutoff."},
{id:9,sec:"fq-lpf",q:"An anti-aliasing filter is a _____ placed before an ADC:",a:"High-pass filter",b:"Band-pass filter",c:"Low-pass filter",d:"Notch filter",ans:"c",exp:"Anti-aliasing filter is a LPF that removes frequencies above fs/2 (Nyquist frequency) before sampling."},
{id:10,sec:"fq-lpf",q:"A passive RC LPF has maximum gain of:",a:"10",b:"2",c:"1 (unity)",d:"Infinity",ans:"c",exp:"Passive filters cannot amplify. Maximum gain is 1 (0 dB) at frequencies well below fc."},
{id:11,sec:"fq-hpf",q:"A high-pass filter blocks:",a:"High frequencies",b:"Low frequencies and DC",c:"All frequencies",d:"Only DC",ans:"b",exp:"A HPF attenuates frequencies below the cutoff and completely blocks DC (0 Hz)."},
{id:12,sec:"fq-hpf",q:"To convert a Sallen-Key LPF to HPF, you:",a:"Increase gain",b:"Swap resistors and capacitors",c:"Add an inductor",d:"Reverse the op-amp inputs",ans:"b",exp:"The HPF is the 'dual' of the LPF. Swap all R↔C positions to convert LPF to HPF."},
{id:13,sec:"fq-hpf",q:"At DC (0 Hz), a HPF output is:",a:"Maximum",b:"Equal to input",c:"Zero",d:"Undefined",ans:"c",exp:"At DC, capacitors in the HPF are open circuits, completely blocking the signal. Output = 0."},
{id:14,sec:"fq-hpf",q:"The phase shift of a 1st order HPF at the cutoff frequency is:",a:"0°",b:"+45°",c:"+90°",d:"+180°",ans:"b",exp:"A 1st order HPF has +45° phase shift at fc. Phase goes from +90° (f << fc) to 0° (f >> fc)."},
{id:15,sec:"fq-hpf",q:"A 2nd order HPF has a roll-off below cutoff of:",a:"−20 dB/decade",b:"−40 dB/decade",c:"−60 dB/decade",d:"−6 dB/octave",ans:"b",exp:"2nd order HPF: −40 dB/decade (−12 dB/octave) roll-off in the stopband below the cutoff frequency."},
{id:16,sec:"fq-notch",q:"A notch filter is also called a:",a:"Low-pass filter",b:"High-pass filter",c:"Band-reject filter",d:"All-pass filter",ans:"c",exp:"A notch filter is a type of band-reject (band-stop) filter that rejects a very narrow band of frequencies."},
{id:17,sec:"fq-notch",q:"The Twin-T network for a notch filter consists of:",a:"Two inductors",b:"Two T-networks in parallel (R-C-R and C-R-C)",c:"Two transformers",d:"Two op-amps",ans:"b",exp:"Twin-T has two parallel T-networks: one R-C-R (lowpass path) and one C-R-C (highpass path) that cancel at f₀."},
{id:18,sec:"fq-notch",q:"A notch filter at 50 Hz is used to remove:",a:"DC offset",b:"Power line interference (hum)",c:"Radio frequency noise",d:"Ultrasonic signals",ans:"b",exp:"50 Hz notch filters remove power line hum from audio and biomedical signals (50 Hz mains frequency)."},
{id:19,sec:"fq-notch",q:"Adding an op-amp to a passive Twin-T notch filter improves:",a:"The notch frequency",b:"The Q factor (sharper notch)",c:"The power consumption",d:"The physical size",ans:"b",exp:"A passive Twin-T has Q ≈ 0.25 (very wide notch). An op-amp with positive feedback increases Q dramatically (to 50+)."},
{id:20,sec:"fq-notch",q:"The depth of a notch filter primarily depends on:",a:"Op-amp gain",b:"Power supply voltage",c:"Component matching accuracy",d:"Temperature",ans:"c",exp:"Component matching determines how well the two paths cancel at f₀. Better matching (1% tolerance) = deeper notch (−40 to −60 dB)."}
];
