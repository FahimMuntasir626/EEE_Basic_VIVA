/* ═══════════════════════════════════════════════════════════════
   EEE VIVA BOARD — SVG DIAGRAM GENERATORS
   All pin diagrams, circuit diagrams, and technical illustrations
   ═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   COMPONENT LEARN CONTENT
   Builds the "Fast Learn" sections
   ───────────────────────────────────────────── */

function buildComponentContent() {
  buildOpAmpContent();
  buildTimer555Content();
  buildBJTContent();
  buildMOSFETContent();
  buildFETContent();
}

/* ═══════════════════════════════════════════════════
   1. OP-AMP (IC 741)
   ═══════════════════════════════════════════════════ */
function buildOpAmpContent() {
  const el = document.getElementById('comp-opamp');
  el.innerHTML = `
    <div class="diagram-grid">
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">IC 741</span>
          <h3>Op-Amp Pin Diagram</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 420 280" class="pin-svg">
            <rect x="120" y="30" width="180" height="220" rx="12" fill="#12122a" stroke="#6c63ff" stroke-width="2.5"/>
            <circle cx="210" cy="52" r="8" fill="none" stroke="#6c63ff" stroke-width="1.5" stroke-dasharray="3,2"/>
            <text x="210" y="148" text-anchor="middle" fill="#e0e0ff" font-size="18" font-weight="700" font-family="JetBrains Mono">741</text>
            <text x="210" y="168" text-anchor="middle" fill="#6c63ff" font-size="10" font-family="JetBrains Mono">OP-AMP</text>
            <!-- Left pins -->
            <line x1="30" y1="65" x2="120" y2="65" stroke="#ff6b6b" stroke-width="2"/>
            <text x="25" y="69" text-anchor="end" fill="#ff6b6b" font-size="11" font-family="JetBrains Mono">1 Offset Null</text>
            <line x1="30" y1="115" x2="120" y2="115" stroke="#51cf66" stroke-width="2"/>
            <text x="25" y="119" text-anchor="end" fill="#51cf66" font-size="11" font-family="JetBrains Mono">2 Inv Input (−)</text>
            <line x1="30" y1="165" x2="120" y2="165" stroke="#339af0" stroke-width="2"/>
            <text x="25" y="169" text-anchor="end" fill="#339af0" font-size="11" font-family="JetBrains Mono">3 Non-Inv (+)</text>
            <line x1="30" y1="215" x2="120" y2="215" stroke="#ffd43b" stroke-width="2"/>
            <text x="25" y="219" text-anchor="end" fill="#ffd43b" font-size="11" font-family="JetBrains Mono">4 V−</text>
            <!-- Right pins -->
            <line x1="300" y1="65" x2="390" y2="65" stroke="#ff6b6b" stroke-width="2"/>
            <text x="395" y="69" text-anchor="start" fill="#ff6b6b" font-size="11" font-family="JetBrains Mono">8 NC</text>
            <line x1="300" y1="115" x2="390" y2="115" stroke="#f783ac" stroke-width="2"/>
            <text x="395" y="119" text-anchor="start" fill="#f783ac" font-size="11" font-family="JetBrains Mono">7 V+</text>
            <line x1="300" y1="165" x2="390" y2="165" stroke="#da77f2" stroke-width="2"/>
            <text x="395" y="169" text-anchor="start" fill="#da77f2" font-size="11" font-family="JetBrains Mono">6 Output</text>
            <line x1="300" y1="215" x2="390" y2="215" stroke="#ffd43b" stroke-width="2"/>
            <text x="395" y="219" text-anchor="start" fill="#ffd43b" font-size="11" font-family="JetBrains Mono">5 Offset Null</text>
          </svg>
        </div>
      </div>
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">Symbol</span>
          <h3>Op-Amp Circuit Symbol</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 400 260" class="pin-svg">
            <!-- Triangle -->
            <polygon points="100,30 100,230 320,130" fill="none" stroke="#6c63ff" stroke-width="2.5" stroke-linejoin="round"/>
            <!-- Input labels -->
            <line x1="30" y1="90" x2="100" y2="90" stroke="#51cf66" stroke-width="2"/>
            <text x="108" y="95" fill="#51cf66" font-size="18" font-weight="700" font-family="JetBrains Mono">−</text>
            <text x="22" y="94" text-anchor="end" fill="#51cf66" font-size="12" font-family="JetBrains Mono">Inverting</text>
            <line x1="30" y1="170" x2="100" y2="170" stroke="#339af0" stroke-width="2"/>
            <text x="108" y="176" fill="#339af0" font-size="18" font-weight="700" font-family="JetBrains Mono">+</text>
            <text x="22" y="174" text-anchor="end" fill="#339af0" font-size="12" font-family="JetBrains Mono">Non-Inv</text>
            <!-- Output -->
            <line x1="320" y1="130" x2="380" y2="130" stroke="#da77f2" stroke-width="2"/>
            <text x="385" y="134" fill="#da77f2" font-size="12" font-family="JetBrains Mono">Output</text>
            <!-- Power -->
            <line x1="200" y1="30" x2="200" y2="0" stroke="#f783ac" stroke-width="1.5" stroke-dasharray="4,3"/>
            <text x="200" y="-5" text-anchor="middle" fill="#f783ac" font-size="11" font-family="JetBrains Mono">V+</text>
            <line x1="200" y1="230" x2="200" y2="258" stroke="#ffd43b" stroke-width="1.5" stroke-dasharray="4,3"/>
            <text x="200" y="270" text-anchor="middle" fill="#ffd43b" font-size="11" font-family="JetBrains Mono">V−</text>
          </svg>
        </div>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">📖</span> Working Principle of Op-Amp
      </div>
      <div class="learn-card__body">
        <p>The <strong>Operational Amplifier (Op-Amp)</strong> is a high-gain, DC-coupled differential voltage amplifier. It amplifies the <em>difference</em> between two input voltages.</p>
        <p><strong>Key Equation:</strong> V<sub>out</sub> = A<sub>OL</sub> × (V<sub>+</sub> − V<sub>−</sub>), where A<sub>OL</sub> is the open-loop gain (≈200,000 for 741).</p>
        <div class="key-points">
          <h4>⚡ Key Characteristics</h4>
          <ul>
            <li><strong>Ideal Input Impedance:</strong> ∞ (draws zero current)</li>
            <li><strong>Ideal Output Impedance:</strong> 0 Ω (drives any load)</li>
            <li><strong>Ideal Open-Loop Gain:</strong> ∞</li>
            <li><strong>Ideal Bandwidth:</strong> ∞</li>
            <li><strong>CMRR (Common Mode Rejection Ratio):</strong> ∞ (ideally)</li>
            <li><strong>Slew Rate (741):</strong> 0.5 V/μs</li>
            <li><strong>GBP (741):</strong> 1 MHz</li>
          </ul>
        </div>
        <p><strong>Virtual Ground Concept:</strong> In an inverting amplifier with negative feedback, the inverting input (−) is at approximately 0V because the high gain forces V<sub>+</sub> ≈ V<sub>−</sub>.</p>
        <p><strong>Applications:</strong> Inverting/Non-inverting amplifier, Summing amplifier, Integrator, Differentiator, Comparator, Active filters, Oscillators, Voltage followers (buffers).</p>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">📐</span> Op-Amp Configurations
      </div>
      <div class="learn-card__body">
        <p><strong>Inverting Amplifier:</strong> Gain = −R<sub>f</sub>/R<sub>in</sub> (180° phase inversion)</p>
        <p><strong>Non-Inverting Amplifier:</strong> Gain = 1 + R<sub>f</sub>/R<sub>in</sub> (in-phase output)</p>
        <p><strong>Voltage Follower:</strong> Gain = +1 (unity gain buffer, impedance matching)</p>
        <p><strong>Summing Amplifier:</strong> V<sub>out</sub> = −R<sub>f</sub>(V₁/R₁ + V₂/R₂ + V₃/R₃)</p>
        <p><strong>Integrator:</strong> V<sub>out</sub> = −(1/RC) ∫V<sub>in</sub> dt</p>
        <p><strong>Differentiator:</strong> V<sub>out</sub> = −RC × dV<sub>in</sub>/dt</p>
        <div class="key-points">
          <h4>💡 Negative Feedback Effects</h4>
          <ul>
            <li>Reduces gain but increases bandwidth</li>
            <li>Improves linearity and reduces distortion</li>
            <li>Stabilizes the circuit</li>
            <li>Gain-bandwidth product remains constant (GBP = A × BW)</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════
   2. 555 TIMER (NE555)
   ═══════════════════════════════════════════════════ */
function buildTimer555Content() {
  const el = document.getElementById('comp-timer555');
  el.innerHTML = `
    <div class="diagram-grid">
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">NE555</span>
          <h3>555 Timer Pin Diagram</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 420 280" class="pin-svg">
            <rect x="120" y="30" width="180" height="220" rx="12" fill="#12122a" stroke="#f06595" stroke-width="2.5"/>
            <circle cx="210" cy="52" r="8" fill="none" stroke="#f06595" stroke-width="1.5" stroke-dasharray="3,2"/>
            <text x="210" y="148" text-anchor="middle" fill="#ffe0ef" font-size="18" font-weight="700" font-family="JetBrains Mono">555</text>
            <text x="210" y="168" text-anchor="middle" fill="#f06595" font-size="10" font-family="JetBrains Mono">TIMER</text>
            <!-- Left pins -->
            <line x1="30" y1="65" x2="120" y2="65" stroke="#ffd43b" stroke-width="2"/>
            <text x="25" y="69" text-anchor="end" fill="#ffd43b" font-size="11" font-family="JetBrains Mono">1 GND</text>
            <line x1="30" y1="115" x2="120" y2="115" stroke="#51cf66" stroke-width="2"/>
            <text x="25" y="119" text-anchor="end" fill="#51cf66" font-size="11" font-family="JetBrains Mono">2 Trigger</text>
            <line x1="30" y1="165" x2="120" y2="165" stroke="#da77f2" stroke-width="2"/>
            <text x="25" y="169" text-anchor="end" fill="#da77f2" font-size="11" font-family="JetBrains Mono">3 Output</text>
            <line x1="30" y1="215" x2="120" y2="215" stroke="#ff6b6b" stroke-width="2"/>
            <text x="25" y="219" text-anchor="end" fill="#ff6b6b" font-size="11" font-family="JetBrains Mono">4 Reset</text>
            <!-- Right pins -->
            <line x1="300" y1="65" x2="390" y2="65" stroke="#ff922b" stroke-width="2"/>
            <text x="395" y="69" text-anchor="start" fill="#ff922b" font-size="11" font-family="JetBrains Mono">8 Vcc</text>
            <line x1="300" y1="115" x2="390" y2="115" stroke="#339af0" stroke-width="2"/>
            <text x="395" y="119" text-anchor="start" fill="#339af0" font-size="11" font-family="JetBrains Mono">7 Discharge</text>
            <line x1="300" y1="165" x2="390" y2="165" stroke="#20c997" stroke-width="2"/>
            <text x="395" y="169" text-anchor="start" fill="#20c997" font-size="11" font-family="JetBrains Mono">6 Threshold</text>
            <line x1="300" y1="215" x2="390" y2="215" stroke="#f783ac" stroke-width="2"/>
            <text x="395" y="219" text-anchor="start" fill="#f783ac" font-size="11" font-family="JetBrains Mono">5 Ctrl Voltage</text>
          </svg>
        </div>
      </div>
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">Internal</span>
          <h3>555 Internal Block Diagram</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 400 300" class="pin-svg">
            <!-- Voltage divider resistors -->
            <rect x="180" y="10" width="40" height="30" rx="4" fill="none" stroke="#ff922b" stroke-width="1.5"/>
            <text x="200" y="30" text-anchor="middle" fill="#ff922b" font-size="9" font-family="JetBrains Mono">R=5kΩ</text>
            <rect x="180" y="55" width="40" height="30" rx="4" fill="none" stroke="#ff922b" stroke-width="1.5"/>
            <text x="200" y="75" text-anchor="middle" fill="#ff922b" font-size="9" font-family="JetBrains Mono">R=5kΩ</text>
            <rect x="180" y="100" width="40" height="30" rx="4" fill="none" stroke="#ff922b" stroke-width="1.5"/>
            <text x="200" y="120" text-anchor="middle" fill="#ff922b" font-size="9" font-family="JetBrains Mono">R=5kΩ</text>
            <line x1="200" y1="40" x2="200" y2="55" stroke="#ff922b" stroke-width="1"/>
            <line x1="200" y1="85" x2="200" y2="100" stroke="#ff922b" stroke-width="1"/>
            <!-- Comparators -->
            <polygon points="260,45 260,85 310,65" fill="none" stroke="#339af0" stroke-width="1.5"/>
            <text x="280" y="69" text-anchor="middle" fill="#339af0" font-size="8" font-family="JetBrains Mono">C1</text>
            <polygon points="260,95 260,135 310,115" fill="none" stroke="#20c997" stroke-width="1.5"/>
            <text x="280" y="119" text-anchor="middle" fill="#20c997" font-size="8" font-family="JetBrains Mono">C2</text>
            <!-- 2/3 Vcc & 1/3 Vcc labels -->
            <text x="235" y="55" text-anchor="start" fill="#ffd43b" font-size="8" font-family="JetBrains Mono">⅔Vcc</text>
            <text x="235" y="107" text-anchor="start" fill="#ffd43b" font-size="8" font-family="JetBrains Mono">⅓Vcc</text>
            <!-- SR Flip-Flop -->
            <rect x="320" y="70" width="55" height="50" rx="6" fill="none" stroke="#da77f2" stroke-width="1.5"/>
            <text x="347" y="85" text-anchor="middle" fill="#da77f2" font-size="8" font-weight="600" font-family="JetBrains Mono">S</text>
            <text x="347" y="100" text-anchor="middle" fill="#da77f2" font-size="9" font-weight="700" font-family="JetBrains Mono">FF</text>
            <text x="347" y="115" text-anchor="middle" fill="#da77f2" font-size="8" font-weight="600" font-family="JetBrains Mono">R</text>
            <!-- Output stage -->
            <rect x="320" y="150" width="55" height="30" rx="6" fill="none" stroke="#f06595" stroke-width="1.5"/>
            <text x="347" y="169" text-anchor="middle" fill="#f06595" font-size="8" font-family="JetBrains Mono">OUTPUT</text>
            <!-- Discharge transistor -->
            <circle cx="347" cy="210" r="12" fill="none" stroke="#51cf66" stroke-width="1.5"/>
            <text x="347" y="214" text-anchor="middle" fill="#51cf66" font-size="8" font-family="JetBrains Mono">Q</text>
            <text x="347" y="235" text-anchor="middle" fill="#51cf66" font-size="8" font-family="JetBrains Mono">DISCH</text>
            <!-- Labels -->
            <text x="200" y="150" text-anchor="middle" fill="#9a9ab8" font-size="8" font-family="JetBrains Mono">Voltage</text>
            <text x="200" y="162" text-anchor="middle" fill="#9a9ab8" font-size="8" font-family="JetBrains Mono">Divider</text>
          </svg>
        </div>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">📖</span> Working Principle of 555 Timer
      </div>
      <div class="learn-card__body">
        <p>The <strong>555 Timer IC</strong> is a versatile integrated circuit that can be configured as an oscillator, timer, or pulse generator. It contains a <em>voltage divider</em> (3 × 5kΩ resistors), <em>two comparators</em>, an <em>SR flip-flop</em>, a <em>discharge transistor</em>, and an <em>output stage</em>.</p>
        <p><strong>Internal Threshold Voltages:</strong> The three equal resistors create reference voltages of ⅔Vcc (upper) and ⅓Vcc (lower).</p>
        <div class="key-points">
          <h4>⚡ Pin Functions</h4>
          <ul>
            <li><strong>Pin 1 (GND):</strong> Ground reference</li>
            <li><strong>Pin 2 (Trigger):</strong> Input to lower comparator — when voltage drops below ⅓Vcc, output goes HIGH</li>
            <li><strong>Pin 3 (Output):</strong> Output signal (can source/sink ~200mA)</li>
            <li><strong>Pin 4 (Reset):</strong> Active-low reset — forces output LOW when pulled low</li>
            <li><strong>Pin 5 (Control Voltage):</strong> Access to the ⅔Vcc point — for modulation</li>
            <li><strong>Pin 6 (Threshold):</strong> Input to upper comparator — when voltage exceeds ⅔Vcc, output goes LOW</li>
            <li><strong>Pin 7 (Discharge):</strong> Connected to internal transistor — discharges timing capacitor</li>
            <li><strong>Pin 8 (Vcc):</strong> Supply voltage (4.5V to 16V)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">🔁</span> Modes of Operation
      </div>
      <div class="learn-card__body">
        <p><strong>1. Astable Mode</strong> (Free-running oscillator): Continuously oscillates between HIGH and LOW. No stable state. Frequency = 1.44 / ((R₁ + 2R₂) × C).</p>
        <p><strong>2. Monostable Mode</strong> (One-shot timer): Produces a single output pulse of fixed duration when triggered. Pulse width T = 1.1 × R × C.</p>
        <p><strong>3. Bistable Mode</strong> (Flip-flop): Output toggles between HIGH and LOW based on trigger and reset inputs. Two stable states.</p>
        <div class="key-points">
          <h4>💡 Applications</h4>
          <ul>
            <li>LED flasher, tone generator, PWM controller</li>
            <li>Time delay circuits, missing pulse detector</li>
            <li>Frequency divider, sawtooth generator</li>
            <li>Touch switch, bounce-free switch</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════
   3. BJT (Bipolar Junction Transistor)
   ═══════════════════════════════════════════════════ */
function buildBJTContent() {
  const el = document.getElementById('comp-bjt');
  el.innerHTML = `
    <div class="diagram-grid">
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">NPN</span>
          <h3>NPN BJT Pin Diagram</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 380 300" class="pin-svg">
            <!-- Transistor symbol -->
            <line x1="100" y1="150" x2="170" y2="150" stroke="#339af0" stroke-width="2.5"/>
            <text x="80" y="155" text-anchor="end" fill="#339af0" font-size="13" font-weight="700" font-family="JetBrains Mono">Base (B)</text>
            <line x1="170" y1="90" x2="170" y2="210" stroke="#6c63ff" stroke-width="3"/>
            <!-- Collector -->
            <line x1="170" y1="110" x2="260" y2="60" stroke="#ff6b6b" stroke-width="2.5"/>
            <line x1="260" y1="60" x2="260" y2="30" stroke="#ff6b6b" stroke-width="2.5"/>
            <text x="270" y="35" fill="#ff6b6b" font-size="13" font-weight="700" font-family="JetBrains Mono">Collector (C)</text>
            <!-- Emitter with arrow -->
            <line x1="170" y1="190" x2="260" y2="240" stroke="#20c997" stroke-width="2.5"/>
            <line x1="260" y1="240" x2="260" y2="270" stroke="#20c997" stroke-width="2.5"/>
            <polygon points="230,225 260,240 240,215" fill="#20c997"/>
            <text x="270" y="270" fill="#20c997" font-size="13" font-weight="700" font-family="JetBrains Mono">Emitter (E)</text>
            <!-- Circle -->
            <circle cx="210" cy="150" r="55" fill="none" stroke="#6c63ff" stroke-width="1.5" stroke-dasharray="4,3"/>
            <!-- Label -->
            <text x="190" y="288" text-anchor="middle" fill="#9a9ab8" font-size="11" font-family="JetBrains Mono">NPN — Arrow points OUT</text>
          </svg>
        </div>
      </div>
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">PNP</span>
          <h3>PNP BJT Pin Diagram</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 380 300" class="pin-svg">
            <line x1="100" y1="150" x2="170" y2="150" stroke="#339af0" stroke-width="2.5"/>
            <text x="80" y="155" text-anchor="end" fill="#339af0" font-size="13" font-weight="700" font-family="JetBrains Mono">Base (B)</text>
            <line x1="170" y1="90" x2="170" y2="210" stroke="#f06595" stroke-width="3"/>
            <!-- Collector -->
            <line x1="170" y1="110" x2="260" y2="60" stroke="#ff6b6b" stroke-width="2.5"/>
            <line x1="260" y1="60" x2="260" y2="30" stroke="#ff6b6b" stroke-width="2.5"/>
            <text x="270" y="35" fill="#ff6b6b" font-size="13" font-weight="700" font-family="JetBrains Mono">Collector (C)</text>
            <!-- Emitter with arrow pointing IN -->
            <line x1="170" y1="190" x2="260" y2="240" stroke="#20c997" stroke-width="2.5"/>
            <line x1="260" y1="240" x2="260" y2="270" stroke="#20c997" stroke-width="2.5"/>
            <polygon points="190,200 170,190 185,215" fill="#20c997"/>
            <text x="270" y="270" fill="#20c997" font-size="13" font-weight="700" font-family="JetBrains Mono">Emitter (E)</text>
            <circle cx="210" cy="150" r="55" fill="none" stroke="#f06595" stroke-width="1.5" stroke-dasharray="4,3"/>
            <text x="190" y="288" text-anchor="middle" fill="#9a9ab8" font-size="11" font-family="JetBrains Mono">PNP — Arrow points IN</text>
          </svg>
        </div>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">📖</span> Working Principle of BJT
      </div>
      <div class="learn-card__body">
        <p>A <strong>Bipolar Junction Transistor (BJT)</strong> is a current-controlled device made of three layers of semiconductor material (NPN or PNP). It has three terminals: <strong>Base (B)</strong>, <strong>Collector (C)</strong>, and <strong>Emitter (E)</strong>.</p>
        <p><strong>NPN BJT:</strong> Current flows from Collector to Emitter when a small base current is applied. The arrow on the emitter points <em>outward</em> (Not Pointing iN).</p>
        <p><strong>PNP BJT:</strong> Current flows from Emitter to Collector. The arrow on the emitter points <em>inward</em> (Pointing iN).</p>
        <div class="key-points">
          <h4>⚡ Key Relationships</h4>
          <ul>
            <li><strong>I<sub>C</sub> = β × I<sub>B</sub></strong> (Collector current = gain × Base current)</li>
            <li><strong>I<sub>E</sub> = I<sub>C</sub> + I<sub>B</sub></strong> (Kirchhoff's Current Law)</li>
            <li><strong>β (hFE):</strong> Current gain, typically 50–300 for small-signal BJTs</li>
            <li><strong>V<sub>BE</sub> ≈ 0.7V</strong> (Silicon BJT forward bias)</li>
            <li><strong>V<sub>BE</sub> ≈ 0.3V</strong> (Germanium BJT forward bias)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">🔀</span> Regions of Operation
      </div>
      <div class="learn-card__body">
        <p><strong>1. Active Region:</strong> BE junction forward-biased, BC junction reverse-biased. Used for <em>amplification</em>. I<sub>C</sub> = β × I<sub>B</sub>.</p>
        <p><strong>2. Saturation Region:</strong> Both junctions forward-biased. Transistor is fully ON (like a closed switch). V<sub>CE(sat)</sub> ≈ 0.2V.</p>
        <p><strong>3. Cutoff Region:</strong> Both junctions reverse-biased. Transistor is fully OFF (like an open switch). I<sub>C</sub> ≈ 0.</p>
        <p><strong>4. Reverse Active:</strong> BE reverse-biased, BC forward-biased. Rarely used in practice.</p>
        <div class="key-points">
          <h4>💡 BJT Configurations</h4>
          <ul>
            <li><strong>Common Emitter (CE):</strong> High voltage & current gain. Phase inversion. Most used.</li>
            <li><strong>Common Base (CB):</strong> High voltage gain, current gain < 1. Good for high-frequency.</li>
            <li><strong>Common Collector (CC):</strong> Unity voltage gain, high current gain. Emitter follower/buffer.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════
   4. MOSFET
   ═══════════════════════════════════════════════════ */
function buildMOSFETContent() {
  const el = document.getElementById('comp-mosfet');
  el.innerHTML = `
    <div class="diagram-grid">
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">N-Channel</span>
          <h3>N-Channel Enhancement MOSFET</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 380 300" class="pin-svg">
            <!-- Gate -->
            <line x1="60" y1="150" x2="140" y2="150" stroke="#339af0" stroke-width="2.5"/>
            <text x="50" y="155" text-anchor="end" fill="#339af0" font-size="13" font-weight="700" font-family="JetBrains Mono">Gate (G)</text>
            <!-- Gate plate -->
            <line x1="140" y1="80" x2="140" y2="220" stroke="#339af0" stroke-width="2.5"/>
            <!-- Channel (broken for enhancement) -->
            <line x1="160" y1="80" x2="160" y2="110" stroke="#6c63ff" stroke-width="2"/>
            <line x1="160" y1="130" x2="160" y2="170" stroke="#6c63ff" stroke-width="2"/>
            <line x1="160" y1="190" x2="160" y2="220" stroke="#6c63ff" stroke-width="2"/>
            <!-- Drain -->
            <line x1="160" y1="90" x2="260" y2="90" stroke="#ff6b6b" stroke-width="2.5"/>
            <line x1="260" y1="90" x2="260" y2="40" stroke="#ff6b6b" stroke-width="2.5"/>
            <text x="270" y="45" fill="#ff6b6b" font-size="13" font-weight="700" font-family="JetBrains Mono">Drain (D)</text>
            <!-- Source -->
            <line x1="160" y1="210" x2="260" y2="210" stroke="#20c997" stroke-width="2.5"/>
            <line x1="260" y1="210" x2="260" y2="260" stroke="#20c997" stroke-width="2.5"/>
            <text x="270" y="260" fill="#20c997" font-size="13" font-weight="700" font-family="JetBrains Mono">Source (S)</text>
            <!-- Arrow pointing IN (N-channel) -->
            <polygon points="175,210 160,210 167,195" fill="#20c997"/>
            <!-- Body connection -->
            <line x1="160" y1="150" x2="260" y2="150" stroke="#9a9ab8" stroke-width="1" stroke-dasharray="3,3"/>
            <!-- Circle -->
            <circle cx="200" cy="150" r="60" fill="none" stroke="#6c63ff" stroke-width="1.5" stroke-dasharray="4,3"/>
            <text x="200" y="285" text-anchor="middle" fill="#9a9ab8" font-size="11" font-family="JetBrains Mono">Enhancement N-MOSFET</text>
          </svg>
        </div>
      </div>
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">P-Channel</span>
          <h3>P-Channel Enhancement MOSFET</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 380 300" class="pin-svg">
            <line x1="60" y1="150" x2="140" y2="150" stroke="#339af0" stroke-width="2.5"/>
            <text x="50" y="155" text-anchor="end" fill="#339af0" font-size="13" font-weight="700" font-family="JetBrains Mono">Gate (G)</text>
            <line x1="140" y1="80" x2="140" y2="220" stroke="#339af0" stroke-width="2.5"/>
            <line x1="160" y1="80" x2="160" y2="110" stroke="#f06595" stroke-width="2"/>
            <line x1="160" y1="130" x2="160" y2="170" stroke="#f06595" stroke-width="2"/>
            <line x1="160" y1="190" x2="160" y2="220" stroke="#f06595" stroke-width="2"/>
            <!-- Drain -->
            <line x1="160" y1="90" x2="260" y2="90" stroke="#ff6b6b" stroke-width="2.5"/>
            <line x1="260" y1="90" x2="260" y2="40" stroke="#ff6b6b" stroke-width="2.5"/>
            <text x="270" y="45" fill="#ff6b6b" font-size="13" font-weight="700" font-family="JetBrains Mono">Drain (D)</text>
            <!-- Source -->
            <line x1="160" y1="210" x2="260" y2="210" stroke="#20c997" stroke-width="2.5"/>
            <line x1="260" y1="210" x2="260" y2="260" stroke="#20c997" stroke-width="2.5"/>
            <text x="270" y="260" fill="#20c997" font-size="13" font-weight="700" font-family="JetBrains Mono">Source (S)</text>
            <!-- Arrow pointing OUT (P-channel) -->
            <polygon points="175,210 190,203 190,217" fill="#20c997"/>
            <line x1="160" y1="150" x2="260" y2="150" stroke="#9a9ab8" stroke-width="1" stroke-dasharray="3,3"/>
            <circle cx="200" cy="150" r="60" fill="none" stroke="#f06595" stroke-width="1.5" stroke-dasharray="4,3"/>
            <text x="200" y="285" text-anchor="middle" fill="#9a9ab8" font-size="11" font-family="JetBrains Mono">Enhancement P-MOSFET</text>
          </svg>
        </div>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">📖</span> Working Principle of MOSFET
      </div>
      <div class="learn-card__body">
        <p>The <strong>MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)</strong> is a <em>voltage-controlled</em> device with three terminals: <strong>Gate (G)</strong>, <strong>Drain (D)</strong>, and <strong>Source (S)</strong>.</p>
        <p>Unlike BJTs, the gate is <strong>electrically insulated</strong> from the channel by a thin silicon dioxide (SiO₂) layer, giving it an extremely high input impedance (10⁹ to 10¹⁵ Ω).</p>
        <div class="key-points">
          <h4>⚡ Key Characteristics</h4>
          <ul>
            <li><strong>Voltage-controlled:</strong> Gate voltage controls drain current (no gate current flows)</li>
            <li><strong>Very high input impedance:</strong> Ideal for sensitive circuits</li>
            <li><strong>Enhancement mode:</strong> Normally OFF — needs V<sub>GS</sub> > V<sub>th</sub> to conduct</li>
            <li><strong>Depletion mode:</strong> Normally ON — conducts at V<sub>GS</sub> = 0</li>
            <li><strong>N-Channel:</strong> Electrons carry current. Faster. More common.</li>
            <li><strong>P-Channel:</strong> Holes carry current. Complementary to N-channel.</li>
          </ul>
        </div>
        <p><strong>Drain Current Equation (Saturation):</strong> I<sub>D</sub> = K(V<sub>GS</sub> − V<sub>th</sub>)², where K = ½μ<sub>n</sub>C<sub>ox</sub>(W/L).</p>
        <p><strong>Threshold Voltage (V<sub>th</sub>):</strong> Minimum gate-source voltage required to create a conducting channel. Typically 1–3V for enhancement MOSFETs.</p>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">💠</span> MOSFET Regions of Operation
      </div>
      <div class="learn-card__body">
        <p><strong>1. Cutoff Region:</strong> V<sub>GS</sub> < V<sub>th</sub>. No channel formed. MOSFET is OFF.</p>
        <p><strong>2. Linear (Ohmic/Triode) Region:</strong> V<sub>GS</sub> > V<sub>th</sub> and V<sub>DS</sub> < V<sub>GS</sub> − V<sub>th</sub>. Acts like a variable resistor.</p>
        <p><strong>3. Saturation Region:</strong> V<sub>GS</sub> > V<sub>th</sub> and V<sub>DS</sub> ≥ V<sub>GS</sub> − V<sub>th</sub>. Used for amplification. I<sub>D</sub> ≈ constant.</p>
        <div class="key-points">
          <h4>💡 Applications</h4>
          <ul>
            <li>Digital circuits (CMOS logic gates — billions on a single chip)</li>
            <li>Power switching (motor drivers, power supplies)</li>
            <li>Analog amplifiers, voltage regulators</li>
            <li>RF amplifiers, impedance matching circuits</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════
   5. FET (JFET)
   ═══════════════════════════════════════════════════ */
function buildFETContent() {
  const el = document.getElementById('comp-fet');
  el.innerHTML = `
    <div class="diagram-grid">
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">N-Channel</span>
          <h3>N-Channel JFET</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 380 300" class="pin-svg">
            <!-- Channel -->
            <line x1="180" y1="40" x2="180" y2="260" stroke="#6c63ff" stroke-width="3"/>
            <!-- Gate -->
            <line x1="60" y1="150" x2="180" y2="150" stroke="#339af0" stroke-width="2.5"/>
            <polygon points="165,143 180,150 165,157" fill="#339af0"/>
            <text x="50" y="155" text-anchor="end" fill="#339af0" font-size="13" font-weight="700" font-family="JetBrains Mono">Gate (G)</text>
            <!-- Drain -->
            <line x1="180" y1="60" x2="280" y2="60" stroke="#ff6b6b" stroke-width="2.5"/>
            <text x="290" y="65" fill="#ff6b6b" font-size="13" font-weight="700" font-family="JetBrains Mono">Drain (D)</text>
            <!-- Source -->
            <line x1="180" y1="240" x2="280" y2="240" stroke="#20c997" stroke-width="2.5"/>
            <text x="290" y="245" fill="#20c997" font-size="13" font-weight="700" font-family="JetBrains Mono">Source (S)</text>
            <circle cx="210" cy="150" r="60" fill="none" stroke="#6c63ff" stroke-width="1.5" stroke-dasharray="4,3"/>
            <text x="200" y="285" text-anchor="middle" fill="#9a9ab8" font-size="11" font-family="JetBrains Mono">N-Channel JFET — Arrow IN</text>
          </svg>
        </div>
      </div>
      <div class="pin-diagram-card">
        <div class="pin-diagram-card__header">
          <span class="pin-diagram-card__chip">P-Channel</span>
          <h3>P-Channel JFET</h3>
        </div>
        <div class="pin-diagram-card__body">
          <svg viewBox="0 0 380 300" class="pin-svg">
            <line x1="180" y1="40" x2="180" y2="260" stroke="#f06595" stroke-width="3"/>
            <line x1="60" y1="150" x2="180" y2="150" stroke="#339af0" stroke-width="2.5"/>
            <polygon points="85,143 70,150 85,157" fill="#339af0"/>
            <text x="50" y="155" text-anchor="end" fill="#339af0" font-size="13" font-weight="700" font-family="JetBrains Mono">Gate (G)</text>
            <line x1="180" y1="60" x2="280" y2="60" stroke="#ff6b6b" stroke-width="2.5"/>
            <text x="290" y="65" fill="#ff6b6b" font-size="13" font-weight="700" font-family="JetBrains Mono">Drain (D)</text>
            <line x1="180" y1="240" x2="280" y2="240" stroke="#20c997" stroke-width="2.5"/>
            <text x="290" y="245" fill="#20c997" font-size="13" font-weight="700" font-family="JetBrains Mono">Source (S)</text>
            <circle cx="210" cy="150" r="60" fill="none" stroke="#f06595" stroke-width="1.5" stroke-dasharray="4,3"/>
            <text x="200" y="285" text-anchor="middle" fill="#9a9ab8" font-size="11" font-family="JetBrains Mono">P-Channel JFET — Arrow OUT</text>
          </svg>
        </div>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">📖</span> Working Principle of JFET
      </div>
      <div class="learn-card__body">
        <p>The <strong>Junction Field-Effect Transistor (JFET)</strong> is a <em>voltage-controlled</em>, <em>depletion-mode</em> device. It has three terminals: <strong>Gate (G)</strong>, <strong>Drain (D)</strong>, and <strong>Source (S)</strong>.</p>
        <p>Unlike MOSFETs, JFETs use a <strong>reverse-biased PN junction</strong> to control the channel width. They are <em>normally ON</em> devices — current flows when V<sub>GS</sub> = 0.</p>
        <div class="key-points">
          <h4>⚡ Key Characteristics</h4>
          <ul>
            <li><strong>Normally ON:</strong> Conducts when V<sub>GS</sub> = 0V (depletion mode)</li>
            <li><strong>Pinch-off Voltage (V<sub>P</sub>):</strong> V<sub>GS</sub> at which channel is fully depleted and I<sub>D</sub> ≈ 0</li>
            <li><strong>I<sub>DSS</sub>:</strong> Maximum drain current when V<sub>GS</sub> = 0</li>
            <li><strong>Very high input impedance:</strong> 10⁸ to 10¹² Ω</li>
            <li><strong>Unipolar device:</strong> Current carried by only one type of charge carrier</li>
            <li><strong>N-Channel JFET:</strong> Gate arrow points <em>inward</em></li>
            <li><strong>P-Channel JFET:</strong> Gate arrow points <em>outward</em></li>
          </ul>
        </div>
        <p><strong>Drain Current Equation:</strong> I<sub>D</sub> = I<sub>DSS</sub>(1 − V<sub>GS</sub>/V<sub>P</sub>)² (Shockley equation)</p>
      </div>
    </div>

    <div class="learn-card">
      <div class="learn-card__title">
        <span class="learn-card__title-icon">🔶</span> JFET vs MOSFET vs BJT Comparison
      </div>
      <div class="learn-card__body">
        <div class="key-points">
          <h4>📊 Comparison Table</h4>
          <ul>
            <li><strong>BJT:</strong> Current-controlled, bipolar, moderate Z<sub>in</sub> (~kΩ), used for power amplification</li>
            <li><strong>JFET:</strong> Voltage-controlled, unipolar, high Z<sub>in</sub> (~MΩ–GΩ), normally ON, depletion mode</li>
            <li><strong>MOSFET:</strong> Voltage-controlled, unipolar, very high Z<sub>in</sub> (~GΩ–TΩ), both enhancement & depletion</li>
          </ul>
        </div>
        <p><strong>JFET Applications:</strong> Low-noise amplifiers, analog switches, constant current sources, voltage-controlled resistors, AGC circuits, high-impedance buffers.</p>
        <p><strong>JFET Configurations:</strong> Common Source (CS — voltage gain, like CE), Common Gate (CG — like CB), Common Drain (CD — buffer, like CC).</p>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════
   QUIZ DIAGRAM HELPER
   Returns SVG string for specific quiz questions
   ═══════════════════════════════════════════════════ */
function getQuizDiagram(section, questionId) {
  return ''; // Diagrams are embedded inline where needed
}
