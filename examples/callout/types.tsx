import { Callout } from "@/components/ui/pxl/callout";
import { Separator } from "@/components/ui/pxl/separator";

export default function CalloutTypesExample() {
  return (
    <div className="flex flex-col gap-3 max-w-md w-full">
      <div>
        <Callout type="note" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>
        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="abstract" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <p className="typeset mt-2">
          Aliases: <code>summary</code>, <code>tldr</code>
        </p>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="info" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="todo" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="tip" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <p className="typeset mt-2">
          Aliases: <code>hint</code>, <code>important</code>
        </p>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="success" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <p className="typeset mt-2">
          Aliases: <code>check</code>, <code>done</code>
        </p>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="question" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <p className="typeset mt-2">
          Aliases: <code>help</code>, <code>faq</code>
        </p>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="warning" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <p className="typeset mt-2">
          Aliases: <code>caution</code>, <code>attention</code>
        </p>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="failure" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <p className="typeset mt-2">
          Aliases: <code>fail</code>, <code>missing</code>
        </p>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="danger" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <p className="typeset mt-2">
          Aliases: <code>error</code>
        </p>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="bug" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="example" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <Separator border="dashed" className="mt-3"  />
      </div>
      <div>
        <Callout type="quote" collapsible>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Callout>

        <p className="typeset mt-2">
          Aliases: <code>cite</code>
        </p>
      </div>
    </div>
  );
}