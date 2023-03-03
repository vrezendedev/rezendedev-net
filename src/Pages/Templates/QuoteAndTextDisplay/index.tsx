import './index.css';

export type QuoteAndTextDisplayProps = {
    quote: string;
    author: string;
    textTitle: string;
    text: string;
};

function QuoteAndTextDisplay({
    quote,
    author,
    textTitle,
    text,
}: QuoteAndTextDisplayProps) {
    return (
        <div className="quote-text-content-main">
            <div className="quote-text-quote-div">
                <p className="quote-text-quote">{quote}</p>
                <p className="quote-text-author">{author}</p>
            </div>
            <div className="quote-text-text-div">
                <p className="quote-text-text-title">{textTitle}</p>
                <p className="quote-text-text-content">{text}</p>
            </div>
        </div>
    );
}

export default QuoteAndTextDisplay;
