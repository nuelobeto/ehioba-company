import parse from "html-react-parser";

type HtmlParserProps = {
  htmlString: string;
};

const HtmlParser = ({ htmlString }: HtmlParserProps) => {
  const htmlElements = parse(htmlString);

  return htmlElements;
};

export default HtmlParser;
