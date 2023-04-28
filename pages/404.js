import PageContainer from '../components/PageContainer';
import PageButtonLink from '../components/PageButtonLink';

const NotFoundPage = () => (
  <PageContainer>
    <div className='container'>
      <div className='main-content container-small text-align-center'>

          <p className='page-heading'>Sorry, I don't want to play</p>
          <p>Something has gone wrong.</p>

          <PageButtonLink
            href='/'
            text='Start again'
          />

      </div>
    </div>
  </PageContainer>
);

export default NotFoundPage;
