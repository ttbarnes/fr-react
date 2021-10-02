import PageButtonLink from '../components/PageButtonLink';

const NotFoundPage = () => (
  <div className='container'>
    <div className='main-content container-small text-align-center'>

        <p className='page-heading'>Sorry, I don't want to play</p>
        <p>Something has gone wrong.</p>

        <PageButtonLink
          href='/'
          text='Start again'
          icon='icon-arrow-right'
        />

    </div>
  </div>
);

export default NotFoundPage;
