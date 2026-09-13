import {
  Blockquote,
  BlockquoteAuthor,
  BlockquoteAuthorAvatar,
  BlockquoteAuthorBody,
  BlockquoteAuthorDetails,
  BlockquoteAuthorName,
  BlockquoteIcon,
  BlockquoteParagraph,
} from "@/components/features/pxl/articles/blockquote";

export default function BlockquoteDemo() {
  return (
    <Blockquote>
      <BlockquoteIcon position="start" />
      <BlockquoteParagraph>
        Blessed is the man that endureth temptation: for when he is tried, he
        shall receive the crown of life, which the Lord hath promised to them
        that love him.
      </BlockquoteParagraph>
      <BlockquoteIcon position="end" />
      <BlockquoteAuthor>
        <BlockquoteAuthorAvatar
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/wizard.png"
          name="James"
        />
        <BlockquoteAuthorDetails>
          <BlockquoteAuthorName>James</BlockquoteAuthorName>
          <BlockquoteAuthorBody>1:12</BlockquoteAuthorBody>
        </BlockquoteAuthorDetails>
      </BlockquoteAuthor>
    </Blockquote>
  );
}
