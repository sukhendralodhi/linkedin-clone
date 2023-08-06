import { FiberManualRecord } from '@mui/icons-material';
import '../Widgets/Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
const Widgets = () => {

    const newsArticle = (heading, subTitle) => {
        return (
            <div className="widgets_article">
                <div className="widgets_articleLeft">
                    <FiberManualRecord />
                </div>
                <div className="widgets_articleRight">
                    <h4>{heading}</h4>
                    <p>{subTitle}</p>
                </div>
            </div>
        );
    }

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Modi In Foreign", "Top-9909 news")}
            {newsArticle("Modi In Foreign", "Top-9909 news")}
            {newsArticle("Modi In Foreign", "Top-9909 news")}
            {newsArticle("Modi In Foreign", "Top-9909 news")}
            {newsArticle("Modi In Foreign", "Top-9909 news")}
            {newsArticle("Modi In Foreign", "Top-9909 news")}
        </div>
    );
}

export default Widgets;