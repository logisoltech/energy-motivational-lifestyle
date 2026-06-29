function ThickBar() {
  return <div className="my-0.5 h-2 bg-black" aria-hidden />;
}

function ThinBar() {
  return <div className="h-px bg-black" aria-hidden />;
}

function NutrientRow({ label, value, dv, bold = false, indent = false }) {
  return (
    <>
      <div
        className={`flex items-baseline justify-between gap-2 py-px leading-tight ${
          indent ? "pl-4" : ""
        } ${bold ? "font-bold" : "font-normal"}`}
      >
        <span className="min-w-0">
          {label}
          {value != null && value !== "" && (
            <span className={bold ? "font-bold" : "font-normal"}> {value}</span>
          )}
        </span>
        {dv != null && <span className="shrink-0 font-bold">{dv}</span>}
      </div>
      <ThinBar />
    </>
  );
}

function GridCell({ left, right }) {
  return (
    <div className="grid grid-cols-2">
      <div className="border-r border-black px-1 py-px leading-tight">{left}</div>
      <div className="px-1 py-px leading-tight">{right}</div>
    </div>
  );
}

export default function NutritionFactsLabel({ className = "" }) {
  return (
    <div
      className={`w-full max-w-[240px] shrink-0 border-2 border-black bg-white p-1 text-[10px] leading-[1.15] text-black sm:max-w-[260px] sm:text-[11px] ${className}`}
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      aria-label="Nutrition Facts"
    >
      <h2 className="text-[1.85rem] font-black leading-none tracking-tight sm:text-[2rem]">
        Nutrition Facts
      </h2>

      <ThinBar />

      <p className="py-px leading-tight">serving per container</p>

      <div className="flex items-baseline justify-between gap-2 py-px leading-tight">
        <span className="font-bold">Serving size</span>
        <span>cup ( g)</span>
      </div>

      <ThickBar />

      <p className="py-px font-bold leading-tight">Amount per serving</p>

      <p className="py-px text-[1.85rem] font-black leading-none sm:text-[2rem]">
        Calories
      </p>

      <ThickBar />

      <div className="flex justify-end py-px font-bold leading-tight">
        <span>% Daily Value*</span>
      </div>

      <NutrientRow label="Total Fat" value="g" dv="%" bold />
      <NutrientRow label="Saturated Fat" value="g" dv="%" indent />
      <NutrientRow label="Trans Fat" value="g" indent />
      <NutrientRow label="Cholesterol" value="0g" dv="%" bold />
      <NutrientRow label="Sodium" value="mg" dv="%" bold />
      <NutrientRow label="Total Carbohydrate" value="g" dv="%" bold />
      <NutrientRow label="Dietary Fiber" value="g" dv="%" indent />
      <NutrientRow label="Total Sugars" value="g" indent />

      <div className="flex items-baseline justify-between gap-2 py-px pl-8 leading-tight">
        <span>Includes g Added Sugars</span>
        <span className="shrink-0 font-bold">%</span>
      </div>
      <ThinBar />

      <ThickBar />

      <p className="py-px font-bold leading-tight">Protein 28g</p>

      <ThickBar />

      <div className="border-b border-black">
        <GridCell left="Vitamin A %" right="Fokate %" />
        <ThinBar />
        <GridCell left="B12" right="Zinc" />
        <ThinBar />
        <GridCell left="C" right="Chromium" />
        <ThinBar />
        <GridCell left="D" right="Panth Acid" />
        <ThinBar />
        <GridCell left="E" right="Nacin" />
        <ThinBar />
        <GridCell left="K" right="Iodine" />
        <ThinBar />
        <GridCell left="Biotin" right="Copper" />
        <ThinBar />
        <GridCell left="Magnesium" right="Chloride" />
      </div>

      <div className="my-0.5 h-1 bg-black" aria-hidden />

      <div className="border-b border-black">
        <GridCell left="Calcium mg" right="Gelatin %" />
        <ThinBar />
        <GridCell left="Iron mg" right="Choline" />
        <ThinBar />
        <GridCell left="Potassium mg" right="Flavor %" />
        <ThinBar />
        <GridCell left="Caffeine" right="" />
      </div>

      <ThickBar />

      <p className="pt-1 text-[8px] leading-snug sm:text-[9px]">
        * The % Daily Value (DV) tell you how much a nutrient in a serving of a
        food contributes to a daily diet 2,000 calories a day is used for denral
        nutrition advice.
      </p>
    </div>
  );
}
