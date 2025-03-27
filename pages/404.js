import PageContainer from '../components/PageContainer';
import PageButtonLink from '../components/PageButtonLink';

const NotFoundPage = () => (
  <PageContainer>
    <div className='container'>
      <div className='main-content container-small text-align-center'>

          <p className='page-heading'>Page not found</p>

          <PageButtonLink
            href='/'
            text='Start again'
          />

      </div>
    </div>
  </PageContainer>
);

export default NotFoundPage;
