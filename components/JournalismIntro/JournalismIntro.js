import styles from './JournalismIntro.module.scss'

const LinkWIJM = () => (
  <a className='link-highlight-hover-border' href='https://womeninjazzmedia.com' target='_blank' rel='noopener noreferrer'>Women in Jazz Media</a>
);

const LinkWIJMpodcasts = () => (
  <a className='link-highlight-hover-border' href='https://womeninjazzmedia.com/podcasts' target='_blank' rel='noopener noreferrer'>podcast series</a>
);

const LinkJazzInEurope = () => (
  <a className='link-highlight-hover-border' href='https://jazzineurope.mfmmedia.nl/' target='_blank' rel='noopener noreferrer'>Jazz in Europe</a>
);

const LinkKindOfJazz = () => (
  <a className='link-highlight-hover-border' href='http://www.kindofjazz.com' target='_blank' rel='noopener noreferrer'>Kind of Jazz</a>
);

const LinkJazzNorth = () => (
  <a className='link-highlight-hover-border' href='https://www.jazznorth.org' target='_blank' rel='noopener noreferrer'>Jazz North</a>
);

const LinkJazzUk = () => (
  <a className='link-highlight-hover-border' href='http://www.thejazz.uk' target='_blank' rel='noopener noreferrer'>The Jazz UK</a>
);

const LinkConnectsMusic = () => (
  <a className='link-highlight-hover-border' href='https://connectsmusic.com' target='_blank' rel='noopener noreferrer'>Connects Music</a>
);

const LinkJazzQuarterly = () => (
  <a className='link-highlight-hover-border' href='https://www.jazzquarterly.com' target='_blank' rel='noopener noreferrer'>Jazz Quarterly</a>
);

const LinkBLIM = () => (
  <a className='link-highlight-hover-border' href='https://blim.org.uk' target='_blank' rel='noopener noreferrer'>Black Lives in Music</a>
);

const LinkJazzJournalists = () => (
  <a className='link-highlight-hover-border' href='http://news.jazzjournalists.org' target='_blank' rel='noopener noreferrer'>Jazz Journalists Association</a>
);

const LinkBAJunion = () => (
  <a className='link-highlight-hover-border' href='https://bajunion.org.uk/' target='_blank' rel='noopener noreferrer'>The British Association of Journalists</a>
);

const LinkWomenInJournalism = () => (
  <a className='link-highlight-hover-border' href='https://womeninjournalism.co.uk/' target='_blank' rel='noopener noreferrer'>womeninjournalism.co.uk</a>
);

const LinkInstagramJournalism = () => (
  <a className='link-highlight-hover-border' href='https://www.instagram.com/fionarossjazzjournalism' target='_blank' rel='noopener noreferrer'>dedicated Instagram account</a>
);

const LinkInfoEmail = () => (
  <a className='link-highlight-hover-border' href='mailto:info@fionaross.co.uk'>info@fionaross.co.uk</a>
);

const LinkWIJMemail = () => (
  <a className='link-highlight-hover-border' href='mailto:info@womeninjazzmedia.com'>info@womeninjazzmedia.com</a>
);

const JournalismIntro = () => (
  <div className={styles.container}>
    <p>As well as working as a Jazz artist, Fiona spends her time behind the scenes in Jazz working as the founder of <LinkWIJM />, senior writer for <LinkJazzInEurope /> and writing for publications including <LinkKindOfJazz />, <LinkJazzNorth />, <LinkJazzUk /> and <LinkConnectsMusic />.</p>

    <p>Fiona was the guest editor in chief for the January 2021 edition of <LinkJazzQuarterly />, where she was responsible for a rarely seen fully diverse and gender balanced Jazz publication.</p>

    <p>Fiona has interviewed an impressive list of inspirational artists including Rickie Lee Jones, Brandee Younger, Steve Gadd, Michel Camilo, Kyle Eastwood, Dee Dee Bridgewater, Maxine Gordon, Terri Lyne Carrington, Barbara Thompson OBE, Ruby Turner, Hiromi, Camille Thurman, Celine Peterson, Hiromi, Jordannah Elizabeth and Dr Tammy Kernodle.</p>

    <p>As founder of the ground breaking award winning organisation, <LinkWIJM />, Fiona has developed many exciting initiatives including a mentoring scheme for new female writers, the 'On The Bookcase' series, a range of <LinkWIJMpodcasts /> and is the Editor in Chief of the acclaimed Women in Jazz Media magazine giving platforms to women working in Jazz across the world. Through Women in Jazz Media, Fiona collaborates with many official partners including <LinkBLIM /> and Céline Peterson and her work with these partners has led to an increase in the gender and diversity balance in several publications across the world.</p>

    <p>Fiona is a member of the <LinkJazzJournalists />, <LinkBAJunion /> and <LinkWomenInJournalism />.</p>

    <p>Follow Fiona's journalism on her <LinkInstagramJournalism /></p>
    <p>For reviews or interview requests please contact <LinkInfoEmail /></p>
    <p>For Women in Jazz Media requests please contact info <LinkWIJMemail /></p>

  </div>
);

export default JournalismIntro;
