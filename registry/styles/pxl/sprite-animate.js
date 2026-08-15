const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, matchUtilities }) => {
  matchUtilities(
    {
      "sprite-animate": (value) => {
        const frames = value
          .split(",")
          .map((f) => parseInt(f.trim(), 10))
          .filter((n) => !Number.isNaN(n));

        if (frames.length === 0) return {};

        const n = frames.length;
        const name = `sprite-animate-${frames.join("-")}`;

        const cols = "var(--sprite-cols, 1)";
        const rows = "var(--sprite-rows, 1)";

        const keyframes = {};

        frames.forEach((frame, i) => {
          const start = (i / n) * 100;
          const end = ((i + 1) / n) * 100 - 0.001;

          /*
           * floor(frame / cols)
           *
           * round(x - 0.5) ≈ floor(x)
           */
          const row = `round(${frame} / ${cols} - 0.5)`;

          /*
           * frame % cols
           *
           * frame - floor(frame / cols) * cols
           */
          const column = `(${frame} - (${row}) * ${cols})`;

          const x = `calc(
            ${column} / max(${cols} - 1, 1) * 100%
          )`;

          const y = `calc(
            ${row} / max(${rows} - 1, 1) * 100%
          )`;

          keyframes[`${start}%, ${end}%`] = {
            backgroundPosition: `${x} ${y}`,
          };
        });

        addUtilities({
          [`@keyframes ${name}`]: keyframes,
        });

        return {
          animation: `${name} var(--sprite-duration, 600ms) steps(1) infinite`,
        };
      },
    },
    { type: "any" },
  );
});