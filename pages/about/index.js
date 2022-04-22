import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';
import BlockQuote from '../../components/BlockQuote';
import MemberOfList from '../../components/MemberOfList';
import OrganisationsSupportList from '../../components/OrganisationsSupportList';
import PageButtonLink from '../../components/PageButtonLink';
import CONSTANTS from '../../constants';
import styles from './About.module.scss';

const AboutPage = ({ articles }) => (
  <div className='container with-page-bg-img'>

    <Head>
      <title>{CONSTANTS.PAGE.ABOUT.TITLE}</title>

      <meta property='og:title' content={CONSTANTS.PAGE.ABOUT.TITLE} />
      <meta property='og:description' content={CONSTANTS.PAGE.ABOUT.DESCRIPTION} />
      <meta property='og:url' content={CONSTANTS.PAGE.ABOUT.URL} />

      <meta name='twitter:title' content={CONSTANTS.PAGE.ABOUT.TITLE} />
      <meta name='twitter:description' content={CONSTANTS.PAGE.ABOUT.DESCRIPTION} />
      <meta property='twitter:url' content={CONSTANTS.PAGE.ABOUT.URL} />
    </Head>

    <img
      src={'/images/background/about-page.png'}
      alt=''
      className='page-img-bg'
      aria-hidden='true'
      role='presentation'
    />

    <div className='main-content'>
      <div className={styles.container}>
        <h1 className='text-align-center'>About Fiona <span className='sr-only'>Ross</span></h1>

        <div className={styles.centralQuote}>
          <BlockQuote
            copy='It’s just me doing my thing'
            isLarge
            isHighlight
            isShort
            centered
          />
        </div>

        <div className={styles.textContentContainer}>

          <p>Named among the 100 Alternative Power Music List for 2020, multi-award winning jazz artist, editor-in-chief, journalist and founder of the award winning Women in Jazz Media organisation, Fiona Ross never stops.</p>
        
          <p>As a vocalist, pianist, composer and producer, Fiona has become known for creating her own contemporary jazz sound incorporating fast paced Latin Jazz, vintage Jazz club, a little neo soul along with heart wrenching ballads that demonstrate <span className='highlight'><i>"Her style is poetic and the messages ooze with Millennial angst"</i> (Jazz weekly)</span>.</p>

          <p>She came to the worlds attention as <span className='highlight'><i>"The artist that gave Ed Sheeran his 'first push'"</i> (Daily Express)</span>, but very quickly established herself as an artist in her own right and has received incredible reviews and awards across the globe for all of her albums.</p>

          <p>Her live performances have seen her perform at prestigious venues including 606 Club, Pizza Express, Bulls Head, Nells Jazz and Blues and Toulouse Lautrec and her music is played on radio stations all over the world including 40 stations in the USA as well as in Canada, Italy, France, Germany, Australia, Nertherlands and Spain.</p>

          <p>Fiona has achieved many accolades for her most recent album, including <span className='highlight'>Best Jazz Song</span> from the World Songwriting Awards for her song ‘For My Dad’, <span className='highlight'>Outstanding achievement</span> awarded by the Global Music Awards and most recently <span className='highlight'>International female songwriter of the year</span> from the International Singer Songwriters Association. She has been featured in many publications including Tinnitist, Jazziz, Record World Magazine, Jazz Corner, Ink 19 and Jazz Quarterly and was thrilled to be in the top ten of most played videos recently in Tinnitist. Fiona’s song ‘Mistress’ which was recorded live in a stairwell, was selected to be <span className='highlight'>included in the British Library archives</span> for prosperity.</p>

          <p>There has rarely been a day since then for Fiona that has not centered around music. <span className='highlight'>Enrolled in dance, drama and singing lessons at the age of two, piano at age six. </span>At what moment did Fiona make a conscious choice to pursue a career in music? There wasn't a moment. There was never a time when there was any other choice. By the age of eight years old Fiona was starring in London's West End. Talent like Fiona's doesn't go unnoticed; soon she was signed to an agency and was featured in a string of television commercials and print advertisements and was recording radio jingles for everything from ketchup to Fairy dishwashing soap.</p>

          <p>At the age of fourteen she lied about her age and talked her way into gigging on weekends in jazz clubs throughout London, from the classy nightspots of the elite to some <span className='highlight'>rather seedy pubs that were no place for an ordinary teenager. </span>There were never any contracts to sign, it was always cash in hand at the end of the night. No one even suspected that a voice that startling in its maturity and passion could belong to a singer barely into her teens. <span className='quote'>'I will never forget going home to my parents,' </span>&nbsp;Fiona says;</p>
        
          <BlockQuote
            copy='Telling them that I had a job singing and playing Jazz as a solo artist in a club in London, I was so thrilled, but they were furious - well, I was only 14 at the time.'
            isHighlight
            isMedium
            centered
          />

          <p>Fiona attended the prestigious Arts Educational School (the English equivalent of New York's High School for Performing Arts) where Julie Andrews, Catherine Zeta Jones and Will Young, to name just a few, also trained. Fiona's career has taken her all over the musical map. She has worked as a musical director, session musician, composer, choreographer, director, dancer, actor, model -   She even sang back-up for a rock and roll band called Rocking Willie and the Y-Fronts when she was 15.</p>

          <p>Alongside this, <span className='highlight'>educating young people has been Fiona’s passion </span>and she was Head of British Academy of New Music, London, for nearly nine years, where she was responsible for the training of Ed Sheeran, Rita Ora and Jess Glynne, to name a few. But now, it is Fiona’s turn.</p>

          <BlockQuote
            copy='Her style Is poetic and the message is ooze with millennial angst'
            author='Jazz Weekly'
            isHighlight
            isMedium
            centered
          />

          <BlockQuote
            copy='Jazz artist extraordinaire'
            author='Indie Music Women'
            isHighlight
            isMedium
            centered
            isShort
          />

          <br />
          <br />

          <div className={`row ${styles.organisationsSupportContainer}`}>

            <p>Fiona is very passionate about raising awareness and supporting Mental Health and Equality issues around the world. She actively supports and promotes the following:</p>

            <OrganisationsSupportList />

          </div>

          <div className={`row ${styles.memberOfContainer}`}>

            <p>Fiona is also a member of:</p>

            <MemberOfList />

          </div>

          <BlockQuote
            copy='It is my pleasure and privilege to join the Insomniac Club Team as their patron. I am hugely passionate about raising awareness of mental health and more importantly creative strategies and support mechhanisms to truly help and make a difference. As an educator and someone who has worked in the creative industry all my life, I have seen many people struggle with their mental health and just not knowing what to do and who to turn to. The Insomniac Club are starting to make a difference through creating and promoting a variety of ways to support and also stimulate our thinking about how we can truly help. Raising awareness is one step, actions are the next one and I am very excited to be part of this.'
            author='Fiona Ross'
            isHighlight
            isMedium
            centered
            isLong
          />

        </div>

        <PageButtonLink
          href={`${CONSTANTS.BASE_URL}/gallery`}
          text='Gallery'
        />

      </div>

    </div>

  </div>
);      

export default AboutPage;
