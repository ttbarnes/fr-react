{/*
  TODO: use react-mailchimp-subscribe
*/}

const SignUpForm = ({ heading }) => (
  <div className="signup-form">

    <p>{heading}</p>

    <div id="mc_embed_signup">
      <form action="//fionaross.us15.list-manage.com/subscribe/post?u=717ece900b813b8918833aaa6&amp;id=cee4f640e8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll" className="mchimp-form">
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div style={{ position: 'absolute', left: '-5000px'}} aria-hidden='true'>
            <input type="text" name="b_717ece900b813b8918833aaa6_cee4f640e8" tabIndex="-1" value="" readOnly />
          </div>

          <label htmlFor="mce-EMAIL" style={{ display: 'none' }}>Email Address</label>
          <input type="email" placeholder="hello@myemail.com" name="EMAIL" className="required email" id="mce-EMAIL" aria-required="true" />
          <input type="submit" value="Sign up" name="subscribe" id="mc-embedded-subscribe" className="button" />

          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>

        </div>
      </form>
    </div>

    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>

    {/* <Script src='./scripts/mailchimp.js' /> */}

  </div>
);

export default SignUpForm;
