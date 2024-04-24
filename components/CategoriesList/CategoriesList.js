import Link from 'next/link';

const CategoriesList = ({ categories }) => (
  <ul className='categories-list'>
    {categories.map((category) => {
      let targetAttributes = {};

      if (category.EXTERNAL_LINK) {
        targetAttributes = {
          target: '_blank',
          rel: 'noopener noreferrer'
        };
      }

      let headingClassName = 'categories-list-item-heading';

      if (category.SMALLER_FONT_SIZE) {
        headingClassName += ' smaller-font-size';
      }

      return (
        <li
          key={category.TEXT}
          className='categories-list-item'
        >
          <Link href={category.ROUTE} legacyBehavior>
            <a {...targetAttributes}>
              <div className='categories-list-item-image-container' aria-hidden='true'>
                <img src={category.IMAGE_URL} alt={category.TEXT} className='categories-list-item-image' />

                <h2 className={headingClassName}>{category.TEXT}</h2>
              </div>
            </a>

          </Link>

        </li>
      );
    })}
  </ul>
);

export default CategoriesList;
