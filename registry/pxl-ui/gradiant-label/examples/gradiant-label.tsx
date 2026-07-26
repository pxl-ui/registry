import BasicGradiantLabelExample from "./basic-gradiant-label";
import ChromeGradiantLabelExample from "./chrome-gradiant-label";
import CryoGradiantLabelExample from "./cryo-gradiant-label";
import FireGradiantLabelExample from "./fire-gradiant-label";
import LootGradiantLabelExample from "./loot-gradiant-label";
import PlasmaGradiantLabelExample from "./plasma-gradiant-label";
import ShadowGradiantLabelExample from "./shadow-gradiant-label";
import SynthwaveGradiantLabelExample from "./synthwave-gradiant-label";
import ToxicGradiantLabelExample from "./toxic-gradiant-label";


export default function GradiantLabelExamples() {
  return (
    <div>
      <BasicGradiantLabelExample />
      <FireGradiantLabelExample />
      <CryoGradiantLabelExample  />
      <LootGradiantLabelExample  />
      <PlasmaGradiantLabelExample  />
      <ToxicGradiantLabelExample />
      <ShadowGradiantLabelExample />
      <SynthwaveGradiantLabelExample />
      <ChromeGradiantLabelExample />
    </div>
  )
}